<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
import Wind from '@/presets/wind';
import { ObjectUtils } from 'primevue/utils';

export default {
    data() {
        return {
            code: {
                basic: null
            }
        };
    },
    mounted() {
        const presetKey = this.$attrs.options.presetKey;

        this.code.basic = `
${presetKey}: ${ObjectUtils.stringify(Wind[presetKey])}
`;
    }
};
</script>
