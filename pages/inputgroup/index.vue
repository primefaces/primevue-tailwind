<template>
    <DocComponent
        title="Vue InputGroup Component"
        header="InputGroup"
        description="Text, icon, buttons and other content can be grouped next to an input."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/inputgroup/#api"
        ptLink="/inputgroup/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/inputgroup/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inputgroup/BasicDoc.vue';
import ButtonDoc from '@/doc/inputgroup/ButtonDoc.vue';
import CheckboxDoc from '@/doc/inputgroup/CheckboxDoc.vue';
import FloatLabelDoc from '@/doc/inputgroup/FloatLabelDoc.vue';
import IftaLabelDoc from '@/doc/inputgroup/IftaLabelDoc.vue';
import ImportDoc from '@/doc/inputgroup/ImportDoc.vue';
import MultipleDoc from '@/doc/inputgroup/MultipleDoc.vue';

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
                    id: 'button',
                    label: 'Button',
                    component: ButtonDoc
                },
                {
                    id: 'checkbox',
                    label: 'Checkbox & Radio',
                    component: CheckboxDoc
                },
                {
                    id: 'floatlabel',
                    label: 'Float Label',
                    component: FloatLabelDoc
                },
                {
                    id: 'iftalabel',
                    label: 'Ifta Label',
                    component: IftaLabelDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'inputgroup'
            }
        };
    }
};
</script>
