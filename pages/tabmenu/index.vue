<template>
    <DocComponent title="Vue TabMenu Component" header="TabMenu" description="TabMenu is a navigation component displaying menu items as tabs." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/tabmenu/#api" ptLink="/tabmenu/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/tabmenu/AccessibilityDoc.vue';
import BasicDoc from '@/doc/tabmenu/BasicDoc.vue';
import CommandDoc from '@/doc/tabmenu/CommandDoc.vue';
import ControlledDoc from '@/doc/tabmenu/ControlledDoc.vue';
import ImportDoc from '@/doc/tabmenu/ImportDoc.vue';
import RouterDoc from '@/doc/tabmenu/RouterDoc.vue';
import TemplateDoc from '@/doc/tabmenu/TemplateDoc.vue';

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
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'command',
                    label: 'Command',
                    component: CommandDoc
                },
                {
                    id: 'router',
                    label: 'Router',
                    component: RouterDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            presetDoc: {
                key: 'tabmenu'
            }
        };
    }
};
</script>
