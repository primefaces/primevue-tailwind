<template>
    <DocSectionText v-bind="$attrs">
        <p>
            A Tailwind CSS preset is a javascript object to style PrimeVue components, the release bundle contains two built-in presets; <i>lara</i> and <i>tailwindui</i>. Releases of presets are not published to NPM as copy-paste approach is a more
            suitable strategy for easier customization instead of an imported module from node_modules.
        </p>
        <p>
            Begin by downloading a release from <a href="https://github.com/primefaces/primevue-tailwind/releases" target="_blank" rel="noopener noreferrer">github</a>, alternatively you may use <NuxtLink to="/builder">Preset Builder</NuxtLink> to
            dynamically build your release file with the components you need as the pre-build release package contains all the available components. Once the zip is downloaded, extract the contents to a folder of your choice e.g. <i>presets</i> and
            then configure the <i>pt</i> property of PrimeVue to the main preset file. Make sure the location is scanned by Tailwind, otherwise add the location to the <i>tailwind.config.js</i> files using the <i>content</i> option.
        </p>
        <p></p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>When using Nuxt, use the <i>importPT</i> option to set your preset.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});
`
            },
            code2: {
                basic: `
primevue: {
    options: {
        unstyled: true
    },
    importPT: { from: path.resolve(__dirname, './presets/lara/') },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
},
`
            }
        };
    }
};
</script>
