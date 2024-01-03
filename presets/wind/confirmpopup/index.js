export default {
    root: {
        class: [
            // Shape
            'rounded-lg',
            'shadow-xl',
            'border-0',

            // Positioning
            'z-40 transform origin-center',
            'mt-3 absolute left-0 top-0',

            // Color
            'dark:border',
            'dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-700 dark:text-surface-0/80',

            // Before: Arrow
            'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-surface-0 dark:before:border-b-surface-800'
        ]
    },
    content: {
        class: [
            // Font
            'text-sm',

            // Spacing
            'px-6',
            'py-3',

            // Colors
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-600 dark:text-surface-0/70',

            // Misc
            'overflow-y-auto'
        ]
    },
    icon: {
        class: 'text-xl'
    },
    message: {
        class: 'ml-2'
    },
    footer: {
        class: [
            // Flexbox and Alignment
            'flex items-center justify-end',
            'shrink-0',
            'text-right',
            'gap-3',

            // Spacing
            'px-6',
            'py-3',

            // Shape
            'border-t-0',
            'rounded-b-lg',

            // Colors
            'bg-surface-50 dark:bg-surface-700',
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
