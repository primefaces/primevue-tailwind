<template>
    <Head>
        <Title>Building a UI Library</Title>
        <Meta name="description" content="Create your own UI library based on unstyled PrimeVue core and Tailwind CSS." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Building a UI Library</h1>
                <p>Create your own UI library based on unstyled PrimeVue core and Tailwind CSS.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import WrappingComponentsDoc from '@/doc/guides/buildlib/WrappingComponentsDoc.vue';
import FinalResultDoc from '@/doc/guides/buildlib/toggleswitch/FinalResultDoc.vue';
import PresetDoc from '@/doc/guides/buildlib/toggleswitch/PresetDoc.vue';
import ScriptDoc from '@/doc/guides/buildlib/toggleswitch/ScriptDoc.vue';
import TemplateDoc from '@/doc/guides/buildlib/toggleswitch/TemplateDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'wrapping-components',
                    label: 'Wrapping Components',
                    component: WrappingComponentsDoc
                },
                {
                    id: 'toggle-switch',
                    label: 'Toggle Switch',
                    description: `Let's build our own ToggleSwitch component inspired by Material Design. For this, we'll be using the PrimeVue InputSwitch component.`,
                    children: [
                        {
                            id: 'toggle-switch-template',
                            label: 'Template',
                            component: TemplateDoc
                        },
                        {
                            id: 'toggle-switch-script',
                            label: 'Script',
                            component: ScriptDoc
                        },
                        {
                            id: 'toggle-switch-preset',
                            label: 'Preset',
                            component: PresetDoc
                        },
                        {
                            id: 'toggle-switch-result',
                            label: 'Final Result',
                            component: FinalResultDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>
