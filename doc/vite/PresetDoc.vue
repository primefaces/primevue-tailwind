<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Download a release from <a href="https://github.com/primefaces/primevue-tailwind/releases" target="_blank" rel="noopener noreferrer">github</a>, note that presets v4 and newer requires PrimeVue v4. Alternatively you may use
            <NuxtLink to="/builder">Preset Builder</NuxtLink> to dynamically build your release file with the components you need as the pre-build release package contains all the available components. Once the zip is downloaded, extract the contents
            to a folder of your choice e.g. <i>./src/presets</i> and then configure the <i>pt</i> property of PrimeVue to the main preset file.
        </p>
        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@/presets/aura';      //import preset

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    pt: Aura                            //apply preset
});
`
            }
        };
    }
};
</script>
