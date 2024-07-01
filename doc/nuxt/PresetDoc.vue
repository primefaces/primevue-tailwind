<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Download a release from <a href="https://github.com/primefaces/primevue-tailwind/releases" target="_blank" rel="noopener noreferrer">github</a>, alternatively you may use <NuxtLink to="/builder">Preset Builder</NuxtLink> to dynamically
            build your release file with the components you need as the pre-build release package contains all the available components. Once the zip is downloaded, extract the contents to a folder of your choice e.g. <i>./presets</i> and then in
            your <i>nuxt-config</i> file, configure the <i>importPT</i> property of PrimeVue to the main preset file.
        </p>
        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <h4>For Windows Users</h4>
        <DocSectionCode :code="code2" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import path from 'path';

export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        options: {
          unstyled: true
        },
        importPT: { from: path.resolve(__dirname, './presets/aura/') }      //import and apply preset   
    }
})
`
            },
            code2: {
                basic: `
export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        options: {
          unstyled: true
        },
        importPT: { as: 'Aura', from: '~/presets/aura' }     //import and apply preset   
    }
})
`
            }
        };
    }
};
</script>
