export default {
    root: {
        class: ['bg-surface-0 dark:bg-surface-900 border border-surface-50 dark:border-surface-700 transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-56']
    },
    wrapper: {
        class: 'overflow-auto'
    },
    list: {
        class: 'py-3 list-none m-0'
    },
    item: ({ context }) => ({
        class: [
            'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
            'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
            {
                'text-surface-700 hover:text-surface-700 hover:bg-surface-100 dark:text-white/80 dark:hover:bg-surface-800': !context.focused && !context.selected,
                'bg-surface-50 text-surface-700 dark:text-white/80 dark:bg-surface-800/90 hover:text-surface-700 hover:bg-surface-100 dark:text-white/80 dark:hover:bg-surface-800': context.focused && !context.selected,
                'bg-primary-100 text-primary-700 dark:bg-primary-400 dark:text-white/80': context.focused && context.selected,
                'bg-primary-50 text-primary-700 dark:bg-primary-300 dark:text-white/80': !context.focused && context.selected
            }
        ]
    }),
    itemgroup: {
        class: ['m-0 p-3 text-surface-800 bg-surface-0 font-bold', 'dark:bg-surface-900 dark:text-white/80', 'cursor-auto']
    },
    header: {
        class: ['p-3 border-b border-surface-50 text-surface-700 bg-surface-100 mt-0 rounded-tl-lg rounded-tr-lg', 'dark:bg-surface-800 dark:text-white/80 dark:border-surface-700']
    },
    filtercontainer: {
        class: 'relative'
    },
    filterinput: {
        class: [
            'pr-7 -mr-7',
            'w-full',
            'font-sans text-base text-surface-700 bg-surface-0 py-3 px-3 border border-surface-50 transition duration-200 rounded-lg appearance-none',
            'dark:bg-surface-900 dark:border-surface-700 dark:hover:border-primary-300 dark:text-white/80',
            'hover:border-primary-500 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    filtericon: {
        class: '-mt-2 absolute top-1/2'
    }
};
