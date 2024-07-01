<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Merge customization is not an option that you'd need to use frequently however understanding how it works would help in scenarios where a certain component needs to be customized. The merge strategy is configured using the
            <i>ptOptions</i> of a component. Currently it contains two options; <i>mergeSections</i> and <i>mergeProps</i>. Default values are <i>true</i> for sections and <i>false</i> for props. To explain all four combinations, let's use a global
            configuration and a local one to compare the outputs.
        </p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
        <DocSectionCode :code="code2" hideToggleCode hideCodeSandbox hideStackBlitz />
        <p>
            With the default values, component would use the following values. Since <i>mergeProps</i> is false, the sections with the same name (header, content) are overriden. There is no footer in the local component so the global footer section
            is used because <i>mergeSections</i> is true.
        </p>
        <DocSectionCode :code="code3" importCode hideToggleCode hideCodeSandbox hideStackBlitz />

        <p>The other 3 combinations would result in the values below.</p>
        <DocSectionCode :code="code4" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
//global preset
app.use(PrimeVue, { 
    pt: {
        panel: {
            header: 'bg-gray-50 text-gray-900 p-4 border',
            content: 'border p-4 text-gray-900',
            footer: 'p-4 border'
        }
    } 
});
`
            },
            code2: {
                basic: `
<!-- local preset -->
<Panel header="Overriden" :pt="{ header: 'text-xl text-primary', content: 'p-8' }">Content</Panel>
`
            },
            code3: {
                basic: `
// Default ptOptions as { mergeSections: true, mergeProps: false }
panel: {
    header: 'text-xl text-primary',
    content: 'p-8',
    footer: 'p-4 border'
}
`
            },
            code4: {
                basic: `
// ptOptions as { mergeSections: true, mergeProps: true }
panel: {
    header: 'bg-gray-50 text-gray-900 p-4 border text-xl text-primary',
    content: 'border p-4 text-gray-900 p-8',
    footer: 'p-4 border'
}

// ptOptions as { mergeSections: false, mergeProps: false }
// this basically ignores the global config
panel: {
    header: 'text-xl text-primary',
    content: 'p-8'
    //no footer
}

// ptOptions as { mergeSections: false, mergeProps: true }
panel: {
    header: 'bg-gray-50 text-gray-900 p-4 border text-xl text-primary',
    content: 'border p-4 text-gray-900 p-8'
    //no footer
}
`
            }
        };
    }
};
</script>
