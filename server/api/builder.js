import JSZip from 'jszip';

export default defineEventHandler(async (event) => {
    const { components, preset, filename } = await readBody(event);
    const zip = new JSZip();
    let main = '';
    const availableDirectives = ['tooltip', 'badgedirective', 'ripple'];
    let directives = [];

    main = main.concat(`import global from './global.js';\n`);

    //components
    for (let component of components) {
        const file = await useStorage(`assets:presets`).getItem(`${preset}:${component}:index.js`);

        zip.file(`${filename}/${component}/index.js`, file);
        main = main.concat(`import ${component} from './${component}';\n`);

        if (availableDirectives.includes(component)) {
            directives.push(component);
        }
    }

    //global
    const global = await useStorage(`assets:presets`).getItem(`${preset}:global.js`);

    zip.file(`${filename}/global.js`, global);

    //index
    main = main.concat('\n');
    main = main.concat('export default {\n');
    main = main.concat('    global');

    if (directives.length) {
        main = main.concat(`,\n    directives: {\n`);

        for (let [i, directive] of directives.entries()) {
            main = main.concat(`        ${directive}`);
            if (i !== directives.length - 1) main = main.concat(',\n');
        }

        main = main.concat('\n    }');
    }

    for (let component of components) {
        if (!availableDirectives.includes(component)) {
            main = main.concat(',\n');
            main = main.concat(`    ${component}`);
        }
    }

    main = main.concat('\n}\n');
    zip.file(`${filename}/index.js`, main);

    setResponseHeaders(event, {
        'Content-Type': 'application/zip'
    });

    const content = await zip.generateAsync({ type: 'uint8array' });

    event.node.res.end(content);
});
