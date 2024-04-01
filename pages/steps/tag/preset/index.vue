<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Tag Presets</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import AuraDoc from './AuraDoc.vue';
import LaraDoc from './LaraDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'presets.lara',
                    label: 'Lara',
                    component: LaraDoc
                },
                {
                    id: 'presets.aura',
                    label: 'Aura',
                    component: AuraDoc
                }
            ]
        };
    }
};
</script>
