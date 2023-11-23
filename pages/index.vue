<template>
    <div :class="landingClass">
        <AppNews />
        <AppTopBar />
        <MainSection />
    </div>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';
import AppNews from '@/layouts/AppNews';
import AppTopBar from '@/layouts/AppTopBar.vue';
import MainSection from '@/components/landing/MainSection.vue';

export default {
    setup() {
        definePageMeta({
            layout: 'custom'
        });
    },
    props: {
        theme: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            tableTheme: 'lara-light-green'
        };
    },
    themeChangeListener: null,
    mounted() {
        let afId = this.$route.query['af_id'];

        if (afId) {
            let today = new Date();
            let expire = new Date();

            expire.setTime(today.getTime() + 3600000 * 24 * 7);
            document.cookie = 'primeaffiliateid=' + afId + ';expires=' + expire.toUTCString() + ';path=/; domain:primefaces.org';
        }

        this.replaceTableTheme(this.$appState.darkTheme ? 'lara-dark-green' : 'lara-light-green');
    },
    methods: {
        onDarkModeToggle() {
            const newTheme = this.$appState.darkTheme ? 'lara-light-green' : 'lara-dark-green';
            const newTableTheme = this.$appState.darkTheme ? this.tableTheme.replace('dark', 'light') : this.tableTheme.replace('light', 'dark');

            EventBus.emit('theme-change', { theme: newTheme, dark: !this.$appState.darkTheme });
            this.replaceTableTheme(newTableTheme);
        },
        onTableThemeChange(value) {
            this.replaceTableTheme(value);
        },
        replaceTableTheme(newTheme) {
            const elementId = 'home-table-link';
            const linkElement = document.getElementById(elementId);
            const tableThemeTokens = linkElement?.getAttribute('href').split('/') || null;
            const currentTableTheme = tableThemeTokens ? tableThemeTokens[tableThemeTokens.length - 2] : null;

            if (currentTableTheme !== newTheme && tableThemeTokens) {
                const newThemeUrl = linkElement.getAttribute('href').replace(currentTableTheme, newTheme);

                const cloneLinkElement = linkElement.cloneNode(true);

                cloneLinkElement.setAttribute('id', elementId + '-clone');
                cloneLinkElement.setAttribute('href', newThemeUrl);
                cloneLinkElement.addEventListener('load', () => {
                    linkElement.remove();
                    cloneLinkElement.setAttribute('id', elementId);
                });
                linkElement.parentNode?.insertBefore(cloneLinkElement, linkElement.nextSibling);

                this.tableTheme = newTheme;
            }
        }
    },
    computed: {
        landingClass() {
            return ['landing bg-surface-0 dark:bg-surface-900', { 'layout-dark': this.$appState?.darkTheme, 'layout-light': !this.$appState?.darkTheme, 'layout-news-active': this.$appState?.newsActive }];
        }
    },
    components: {
        AppNews,
        AppTopBar,
        MainSection
    }
};
</script>
