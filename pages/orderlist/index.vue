<template>
    <DocComponent title="Vue OrderList Component" header="OrderList" description="OrderList is used to sort a collection." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/orderlist/#api" ptLink="/orderlist/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/orderlist/AccessibilityDoc.vue';
import BasicDoc from '@/doc/orderlist/BasicDoc.vue';
import ImportDoc from '@/doc/orderlist/ImportDoc.vue';
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
                key: 'orderlist'
            }
        };
    }
};
</script>
