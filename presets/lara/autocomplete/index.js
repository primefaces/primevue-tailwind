export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Flex
            'inline-flex',

            // Size
            { 'w-full': props.multiple },

            //States
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    container: {
        class: [
            // Font
            'font-sans text-base leading-none',

            // Flex
            'flex items-center flex-wrap',
            'gap-2',

            // Spacing
            'm-0 list-none',
            'px-3 py-2',

            // Size
            'w-full',

            // Shape
            'appearance-none rounded-md',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',

            // States
            'hover:border-primary-500 dark:hover:border-primary-400',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Transition
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-text overflow-hidden'
        ]
    },
    inputtoken: {
        class: ['py-0.375rem px-0', 'flex-1 inline-flex']
    },
    input: ({ props }) => ({
        class: [
            // Font
            'font-sans text-base',

            // Shape
            'appearance-none rounded-lg',
            { 'rounded-tr-none rounded-br-none': props.dropdown },
            { 'outline-none shadow-none rounded-none': props.multiple },

            // Size
            { 'w-full': props.multiple },

            // Spacing
            'm-0',
            { 'p-3': !props.multiple, 'p-0 ': props.multiple },

            // Colors
            {
                'text-surface-700 dark:text-white/80': !props.multiple,
                'bg-surface-0 dark:bg-surface-900': !props.multiple,
                'border border-surface-200 dark:border-surface-700': !props.multiple,
                'text-surface-700 dark:text-white/80': props.multiple,
                'border-0 bg-transparent': props.multiple
            },

            // States
            { 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50': !props.multiple },

            // Transition
            'transition-colors duration-200'
        ]
    }),
    token: {
        class: [
            // Flex
            'inline-flex items-center',

            // Spacings
            'py-1 px-2',
            'mr-2 ',

            // Shape
            'rounded-full',

            // Colors
            'bg-surface-300 dark:bg-surface-700',
            'text-surface-700 dark:text-white/80',

            // Misc
            'cursor-default'
        ]
    },
    dropdownbutton: {
        root: {
            class: 'rounded-tl-none rounded-bl-none'
        }
    },
    panel: {
        class: [
            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-white/80',

            // Shape
            'border-0',
            'rounded-md',
            'shadow-lg',

            // Size
            'max-h-[200px] overflow-auto'
        ]
    },
    list: {
        class: 'py-3 list-none m-0'
    },
    item: ({ context }) => ({
        class: [
            'relative',

            // Font
            'font-normal',

            // Spacing
            'm-0 p-3',

            // Shape
            'border-0 rounded-none',

            // Colors
            {
                'text-surface-700 dark:text-white/80': !context.focused && !context.selected,
                'bg-surface-50 dark:bg-surface-800/90': context.focused && !context.selected,
                'text-surface-700 dark:text-white/80': context.focused && !context.selected,

                'text-primary-700 dark:text-white/80': context.focused && context.selected,
                'bg-primary-100 dark:bg-primary-400': context.focused && context.selected,
                'text-primary-700 dark:text-white/80': !context.focused && context.selected,
                'bg-primary-50 dark:bg-primary-300': !context.focused && context.selected
            },

            // States
            {
                'hover:text-surface-700 hover:bg-surface-100 dark:hover:bg-surface-800': !context.focused && !context.selected,
                'hover:bg-surface-100 dark:hover:bg-surface-800': !context.focused && !context.selected,
                'hover:text-surface-700': context.focused && !context.selected,
                'hover:bg-surface-100 dark:hover:bg-surface-800': context.focused && !context.selected
            },

            // Transition
            'transition-shadow duration-200',

            // Misc
            'cursor-pointer overflow-hidden whitespace-nowrap'
        ]
    }),
    itemgroup: {
        class: [
            'font-bold',

            // Spacing
            'm-0 p-3',

            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-800 dark:text-white/80',

            // Misc
            'cursor-auto'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
