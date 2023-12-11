<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue needs to be configured using a Vue plugin. If you are using Nuxt, use <a href="https://primevue.org/nuxt/" target="_blank" rel="noopener noreferrer">primevue-nuxt-module</a> instead for the configuration.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true
});
`
            }
        };
    }
};
</script>
