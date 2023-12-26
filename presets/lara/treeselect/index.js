export default {
    root: ({ props }) => ({
        class: [
            'inline-flex cursor-pointer select-none',
            'bg-surface-0 dark:bg-surface-900 border border-surface-50 dark:border-surface-700  transition-colors duration-200 ease-in-out rounded-md',
            'w-full md:w-80',
            { 'opacity-60 select-none pointer-events-none cursor-default': props?.disabled }
        ]
    }),
    labelContainer: {
        class: ['overflow-hidden flex flex-auto cursor-pointer']
    },
    label: {
        class: ['block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-surface-800 dark:text-white/80', 'p-3 transition duration-200']
    },
    trigger: {
        class: ['flex items-center justify-center shrink-0', 'bg-transparent text-surface-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg']
    },
    panel: {
        class: ['bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80 border-0 rounded-md shadow-lg']
    },
    wrapper: {
        class: ['max-h-[200px] overflow-auto', 'bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80 border-0 rounded-md shadow-lg']
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
