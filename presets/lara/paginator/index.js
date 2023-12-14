export default {
    root: {
        class: [
            'flex items-center justify-center flex-wrap',
            'bg-surface-0 text-surface-500 border-0 px-4 py-2 rounded-md',
            'dark:bg-surface-900 dark:text-white/60 dark:border-surface-700' // Dark Mode
        ]
    },
    firstpagebutton: ({ context }) => ({
        class: [
            'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
            'border-0 text-surface-500  min-w-[3rem] h-12 m-[0.143rem] rounded-md',
            'transition duration-200',
            'dark:text-white', //Dark Mode
            {
                'cursor-default pointer-events-none opacity-60': context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled // Focus
            }
        ]
    }),
    previouspagebutton: ({ context }) => ({
        class: [
            'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
            'border-0 text-surface-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
            'transition duration-200',
            'dark:text-white', //Dark Mode
            {
                'cursor-default pointer-events-none opacity-60': context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled // Focus
            }
        ]
    }),
    nextpagebutton: ({ context }) => ({
        class: [
            'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
            'border-0 text-surface-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
            'transition duration-200',
            'dark:text-white', //Dark Mode
            {
                'cursor-default pointer-events-none opacity-60': context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled // Focus
            }
        ]
    }),
    lastpagebutton: ({ context }) => ({
        class: [
            'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
            'border-0 text-surface-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
            'transition duration-200',
            'dark:text-white', //Dark Mode
            {
                'cursor-default pointer-events-none opacity-60': context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !context.disabled // Focus
            }
        ]
    }),
    pagebutton: ({ context }) => ({
        class: [
            'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
            'border-0 text-surface-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
            'transition duration-200',
            'dark:border-primary-300 dark:text-white', // Dark Mode
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50', // Focus
            {
                'bg-primary-50 border-primary-50 text-primary-700 dark:bg-primary-300': context.active
            }
        ]
    }),
    rowperpagedropdown: {
        root: ({ props, state }) => ({
            class: [
                'inline-flex relative cursor-pointer user-none',
                'bg-surface-0 border rounded-md',
                'transition duration-200',
                'h-12 mx-2',
                'dark:bg-surface-900 dark:border-surface-700', //DarkMode
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-primary-500': state.focused && !props.disabled, //Focus
                    'border-surface-200': !state.focused,
                    'hover:border-primary-500': !props.disabled //Hover
                }
            ]
        }),
        input: {
            class: [
                'font-sans text-base text-surface-600 p-3 m-0 rounded-md apperance-none',
                'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                'focus:outline-none focus:outline-offset-0',
                'dark:text-white' //Dark Mode
            ]
        },
        trigger: {
            class: ['flex items-center justify-center shrink-0', 'text-surface-500 dark:text-white w-12 rounded-r-md']
        },
        panel: {
            class: [
                'bg-surface-0 text-surface-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                'dark:bg-surface-900 dark:text-white/80 dark:border-surface-700' //Dark Mode
            ]
        },
        wrapper: {
            class: 'overflow-auto'
        },
        list: {
            class: 'm-0 p-0 py-3 list-none'
        },
        item: ({ context }) => ({
            class: [
                'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                'm-0 py-3 px-5 border-none text-surface-600 rounded-none',
                'transition duration-200',
                'dark:text-white/80', // Dark Mode
                {
                    'text-primary-700 bg-primary-50 dark:text-white/80 dark:bg-primary-300': !context.focused && context.selected,
                    'bg-primary-300/40': context.focused && context.selected,
                    'text-surface-600 bg-surface-300 dark:text-white/80 pdark:bg-surface-900/40': context.focused && !context.selected
                }
            ]
        })
    },
    jumptopageinput: {
        root: {
            class: 'inline-flex mx-2'
        },
        input: {
            class: [
                'font-sans text-base text-surface-600 p-3 m-0 rounded-md apperance-none',
                'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border border-surface-200 pr-0',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50 focus:border-primary-300',
                'dark:text-white dark:bg-surface-900 dark:border-surface-700', //Dark Mode
                'm-0 flex-auto max-w-[3rem]'
            ]
        }
    },
    jumptopagedropdown: {
        root: ({ props, state }) => ({
            class: [
                'inline-flex relative cursor-pointer user-none',
                'bg-surface-0 border rounded-md',
                'transition duration-200',
                'h-12 mx-2',
                'dark:bg-surface-900 dark:border-surface-700', //DarkMode
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-primary-500': state.focused && !props.disabled, //Focus
                    'border-surface-200': !state.focused,
                    'hover:border-primary-500': !props.disabled //Hover
                }
            ]
        }),
        input: {
            class: [
                'font-sans text-base text-surface-600 p-3 m-0 rounded-md apperance-none',
                'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                'focus:outline-none focus:outline-offset-0',
                'dark:text-white' //Dark Mode
            ]
        },
        trigger: {
            class: ['flex items-center justify-center shrink-0', 'text-surface-500 dark:text-white w-12 rounded-r-md']
        },
        panel: {
            class: [
                'bg-surface-0 text-surface-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                'dark:bg-surface-900 dark:text-white/80 dark:border-surface-700' //Dark Mode
            ]
        },
        wrapper: {
            class: 'overflow-auto'
        },
        list: {
            class: 'm-0 p-0 py-3 list-none'
        },
        item: ({ context }) => ({
            class: [
                'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                'm-0 py-3 px-5 border-none text-surface-600 rounded-none',
                'transition duration-200',
                'dark:text-white/80', // Dark Mode
                {
                    'text-primary-700 bg-primary-50 dark:text-white/80 dark:bg-primary-300': !context.focused && context.selected,
                    'bg-primary-300/40': context.focused && context.selected,
                    'text-surface-600 bg-surface-300 dark:text-white/80 pdark:bg-surface-900/40': context.focused && !context.selected
                }
            ]
        })
    }
};
