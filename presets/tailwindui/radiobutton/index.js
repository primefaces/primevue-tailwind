export default {
    root: {
        class: ['relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6']
    },
    input: ({ props }) => ({
        class: [
            'flex justify-center items-center',
            'border-2 w-6 h-6 text-surface-700 rounded-full transition duration-200 ease-in-out',
            {
                'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900 dark:text-white/80': props.value !== props.modelValue,
                'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': props.value == props.modelValue
            },
            {
                'hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !props.disabled,
                'cursor-default opacity-60': props.disabled
            }
        ]
    }),
    icon: ({ props }) => ({
        class: [
            'transform rounded-full',
            'block w-3 h-3 transition duration-200 bg-surface-0 dark:bg-surface-900',
            {
                'backface-hidden scale-10 invisible': props.value !== props.modelValue,
                'transform scale-100 visible': props.value == props.modelValue
            }
        ]
    })
};
