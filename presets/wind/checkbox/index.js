export default {
    root: {
        class: [
            'relative',

            // Alignment
            'inline-flex',
            'align-bottom',

            // Size
            'w-4',
            'h-4',

            // Misc
            'cursor-default',
            'select-none'
        ]
    },
    input: ({ props, context }) => ({
        class: [
            // Alignment
            'flex',
            'items-center',
            'justify-center',

            // Size
            'w-4',
            'h-4',

            // Shape
            'rounded',
            'border',

            // Colors
            'text-surface-600',
            {
                'border-surface-300 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked,
                'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked
            },

            // States
            'focus:outline-none focus:outline-offset-0',
            {
                'ring-2 ring-primary-500 dark:ring-primary-400': !props.disabled && context.focused,
                'cursor-default opacity-60': props.disabled
            },

            // Transitions
            'transition-colors',
            'duration-200'
        ]
    }),
    icon: {
        class: [
            // Font
            'text-normal',

            // Size
            'w-3',
            'h-3',

            // Colors
            'text-white dark:text-surface-900',

            // Transitions
            'transition-all',
            'duration-200'
        ]
    }
};
