<template>
    <DocSectionText v-bind="$attrs">
        <p>To start with, Ripple needs to be enabled globally. See the <a href="https://primevue.org/configuration/#ripple">Configuration API</a> for details.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
mounted() {
    this.$primevue.config.ripple = true;
}
`,
                options: `
mounted() {
    this.$primevue.config.ripple = true;
}
`,
                composition: `
import { usePrimeVue } from 'primevue/config';

const PrimeVue = usePrimeVue();

PrimeVue.config.ripple = true;
`
            }
        };
    }
};
</script>
