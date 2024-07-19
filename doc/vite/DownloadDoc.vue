<template>
    <DocSectionText v-bind="$attrs">
        <div class="notification mb-4">Presets do not support PrimeVue v4 yet, an update is scheduled for the end of July, 2024.</div>
        <p>PrimeVue is available for download on <a href="https://www.npmjs.com/package/primevue" target="_blank" rel="noopener noreferrer">npm registry</a>.</p>
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
npm install primevue@^3

# Using yarn
yarn add primevue@^3

# Using pnpm
pnpm add primevue@^3
`
            }
        };
    }
};
</script>
