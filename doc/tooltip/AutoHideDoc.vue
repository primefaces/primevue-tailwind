<template>
    <DocSectionText v-bind="$attrs">
        <p>Tooltip gets hidden when mouse leaves the target element by default, set <i>autoHide</i> to false to customize this behavior so that tooltip stays open when the cursor is on the tooltip.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-2">
        <InputText v-tooltip.bottom="{ value: 'Enter your username', autoHide: false }" type="text" placeholder="autoHide: false" />
        <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="autoHide: true" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InputText v-tooltip.bottom="{ value: 'Enter your username', autoHide: false }" type="text" placeholder="autoHide: false" />
<InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="autoHide: true" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <InputText v-tooltip.bottom="{ value: 'Enter your username', autoHide: false }" type="text" placeholder="autoHide: false" />
        <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="autoHide: true" />
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <InputText v-tooltip.bottom="{ value: 'Enter your username', autoHide: false }" type="text" placeholder="autoHide: false" />
        <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="autoHide: true" />
    </div>
</template>
`
            }
        };
    }
};
</script>
