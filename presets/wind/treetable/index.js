export default {
    root: ({ props }) => ({
        class: [
            'relative',
            {
                'flex flex-col h-full': props.scrollHeight === 'flex'
            }
        ]
    }),
    loadingoverlay: {
        class: [
            'fixed w-full h-full t-0 l-0 bg-surface-100/40',
            'transition duration-200',
            'absolute flex items-center justify-center z-2',
            'dark:bg-surface-900/40' // Dark Mode
        ]
    },
    loadingicon: {
        class: 'w-8 h-8'
    },
    header: {
        class: [
            'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-surface-50 p-4 font-bold',
            'dark:bg-surface-900 dark:text-white/70 dark:border-surface-700' // Dark Mode
        ]
    },
    wrapper: ({ props }) => ({
        class: [
            {
                'relative overflow-auto': props.scrollable,
                'overflow-x-auto': props.resizableColumns
            }
        ]
    }),
    footer: {
        class: [
            'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-surface-50 p-4 font-bold',
            'dark:bg-surface-900 dark:text-white/70 dark:border-surface-700' // Dark Mode
        ]
    },
    table: {
        class: 'border-collapse table-fixed w-full'
    },
    thead: ({ props }) => ({
        class: [
            {
                'block sticky top-0 z-[1]': props.scrollable
            }
        ]
    }),
    tbody: ({ props }) => ({
        class: [
            {
                block: props.scrollable
            }
        ]
    }),
    tfoot: ({ props }) => ({
        class: [
            {
                block: props.scrollable
            }
        ]
    }),
    headerrow: ({ props }) => ({
        class: [
            {
                'flex flex-nowrap w-full': props.scrollable
            }
        ]
    }),
    row: ({ context }) => ({
        class: [
            'transition duration-200',
            'focus:outline focus:outline-[0.15rem] focus:outline-primary-200 focus:outline-offset-[-0.15rem]', // Focus
            context.selected ? 'bg-primary-50 text-primary-700 dark:bg-primary-300 dark:text-white/80' : 'bg-surface-0 text-surface-600 dark:bg-surface-900 dark:text-white/80',
            {
                'hover:bg-surface-300/20 hover:text-surface-600 dark:hover:bg-surface-900': context.selectable && !context.selected, // Hover
                'flex flex-nowrap w-full': context.scrollable
            }
        ]
    }),
    column: {
        headercell: ({ context }) => ({
            class: [
                'text-left border-surface-50 border font-bold',
                'transition duration-200',
                context.sorted ? 'bg-primary-50 text-primary-700' : 'bg-slate-50',
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                'dark:border-surface-700 dark:text-white/80 dark:bg-surface-900', //Dark Mode
                {
                    'flex flex-1 items-center': context.scrollable,
                    'flex-initial shrink-0': context.scrollable && context.scrollDirection === 'both' && !context.frozen,
                    'sticky z-[1]': context.scrollable && context.scrollDirection === 'both' && context.frozen,
                    'border-x-0 border-l-0 border-t-0': !context.showGridlines,
                    'overflow-hidden relative bg-clip-padding': context.resizable && !context.frozen
                }
            ]
        }),
        bodycell: ({ context }) => ({
            class: [
                'text-left border-surface-50 border',
                'transition duration-200',
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                'dark:border-surface-700', //Dark Mode
                {
                    'cursor-pointer': context.selectable,
                    'flex flex-1 items-center': context.scrollable,
                    'flex-initial shrink-0': context.scrollable && context.scrollDirection === 'both' && !context.frozen,
                    sticky: context.scrollable && context.scrollDirection === 'both' && context.frozen,
                    'border-x-0 border-l-0': !context.showGridlines
                }
            ]
        }),
        rowtoggler: ({ context }) => ({
            class: [
                'relative inline-flex items-center justify-center align-center cursor-pointer select-none overflow-hidden bg-transparent',
                'w-8 h-8 border-0 rounded mr-0.5',
                context.selected ? 'text-primary-700' : 'text-surface-500',
                'dark:text-white/70' //Dark Mode
            ]
        }),
        sorticon: ({ context }) => ({
            class: ['ml-2', context.sorted ? 'text-primary-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70']
        }),
        sortbadge: {
            class: [
                'h-[1.143rem] min-w-[1.143rem] leading-[1.143rem] text-primary-700 bg-primary-50 ml-2 rounded-[50%]',
                'dark:text-white/80 dark:bg-primary-500/40' // Dark Mode
            ]
        },
        columnresizer: {
            class: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent'
        },
        checkboxwrapper: {
            class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6 mr-2']
        },
        checkbox: ({ context }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-surface-600 rounded-lg transition-colors duration-200',
                context.checked ? 'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400' : 'border-surface-50 bg-surface-0 dark:border-surface-700 dark:bg-surface-900',
                {
                    'hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !context.disabled
                }
            ]
        }),
        checkboxicon: ({ context }) => ({
            class: [
                'w-4 h-4 transition-all duration-200 text-base dark:text-surface-900',
                {
                    'text-white': context.checked
                }
            ]
        })
    },
    resizehelper: {
        class: 'absolute hidden w-px z-10 bg-primary-500 dark:bg-primary-300'
    }
};
