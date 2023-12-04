export default {
    root: {
        class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
    },
    input: ({ props, context }) => ({
        class: [
            'flex items-center justify-center',
            'border-2 w-6 h-6 text-surface-600 rounded-lg transition-colors duration-200',
            {
                'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked,
                'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked
            },
            {
                'hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !props.disabled,
                'cursor-default opacity-60': props.disabled
            }
        ]
    }),
    icon: {
        class: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-surface-900'
    }
};
