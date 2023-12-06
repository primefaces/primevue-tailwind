<template>
    <Head>
        <Title>Getting Started - PrimeVue</Title>
        <Meta name="description" content="PrimeVue is a rich set of open source components for Vue." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Installation</h1>
                <p>PrimeVue is a rich set of open source UI components for Vue.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import DownloadDoc from '@/doc/installation/DownloadDoc.vue';
import PluginDoc from '@/doc/installation/PluginDoc.vue';
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
                    id: 'usage',
                    label: 'Usage',
                    component: UsageDoc
                }
            ]
        };
    }
};
</script>
