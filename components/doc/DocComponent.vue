<template>
    <div :class="['doc-component', className]">
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="description" />
        </Head>

        <ul class="doc-tabmenu">
            <li :class="{ 'doc-tabmenu-active': tab === 0 }">
                <button type="button" @click="tab = 0">FEATURES</button>
            </li>
            <li :class="{ 'doc-tabmenu-active': tab === 1 }">
                <button type="button" @click="tab = 1">PRESETS</button>
            </li>
        </ul>

        <div class="doc-tabpanels">
            <div v-show="tab === 0" class="doc-tabpanel">
                <div class="doc-main">
                    <div class="doc-intro">
                        <h1>{{ header }}</h1>
                        <p>{{ description }}</p>
                    </div>
                    <DocSections :docs="componentDocs" />
                </div>
                <DocSectionNav :docs="componentDocs" />
            </div>

            <div v-if="tab === 1" class="doc-tabpanel">
                <component :is="{ ...themingDocs }" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'header', 'description', 'componentDocs', 'className', 'themingDocs'],
    data() {
        return {
            tab: 0
        };
    },
    mounted() {
        this.tab = this.$route.hash.includes('api') ? 1 : this.$route.hash.includes('theming') ? 2 : this.$route.hash.includes('pt') ? 3 : 0;
    }
};
</script>
