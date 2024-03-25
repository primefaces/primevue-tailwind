<template>
    <DocComponent title="Vue Input Component" header="InputText" description="InputText is an extension to standard input element." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/inputtext/#api" ptLink="/inputtext/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/inputtext/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inputtext/BasicDoc.vue';
import DisabledDoc from '@/doc/inputtext/DisabledDoc.vue';
import HelpTextDoc from '@/doc/inputtext/HelpTextDoc.vue';
import IconsDoc from '@/doc/inputtext/IconsDoc.vue';
import ImportDoc from '@/doc/inputtext/ImportDoc.vue';
import InvalidDoc from '@/doc/inputtext/InvalidDoc.vue';
import SizesDoc from '@/doc/inputtext/SizesDoc.vue';

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
                    id: 'icons',
                    label: 'Icons',
                    component: IconsDoc
                },
                {
                    id: 'sizes',
                    label: 'Sizes',
                    component: SizesDoc
                },
                {
                    id: 'helptext',
                    label: 'HelpText',
                    component: HelpTextDoc
                },
                // {
                //     id: 'floatlabel',
                //     label: 'FloatLabel',
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
                key: 'inputtext'
            }
        };
    }
};
</script>
