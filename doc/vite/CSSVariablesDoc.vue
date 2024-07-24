<template>
    <DocSectionText v-bind="$attrs">
        <p>Final step is defining the default values for the CSS variables utilized by the <i>tailwindcss-primeui</i>, this can be done in a global CSS file in your Vite application e.g. <i>src/assets/base.css</i>.</p>
        <p>With a future update of the primeui tailwind plugin, this step will be done implicitly.</p>
        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
/* Primary and Surface Palettes */
:root {
    --p-primary-50: var(--p-surface-50);
    --p-primary-100: var(--p-surface-100);
    --p-primary-200: var(--p-surface-200);
    --p-primary-300: var(--p-surface-300);
    --p-primary-400: var(--p-surface-400);
    --p-primary-500: var(--p-surface-500);
    --p-primary-600: var(--p-surface-600);
    --p-primary-700: var(--p-surface-700);
    --p-primary-800: var(--p-surface-800);
    --p-primary-900: var(--p-surface-900);
    --p-primary-950: var(--p-surface-950);
    --p-surface-0: #ffffff;
    --p-surface-50: #f8fafc;
    --p-surface-100: #f1f5f9;
    --p-surface-200: #e2e8f0;
    --p-surface-300: #cbd5e1;
    --p-surface-400: #94a3b8;
    --p-surface-500: #64748b;
    --p-surface-600: #475569;
    --p-surface-700: #334155;
    --p-surface-800: #1e293b;
    --p-surface-900: #0f172a;
    --p-surface-950: #020617;
    --p-content-border-radius: 6px;
}

/* Light Mode */
:root {
    --p-primary-color: var(--p-primary-500);
    --p-primary-contrast-color: var(--p-surface-0);
    --p-primary-hover-color: var(--p-primary-600);
    --p-primary-active-color: var(--p-primary-700);
    --p-content-border-color: var(--p-surface-200);
    --p-content-hover-background: var(--p-surface-100);
    --p-content-hover-color: var(--p-surface-800);
    --p-highlight-background: var(--p-primary-50);
    --p-highlight-color: var(--p-primary-700);
    --p-highlight-focus-background: var(--p-primary-100);
    --p-highlight-focus-color: var(--p-primary-800);
    --p-text-color: var(--p-surface-700);
    --p-text-hover-color: var(--p-surface-800);
    --p-text-muted-color: var(--p-surface-500);
    --p-text-hover-muted-color: var(--p-surface-600);
}

/* 
 * Dark Mode
 * Change the .p-dark to match the darkMode in tailwind.config.
 * For example; 
 *  darkMode: ['selector', '[class*="app-dark"]'] 
 *  should match;
 * :root.app-dark
*/
:root.p-dark {
    --p-primary-color: var(--p-primary-400);
    --p-primary-contrast-color: var(--p-surface-900);
    --p-primary-hover-color: var(--p-primary-300);
    --p-primary-active-color: var(--p-primary-200);
    --p-content-border-color: var(--p-surface-700);
    --p-content-hover-background: var(--p-surface-800);
    --p-content-hover-color: var(--p-surface-0);
    --p-highlight-background: color-mix(in srgb, var(--p-primary-400), transparent 84%);
    --p-highlight-color: rgba(255,255,255,.87);
    --p-highlight-focus-background: color-mix(in srgb, var(--p-primary-400), transparent 76%);
    --p-highlight-focus-color: rgba(255,255,255,.87);
    --p-text-color: var(--p-surface-0);
    --p-text-hover-color: var(--p-surface-0);
    --p-text-muted-color: var(--p-surface-400);
    --p-text-hover-muted-color: var(--p-surface-300);
}
`
            }
        };
    }
};
</script>
