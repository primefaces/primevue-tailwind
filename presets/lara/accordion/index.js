export default {
    root: {
        class: 'mb-1'
    },
    accordiontab: {
        root: {
            class: 'mb-1'
        },
        header: ({ props }) => ({
            class: [
                { 'select-none pointer-events-none cursor-default opacity-60': props?.disabled } // Condition
            ]
        }),
        headerAction: ({ context }) => ({
            class: [
                'flex items-center cursor-pointer relative no-underline select-none', // Alignments
                'p-5 transition duration-200 ease-in-out rounded-t-md font-bold transition-shadow duration-200', // Padding and transition
                'border border-surface-200 bg-surface-50 text-surface-600', // Borders and colors
                'dark:bg-surface-900 dark:border-surface-700 dark:text-surface-0/80 dark:hover:bg-surface-800/80', // Dark mode
                'hover:border-surface-200 hover:bg-surface-100 hover:text-surface-900', // Hover
                'focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 ring-inset dark:focus-visible:ring-primary-300/50', // Focus
                { 'rounded-br-md rounded-bl-md': !context.active, 'rounded-br-0 rounded-bl-0 text-surface-900': context.active } // Condition
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
                'p-5 border border-surface-200 bg-surface-0 text-surface-700 border-t-0 rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg',
                'dark:bg-surface-900 dark:border-surface-700 dark:text-surface-0/80' // Dark mode
            ]
        },
        transition: {
            enterFromClass: 'max-h-0',
            enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
            enterToClass: 'max-h-40	',
            leaveFromClass: 'max-h-40',
            leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
            leaveToClass: 'max-h-0'
        }
    }
};
