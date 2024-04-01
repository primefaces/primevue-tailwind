<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
import Aura from '@/presets/aura';
import Lara from '@/presets/lara';
import { ObjectUtils } from 'primevue/utils';

export default {
    data() {
        // @todo - Refactor
        const stringify = (value, indent = 2, currentIndent = 0) => {
            const currentIndentStr = ' '.repeat(currentIndent);
            const nextIndentStr = ' '.repeat(currentIndent + indent);

            if (ObjectUtils.isArray(value)) {
                return '[' + value.map((v) => stringify(v, indent, currentIndent + indent)).join(', ') + ']';
            } else if (ObjectUtils.isDate(value)) {
                return value.toISOString();
            } else if (ObjectUtils.isFunction(value)) {
                return value
                    .toString()
                    .split('\n')
                    .map((line, i, arr) => {
                        try {
                            return process?.dev ? line : i === 0 ? line : arr.length - 1 === i ? ' '.repeat(2) + line : currentIndentStr + line;
                        } catch {
                            return i === 0 ? line : arr.length - 1 === i ? ' '.repeat(2) + line : currentIndentStr + line;
                        }
                    })
                    .join('\n');
            } else if (ObjectUtils.isObject(value)) {
                return (
                    '{\n' +
                    Object.entries(value)
                        .map(([k, v]) => `${nextIndentStr}${k}: ${stringify(v, indent, currentIndent + indent)}`)
                        .join(',\n') +
                    `\n${currentIndentStr}` +
                    '}'
                );
            } else {
                return JSON.stringify(value);
            }
        };

        const preset = this.$attrs?.label === 'Aura' ? Aura : Lara;
        const presetKey = this.$attrs?.data?.presetKey ?? '';
        const keys = ObjectUtils.isArray(presetKey) ? presetKey : [presetKey];
        const basicCode = keys.map((key) => `\n${key.indexOf('.') > -1 ? `'${key}'` : key}: ${stringify(ObjectUtils.resolveFieldData(preset, key), 4).replace(/['"]/g, (match) => (match === '"' ? "'" : '"'))}`).join(',');

        return {
            code: {
                basic: `${basicCode}\n`
            }
        };
    }
};
</script>
