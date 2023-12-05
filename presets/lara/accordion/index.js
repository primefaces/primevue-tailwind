export default {
    accordiontab: {
        root: {
            class: 'mb-1'
        },
        header: ({ props }) => ({
            class: [
                // State
                { 'select-none pointer-events-none cursor-default opacity-60': props?.disabled }
            ]
        }),
        headerAction: ({ context }) => ({
            class: [
                //Font
                'font-bold',
                'leading-none',

                // Alignments
                'flex items-center',
                'relative',

                // Sizing
                'p-5',

                // Shape
                'rounded-t-md',
                { 'rounded-br-md rounded-bl-md': !context.active, 'rounded-br-0 rounded-bl-0': context.active },

                // Color
                'border border-surface-300 dark:border-surface-700',
                'bg-surface-50 dark:bg-surface-800',
                'text-surface-600 dark:text-surface-0/80',
                { 'text-surface-900': context.active },

                // Transition
                'transition duration-200 ease-in-out',
                'transition-shadow duration-200',

                // States
                'hover:bg-surface-100 dark:hover:bg-surface-700/40',
                'hover:text-surface-900',
                'focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 ring-inset dark:focus-visible:ring-primary-300/50', // Focus

                // Misc
                'cursor-pointer no-underline select-none'
            ]
        }),
        headerIcon: {
            class: 'inline-block mr-2'
        },
        headerTitle: {
            class: 'leading-none'
        },
        content: {
            class: [
                // Spacing
                'p-5',

                //Shape
                'rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg',
                'border-t-0',

                // Color
                'bg-surface-0 dark:bg-surface-800',
                'border border-surface-300 dark:border-surface-700',
                'text-surface-700 dark:text-surface-0/80'
            ]
        },
        transition: {
            enterFromClass: 'max-h-0',
            enterActiveClass: 'overflow-hidden transition-all duration-400 ease-in-out',
            enterToClass: 'max-h-40	',
            leaveFromClass: 'max-h-40',
            leaveActiveClass: 'overflow-hidden transition-all duration-400 ease-in',
            leaveToClass: 'max-h-0'
        }
    }
};
