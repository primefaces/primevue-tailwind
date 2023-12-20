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
        class: 'overflow-hidden flex flex-auto cursor-pointer'
    },
    label: ({ props }) => ({
        class: [
            'block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis',
            'text-surface-800 dark:text-white/80',
            'p-3 transition duration-200',
            {
                '!p-3': props.display !== 'chip' && (props?.modelValue == null || props?.modelValue == undefined),
                '!py-1.5 px-3': props.display == 'chip' && props?.modelValue !== null,
                '!p-3': props.display == 'chip' && props?.modelValue == null
            }
        ]
    }),
    token: {
        class: ['py-1 px-2 mr-2 bg-surface-300 dark:bg-surface-700 text-surface-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
    },
    removeTokenIcon: {
        class: 'ml-2'
    },
    trigger: {
        class: ['flex items-center justify-center shrink-0', 'bg-transparent text-surface-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg']
    },
    panel: {
        class: ['bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80 border-0 rounded-md shadow-lg']
    },
    header: {
        class: ['p-3 border-b border-surface-50 dark:border-surface-700 text-surface-700 dark:text-white/80 bg-surface-100 dark:bg-surface-800 rounded-t-lg', 'flex items-center justify-between']
    },
    headerCheckboxContainer: {
        class: ['inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6']
    },
    headerCheckbox: ({ context }) => ({
        class: [
            'flex items-center justify-center',
            'border-2 w-6 h-6 text-surface-600 dark:text-white/70 rounded-lg transition-colors duration-200',
            'hover:border-primary-500 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'border-surface-50 dark:border-surface-700 bg-surface-0 dark:bg-surface-900': !context?.selected,
                'border-primary-500 bg-primary-500': context?.selected
            }
        ]
    }),
    headercheckboxicon: {
        class: 'w-4 h-4 transition-all duration-200 text-white text-base'
    },
    closeButton: {
        class: [
            'flex items-center justify-center overflow-hidden relative',
            'w-8 h-8 text-surface-500 dark:text-white/70 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
            'hover:text-surface-700 dark:hover:text-white/80 hover:border-transparent hover:bg-surface-100 dark:hover:bg-surface-800/80 ',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    closeButtonIcon: {
        class: 'w-4 h-4 inline-block'
    },
    wrapper: {
        class: ['max-h-[200px] overflow-auto', 'bg-surface-0 text-surface-700 border-0 rounded-md shadow-lg', 'dark:bg-surface-900 dark:text-white/80']
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
    checkboxContainer: {
        class: ['inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6']
    },
    checkbox: ({ context }) => ({
        class: [
            'flex items-center justify-center',
            'border-2 w-6 h-6 text-surface-600 dark:text-white/80 rounded-lg transition-colors duration-200',
            'hover:border-primary-500 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'border-surface-50 dark:border-surface-700  bg-surface-0 dark:bg-surface-900': !context?.selected,
                'border-primary-500 bg-primary-500': context?.selected
            }
        ]
    }),
    checkboxicon: {
        class: 'w-4 h-4 transition-all duration-200 text-white text-base'
    },
    itemgroup: {
        class: ['m-0 p-3 text-surface-800 bg-surface-0 font-bold', 'dark:bg-surface-900 dark:text-white/80', 'cursor-auto']
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
    },
    clearicon: {
        class: 'text-surface-500 right-12 -mt-2 absolute top-1/2'
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
