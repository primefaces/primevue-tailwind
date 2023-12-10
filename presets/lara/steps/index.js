export default {
    root: {
        class: 'relative'
    },
    menu: {
        class: 'p-0 m-0 list-none flex'
    },
    menuitem: {
        class: ['relative flex justify-center flex-1 overflow-hidden', 'before:border-t before:border-surface-200 before:dark:border-surface-700 before:w-full before:absolute before:top-1/4 before:left-0 before:transform before:-translate-y-1/2']
    },
    action: {
        class: ['inline-flex flex-col items-center overflow-hidden', 'transition-shadow rounded-md bg-surface-0 dark:bg-transparent', 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50']
    },
    step: {
        class: ['flex items-center justify-center', 'text-surface-700 dark:text-white/80 border border-surface-200 dark:border-surface-700  bg-surface-0 dark:bg-surface-900 w-[2rem] h-[2rem] leading-2rem text-sm z-10 rounded-full']
    },
    label: {
        class: ['block', 'whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full', 'mt-2 text-surface-500 dark:text-white/60']
    }
};
