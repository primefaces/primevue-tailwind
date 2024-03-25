<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-[10rem]" aria-label="Confirmation" invalid />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            checked: true,
            code: {
                basic: `
<ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-[10rem]" aria-label="Confirmation" invalid />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-[10rem]" aria-label="Confirmation" invalid />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-[10rem]" aria-label="Confirmation" invalid />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
