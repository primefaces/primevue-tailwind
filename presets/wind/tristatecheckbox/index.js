export default {
    root: {
        class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
    },
    checkbox: ({ props }) => ({
        class: [
            'flex items-center justify-center',
            'border-2 w-6 h-6 rounded-lg transition-colors duration-200',
            {
                'border-primary-500 bg-primary-500 text-white dark:border-primary-400 dark:bg-primary-400': props.modelValue || !props.modelValue,
                'border-surface-50 text-surface-600 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': props.modelValue == null
            },
            {
                'hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !props.disabled,
                'cursor-default opacity-60': props.disabled
            }
        ]
    })
};
