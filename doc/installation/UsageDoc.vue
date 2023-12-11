<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component. For Nuxt users, this step is not required in a Nuxt settings as the primevue
            module <a href="https://primevue.org/nuxt/#components" target="_blank" rel="noopener noreferrer">auto configures</a> the components.
        </p>
        <p>This button may look like a regular PrimeVue button however it is styled with Tailwind CSS utilities entirely. Use the <i>button.js</i> in your preset folder to customize the styles freely.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Check" icon="pi pi-check" />
    </div>
    <DocSectionCode :code="code" importCode />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Button from "primevue/button"

const app = createApp(App);
app.component('Button', Button);
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Button label="Check" icon="pi pi-check" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Button label="Check" icon="pi pi-check" />
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
