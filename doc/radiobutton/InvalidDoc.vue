<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <RadioButton inputClass="!border-2 !border-red-400 !dark:border-red-300" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            code: {
                basic: `
<RadioButton inputClass="!border-2 !border-red-400 !dark:border-red-300" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <RadioButton inputClass="!border-2 !border-red-400 !dark:border-red-300" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <RadioButton inputClass="!border-2 !border-red-400 !dark:border-red-300" />
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
