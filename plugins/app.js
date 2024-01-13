import DeferredDemo from '@/components/demo/DeferredDemo.vue';
import CodeHighlight from '@/directives/CodeHighlight';
import Lara from '@/presets/lara';
import Wind from '@/presets/wind';

const $appStatePlugin = {
    install: (app) => {
        const _appState = reactive({ preset: 'lara', darkMode: false, codeSandbox: false, sourceType: 'options-api', newsActive: false, announcement: null, storageKey: 'primevue-tailwind' });

        watch(
            () => _appState.preset,
            (newValue) => {
                if (newValue === 'lara') app.config.globalProperties.$primevue.config.pt = Lara;
                else if (newValue === 'wind') app.config.globalProperties.$primevue.config.pt = Wind;
            }
        );

        app.config.globalProperties.$appState = _appState;
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('DeferredDemo', DeferredDemo);
    nuxtApp.vueApp.directive('code', CodeHighlight);
    nuxtApp.vueApp.use($appStatePlugin);
});
