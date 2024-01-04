<template>
    <DocSectionText v-bind="$attrs">
        <p>If you are using SCSS, the CSS file of the icon library needs to be imported in <i>styles.scss</i> of your application.</p>
    </DocSectionText>
    <DocSectionCode :code="scssCode" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    <DocSectionText v-bind="$attrs">
        <p>If you are using plain css you need to import it in your <i>index.html</i> file.</p>
    </DocSectionText>
    <DocSectionCode :code="cssCode" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            scssCode: {
                basic: "\nimport 'primeicons/primeicons.css'\n"
            },
            cssCode: {
                basic: '\n<link href="/node_modules/primeicons/primeicons.css" rel="stylesheet">\n'
            }
        };
    }
};
</script>
