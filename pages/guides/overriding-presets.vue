<template>
    <Head>
        <Title>Override Presets</Title>
        <Meta name="description" content="Customizing the default merge strategy to override global configuration." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Override</h1>
                <p>Customizing the default merge strategy to override global configuration.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import ImportantDoc from '@/doc/guides/override/ImportantDoc.vue';
import LocalPTDoc from '@/doc/guides/override/LocalPTDoc.vue';
import MergeDoc from '@/doc/guides/override/MergeDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'local-pt',
                    label: 'Local PT',
                    component: LocalPTDoc
                },
                {
                    id: 'merge',
                    label: 'Merge',
                    component: MergeDoc
                },
                {
                    id: 'important',
                    label: '!important',
                    component: ImportantDoc
                }
            ]
        };
    }
};
</script>
