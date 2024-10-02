export default {
    root: ({ props }) => ({
        class: [
            // Sizing and Shape
            'min-w-[12rem]',
            'rounded-md',

            // Colors
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-700 dark:text-white/80',
            'border',
            { 'border-surface-300 dark:border-surface-600': !props.invalid },

            // Invalid State
            { 'border-red-500 dark:border-red-400': props.invalid }
        ]
    }),
    listContainer: 'overflow-auto',
    list: {
        class: 'py-3 list-none m-0 outline-none'
    },
    option: ({ context, props }) => ({
        class: [
            'relative',

            // Font
            'font-normal',
            'leading-none',

            // Flex
            'flex items-center',

            // Position
            'relative',

            // Shape
            'border-0',
            'rounded-none',

            // Spacing
            'm-0',
            'py-3 px-5',

            // Colors
            {
                'text-surface-700 dark:text-white/80': !context.focused && !context.selected,
                'bg-surface-200 dark:bg-surface-600/60': context.focused && !context.selected,
                'text-surface-700 dark:text-white/80': context.focused && !context.selected,
                'bg-highlight': context.selected && !props.checkmark,
                'bg-surface-0 dark:bg-surface-900': props.checkmark && context.selected
            },

            //States
            { 'hover:bg-surface-100 dark:hover:bg-surface-600/80': (!context.focused && !context.selected) || (props.checkmark && context.selected) },
            { 'hover:bg-highlight-emphasis': context.selected && !props.checkmark },
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

            // Transitions
            'transition-shadow',
            'duration-200',

            // Misc
            'cursor-pointer',
            'overflow-hidden',
            'whitespace-nowrap'
        ]
    }),
    optionGroup: {
        class: [
            //Font
            'font-bold',

            // Spacing
            'm-0',
            'py-3 px-5',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-600/80',

            // Misc
            'cursor-auto'
        ]
    },
    optionCheckIcon: 'relative -ms-1.5 me-1.5 text-surface-700 dark:text-white/80 w-4 h-4',
    header: {
        class: [
            // Spacing
            'py-3 px-5',
            'm-0',

            //Shape
            'border-b',
            'rounded-tl-md',
            'rounded-tr-md',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-100 dark:bg-surface-800',
            'border-surface-300 dark:border-surface-600',

            '[&_[data-pc-name=pcfilter]]:w-full'
        ]
    },
    emptyMessage: {
        class: [
            // Font
            'leading-none',

            // Spacing
            'py-3 px-5',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-transparent'
        ]
    }
};
