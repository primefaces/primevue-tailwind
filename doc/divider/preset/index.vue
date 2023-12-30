<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Divider Presets</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import LaraDoc from './LaraDoc.vue';
import WindDoc from './WindDoc.vue';

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
                    id: 'presets.wind',
                    label: 'Wind',
                    component: WindDoc
                }
            ]
        };
    }
};
</script>
