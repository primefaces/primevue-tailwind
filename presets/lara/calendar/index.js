export default {
    root: ({ props }) => ({
        class: [
            // Display and Position
            'inline-flex',
            'max-w-full',
            'relative',

            // Misc
            { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
        ]
    }),
    input: {
        class: [
            // Font
            'font-sans',
            'text-base',
            'text-surface-600 dark:text-white/80',

            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',

            // Spacing
            'p-3',

            // Shape
            'rounded-lg',
            'appearance-none',

            // Transitions
            'transition-colors',
            'duration-200',

            // States
            'hover:border-primary-500' // Hover
        ]
    },
    panel: ({ props }) => ({
        class: [
            // Colors
            'bg-surface-0 dark:bg-surface-900',

            // Size
            'min-w-[350px]',

            // Shape and Misc
            {
                'shadow-md border-0 absolute': !props.inline,
                'inline-block overflow-x-auto border border-surface-200 dark:border-surface-700 p-2 rounded-lg': props.inline
            }
        ]
    }),
    header: {
        class: [
            // Flexbox and Alignment
            'flex items-center justify-between',

            // Spacing
            'p-2',
            'm-0',

            // Colors
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-900',

            // Shape
            'border-b',
            'border-surface-200 dark:border-surface-700',
            'rounded-t-lg'
        ]
    },
    previousbutton: {
        class: [
            // Flexbox and Alignment
            'flex items-center justify-center',

            // Size and Shape
            'w-8 h-8',
            'rounded-full',

            // Colors
            'text-surface-600 dark:text-white/70',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:border-transparent',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80'
        ]
    },
    title: {
        class: [
            // Text
            'leading-8',
            'mx-auto'
        ]
    },
    monthTitle: {
        class: [
            // Font and Colors
            'text-surface-700 dark:text-white/80',
            'font-semibold',
            'transition duration-200',

            // Spacing
            'p-2',
            'mr-2',

            // States
            'hover:text-primary-500'
        ]
    },
    yearTitle: {
        class: [
            // Font and Colors
            'text-surface-700 dark:text-white/80',
            'font-semibold',
            'transition duration-200',

            // Spacing
            'p-2',

            // States
            'hover:text-primary-500'
        ]
    },
    nextbutton: {
        class: [
            // Flexbox and Alignment
            'flex items-center justify-center',

            // Size and Shape
            'w-8 h-8',
            'rounded-full',

            // Colors
            'text-surface-600 dark:text-white/70',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:border-transparent',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80'
        ]
    },
    table: {
        class: [
            // Table
            'border-collapse',
            'w-full',

            // Spacing
            'my-2'
        ]
    },
    tableheadercell: {
        class: [
            // Spacing
            'p-2'
        ]
    },
    weekday: {
        class: [
            // Colors
            'text-surface-600 dark:text-white/70'
        ]
    },
    day: {
        class: [
            // Spacing
            'p-2'
        ]
    },
    daylabel: ({ context }) => ({
        class: [
            // Shape
            'w-10 h-10',
            'rounded-full',
            'border-transparent border',

            // Flexbox and Alignment
            'flex items-center justify-center',
            'mx-auto',

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'opacity-60 cursor-default': context.disabled,
                'cursor-pointer': !context.disabled
            },
            {
                'text-surface-600 dark:text-white/70 bg-transparent hover:bg-surface-100 dark:hover:bg-surface-800/80': !context.selected && !context.disabled,
                'text-primary-700 bg-primary-100 hover:bg-primary-200': context.selected && !context.disabled
            }
        ]
    }),
    monthpicker: {
        class: [
            // Spacing
            'my-2'
        ]
    },
    month: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'w-1/3',
            'inline-flex items-center justify-center',

            // Shape
            'p-2',
            'rounded-lg',

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'text-surface-600 dark:text-white/70 bg-transparent hover:bg-surface-100 dark:hover:bg-surface-800/80': !context.selected && !context.disabled,
                'text-primary-700 bg-primary-100 hover:bg-primary-200': context.selected && !context.disabled
            }
        ]
    }),
    yearpicker: {
        class: [
            // Spacing
            'my-2'
        ]
    },
    year: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'w-1/2',
            'inline-flex items-center justify-center',

            // Shape
            'p-2',
            'rounded-lg',

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'text-surface-600 dark:text-white/70 bg-transparent hover:bg-surface-100 dark:hover:bg-surface-800/80': !context.selected && !context.disabled,
                'text-primary-700 bg-primary-100 hover:bg-primary-200': context.selected && !context.disabled
            }
        ]
    }),
    timepicker: {
        class: [
            // Flexbox
            'flex',
            'justify-center items-center',

            // Borders
            'border-t-1',
            'border-solid border-surface-200',

            // Spacing
            'p-2'
        ]
    },
    separatorcontainer: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    separator: {
        class: [
            // Text
            'text-xl'
        ]
    },
    hourpicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    minutepicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    ampmpicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    incrementbutton: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'justify-center',

            // Size and Shape
            'w-8 h-8',
            'rounded-full',

            // Colors
            'text-surface-600 dark:text-white/70',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:border-transparent',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80'
        ]
    },
    decrementbutton: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'justify-center',

            // Size and Shape
            'w-8 h-8',
            'rounded-full',

            // Colors
            'text-surface-600 dark:text-white/70',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:border-transparent',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80'
        ]
    },
    groupcontainer: {
        class: [
            // Flexbox
            'flex'
        ]
    },
    group: {
        class: [
            // Flexbox and Sizing
            'flex-1',

            // Borders
            'border-l',
            'border-surface-200',

            // Spacing
            'pr-0.5',
            'pl-0.5',
            'pt-0',
            'pb-0',

            // Pseudo-Classes
            'first:pl-0',
            'first:border-l-0'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
