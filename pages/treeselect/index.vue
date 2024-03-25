<template>
    <DocComponent title="Vue TreeSelect Component" header="TreeSelect" description="TreeSelect is a form component to choose from hierarchical data." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/treeselect/#api" ptLink="/treeselect/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/treeselect/AccessibilityDoc.vue';
import BasicDoc from '@/doc/treeselect/BasicDoc.vue';
import CheckboxDoc from '@/doc/treeselect/CheckboxDoc.vue';
import DisabledDoc from '@/doc/treeselect/DisabledDoc.vue';
import ImportDoc from '@/doc/treeselect/ImportDoc.vue';
import InvalidDoc from '@/doc/treeselect/InvalidDoc.vue';
import MultipleDoc from '@/doc/treeselect/MultipleDoc.vue';

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
                    id: 'multiple',
                    label: 'Multiple',
                    component: MultipleDoc
                },
                {
                    id: 'checkbox',
                    label: 'Checkbox',
                    component: CheckboxDoc
                },
                // {
                //     id: 'float-label',
                //     label: 'Float Label',
                //     component: FloatLabelDoc
                // },
                {
                    id: 'invalid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'treeselect'
            }
        };
    }
};
</script>
