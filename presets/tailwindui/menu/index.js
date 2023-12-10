export default {
    root: {
        class: 'py-1 bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80 border border-surface-200 dark:border-surface-700 rounded-md w-48'
    },
    menu: {
        class: ['m-0 p-0 list-none', 'outline-none']
    },
    content: ({ context }) => ({
        class: [
            'text-surface-700 dark:text-white/80 transition-shadow duration-200 rounded-none',
            'hover:text-surface-700 dark:hover:text-white/80 hover:bg-surface-100 dark:hover:bg-surface-800/80', // Hover
            {
                'bg-surface-300 text-surface-700 dark:text-white/80 dark:bg-surface-800/90': context.focused
            }
        ]
    }),
    action: {
        class: ['text-surface-700 dark:text-white/80 py-3 px-5 select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative']
    },
    icon: {
        class: 'text-surface-600 dark:text-white/70 mr-2'
    },
    submenuheader: {
        class: ['m-0 p-3 text-surface-700 dark:text-white/80 bg-surface-0 dark:bg-surface-900 font-bold rounded-tl-none rounded-tr-none']
    },
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
