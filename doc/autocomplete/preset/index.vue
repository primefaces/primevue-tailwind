<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>AutoComplete Presets</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import BaseLaraDoc from '@/components/doc/preset/BaseLaraDoc.vue';
import BaseWindDoc from '@/components/doc/preset/BaseWindDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'presets.lara',
                    label: 'Lara',
                    component: BaseLaraDoc,
                    options: {
                        presetKey: 'autocomplete'
                    }
                },
                {
                    id: 'presets.wind',
                    label: 'Wind',
                    component: BaseWindDoc,
                    options: {
                        presetKey: 'autocomplete'
                    }
                }
            ]
        };
    }
};
</script>
