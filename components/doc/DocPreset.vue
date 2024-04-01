<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>{{ introText }}</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import DocPresetSection from './DocPresetSection.vue';

export default {
    props: {
        presetKey: {
            type: [String, Array],
            default: undefined
        },
        introText: {
            type: String,
            default: undefined
        }
    },
    data() {
        const common = {
            component: DocPresetSection,
            data: {
                presetKey: this.presetKey
            }
        };

        return {
            docs: [
                {
                    id: 'presets.lara',
                    label: 'Lara',
                    ...common
                },
                {
                    id: 'presets.aura',
                    label: 'Aura',
                    ...common
                }
            ]
        };
    }
};
</script>
