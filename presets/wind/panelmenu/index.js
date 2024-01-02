export default {
    root: {
        class: 'w-full md:w-[25rem]'
    },
    panel: {
        class: 'mb-1'
    },
    header: {
        class: [
            'outline-none',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50' // Focus
        ]
    },
    headercontent: {
        class: [
            'border border-solid border-surface-50 dark:border-surface-700 text-surface-700 dark:text-white/80 bg-surface-50 dark:bg-surface-900 rounded-md transition-shadow duration-200',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80  hover:text-surface-700 dark:hover:text-white/80'
        ]
    },
    headeraction: {
        class: ['flex items-center select-none cursor-pointer relative no-underline', 'text-surface-700 dark:text-white/80 p-5 font-bold']
    },
    submenuicon: {
        class: 'mr-2'
    },
    headericon: {
        class: 'mr-2'
    },
    menucontent: {
        class: 'py-1 border border-t-0 border-surface-50 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80 rounded-t-none rounded-br-md rounded-bl-md'
    },
    menu: {
        class: ['outline-none', 'm-0 p-0 list-none']
    },
    content: ({ context }) => ({
        class: [
            'text-surface-700 dark:text-white/80 transition-shadow duration-200 border-none rounded-none',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80  hover:text-surface-700 dark:hover:text-white/80', // Hover
            {
                'bg-surface-300 text-surface-700 dark:text-white/80 dark:bg-surface-800/90': context.focused
            }
        ]
    }),
    action: {
        class: ['text-surface-700 dark:text-white/80 py-3 px-5 select-none', 'flex items-center cursor-pointer no-underline relative overflow-hidden']
    },
    icon: {
        class: 'mr-2'
    },
    submenu: {
        class: 'p-0 pl-4 m-0 list-none'
    },
    transition: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
        enterToClass: 'max-h-[1000px]',
        leaveFromClass: 'max-h-[1000px]',
        leaveActiveClass: 'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
        leaveToClass: 'max-h-0'
    }
};
