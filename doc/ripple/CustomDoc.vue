<template>
    <DocSectionText v-bind="$attrs">
        <p>Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of <i>p-ink</i> element.</p>
    </DocSectionText>
    <div class="card flex justify-center items-center gap-2">
        <div
            v-ripple="{
                pt: {
                    root: { style: 'transform: scale(0); background: rgba(75, 175, 80, 0.3)' }
                }
            }"
            class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center shadow-md"
        >
            Green
        </div>
        <div
            v-ripple="{
                pt: {
                    root: { style: 'transform: scale(0); background: rgba(255, 193, 6, 0.3)' }
                }
            }"
            class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center shadow-md"
        >
            Orange
        </div>
        <div
            v-ripple="{
                pt: {
                    root: { style: 'transform: scale(0); background: rgba(156, 39, 176, 0.3)' }
                }
            }"
            class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center shadow-md"
        >
            Purple
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div
    v-ripple="{
        pt: {
            root: { style: 'background: rgba(75, 175, 80, 0.3)' }
        }
    }"
    class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center  shadow-md"
>
    Green
</div>
<div
    v-ripple="{
        pt: {
            root: { style: 'background: rgba(255, 193, 6, 0.3)' }
        }
    }"
    class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center  shadow-md"
>
    Orange
</div>
<div
    v-ripple="{
        pt: {
            root: { style: 'background: rgba(156, 39, 176, 0.3)' }
        }
    }"
    class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center  shadow-md"
>
    Purple
</div>
`,
                options: `
<template>
    <div class="flex justify-center items-center gap-2">
        <div
            v-ripple="{
                pt: {
                    root: { style: 'background: rgba(75, 175, 80, 0.3)' }
                }
            }"
            class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center  shadow-md"
        >
            Green
        </div>
        <div
            v-ripple="{
                pt: {
                    root: { style: 'background: rgba(255, 193, 6, 0.3)' }
                }
            }"
            class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center  shadow-md"
        >
            Orange
        </div>
        <div
            v-ripple="{
                pt: {
                    root: { style: 'background: rgba(156, 39, 176, 0.3)' }
                }
            }"
            class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center  shadow-md"
        >
            Purple
        </div>
    </div>
</template>

<style scoped>
.rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center  {
    background: var(--bg-surface-0 dark:bg-surface-900);
    padding: 2rem;
    border-radius: 10px;
    width: 110px;
    text-align: center;
}
</style>
`,
                composition: `
<template>
    <div class="flex justify-center items-center gap-2">
        <div
            v-ripple="{
                pt: {
                    root: { style: 'background: rgba(75, 175, 80, 0.3)' }
                }
            }"
            class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center  shadow-md"
        >
            Green
        </div>
        <div
            v-ripple="{
                pt: {
                    root: { style: 'background: rgba(255, 193, 6, 0.3)' }
                }
            }"
            class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center  shadow-md"
        >
            Orange
        </div>
        <div
            v-ripple="{
                pt: {
                    root: { style: 'background: rgba(156, 39, 176, 0.3)' }
                }
            }"
            class="rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center  shadow-md"
        >
            Purple
        </div>
    </div>
</template>

<style scoped>
.rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center  {
    background: var(--bg-surface-0 dark:bg-surface-900);
    padding: 2rem;
    border-radius: 10px;
    width: 110px;
    text-align: center;
}
</style>
`
            }
        };
    }
};
</script>

<style scoped>
.rounded-md dark:border dark:border-surface-700 p-6 flex select-none justify-center items-center {
    background: var(--bg-surface-0 dark: bg-surface-900);
    padding: 2rem;
    border-radius: 10px;
    width: 110px;
    text-align: center;
}
</style>
