<template>
    <DocSectionText v-bind="$attrs">
        <p>An additional button is displayed next to the input field when <i>showIcon</i> is present. Also adding <i>iconDisplay</i> as <i>input</i> an icon will be displayed.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-5 p-fluid justify-center">
        <div>
            <label for="buttondisplay" class="font-bold block mb-2"> Button Display </label>
            <Calendar v-model="buttondisplay" showIcon inputId="buttondisplay" />
        </div>
        <div>
            <label for="icondisplay" class="font-bold block mb-2"> Icon Display </label>
            <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            buttondisplay: null,
            icondisplay: null,
            code: {
                basic: `
<Calendar v-model="buttondisplay" showIcon />
<Calendar v-model="icondisplay" showIcon iconDisplay="input" />
`,
                options: `
<template>
    <div class="card flex flex-wrap gap-5 p-fluid">
        <div>
            <label for="buttondisplay" class="font-bold block mb-2"> Button Display </label>
            <Calendar v-model="buttondisplay" showIcon inputId="buttondisplay" />
        </div>
        <div>
            <label for="icondisplay" class="font-bold block mb-2"> Icon Display </label>
            <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttondisplay: null,
            icondisplay: null,
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap gap-5 p-fluid">
        <div>
            <label for="buttondisplay" class="font-bold block mb-2"> Button Display </label>
            <Calendar v-model="buttondisplay" showIcon inputId="buttondisplay" />
        </div>
        <div>
            <label for="icondisplay" class="font-bold block mb-2"> Icon Display </label>
            <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const buttondisplay = ref();
const icondisplay = ref();
<\/script>
`
            }
        };
    }
};
</script>
