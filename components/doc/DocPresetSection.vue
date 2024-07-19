<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
import Aura from '@/presets/aura';
import Lara from '@/presets/lara';
import { isArray, isDate, isFunction, isObject, resolveFieldData } from '@primeuix/utils/object';

export default {
    data() {
        // @todo - Refactor
        const stringify = (value, indent = 2, currentIndent = 0) => {
            const currentIndentStr = ' '.repeat(currentIndent);
            const nextIndentStr = ' '.repeat(currentIndent + indent);

            if (isArray(value)) {
                return '[' + value.map((v) => stringify(v, indent, currentIndent + indent)).join(', ') + ']';
            } else if (isDate(value)) {
                return value.toISOString();
            } else if (isFunction(value)) {
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
            } else if (isObject(value)) {
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
        const keys = isArray(presetKey) ? presetKey : [presetKey];
        const basicCode = keys.map((key) => `\n${key.indexOf('.') > -1 ? `'${key}'` : key}: ${stringify(resolveFieldData(preset, key), 4).replace(/['"]/g, (match) => (match === '"' ? "'" : '"'))}`).join(',');

        return {
            code: {
                basic: `${basicCode}\n`
            }
        };
    }
};
</script>
