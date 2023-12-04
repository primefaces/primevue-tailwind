export default {
    root: {
        class: [
            'block',

            // Spacing
            'px-4 pt-2 py-3',
            'inline-size-min',

            // Shape
            'rounded-md',
            // Color
            'border border-surface-300 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    legend: ({ props }) => ({
        class: [
            // Font
            'font-bold',
            'leading-none',

            //Spacing
            { 'p-0': props.toggleable, 'p-5': !props.toggleable },

            // Shape
            'rounded-md',

            // Color
            'text-surface-700 dark:text-surface-0/80',
            'border border-surface-200 dark:border-surface-700',
            'bg-surface-50 dark:bg-surface-900',

            // Transition
            'transition-none',

            // States
            { 'hover:bg-surface-100 hover:border-surface-200 hover:text-surface-900 dark:hover:text-surface-0/80 dark:hover:bg-surface-800/80': props.toggleable },
            { 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': props.toggleable }
        ]
    }),
    toggler: ({ props }) => ({
        class: [
            // Alignments
            'flex items-center justify-center',
            'relative',

            //Spacing
            { 'p-5': props.toggleable },

            // Shape
            { 'rounded-md': props.toggleable },

            // Color
            { 'text-surface-700 dark:text-surface-200 hover:text-surface-900 hover:text-surface-900': props.toggleable },

            // States
            { 'hover:text-surface-900 dark:hover:text-surface-100': props.toggleable },
            { 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset focus:ring-primary-400/50 dark:focus:ring-primary-300/50': props.toggleable },

            // Misc
            {
                'transition-none cursor-pointer overflow-hidden select-none': props.toggleable
            }
        ]
    }),
    togglerIcon: {
        class: 'mr-2 inline-block'
    },
    legendTitle: {
        class: 'flex items-center justify-center leading-none'
    },
    content: {
        class: 'p-5'
    },
    transition: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    }
};
