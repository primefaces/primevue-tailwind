export default {
    root: 'flex',
    pcList: {
        root: 'h-full'
    },
    sourceControls: {
        class: [
            // Flexbox & Alignment
            'flex lg:flex-col justify-center gap-2',

            // Spacing
            'p-5'
        ]
    },
    pcSourceMoveUpButton: {
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
    pcSourceMoveTopButton: {
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
    pcSourceMoveDownButton: {
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
    pcSourceMoveBottomButton: {
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
    sourceListContainer: {
        class: [
            // Flexbox
            'grow shrink basis-2/4',

            // Shape
            'rounded-md',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',
            'outline-none'
        ]
    },
    transferControls: {
        class: 'flex lg:flex-col justify-center gap-2 p-5'
    },
    moveToTargetButton: {
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
    moveAllToTargetButton: {
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
    moveToSourceButton: {
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
    moveAllToSourceButton: {
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
    pcTargetMoveUpButton: {
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
    pcTargetMoveTopButton: {
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
    pcTargetMoveDownButton: {
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
    pcTargetMoveBottomButton: {
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
    targetListContainer: {
        class: [
            // Flexbox
            'grow shrink basis-2/4',

            // Shape
            'rounded-md',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',
            'outline-none'
        ]
    },
    targetControls: {
        class: 'flex lg:flex-col justify-center gap-2 p-5'
    },
    transition: {
        enterFromClass: '!transition-none',
        enterActiveClass: '!transition-none',
        leaveActiveClass: '!transition-none',
        leaveToClass: '!transition-none'
    }
};
