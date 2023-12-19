<template>
    <Head>
        <Title>Getting Started - PrimeVue, Vite and Tailwind CSS</Title>
        <Meta name="description" content="Setting up PrimeVue Unstyled and Tailwind CSS presets in a Vite project." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Installation with Vite</h1>
                <p>Setting up PrimeVue Unstyled and Tailwind CSS presets in a Vite project.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import CSSVariablesDoc from '@/doc/vite/CSSVariablesDoc.vue';
import DownloadDoc from '@/doc/vite/DownloadDoc.vue';
import ExampleDoc from '@/doc/vite/ExampleDoc.vue';
import PluginDoc from '@/doc/vite/PluginDoc.vue';
import PresetDoc from '@/doc/vite/PresetDoc.vue';
import TailwindConfigDoc from '@/doc/vite/TailwindConfigDoc.vue';
import TailwindDoc from '@/doc/vite/TailwindDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'tailwind',
                    label: 'Tailwind CSS',
                    component: TailwindDoc
                },
                {
                    id: 'download',
                    label: 'Download',
                    component: DownloadDoc
                },
                {
                    id: 'plugin',
                    label: 'Plugin',
                    component: PluginDoc
                },
                {
                    id: 'preset',
                    label: 'Preset',
                    component: PresetDoc
                },
                {
                    id: 'tailwind-config',
                    label: 'Tailwind Config',
                    component: TailwindConfigDoc
                },
                {
                    id: 'css-variables',
                    label: 'CSS Variables',
                    component: CSSVariablesDoc
                },
                {
                    id: 'example',
                    label: 'Example',
                    component: ExampleDoc
                }
            ]
        };
    }
};
</script>
