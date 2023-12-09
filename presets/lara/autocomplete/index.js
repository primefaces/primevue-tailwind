export default {
    root: ({ props }) => ({
        class: [
            'relative inline-flex',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            },
            { 'w-full': props.multiple }
        ]
    }),
    container: {
        class: [
            'm-0 list-none cursor-text overflow-hidden flex items-center flex-wrap w-full',
            'px-3 py-2 gap-2',
            'font-sans text-base text-surface-700 dark:text-white/80 bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700  transition duration-200 ease-in-out appearance-none rounded-md',
            'hover:border-primary-500 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    inputtoken: {
        class: ['py-0.375rem px-0', 'flex-1 inline-flex']
    },
    input: ({ props }) => ({
        class: [
            'm-0',
            ' transition-colors duration-200 appearance-none rounded-lg',
            { 'rounded-tr-none rounded-br-none': props.dropdown },
            {
                'font-sans text-base text-surface-700 dark:text-white/80 bg-surface-0 dark:bg-surface-900 p-3 border border-surface-200 dark:border-surface-700 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50':
                    !props.multiple,
                'font-sans text-base text-surface-700 dark:text-white/80 border-0 outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full': props.multiple
            }
        ]
    }),
    token: {
        class: ['py-1 px-2 mr-2 bg-surface-300 dark:bg-surface-700 text-surface-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
    },
    dropdownbutton: {
        root: {
            class: 'rounded-tl-none rounded-bl-none'
        }
    },
    panel: {
        class: ['bg-surface-0 text-surface-700 border-0 rounded-md shadow-lg', 'max-h-[200px] overflow-auto', 'bg-surface-0 text-surface-700 border-0 rounded-md shadow-lg', 'dark:bg-surface-900 dark:text-white/80']
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
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
