export default {
    root: ({ props }) => ({
        class: [
            // Alignments
            'inline-flex relative',
            'flex-shrink-0',

            // Size
            'h-5 w-9',

            // States
            'focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    slider: ({ props }) => ({
        class: [
            // Position
            'absolute top-0 left-0 right-0 bottom-0',

            // Shape
            'rounded-2xl',

            // Before:
            'before:absolute before:top-1/2',
            'before:-mt-2',
            'before:h-4 before:w-4',
            'before:rounded-full',
            'before:transition-duration-200 before:transition before:ease-in-out',
            'before:bg-surface-0 before:dark:bg-surface-900',
            'before:shadow',
            { 'before:transform before:translate-x-4': props.modelValue },

            // Colors
            'border-2 border-transparent',
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
