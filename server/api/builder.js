import JSZip from 'jszip';

export default defineEventHandler(async (event) => {
    const { components, preset, filename } = await readBody(event);
    const zip = new JSZip();
    let main = '';

    //components
    for (let component of components) {
        const file = await useStorage(`assets:presets`).getItem(`${preset}:${component}:index.js`);

        zip.file(`${filename}/${component}/index.js`, file);
        main = main.concat(`import ${component} from './${component}';\n`);
    }

    //global
    const global = await useStorage(`assets:presets`).getItem(`${preset}:global.js`);

    zip.file(`${filename}/global.js`, global);

    //index
    main = main.concat('\n');
    main = main.concat('export default {\n');
    main = main.concat('    global');

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
