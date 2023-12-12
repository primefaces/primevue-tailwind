<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
ripple: {
    root: {
        class: ['block absolute bg-surface-0/50 rounded-full pointer-events-none'],
        style: 'transform: scale(0)'
    }
}
`
            }
        };
    }
};
</script>
