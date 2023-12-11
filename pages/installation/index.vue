<template>
    <Head>
        <Title>Getting Started - PrimeVue</Title>
        <Meta name="description" content="PrimeVue is a rich set of open source components for Vue." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Installation</h1>
                <p>
                    Tailwind CSS based presets are powered by the unstyled PrimeVue core. A preset is a skin defined using Tailwind that is injected into the PrimeVue components through
                    <a href="https://primevue.org/passthrough/" target="_blank" rel="noopener noreferrer">pass through</a> props feature.
                </p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import DownloadDoc from '@/doc/installation/DownloadDoc.vue';
import ExamplesDoc from '@/doc/installation/ExamplesDoc.vue';
import PluginDoc from '@/doc/installation/PluginDoc.vue';
import PresetDoc from '@/doc/installation/PresetDoc.vue';
import TailwindDoc from '@/doc/installation/TailwindDoc.vue';
import UsageDoc from '@/doc/installation/UsageDoc.vue';

export default {
    data() {
        return {
            docs: [
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
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                },
                {
                    id: 'preset',
                    label: 'Preset',
                    component: PresetDoc
                },
                {
                    id: 'usage',
                    label: 'Usage',
                    component: UsageDoc
                },
                {
                    id: 'examples',
                    label: 'Examples',
                    component: ExamplesDoc
                }
            ]
        };
    }
};
</script>
