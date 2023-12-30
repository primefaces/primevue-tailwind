export default {
    root: {
        class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
    },
    checkbox: ({ props, context }) => ({
        class: [
            'relative',

            // Alignment
            'flex',
            'items-center',
            'justify-center',

            // Size
            'w-6',
            'h-6',

            // Shape
            'rounded-lg',
            'border-2',

            // Colors
            'text-surface-600',
            {
                'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': props.modelValue == null,
                'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': props.modelValue !== null
            },

            // States
            'focus:outline-none focus:outline-offset-0',
            {
                'hover:border-primary-500 dark:hover:border-primary-400': !props.disabled,
                'ring ring-primary-400/50 dark:ring-primary-300/50': !props.disabled && context.focused,
                'cursor-default opacity-60': props.disabled
            },

            // Transitions
            'transition-colors',
            'duration-200'
        ]
    }),
    checkicon: {
        class: [
            // Font
            'text-base leading-none',

            // Size
            'w-4',
            'h-4',

            // Colors
            'text-white dark:text-surface-900',

            // Transitions
            'transition-all',
            'duration-200'
        ]
    },
    uncheckicon: {
        class: [
            // Font
            'text-base leading-none',

            // Size
            'w-4',
            'h-4',

            // Colors
            'text-white dark:text-surface-900',

            // Transitions
            'transition-all',
            'duration-200'
        ]
    }
};
