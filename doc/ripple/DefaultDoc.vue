<template>
    <DocSectionText v-bind="$attrs">
        <p>Ripple is enabled by adding add <i>p-ripple</i> class to the target and attach the directive with the v- prefix.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <span
            >Ripple option at the <span class="mx-1 h-8 w-8 rounded-border inline-flex items-center justify-center bg-primary text-primary-contrast"><i class="pi pi-palette"></i></span> configurator needs to be turned on for the demo.</span
        >
        <div v-ripple class="flex justify-center items-center user-select-none p-12 bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-md">Default</div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div v-ripple class="flex justify-center items-center user-select-none p-12 bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-md">Default</div>
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <div v-ripple class="flex justify-center items-center user-select-none p-12 bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-md">Default</div>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <div v-ripple class="flex justify-center items-center user-select-none p-12 bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-md">Default</div>
    </div>
</template>
`
            }
        };
    }
};
</script>
