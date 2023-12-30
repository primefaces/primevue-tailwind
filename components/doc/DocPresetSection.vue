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
        const preset = this.$attrs?.label === 'Wind' ? Wind : Lara;
        const presetKey = this.$attrs?.data?.presetKey ?? '';
        const keys = ObjectUtils.isArray(presetKey) ? presetKey : [presetKey];
        const basicCode = keys.map((key) => `\n${key.indexOf('.') > -1 ? `'${key}'` : key}: ${ObjectUtils.stringify(ObjectUtils.resolveFieldData(preset, key), 4)}`).join(',');

        return {
            code: {
                basic: `${basicCode}\n`
            }
        };
    }
};
</script>
