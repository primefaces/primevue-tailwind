<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Final step is defining the default values for the colors in RGB format, this can be done in a global CSS file in your Nuxt application. See the
            <a href="https://nuxt.com/docs/getting-started/styling" target="_blank" rel="noopener noreferrer">styling</a> section at Nuxt documentation for more information.
        </p>
        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
:root {
    --primary-50: 236 253 245;
    --primary-100: 209 250 229;
    --primary-200: 167 243 208;
    --primary-300: 110 231 183;
    --primary-400: 52 211 153;
    --primary-500: 16 185 129;
    --primary-600: 5 150 105;
    --primary-700: 4 120 87;
    --primary-800: 6 95 70;
    --primary-900: 4 78 56;
    --primary-950: 2 44 34;
    --surface-0: 255 255 255;
    --surface-50: 249 250 251;
    --surface-100: 243 244 246;
    --surface-200: 229 231 235;
    --surface-300: 209 213 219;
    --surface-400: 156 163 175;
    --surface-500: 107 114 128;
    --surface-600: 75 85 99;
    --surface-700: 55 65 81;
    --surface-800: 31 41 55;
    --surface-900: 17 24 39;
    --surface-950: 8 8 8;
}
`
            }
        };
    }
};
</script>
