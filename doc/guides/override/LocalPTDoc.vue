<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The additional classes defined with the <i>pt</i> property of a particular component are merged to the global configuration. The first panel in example below does not apply any overrides but the second one changes the font of the title.
            By default, the classes of a defined section e.g. <i>title</i> replace the section with the same name. This behavior can be customized per case with the <i>ptOptions</i> that is covered in the next section.
        </p>
        <div class="card">
            <Panel header="Global" class="mb-4">Content</Panel>
            <Panel header="Overriden" :pt="{ title: 'text-xl font-bold font-mono text-primary' }">Content</Panel>
        </div>
        <DocSectionCode :code="code" hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Panel header="Global" class="mb-4">Content</Panel>
<Panel header="Overriden" :pt="{ title: 'text-xl font-bold font-mono text-primary' }">Content</Panel>
`
            }
        };
    }
};
</script>
