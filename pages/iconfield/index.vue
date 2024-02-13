<template>
    <DocComponent title="Vue IconField" header="IconField" description="IconField wraps an input and an icon." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/iconfield/#api" ptLink="/iconfield/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/iconfield/AccessibilityDoc.vue';
import BasicDoc from '@/doc/iconfield/BasicDoc.vue';
import ImportDoc from '@/doc/iconfield/ImportDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'iconfield'
            }
        };
    }
};
</script>
