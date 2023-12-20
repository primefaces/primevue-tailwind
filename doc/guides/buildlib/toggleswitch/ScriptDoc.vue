<template>
    <DocSectionText v-bind="$attrs">
        <p>The script sets <i>inheritAttrs</i> as false otherwise the fall through properties are applied to the main <i>div</i> container element. The additional props such as <i>label</i> are included as the props of our own component.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<script setup>
    defineOptions({
        inheritAttrs: false
    });

    defineProps(['label']);
<\/script>
`
            }
        };
    }
};
</script>
