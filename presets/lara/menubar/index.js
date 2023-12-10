export default {
    root: {
        class: ['p-2 bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-md', 'flex items-center relative']
    },
    menu: ({ props }) => ({
        class: [
            'm-0 sm:p-0 list-none',
            'outline-none',
            'sm:flex items-center flex-wrap sm:flex-row sm:top-auto sm:left-auto sm:relative sm:bg-transparent sm:shadow-none sm:w-auto',
            'flex-col top-full left-0',
            'absolute py-1 bg-surface-0 dark:bg-surface-900 border-0 shadow-md w-full',
            {
                'hidden ': !props?.mobileActive,
                'flex ': props?.mobileActive
            }
        ]
    }),
    menuitem: {
        class: 'sm:relative sm:w-auto w-full static'
    },
    content: ({ props, context }) => ({
        class: [
            ' transition-shadow duration-200',
            '',
            { 'rounded-md': props.root },
            {
                'text-surface-700 dark:text-white/80': !context.focused && !context.active,
                'bg-surface-300 text-surface-700 dark:text-white/80 dark:bg-surface-800/90': context.focused && !context.active,
                'bg-primary-100 text-primary-700 dark:bg-primary-400 dark:text-white/80': context.focused && context.active,
                'bg-primary-50 text-primary-700 dark:bg-primary-300 dark:text-white/80': !context.focused && context.active
            },
            {
                'hover:text-surface-700 dark:hover:text-white/80 hover:bg-surface-100 dark:hover:bg-surface-800/80': !context.active,
                'hover:bg-primary-200 dark:hover:bg-primary-500': context.active
            }
        ]
    }),
    action: ({ context }) => ({
        class: [
            'select-none',
            'cursor-pointer flex items-center no-underline overflow-hidden relative',
            'py-3 px-5 select-none',
            {
                'max-[960px]:pl-9': context.level === 1,
                'max-[960px]:pl-14': context.level === 2
            }
        ]
    }),
    icon: {
        class: 'mr-2'
    },
    submenuicon: ({ props }) => ({
        class: [
            'max-[960px]:ml-auto',
            {
                'ml-2': props.root,
                'ml-auto': !props.root
            }
        ]
    }),
    submenu: ({ props }) => ({
        class: [
            'py-1 bg-surface-0 dark:bg-surface-900 border-0  sm:shadow-md sm:w-48',
            'w-full static shadow-none',
            'sm:absolute z-10',
            'm-0 list-none',
            {
                'sm:absolute sm:left-full sm:top-0': props.level > 1
            }
        ]
    }),
    separator: {
        class: 'border-t border-surface-200 dark:border-surface-700 my-1'
    },
    button: {
        class: [
            'flex sm:hidden w-8 h-8 rounded-full text-surface-600 dark:text-white/80 transition duration-200 ease-in-out',
            'cursor-pointer flex items-center justify-center no-underline',
            'hover:text-surface-700 dark:hover:text-white/80 hover:bg-surface-100 dark:hover:bg-surface-800/80 ',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    }
};
