export default {
    root: {
        class: ['overflow-x-auto', 'bg-surface-0 dark:bg-surface-900 border border-surface-50 dark:border-surface-700 rounded-md p-4']
    },
    menu: {
        class: 'm-0 p-0 list-none flex items-center flex-nowrap'
    },
    action: {
        class: [
            'text-decoration-none flex items-center',
            'transition-shadow duration-200 rounded-md text-surface-600 dark:text-white/70',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    icon: {
        class: 'text-surface-600 dark:text-white/70'
    },
    separator: {
        class: ['mx-2 text-surface-600 dark:text-white/70', 'flex items-center']
    }
};
