<template>
    <Head>
        <Title>Getting Started - PrimeVue, Nuxt and Tailwind CSS</Title>
        <Meta name="description" content="Setting up PrimeVue Unstyled and Tailwind CSS presets in a Nuxt project." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Installation with Nuxt</h1>
                <p>Setting up PrimeVue Unstyled and Tailwind CSS presets in a Nuxt project.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import CSSVariablesDoc from '@/doc/nuxt/CSSVariablesDoc.vue';
import DownloadDoc from '@/doc/nuxt/DownloadDoc.vue';
import ExampleDoc from '@/doc/nuxt/ExampleDoc.vue';
import NuxtConfigDoc from '@/doc/nuxt/NuxtConfigDoc.vue';
import PresetDoc from '@/doc/nuxt/PresetDoc.vue';
import TailwindConfigDoc from '@/doc/nuxt/TailwindConfigDoc.vue';
import TailwindDoc from '@/doc/nuxt/TailwindDoc.vue';

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
                    id: 'nuxtconfig',
                    label: 'Nuxt Config',
                    component: NuxtConfigDoc
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
