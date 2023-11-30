const $appState = {
    install: (Vue) => {
        Vue.config.globalProperties.$appState = reactive({ preset: 'lara', darkMode: false, codeSandbox: false, sourceType: 'options-api', newsActive: false, announcement: null, storageKey: 'primevue-tailwind' });
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($appState);
});
