import CodeHighlight from '@/directives/CodeHighlight';
import Lara from '@/presets/lara';
import TailwindUI from '@/presets/tailwindui';
import PrimeVue from 'primevue/config';

const $appStatePlugin = {
    install: (app) => {
        const _appState = reactive({ preset: 'lara', darkMode: false, codeSandbox: false, sourceType: 'options-api', newsActive: false, announcement: null, storageKey: 'primevue-tailwind' });

        watch(
            () => _appState.preset,
            (newValue) => {
                if (newValue === 'lara') app.config.globalProperties.$primevue.config.pt = Lara;
                else if (newValue === 'tailwindui') app.config.globalProperties.$primevue.config.pt = TailwindUI;
            }
        );

        app.config.globalProperties.$appState = _appState;
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        ripple: true,
        unstyled: true,
        pt: TailwindUI
    });
    nuxtApp.vueApp.directive('code', CodeHighlight);
    nuxtApp.vueApp.use($appStatePlugin);
});
