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
                        <p class="mb-4">
                            <span>{{ description }}</span>
                            <a href="https://primevue.org/{{ apiLink }}" class="mx-1 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition duration-300 ease-in-out">API Doc<i class="ml-1 pi pi-external-link text-sm"></i></a>
                            <span>and</span>
                            <a href="https://primevue.org/{{ ptLink }}" class="mx-1 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition duration-300 ease-in-out">PassThrough Doc<i class="ml-1 pi pi-external-link text-sm"></i></a>
                            <span>for more details.</span>
                        </p>
                    </div>
                    <DocSections :docs="componentDocs" />
                </div>
                <DocSectionNav :docs="componentDocs" />
            </div>

            <div v-if="tab === 1" class="doc-tabpanel">
                <component :is="{ ...presetDoc }" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'header', 'description', 'componentDocs', 'className', 'presetDoc', 'apiLink', 'ptLink'],
    data() {
        return {
            tab: 0
        };
    },
    mounted() {
        this.tab = this.$route.hash.includes('presets') ? 1 : 0;
    }
};
</script>
