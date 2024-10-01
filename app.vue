<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    mounted() {
        EventBus.on('dark-mode-toggle', this.darkModeToggleListener);
    },
    beforeUnmount() {
        EventBus.off('dark-mode-toggle', this.darkModeToggleListener);
    },
    methods: {
        darkModeToggleListener(event) {
            if (!document.startViewTransition) {
                this.toggleDarkMode(event);

                return;
            }

            document.startViewTransition(() => this.toggleDarkMode(event));
        },
        toggleDarkMode() {
            document.documentElement.classList.toggle('p-dark');
            this.$appState.darkMode = !this.$appState.darkMode;

            EventBus.emit('dark-mode-changed', this.$appState.darkMode);
        }
    }
};
</script>
