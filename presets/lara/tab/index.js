export default {
    root: ({ props, context }) => ({
        class: [
            'relative shrink-0',
            // Transitions
            'transition-all duration-200',

            // Misc
            'cursor-pointer select-none whitespace-nowrap',
            'user-select-none',

            // Shape
            'border-t-2',
            'rounded-b-md',

            // Spacing
            'py-4 px-[1.125rem]',
            '-mb-px',

            // Colors and Conditions
            'outline-transparent',
            {
                'border-transparent': !context.active,
                'bg-surface-50 dark:bg-surface-900': !context.active,
                'text-surface-700 dark:text-surface-0/80': !context.active,

                'bg-surface-0 dark:bg-surface-900': context.active,
                'border-primary': context.active,
                'text-primary': context.active,

                'opacity-60 cursor-default user-select-none select-none pointer-events-none': props?.disabled
            },
            // States
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset',
            'focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',
            {
                'hover:bg-surface-100 dark:hover:bg-surface-800/80': !context.active,
                'hover:text-surface-900 dark:hover:text-surface-0': !context.active
            }
        ]
    })
};
