export default {
    root: {
        class: 'py-1 bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80 border-none shadow-md rounded-lg w-52'
    },
    menu: {
        class: ['m-0 p-0 list-none', 'outline-none']
    },
    menuitem: {
        class: 'relative'
    },
    content: ({ context }) => ({
        class: [
            'transition-shadow duration-200 rounded-none',
            'hover:text-surface-700 dark:hover:text-white/80 hover:bg-surface-100 dark:hover:bg-surface-800/80', // Hover
            {
                'text-surface-700': !context.focused && !context.active,
                'bg-surface-300 text-surface-700 dark:text-white/80 dark:bg-surface-800/90': context.focused && !context.active,
                'bg-primary-500 text-primary-700 dark:bg-primary-400 dark:text-white/80': context.focused && context.active,
                'bg-primary-50 text-primary-700 dark:bg-primary-300 dark:text-white/80': !context.focused && context.active
            }
        ]
    }),
    action: {
        class: ['cursor-pointer flex items-center no-underline overflow-hidden relative', 'text-surface-700 dark:text-white/80 py-3 px-5 select-none']
    },
    icon: {
        class: 'text-surface-600 dark:text-white/70 mr-2'
    },
    label: {
        class: 'text-surface-600 dark:text-white/70'
    },
    transition: {
        enterFromClass: 'opacity-0',
        enterActiveClass: 'transition-opacity duration-250'
    }
};
