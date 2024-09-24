export default {
    root: {
        class: [
            // Sizing and Shape
            'min-w-[12rem]',
            'rounded-md',
            'shadow-md',

            // Spacing
            'py-2',

            // Colors
            'bg-surface-0 dark:bg-surface-700',
            'text-surface-700 dark:text-white/80',
            'dark:border dark:border-surface-700'
        ]
    },
    rootList: {
        class: [
            // Spacings and Shape
            'flex flex-col',
            'list-none',
            'm-0',
            'p-0',
            'outline-none'
        ]
    },
    item: {
        class: 'relative'
    },
    itemContent: ({ context }) => ({
        class: [
            //Shape
            'rounded-none',
            // Colors
            'text-surface-700 dark:text-white/80',
            {
                'text-surface-500 dark:text-white/70': !context.focused && !context.active,
                'text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90': context.focused && !context.active,
                'bg-highlight': (context.focused && context.active) || context.active || (!context.focused && context.active)
            },

            // Transitions
            'transition-shadow',
            'duration-200',

            // States
            {
                'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.active,
                'hover:bg-highlight-emphasis': context.active
            },

            // Disabled
            { 'opacity-60 pointer-events-none cursor-default': context.disabled }
        ]
    }),
    itemLink: {
        class: [
            'relative',
            // Flexbox

            'flex',
            'items-center',

            // Spacing
            'py-3',
            'px-5',

            // Color
            'text-surface-700 dark:text-white/80',

            // Misc
            'no-underline',
            'overflow-hidden',
            'cursor-pointer',
            'select-none'
        ]
    },
    itemIcon: {
        class: [
            // Spacing
            'mr-2',

            // Color
            'text-surface-600 dark:text-white/70'
        ]
    },
    itemLabel: {
        class: ['leading-none']
    },
    submenu: ({ props }) => ({
        class: [
            'flex flex-col',
            // Size
            'w-full sm:w-48',

            // Spacing
            'py-1',
            'm-0',
            'list-none',

            // Shape
            'shadow-md',
            'rounded-md',
            'dark:border dark:border-surface-700',

            // Position
            'static sm:absolute',
            'z-10',
            { 'sm:absolute sm:left-full sm:top-0': props.level > 1 },

            // Color
            'bg-surface-0 dark:bg-surface-700'
        ]
    }),
    submenuIcon: {
        class: ['ml-auto']
    },
    separator: {
        class: 'border-t border-surface-200 dark:border-surface-600'
    },
    transition: {
        enterFromClass: 'opacity-0',
        enterActiveClass: 'transition-opacity duration-250'
    }
};
