<template>
    <DocComponent
        title="Vue TriStateCheckbox Component"
        header="TriStateCheckbox"
        description="TriStateCheckbox is used to select either true, false or null as the value."
        :componentDocs="docs"
        :presetDoc="presetDoc"
        apiLink="/tristatecheckbox/#api"
        ptLink="/tristatecheckbox/#pt"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/tristatecheckbox/AccessibilityDoc.vue';
import BasicDoc from '@/doc/tristatecheckbox/BasicDoc.vue';
import DisabledDoc from '@/doc/tristatecheckbox/DisabledDoc.vue';
import ImportDoc from '@/doc/tristatecheckbox/ImportDoc.vue';
import InvalidDoc from '@/doc/tristatecheckbox/InvalidDoc.vue';
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
                key: 'tristatecheckbox'
            }
        };
    }
};
</script>
