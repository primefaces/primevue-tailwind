export default {
    root: {
        class: ['group']
    },
    contentContainer: {
        class: [
            // Size & Position
            'h-full w-full',

            // Layering
            'z-[1]',

            // Spacing
            'overflow-hidden',

            // Misc
            'relative float-left'
        ]
    },
    content: {
        class: [
            // Size & Spacing
            'h-[calc(100%+18px)] w-[calc(100%+18px)] pr-[18px] pb-[18px] pl-0 pt-0',

            // Overflow & Scrollbar
            'overflow-scroll scrollbar-none',

            // Box Model
            'box-border',

            // Position
            'relative',

            // Webkit Specific
            '[&::-webkit-scrollbar]:hidden'
        ]
    },
    barX: {
        class: [
            // Size & Position
            'h-[9px] bottom-0',

            // Appearance
            'bg-surface-100 dark:bg-surface-800 rounded',
            'opacity-0',

            // Interactivity
            'cursor-pointer',
            'focus:outline-none',

            // Visibility & Layering
            'invisible z-20',

            // Transition
            'transition duration-[250ms] ease-linear',

            // Misc
            'relative',

            'group-hover:opacity-100'
        ]
    },
    barY: {
        class: [
            // Size & Position
            'w-[9px] top-0',

            // Appearance
            'bg-surface-100 dark:bg-surface-800 rounded',
            'opacity-0',

            // Interactivity
            'cursor-pointer',
            'focus:outline-none',

            // Visibility & Layering
            'z-20',

            // Transition
            'transition duration-[250ms] ease-linear',

            // Misc
            'relative',

            'group-hover:opacity-100'
        ]
    }
};
