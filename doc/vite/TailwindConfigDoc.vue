<template>
    <DocSectionText v-bind="$attrs">
        <p>The built-in presets utilize an extended color palette based on CSS variables that needs to be defined as a Tailwind theme config extension</p>
        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
const primeui = require('tailwindcss-primeui');

export default {
    darkMode: 'class', // This enables dark mode based on the presence of the "dark" class in the HTML tag
    ...
    plugins: [primeui],
    theme: {
        extend: {
            screens: {
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1920px'
            }
        }
    }
    ...
}
`
            }
        };
    }
};
</script>
