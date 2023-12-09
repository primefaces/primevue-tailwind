export default {
    root: {
        class: [
            // Shape
            'rounded-md shadow-lg',
            'border-0 dark:border',

            // Position
            'absolute left-0 top-0',
            'z-40 transform origin-center',

            // Color
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-700 dark:text-surface-0/80',
            'dark:border-surface-700',

            // Before: Triangle
            'before:absolute before:-top-2 before:ml-4',
            'before:w-0 before:h-0',
            'before:border-transparent before:border-solid',
            'before:border-x-[0.5rem] before:border-b-[0.5rem]',
            'before:border-t-0 before:border-b-surface-0 dark:before:border-b-surface-800'
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
