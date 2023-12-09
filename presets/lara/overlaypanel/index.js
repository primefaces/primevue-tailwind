export default {
    root: {
        class: [
            'bg-surface-0 text-surface-700 border-0 rounded-md shadow-lg',
            'z-40 transform origin-center',
            'absolute left-0 top-0',
            'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-surface-0 dark:before:border-b-surface-900',
            'dark:border dark:border-surface-700 dark:bg-surface-900 dark:text-surface-0/80'
        ]
    },
    content: {
        class: 'p-5 items-center flex'
    },
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
