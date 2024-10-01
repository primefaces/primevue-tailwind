export default {
    header: ({ props }) => ({
        class: [
            // Flex
            'flex items-center justify-between',

            // Colors
            'text-surface-700 dark:text-surface-0/80',
            'bg-surface-50 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',

            //Shape
            'rounded-tl-lg rounded-tr-lg',

            // Conditional Spacing
            { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable }
        ]
    }),
    title: {
        class: 'leading-none font-bold'
    },
    pctogglebutton: {
        root: {
            class: [
                // Positioning
                'relative',
                // Flexbox alignment
                'inline-flex items-center justify-center text-center',
                // Line height
                'leading-[normal]',
                // Size
                'w-12 h-12 px-0 py-[0.625rem]',
                // Shape
                'rounded-[50%] rounded-full',
                // Background and border
                'bg-transparent border-transparent',
                // Text color
                'text-surface-500 dark:text-surface-300',
                // Focus states
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-surface-400/50 dark:focus:ring-surface-300/50',
                // Hover effect
                'hover:bg-surface-300/20',
                // Transition effects
                'transition duration-200 ease-in-out',
                // Cursor and overflow
                'cursor-pointer overflow-hidden select-none',
                // Label visibility
                '[&>[data-pc-section=label]]:w-0 [&>[data-pc-section=label]]:invisible'
            ]
        }
    },

    content: {
        class: [
            // Spacing
            'p-5',

            // Shape
            'border border-t-0 last:rounded-br-lg last:rounded-bl-lg',

            //Color
            'border-surface-200 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    footer: {
        class: [
            // Spacing
            'py-3 p-5',

            // Shape
            'border border-t-0 rounded-br-lg rounded-bl-lg',

            //Color
            'border-surface-200 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    transition: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
        enterToClass: 'max-h-[1000px]',
        leaveFromClass: 'max-h-[1000px]',
        leaveActiveClass: 'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
        leaveToClass: 'max-h-0'
    }
};
