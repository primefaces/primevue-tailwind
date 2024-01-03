export default {
    table: {
        class: 'mx-auto my-0 border-spacing-0 border-separate'
    },
    cell: {
        class: 'text-center align-top py-0 px-3'
    },
    node: {
        class: [
            'relative inline-block bg-surface-0 border border-surface-200 text-surface-600 p-5',
            'dark:border-surface-700 dark:bg-surface-800 dark:text-white/80' // Dark Mode
        ]
    },
    linecell: {
        class: 'text-center align-top py-0 px-3'
    },
    linedown: {
        class: [
            'mx-auto my-0 w-px h-[20px] bg-surface-200',
            'dark:bg-surface-700' //Dark Mode
        ]
    },
    lineleft: ({ context }) => ({
        class: [
            'text-center align-top py-0 px-3 rounded-none border-r border-surface-200',
            'dark:border-surface-700', //Dark Mode
            {
                'border-t': context.lineTop
            }
        ]
    }),
    lineright: ({ context }) => ({
        class: [
            'text-center align-top py-0 px-3 rounded-none',
            'dark:border-surface-700', //Dark Mode
            {
                'border-t border-surface-200': context.lineTop
            }
        ]
    }),
    nodecell: {
        class: 'text-center align-top py-0 px-3'
    },
    nodetoggler: {
        class: [
            'absolute bottom-[-0.75rem] left-2/4 -ml-3 w-6 h-6 bg-inherit text-inherit rounded-full z-2 cursor-pointer no-underline select-none',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50' // Focus styles
        ]
    },
    nodetogglericon: {
        class: 'relative inline-block w-4 h-4'
    }
};
