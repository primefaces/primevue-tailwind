<template>
    <div :class="landingClass">
        <AppNews />
        <AppTopBar />
        <MainSection />
    </div>
</template>

<script>
import MainSection from '@/components/landing/MainSection.vue';

export default {
    setup() {
        definePageMeta({
            layout: 'custom'
        });
    },
    computed: {
        landingClass() {
            return ['landing bg-surface-0 dark:bg-surface-900', { 'layout-news-active': this.$appState?.newsActive }];
        }
    },
    components: {
        MainSection
    }
};
</script>
