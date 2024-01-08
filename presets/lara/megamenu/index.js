export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Flexbox
            'flex',

            // Shape
            'rounded-md',

            // Color
            'bg-surface-50 dark:bg-surface-700',
            'border border-surface-200 dark:border-surface-700',
            { 'p-2 items-center': props.orientation == 'horizontal', 'flex-col w-48 p-0 py-1': props.orientation !== 'horizontal' }
        ]
    }),
    menu: {
        class: ['m-0 sm:p-0 list-none relative', 'outline-none', 'flex items-center flex-wrap flex-row top-auto left-auto relative bg-transparent shadow-none w-auto']
    },
    menuitem: ({ props }) => ({
        class: [
            'relative',
            {
                'w-auto': props.horizontal,
                'w-full': !props.horizontal
            }
        ]
    }),
    content: ({ props, context }) => ({
        class: [
            'transition-shadow duration-200',
            { 'rounded-md': props.level < 1 && props.horizontal },
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
    action: {
        class: ['select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative', 'py-3 px-5 select-none']
    },
    icon: {
        class: 'mr-2'
    },
    submenuicon: ({ props }) => ({
        class: [
            {
                'ml-2': props.horizontal,
                'ml-auto': !props.horizontal
            }
        ]
    }),
    panel: ({ props }) => ({
        class: [
            'py-1 bg-surface-0 dark:bg-surface-900 border-0 shadow-md w-auto',
            'absolute z-10',
            {
                'left-full top-0': !props.horizontal
            }
        ]
    }),
    grid: {
        class: 'flex'
    },
    column: {
        class: 'w-1/2'
    },
    submenu: {
        class: ['m-0 list-none', 'py-1 w-48']
    },
    submenuheader: {
        class: ['m-0 py-3 px-5 text-surface-700 dark:text-white/80 bg-surface-0 dark:bg-surface-900 font-semibold rounded-tr-md rounded-tl-md']
    },
    menubutton: {
        class: [
            // Flexbox
            'flex sm:hidden',
            'items-center justify-center',

            // Size
            'w-8',
            'h-8',

            // Shape
            'rounded-full',
            // Color
            'text-surface-500 dark:text-white/80',

            // States
            'hover:text-surface-600 dark:hover:text-white/60',
            'hover:bg-surface-100 dark:hover:bg-surface-600/80',
            'focus:outline-none focus:outline-offset-0',
            'focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Transitions
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-pointer',
            'no-underline'
        ]
    },
    end: {
        class: 'ml-auto self-center'
    }
};
