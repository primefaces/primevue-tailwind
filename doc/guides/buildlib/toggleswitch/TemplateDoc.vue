<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The template section consists of a wrapper flex container, a built-in label and the PrimeVue InputSwitch. Notice the use of <i>v-bind="$attrs"</i> as we'd like to apply any property passed to our own component to the underlying
            InputSwitch e.g. <i>v-model</i> and <i>v-on</i> events. Component here is responsible for the main functionality and accessibility while we focus on standardizing the design requirements.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            checked1: true,
            checked2: true,
            code: {
                basic: `
<template>
    <div class="flex items-center gap-4">
        <label :for="$attrs.inputId">{{ label }}</label>
        <InputSwitch v-bind="$attrs" />
    </div>
</template>
`
            }
        };
    }
};
</script>
