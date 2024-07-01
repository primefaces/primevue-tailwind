<template>
    <DocSectionText v-bind="$attrs">
        <p>Final step is defining the default values for the colors in RGB format, this can be done in a global CSS file in your Vite application e.g. <i>src/assets/base.css</i>.</p>
        <p>
            Now, in addition to the primary-[shade] and surface-[shade] colors, we have introduced new variables for more flexibility and customization. These variables include primary, primary-inverse, primary-highlight, and more. This allows you to
            define primary colors like Noir and customize them according to your needs.
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
    --surface-50: 250 250 250;
    --surface-100: 244 244 245;
    --surface-200: 228 228 231;
    --surface-300: 212 212 216;
    --surface-400: 161 161 170;
    --surface-500: 113 113 122;
    --surface-600: 82 82 91;
    --surface-700: 63 63 70;
    --surface-800: 39 39 42;
    --surface-900: 24 24 27;
    --surface-950: 9 9 11;

    --primary: var(--primary-500);
    --primary-inverse: var(--surface-0);
    --primary-hover: var(--primary-600);
    --primary-active-color: var(--primary-600);

    --primary-highlight-opacity: 0.1;
    --primary-highlight-inverse: var(--primary-700);
    --primary-highlight-hover-opacity: 0.2;
}
.dark{
    --primary: var(--primary-400);
    --primary-inverse: var(--surface-900);
    --primary-hover: var(--primary-300);
    --primary-active-color: var(--primary-300);

    --primary-highlight-opacity: 0.2;
    --primary-highlight-inverse: var(--surface-0);
    --primary-highlight-hover-opacity: 0.3;
}

.customized-primary {
    &:not(.dark){
        --primary: var(--primary-950);
        --primary-inverse: var(--surface-0);
        --primary-hover: var(--primary-800);
        --primary-active-color: var(--primary-900);

        --primary-highlight-opacity: 1;
        --primary-highlight-inverse: var(--surface-0);
        --primary-highlight-hover-opacity: 0.8;
    }
    &.dark{
        --primary: var(--primary-50);
        --primary-inverse: var(--surface-950);
        --primary-hover: var(--primary-100);
        --primary-active-color: var(--primary-100);

        --primary-highlight-opacity: 0.1;
        --primary-highlight-inverse: var(--surface-0);
        --primary-highlight-hover-opacity: 0.2;

    }
}
`
            }
        };
    }
};
</script>
