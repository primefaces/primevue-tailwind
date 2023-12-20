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
togglebutton: {
    root: ({ props, context }) => ({
        class: [
            // Alignments
            'items-center inline-flex text-center align-bottom justify-center',

            // Sizes & Spacing
            'px-2.5 py-1.5',
            'text-sm',

            // Shapes
            'rounded-md shadow-sm',

            // Colors
            'text-surface-700 dark:text-white/80',
            'ring-1 ring-surface-200 dark:ring-surface-700',
            {
                'bg-surface-0 dark:bg-surface-900 ': !props.modelValue,
                'bg-surface-100 dark:bg-surface-700': props.modelValue
            },

            // States
            'hover:bg-surface-200 dark:hover:bg-surface-600/80',
            {
                'focus:outline-none focus:outline-offset-0 focus:ring-primary-500 dark:focus:ring-primary-400': context.focused
            },

            // Misc
            { 'cursor-pointer': !props.disabled, 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
        ]
    }),
    label: {
        class: 'font-semibold text-center w-full'
    },
    icon: {
        class: [' mr-2', 'text-surface-700 dark:text-white/80']
    }
}
`
            }
        };
    }
};
</script>
