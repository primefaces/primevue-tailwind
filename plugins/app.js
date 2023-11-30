import CodeHighlight from '@/directives/CodeHighlight';
import TailwindUI from '@/presets/tailwindui';
import Lara from '@/presets/tailwindui';
import PrimeVue from 'primevue/config';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        ripple: true,
        unstyled: true,
        pt: Lara
    });
    nuxtApp.vueApp.directive('code', CodeHighlight);
});
