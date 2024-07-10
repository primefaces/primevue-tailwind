export default {
    root: 'flex',
    controls: {
        class: [
            // Flexbox & Alignment
            'flex flex-col justify-center gap-2',

            // Spacing
            'p-5'
        ]
    },
    pcMoveUpButton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-primary-contrast',
                'bg-primary',
                'border border-primary',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-emphasis hover:border-primary-emphasis',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary/50',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    pcMoveDownButton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-primary-contrast',
                'bg-primary',
                'border border-primary',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-emphasis hover:border-primary-emphasis',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary/50',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    pcMoveTopButton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-primary-contrast',
                'bg-primary',
                'border border-primary',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-emphasis hover:border-primary-emphasis',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary/50',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    pcMoveBottomButton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-primary-contrast',
                'bg-primary',
                'border border-primary',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-emphasis hover:border-primary-emphasis',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary/50',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    container: 'flex-auto'
};
