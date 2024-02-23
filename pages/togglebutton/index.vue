<template>
    <DocComponent
        title="Vue ToggleButton Component"
        header="ToggleButton"
        description="ToggleButton is used to select a boolean value using a button."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/togglebutton/#api"
        ptLink="/togglebutton/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/togglebutton/AccessibilityDoc.vue';
import BasicDoc from '@/doc/togglebutton/BasicDoc.vue';
import CustomizedDoc from '@/doc/togglebutton/CustomizedDoc.vue';
import DisabledDoc from '@/doc/togglebutton/DisabledDoc.vue';
import ImportDoc from '@/doc/togglebutton/ImportDoc.vue';
import InvalidDoc from '@/doc/togglebutton/InvalidDoc.vue';

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
                    id: 'customized',
                    label: 'Customized',
                    component: CustomizedDoc
                },
                {
                    id: 'disabled',
                    label: 'Disabled',
                    component: DisabledDoc
                },
                {
                    id: 'inavlid',
                    label: 'Invalid',
                    component: InvalidDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'togglebutton'
            }
        };
    }
};
</script>
