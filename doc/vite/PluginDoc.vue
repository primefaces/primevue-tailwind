<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue needs to be configured as using a Vue plugin as <i>unstyled</i>.</p>
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
