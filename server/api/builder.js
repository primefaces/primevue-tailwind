import JSZip from 'jszip';

export default defineEventHandler(async (event) => {
    const { components, preset, filename } = await readBody(event);
    const zip = new JSZip();

    for (let component of components) {
        const file = await useStorage(`assets:presets`).getItem(`${preset}:${component}:index.js`);

        zip.file(`${filename}/${component}/index.js`, file);
    }

    setResponseHeaders(event, {
        'Content-Type': 'application/zip'
    });

    const content = await zip.generateAsync({ type: 'uint8array' });

    event.node.res.end(content);
});
