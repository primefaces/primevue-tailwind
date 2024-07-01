<template>
    <Head>
        <Title>Getting Started - PrimeVue and Tailwind</Title>
        <Meta name="description" content="The flexibility of Tailwind CSS meets the convenience of PrimeVue components." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <div style="border-radius: 20px; max-height: 640px" class="overflow-hidden mb-5 flex items-center">
                    <img alt="PrimeVue Bento" :src="introDesktopImg" class="w-full hidden md:block" />
                    <img alt="PrimeVue Bento Mobile" :src="introMobileImg" class="w-full md:hidden" />
                </div>
                <h1>Overview</h1>
                <p>The flexibility of Tailwind CSS meets the convenience of PrimeVue components.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import IdeaDoc from '@/doc/overview/IdeaDoc.vue';
import GlobalDoc from '@/doc/overview/passthrough/GlobalDoc.vue';
import PassThroughLocalDoc from '@/doc/overview/passthrough/LocalDoc.vue';
import PassThroughOverrideDoc from '@/doc/overview/passthrough/OverrideDoc.vue';
import PassThroughReuseDoc from '@/doc/overview/passthrough/ReuseDoc.vue';
import PresetDoc from '@/doc/overview/PresetDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'idea',
                    label: 'Idea',
                    component: IdeaDoc
                },
                {
                    id: 'passthrough',
                    label: 'PassThrough',
                    description: `The PassThrough props is an API to access the internal DOM Structure of the components. Each component has a special pt property to define an object with keys corresponding to the available DOM elements. A value of a key can either be a string, an object or a function that returns a string or an object to define the arbitrary properties to apply to the element such as styling, aria, data-* or custom attributes. Every component documentation has a link to the main website to document the available section names exposed via PT.`,
                    children: [
                        {
                            id: 'passthrough-local',
                            label: 'Local',
                            component: PassThroughLocalDoc
                        },
                        {
                            id: 'passthrough-reuse',
                            label: 'Reuse',
                            component: PassThroughReuseDoc
                        },
                        {
                            id: 'passthrough-global',
                            label: 'Global',
                            component: GlobalDoc
                        },
                        {
                            id: 'passthrough-override',
                            label: 'Override',
                            component: PassThroughOverrideDoc
                        }
                    ]
                },
                {
                    id: 'preset',
                    label: 'Preset',
                    component: PresetDoc
                }
            ]
        };
    },
    computed: {
        introDesktopImg() {
            return `https://primefaces.org/cdn/primevue/images/overview${this.$appState.darkMode ? '-dark' : ''}.png`;
        },
        introMobileImg() {
            return `https://primefaces.org/cdn/primevue/images/overview${this.$appState.darkMode ? '-dark' : ''}-mobile.png`;
        }
    }
};
</script>
