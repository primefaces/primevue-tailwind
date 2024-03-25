<template>
    <DocComponent
        title="Vue Mask Component"
        header="InputMask"
        description="InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/inputmask/#api"
        ptLink="/inputmask/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/inputmask/AccessibilityDoc.vue';
import BasicDoc from '@/doc/inputmask/BasicDoc.vue';
import DisabledDoc from '@/doc/inputmask/DisabledDoc.vue';
import ImportDoc from '@/doc/inputmask/ImportDoc.vue';
import InvalidDoc from '@/doc/inputmask/InvalidDoc.vue';
import MaskDoc from '@/doc/inputmask/MaskDoc.vue';
import OptionalDoc from '@/doc/inputmask/OptionalDoc.vue';
import SlotCharDoc from '@/doc/inputmask/SlotCharDoc.vue';

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
                    id: 'mask',
                    label: 'Mask',
                    component: MaskDoc
                },
                {
                    id: 'optional',
                    label: 'Optional',
                    component: OptionalDoc
                },
                {
                    id: 'slotchar',
                    label: 'SlotChar',
                    component: SlotCharDoc
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
                key: 'inputmask'
            }
        };
    }
};
</script>
