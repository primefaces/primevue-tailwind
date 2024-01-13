<template>
    <DocComponent title="Vue Stepper Component" header="Steps" description="Steps also known as Stepper, is an indicator for the steps in a workflow." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/steps/#api" ptLink="/steps/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/steps/AccessibilityDoc.vue';
import BasicDoc from '@/doc/steps/BasicDoc.vue';
import ControlledDoc from '@/doc/steps/ControlledDoc.vue';
import ImportDoc from '@/doc/steps/ImportDoc.vue';
import LinearDoc from '@/doc/steps/LinearDoc.vue';
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
                    id: 'controlled',
                    label: 'Controlled',
                    component: ControlledDoc
                },
                {
                    id: 'linear',
                    label: 'Linear',
                    component: LinearDoc
                },
                // {
                //     id: 'template',
                //     label: 'Template',
                //     component: TemplateDoc
                // },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'steps'
            }
        };
    }
};
</script>
