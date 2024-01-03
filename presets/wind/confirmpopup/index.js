export default {
    root: {
        class: [
            'bg-surface-0 text-surface-700 border-0 rounded-md shadow-lg',
            'z-40 transform origin-center',
            'mt-3 absolute left-0 top-0',
            'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-surface-0 dark:before:border-b-surface-900',
            'dark:border dark:border-surface-700 dark:bg-surface-900 dark:text-surface-0/80'
        ]
    },
    content: {
        class: 'p-5 items-center flex'
    },
    icon: {
        class: 'text-2xl'
    },
    message: {
        class: 'ml-4'
    },
    footer: {
        class: 'text-right px-5 py-5 pt-0'
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
