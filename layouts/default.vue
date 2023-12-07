<template>
    <div class="layout-wrapper" :class="containerClass" :data-p-theme="$appState.theme">
        <AppNews />
        <AppTopBar @menubutton-click="onMenuButtonClick" />
        <div :class="['layout-mask', { 'layout-mask-active': sidebarActive }]" @click="onMaskClick"></div>
        <div class="layout-content">
            <app-menu :active="sidebarActive" />
            <div class="layout-content-slot">
                <slot></slot>
            </div>
        </div>
        <AppFooter />
        <Toast />
        <Toast position="top-left" group="tl" />
        <Toast position="bottom-left" group="bl" />
        <Toast position="bottom-right" group="br" />
    </div>
</template>

<script>
import { DomHandler } from 'primevue/utils';

export default {
    data() {
        return {
            sidebarActive: false
        };
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                if (!process.client || typeof window === 'undefined') {
                    return;
                }

                this.sidebarActive = false;
                DomHandler.unblockBodyScroll('blocked-scroll');
                this.$toast.removeAllGroups();
            }
        }
    },
    methods: {
        onMenuButtonClick() {
            if (this.sidebarActive) {
                this.sidebarActive = false;
                DomHandler.unblockBodyScroll('blocked-scroll');
            } else {
                this.sidebarActive = true;
                DomHandler.blockBodyScroll('blocked-scroll');
            }
        },
        onMaskClick() {
            this.sidebarActive = false;
            DomHandler.unblockBodyScroll('blocked-scroll');
        }
    },
    computed: {
        containerClass() {
            return [
                {
                    'layout-news-active': this.$appState.newsActive,
                    'layout-ripple-disabled': this.$primevue.config.ripple === false
                }
            ];
        }
    }
};
</script>
