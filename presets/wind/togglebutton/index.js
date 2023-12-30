export default {
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
            { 'ring-1 ring-surface-200 dark:ring-surface-700': !context.focused },
            {
                'bg-surface-0 dark:bg-surface-900 ': !props.modelValue,
                'bg-surface-100 dark:bg-surface-700': props.modelValue
            },

            // States
            'hover:bg-surface-200 dark:hover:bg-surface-600/80',
            {
                'outline-none outline-offset-0 ring-2 ring-inset ring-primary-500 dark:ring-primary-400': context.focused && !props.disabled
            },

            // Transitions
            'transition-all duration-200',

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
};
