<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
import Lara from '@/presets/lara';
import Wind from '@/presets/wind';
import { ObjectUtils } from 'primevue/utils';

export default {
    data() {
        const key = this.$attrs?.data?.presetKey ?? '';
        const preset = this.$attrs?.label === 'Wind' ? Wind : Lara;

        return {
            code: {
                basic: `
${key}: ${ObjectUtils.stringify(preset[key], 4)}
`
            }
        };
    }
};
</script>
