<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue is available for download on <a href="https://www.npmjs.com/package/primevue" target="_blank" rel="noopener noreferrer">npm registry</a>. For this setup, we'll also use the
            <a href="https://nuxt.com/modules/primevue" target="_blank" rel="noopener noreferrer">primevue-nuxt</a> module.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install primevue
npm install --save-dev nuxt-primevue

# Using yarn
yarn add primevue
yarn add --dev nuxt-primevue

# Using pnpm
pnpm add primevue
pnpm add -D nuxt-primevue
`
            }
        };
    }
};
</script>
