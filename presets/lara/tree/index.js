export default {
    root: {
        class: ['max-w-[30rem] md:w-full', 'border border-solid border-surface-50 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80 p-5 rounded-md']
    },
    wrapper: {
        class: 'overflow-auto'
    },
    container: {
        class: 'm-0 p-0 list-none overflow-auto'
    },
    node: {
        class: 'p-1 outline-none'
    },
    content: ({ context, props }) => ({
        class: [
            'flex items-center',
            'rounded-lg transition-shadow duration-200 p-2',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            { 'bg-primary-50 text-primary-600': context.selected },
            { 'cursor-pointer select-none': props.selectionMode == 'single' || props.selectionMode == 'multiple' }
        ]
    }),
    toggler: ({ context }) => ({
        class: [
            'cursor-pointer select-none inline-flex items-center justify-center overflow-hidden relative shrink-0',
            'mr-2 w-8 h-8 border-0 bg-transparent rounded-full transition duration-200',
            'hover:border-transparent focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'text-surface-500 dark:text-white/80 hover:bg-surface-100 dark:hover:bg-surface-800/80  hover:text-surface-800 dark:hover:text-white/80': !context.selected,
                'text-primary-600 hover:bg-surface-0/30': context.selected
            },
            {
                invisible: context.leaf
            }
        ]
    }),
    checkboxcontainer: {
        class: 'mr-2'
    },
    checkbox: ({ context, props }) => ({
        class: [
            'cursor-pointer inline-flex relative select-none align-bottom',
            'w-6 h-6',
            'flex items-center justify-center',
            'border-2 w-6 h-6 rounded-lg transition-colors duration-200 text-white text-base dark:text-surface-900',
            {
                'border-surface-50 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked,
                'border-primary-500 text-white bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked
            },
            {
                'hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !props.disabled,
                'cursor-default opacity-60': props.disabled
            }
        ]
    }),
    nodeicon: {
        class: 'mr-2 text-surface-600 dark:text-white/70'
    },
    subgroup: {
        class: ['m-0 list-none', 'p-0 pl-4']
    },
    filtercontainer: {
        class: ['mb-2', 'relative block w-full']
    },
    input: {
        class: [
            'm-0 p-3 text-base w-full pr-7',
            'font-sans text-surface-600 dark:text-white/70 bg-surface-0 dark:bg-surface-900 border border-surface-50 dark:border-surface-700 transition-colors duration-200 appearance-none rounded-lg',
            'hover:border-primary-500 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    searchicon: {
        class: 'absolute top-1/2 -mt-2 right-3 text-surface-600 dark:hover:text-white/70'
    }
};
