<template>
    <DocComponent
        title="Vue Textarea Component"
        header="Textarea"
        description="Textarea adds styling, key filtering and autoResize functionality to standard textarea element."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/textarea/#api"
        ptLink="/textarea/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/textarea/AccessibilityDoc.vue';
import AutoResizeDoc from '@/doc/textarea/AutoResizeDoc.vue';
import BasicDoc from '@/doc/textarea/BasicDoc.vue';
import DisabledDoc from '@/doc/textarea/DisabledDoc.vue';
import ImportDoc from '@/doc/textarea/ImportDoc.vue';
import InvalidDoc from '@/doc/textarea/InvalidDoc.vue';

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
                    id: 'auto-resize',
                    label: 'Auto Resize',
                    component: AutoResizeDoc
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
                key: 'textarea'
            }
        };
    }
};
</script>
