<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>InputText Presets</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import LaraDoc from './LaraDoc.vue';
import TailwindUIDoc from './TailwindUIDoc.vue';

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
                    id: 'presets.tailwindui',
                    label: 'TailwindUI',
                    component: TailwindUIDoc
                }
            ]
        };
    }
};
</script>
