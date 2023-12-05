<template>
    <DocSectionText v-bind="$attrs">
        <p>Icons can be placed inside an input element by wrapping both the input and the icon with an element that has either <i>.p-input-icon-left</i> or <i>.relative</i> class.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-3">
        <span class="relative">
            <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
            <InputText v-model="value1" placeholder="Search" class="pl-10" />
        </span>

        <span class="relative">
            <i class="pi pi-spin pi-spinner absolute top-2/4 -mt-2 right-3 text-surface-400 dark:text-surface-600" />
            <InputText v-model="value2" class="pr-10" />
        </span>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            code: {
                basic: `
<span class="relative">
    <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
    <InputText v-model="value1" placeholder="Search" class="pl-10" />
</span>

<span class="relative">
    <i class="pi pi-spin pi-spinner absolute top-2/4 -mt-2 right-3 text-surface-400 dark:text-surface-600" />
    <InputText v-model="value2" class="pr-10" />
</span>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-3">
        <span class="relative">
            <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
            <InputText v-model="value1" placeholder="Search" class="pl-10" />
        </span>
            
        <span class="relative">
            <i class="pi pi-spin pi-spinner absolute top-2/4 -mt-2 right-3 text-surface-400 dark:text-surface-600" />
            <InputText v-model="value2" class="pr-10" />
        </span>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value1: null,
            value2: null
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-3">
        <span class="relative">
            <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
            <InputText v-model="value1" placeholder="Search" class="pl-10" />
            </span>
            
            <span class="relative">
                <i class="pi pi-spin pi-spinner absolute top-2/4 -mt-2 right-3 text-surface-400 dark:text-surface-600" />
            <InputText v-model="value2" class="pr-10" />
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
