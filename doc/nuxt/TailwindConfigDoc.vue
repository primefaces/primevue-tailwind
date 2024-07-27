<template>
    <DocSectionText v-bind="$attrs">
        <p>The tailwindcss-primeui is an official plugin by PrimeTek to provide first class integration between a Prime UI library like PrimeVue and Tailwind CSS. It is designed to work both in styled and unstyled modes.</p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />

        <p>Configure Tailwind to use the plugin and add your preset folder to the content path of Tailwind.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
npm i tailwindcss-primeui
`
            },
            code2: {
                basic: `
module.exports = {
    // ...
    content: [
        "./presets/**/*.{js,vue,ts}",
        // other paths
    ],
    plugins: [require('tailwindcss-primeui')]
}
`
            }
        };
    }
};
</script>
