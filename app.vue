<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
useHead({
    htmlAttrs: {
        'data-preset': 'noir'
    }
});
</script>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    data() {
        return {
            surfaces: {
                slate: { 0: '#ffffff', 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617' },
                zinc: { 0: '#ffffff', 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46', 800: '#27272a', 900: '#18181b', 950: '#09090b' }
            }
        };
    },
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

            if (this.$appState.primary === 'noir' && this.$appState.surface === null) {
                this.setSurfaceVariables();
            }
        },
        setSurfaceVariables() {
            let newSurfaceName = this.$appState.darkMode ? 'zinc' : 'slate';

            Object.keys(this.surfaces[newSurfaceName]).forEach((inc) => {
                document.documentElement.style.setProperty(`--p-surface-${inc}`, this.surfaces[newSurfaceName][inc]);
            });
        }
    }
};
</script>
