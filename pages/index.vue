<template>
    <div :class="landingClass">
        <AppNews />
        <AppTopBar :showMenuButton="false" />
        <MainSection />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom'
});
</script>

<script>
export default {
    computed: {
        landingClass() {
            return ['landing bg-surface-0 dark:bg-surface-900', { 'layout-news-active': this.$appState?.newsActive, 'layout-ripple-disabled': this.$primevue.config.ripple === false }];
        }
    }
};
</script>
