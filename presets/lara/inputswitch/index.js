export default {
    root: ({ props }) => ({
        class: [
            'inline-block relative',
            'w-12 h-7',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            },
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50  dark:focus:ring-primary-300/50'
        ]
    }),
    slider: ({ props }) => ({
        class: [
            // Position
            'absolute top-0 left-0 right-0 bottom-0',
            { 'before:transform before:translate-x-5': props.modelValue },

            // Shape
            'rounded-2xl',

            // Before:
            'before:absolute before:top-1/2 before:left-1',
            'before:-mt-2.5',
            'before:h-5 before:w-5',
            'before:rounded-full',
            'before:transition-duration-200',
            'before:bg-surface-0 before:dark:bg-surface-900',

            // Colors
            'border border-transparent',
            {
                'bg-surface-200 dark:bg-surface-700': !props.modelValue,
                'bg-primary-500 dark:bg-primary-400': props.modelValue
            },

            // States
            { 'hover:bg-surface-300 hover:dark:bg-surface-600 ': !props.modelValue },

            // Transition
            'transition-colors duration-200',

            // Misc
            'cursor-pointer'
        ]
    })
};
