export default {
    navContainer: ({ props }) => ({
        class: ['relative', { 'overflow-hidden': props.scrollable }]
    }),
    navContent: {
        class: 'overflow-y-hidden overscroll-contain overscroll-auto scroll-smooth [&::-webkit-scrollbar]:hidden' //
    },
    previousButton: {
        class: ['h-full flex items-center justify-center absolute top-0 z-20', 'left-0', 'bg-surface-0 text-primary-500 w-12 shadow-md rounded-none', 'dark:bg-surface-900 dark:border-surface-700 dark:text-primary-400 ]']
    },
    nextButton: {
        class: ['h-full flex items-center justify-center absolute top-0 z-20', 'right-0', 'bg-surface-0 text-primary-500 w-12 shadow-md rounded-none', 'dark:bg-surface-900 dark:border-surface-700 dark:text-primary-400 ]']
    },
    nav: {
        class: ['flex flex-1 list-none m-0 p-0', 'bg-surface-0 border border-surface-200 border-0 border-b-2', 'dark:bg-surface-900 dark:border-surface-700 dark:text-surface-0/80 ']
    },
    tabpanel: {
        header: ({ props }) => ({
            class: [
                'mr-0',
                {
                    'cursor-default pointer-events-none select-none user-select-none opacity-60': props?.disabled
                }
            ]
        }),
        headerAction: ({ parent, context }) => ({
            class: [
                'items-center cursor-pointer flex overflow-hidden relative select-none text-decoration-none user-select-none',
                'border-b-2 p-5 font-bold rounded-t-lg transition-shadow duration-200 m-0',
                'transition-colors duration-200',
                'focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 ring-inset dark:focus-visible:ring-primary-300/50',
                {
                    'border-surface-200 bg-surface-0 text-surface-700 hover:bg-bg-surface-0 hover:border-surface-100 hover:text-surface-900 dark:bg-surface-900 dark:border-surface-700 dark:text-surface-0/80 dark:hover:bg-surface-800/80':
                        parent.state.d_activeIndex !== context.index, // Condition-based hover styles.
                    'bg-surface-0 border-primary-500 text-primary-500 dark:bg-surface-900 dark:border-primary-400 dark:text-primary-400': parent.state.d_activeIndex === context.index // Condition-based active styles.
                }
            ],
            style: 'margin-bottom:-2px' // Negative margin style.
        }),
        headerTitle: {
            class: ['leading-none whitespace-nowrap'] // Leading and whitespace styles.
        },
        content: {
            class: ['bg-surface-0 p-5 border-0 text-surface-700 rounded-bl-2xl rounded-br-2xl', 'dark:bg-surface-900 dark:border-surface-700 dark:text-surface-0/80'] // Background, padding, border, and text styles.
        }
    }
};
