<template>
    <DocSectionText v-bind="$attrs">
        <p>The default slot allows displaying custom content inside a chip.</p>
    </DocSectionText>
    <div class="card">
        <Chip class="pl-0 pr-3">
            <span class="bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900 rounded-full w-8 h-8 flex items-center justify-center">P</span>
            <span class="ml-2 font-medium">PRIME</span>
        </Chip>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Chip class="pl-0 pr-3">
    <span class="bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900 rounded-full w-8 h-8 flex items-center justify-center">P</span>
    <span class="ml-2 font-medium">PRIME</span>
</Chip>
`,
                options: `
<template>
    <div class="card">
        <Chip class="pl-0 pr-3">
            <span class="bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900 rounded-full w-8 h-8 flex items-center justify-center">P</span>
            <span class="ml-2 font-medium">PRIME</span>
        </Chip>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Chip class="pl-0 pr-3">
            <span class="bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900 rounded-full w-8 h-8 flex items-center justify-center">P</span>
            <span class="ml-2 font-medium">PRIME</span>
        </Chip>
    </div>
</template>

<script setup>

<\/script>
`
            }
        };
    }
};
</script>
