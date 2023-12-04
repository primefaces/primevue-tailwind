export default {
    root: ({ props }) => ({
        class: [
            'inline-block relative',
            'w-12 h-7',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    slider: ({ props }) => ({
        class: [
            'absolute cursor-pointer top-0 left-0 right-0 bottom-0 border border-transparent',
            'transition-colors duration-200 rounded-2xl',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50',
            "before:absolute before:content-'' before:top-1/2 before:bg-surface-0 before:dark:bg-surface-900 before:w-5 before:h-5 before:left-1 before:-mt-2.5 before:rounded-full before:transition-duration-200",
            {
                'bg-surface-200 dark:bg-surface-800 hover:bg-surface-300 hover:dark:bg-surface-700 ': !props.modelValue,
                'bg-primary-500 before:transform before:translate-x-5': props.modelValue
            }
        ]
    })
};
