<template>
    <DocSectionText v-bind="$attrs">
        <p>A floating label appears on top of the input field when focused.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <span class="block relative">
            <InputText id="username" v-model="value" />
            <label for="username" class="absolute pointer-events-none top-1/2 -mt-2 transition-all ease leading-none left-3 text-gray-500 duration-200">Username</label>
        </span>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<span class="p-float-label">
    <InputText id="username" v-model="value" />
    <label for="username">Username</label>
</span>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <span class="p-float-label">
            <InputText id="username" v-model="value" />
            <label for="username">Username</label>
        </span>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <span class="p-float-label">
            <InputText id="username" v-model="value" />
            <label for="username">Username</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
