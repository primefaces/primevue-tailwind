<template>
    <DocSectionText v-bind="$attrs">
        <p>Let's wrap it up with an example demo. Looking good!</p>
    </DocSectionText>
    <div class="card flex items-center justify-center gap-8">
        <ToggleSwitch v-model="checked1" inputId="primary" label="Primary" />
        <ToggleSwitch v-model="checked2" inputId="accent" label="Accent" type="accent" />
    </div>
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
<ToggleSwitch v-model="checked1" inputId="primary" label="Primary" />
<ToggleSwitch v-model="checked2" inputId="accent" label="Accent" type="accent" />
`
            }
        };
    }
};
</script>
