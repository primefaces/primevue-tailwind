export default {
    root: {
        class: 'flex'
    },
    controls: {
        class: 'flex flex-col justify-center p-5'
    },
    moveupbutton: {
        root: ({ context }) => ({
            class: [
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                'text-white bg-primary-500 border border-primary-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3', // icon only
                'mb-2', // orderlist button
                'dark:bg-sky-300 dark:border-sky-300 dark:text-surface-900', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled
                }
            ]
        }),
        label: {
            class: 'flex-initial w-0'
        }
    },
    movetopbutton: {
        root: ({ context }) => ({
            class: [
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                'text-white bg-primary-500 border border-primary-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3', // icon only
                'mb-2', // orderlist button
                'dark:bg-sky-300 dark:border-sky-300 dark:text-surface-900', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled
                }
            ]
        }),
        label: {
            class: 'flex-initial w-0'
        }
    },
    movedownbutton: {
        root: ({ context }) => ({
            class: [
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                'text-white bg-primary-500 border border-primary-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3', // icon only
                'mb-2', // orderlist button
                'dark:bg-sky-300 dark:border-sky-300 dark:text-surface-900', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled
                }
            ]
        }),
        label: {
            class: 'flex-initial w-0'
        }
    },
    movebottombutton: {
        root: ({ context }) => ({
            class: [
                'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                'text-white bg-primary-500 border border-primary-500 rounded-md',
                'transition duration-200 ease-in-out',
                'justify-center px-0 py-3', // icon only
                'mb-2', // orderlist button
                'dark:bg-sky-300 dark:border-sky-300 dark:text-surface-900', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled
                }
            ]
        }),
        label: {
            class: 'flex-initial w-0'
        }
    },
    container: {
        class: 'flex-auto'
    },
    header: {
        class: [
            'bg-slate-50 text-slate-700 border border-surface-200 p-5 font-bold border-b-0 rounded-t-md',
            'dark:bg-surface-900 dark:text-white/80 dark:border-surface-700' //Dark Mode
        ]
    },
    list: {
        class: [
            'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
            'border border-surface-200 bg-surface-0 text-surface-600 py-3 px-0 rounded-b-md outline-none',
            'dark:border-surface-700 dark:bg-surface-900 dark:text-white/80' //Dark Mode
        ]
    },
    item: ({ context }) => ({
        class: [
            'relative cursor-pointer overflow-hidden',
            'py-3 px-5 m-0 border-none text-surface-600 dark:text-white/80',
            'transition duration-200',
            {
                'text-primary-700 bg-primary-500/20 dark:bg-primary-300/20': context.active && !context.focused,
                'text-primary-700 bg-primary-500/30 dark:bg-primary-300/30': context.active && context.focused,
                'text-surface-600 bg-surface-300 pdark:bg-surface-900/40': !context.active && context.focused
            }
        ]
    })
};
