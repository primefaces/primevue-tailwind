<template>
    <DocSectionText v-bind="$attrs">
        <p>In your <i>nuxt-config</i> file, add the <i>nuxt-primevue</i> module and configure PrimeVue to be unstyled.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        options: {
          unstyled: true
        },
    }
})
`
            }
        };
    }
};
</script>
