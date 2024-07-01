<template>
    <DocSectionText v-bind="$attrs">
        <p>Ripple is enabled by adding add <i>p-ripple</i> class to the target and attach the directive with the v- prefix.</p>
    </DocSectionText>
    <div class="card flex justify-center items-center">
        <div v-ripple class="bg-primary text-primary-inverse flex select-none justify-center items-center shadow-md rounded-md p-6 font-bold">Default</div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div v-ripple class="bg-primary text-primary-inverse flex select-none justify-center items-center shadow-md rounded-md p-6 font-bold">Default</div>
`,
                options: `
<template>
    <div class="card card-container flex justify-center items-center">
        <div v-ripple class="bg-primary text-primary-inverse flex select-none justify-center items-center shadow-md rounded-md p-6 font-bold">Default</div>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card card-container flex justify-center items-center">
        <div v-ripple class="bg-primary text-primary-inverse flex select-none justify-center items-center shadow-md rounded-md p-6 font-bold">Default</div>
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
