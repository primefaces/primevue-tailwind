<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple mode is enabled using <i>multiple</i> property used to select more than one value from the autocomplete. In this case, value reference should be an array.</p>
    </DocSectionText>
    <div class="card">
        <label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
        <AutoComplete v-model="value1" inputId="multiple-ac-1" multiple fluid :suggestions="items" @complete="search" />

        <label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
        <AutoComplete v-model="value2" inputId="multiple-ac-2" multiple fluid @complete="search" :typeahead="false" variant="filled" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            items: [],
            code: {
                basic: `
<label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
<AutoComplete v-model="value1" inputId="multiple-ac-1" multiple fluid :suggestions="items" @complete="search" />

<label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
<AutoComplete v-model="value2" inputId="multiple-ac-2" multiple fluid @complete="search" :typeahead="false" variant="filled" />
`,
                options: `
<template>
    <div class="card">
        <label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
        <AutoComplete v-model="value1" inputId="multiple-ac-1" multiple fluid :suggestions="items" @complete="search" />

        <label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
        <AutoComplete v-model="value2" inputId="multiple-ac-2" mulmultiple fluidtiple @complete="search" :typeahead="false" variant="filled" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            items: []
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
        <AutoComplete v-model="value1" inputId="multiple-ac-1" multiple fluid :suggestions="items" @complete="search" />

        <label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
        <AutoComplete v-model="value2" inputId="multiple-ac-2" multiple fluid @complete="search" :typeahead="false" variant="filled" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(null);
const value2 = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>
`
            }
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
</script>
