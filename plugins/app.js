import CodeHighlight from '@/directives/CodeHighlight';
import Lara from '@/presets/lara';
import PrimeVue from 'primevue/config';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        ripple: true,
        unstyled: true,
        pt: Lara
    });
    nuxtApp.vueApp.directive('code', CodeHighlight);
});
