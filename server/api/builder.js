import JSZip from 'jszip';

export default defineEventHandler(async (event) => {
    const { components, directives, preset, filename } = await readBody(event);
    const zip = new JSZip();
    let main = '';
    const items = [...components, ...directives];

    //components
    for (let item of items) {
        const file = await useStorage(`assets:presets`).getItem(`${preset}:${item}:index.js`);

        zip.file(`${filename}/${item}/index.js`, file);
        main = main.concat(`import ${item} from './${item}';\n`);
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
        main = main.concat(',\n');
        main = main.concat(`    ${component}`);
    }

    main = main.concat('\n}\n');
    zip.file(`${filename}/index.js`, main);

    setResponseHeaders(event, {
        'Content-Type': 'application/zip'
    });

    const content = await zip.generateAsync({ type: 'uint8array' });

    event.node.res.end(content);
});
