export default {
    root: ({ props }) => ({
        class: [
            'inline-flex cursor-pointer select-none relative',
            'bg-surface-0 dark:bg-surface-900 border border-surface-50 dark:border-surface-700 transition duration-200 ease-in-out rounded-lg',
            { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
        ]
    }),
    label: {
        class: ['block whitespace-nowrap overflow-hidden flex flex-1 w-1 text-overflow-ellipsis cursor-pointer', 'bg-transparent border-0 p-3 text-surface-700 dark:text-white/80', 'appearance-none rounded-md']
    },
    dropdownbutton: {
        class: ['flex items-center justify-center shrink-0', 'bg-transparent text-surface-600 dark:text-white/80 w-[3rem] rounded-tr-6 rounded-br-6']
    },
    panel: {
        class: 'absolute py-3 bg-surface-0 dark:bg-surface-900 border-0 shadow-md'
    },
    list: {
        class: 'm-0 sm:p-0 list-none'
    },
    item: {
        class: [
            'cursor-pointer font-normal whitespace-nowrap',
            'm-0 border-0 bg-transparent transition-shadow rounded-none',
            'text-surface-700 dark:text-white/80 hover:text-surface-700 dark:hover:text-white/80 hover:bg-surface-100 dark:hover:bg-surface-800/80'
        ]
    },
    content: {
        class: ['flex items-center overflow-hidden relative', 'py-3 px-5']
    },
    groupicon: {
        class: 'ml-auto'
    },
    sublist: {
        class: ['block absolute left-full top-0', 'min-w-full z-10', 'py-3 bg-surface-0 dark:bg-surface-900 border-0 shadow-md']
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
