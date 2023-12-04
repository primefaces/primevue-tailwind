export default {
    root: ({ props }) => ({
        class: [
            // Display and Position
            'inline-flex',
            'relative',

            // Shape
            'w-full md:w-56',
            'rounded-md',

            // Color and Background
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',

            // Transitions
            'transition-colors',
            'duration-200',
            'ease-in-out',

            // States
            'hover:border-primary-500 dark:hover:border-primary-300',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Misc
            'cursor-pointer',
            'select-none',
            { 'opacity-60': props.disabled, 'pointer-events-none': props.disabled, 'cursor-default': props.disabled }
        ]
    }),
    panel: {
        class: 'w-full'
    },
    input: ({ props }) => ({
        class: [
            //Font
            'font-sans',
            'text-base',

            // Display
            'block',
            'flex',
            'flex-auto',

            // Color and Background
            'bg-transparent',
            'border-0',
            'text-surface-800 dark:text-white/80',

            // Sizing and Spacing
            'p-3',
            { 'pr-7': props.showClear },

            //Shape
            'rounded',

            // Transitions
            'transition',
            'duration-200',

            // States
            'focus:outline-none focus:shadow-none',

            // Misc
            'relative',
            'cursor-pointer',
            'overflow-hidden overflow-ellipsis',
            'whitespace-nowrap',
            'appearance-none'
        ]
    }),
    trigger: {
        class: [
            // Flexbox
            'flex items-center justify-center',
            'shrink-0',

            // Color and Background
            'bg-transparent',
            'text-surface-500',

            // Size
            'w-12',

            // Shape
            'rounded-tr-lg',
            'rounded-br-lg'
        ]
    },
    wrapper: {
        class: [
            // Sizing
            'max-h-[250px]',

            // Color and Background
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-white/80',

            //Shape
            'border-0',
            'rounded-md',
            'shadow-lg',

            // Misc
            'overflow-auto'
        ]
    },
    list: {
        class: 'py-3 list-none m-0'
    },
    item: ({ context }) => ({
        class: [
            // Font
            'font-normal',

            // Position
            'relative',

            // Shape
            'border-0',

            // Spacing
            'm-0',
            'p-3',

            // Transitions
            'transition-shadow',
            'duration-200',

            // Misc
            'cursor-pointer',
            'overflow-hidden',
            'whitespace-nowrap'
        ]
    }),
    itemgroup: {
        class: [
            //Font
            'font-bold',

            // Spacing
            'm-0',
            'p-3',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-900',

            // Misc
            'cursor-auto'
        ]
    },
    header: {
        class: [
            // Spacing
            'p-3',
            'mt-0',

            //Shape
            'border-b',
            'rounded-tl-lg',
            'rounded-tr-lg',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-100 dark:bg-surface-800',
            'border-surface-200 dark:border-surface-700'
        ]
    },
    filtercontainer: {
        class: 'relative'
    },
    filterinput: {
        class: [
            // Font
            'font-sans',
            'text-base',

            // Sizing
            'pr-7 py-3 px-3',
            '-mr-7',
            'w-full',

            //Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-900',
            'border-surface-200 dark:border-surface-700',

            // Shape
            'border',
            'rounded-lg',
            'appearance-none',

            // Transitions
            'transition',
            'duration-200',

            // States
            'hover:border-primary-500 dark:hover:border-primary-300',
            'focus:ring focus:outline-none focus:outline-offset-0',
            'focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Misc
            'appearance-none'
        ]
    },
    filtericon: {
        class: ['absolute', 'top-1/2', '-mt-2']
    },
    clearicon: {
        class: [
            // Color
            'text-surface-500',

            // Position
            'absolute',
            'top-1/2',
            'right-12',

            // Spacing
            '-mt-2'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
