<template>
    <DocSectionText v-bind="$attrs">
        <div class="notification mb-4">Presets do not support PrimeVue v4 yet, an update is scheduled for the end of July, 2024.</div>
        <p>
            PrimeVue is available for download on <a href="https://www.npmjs.com/package/primevue" target="_blank" rel="noopener noreferrer">npm registry</a>. For this setup, we'll also use the
            <a href="https://nuxt.com/modules/primevue" target="_blank" rel="noopener noreferrer">primevue-nuxt</a> module.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install primevue
npm install --save-dev @primevue/nuxt-module

# Using yarn
yarn add primevue
yarn add --dev @primevue/nuxt-module

# Using pnpm
pnpm add primevue
pnpm add -D @primevue/nuxt-module
`
            }
        };
    }
};
</script>
