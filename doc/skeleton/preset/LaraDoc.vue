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
skeleton: {
    root: ({ props }) => ({
        class: [
            'overflow-hidden',
            {
                'animate-pulse': props.animation !== 'none'
            },

            // Round
            { 'rounded-full': props.shape === 'circle', 'rounded-md': props.shape !== 'circle' },

            // Colors
            'bg-surface-200 dark:bg-surface-700'
        ]
    })
}
`
            }
        };
    }
};
</script>
