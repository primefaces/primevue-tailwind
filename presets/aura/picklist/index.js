export default {
    root: 'flex',
    pcList: {
        root: 'h-full'
    },
    sourceControls: {
        class: [
            // Flexbox & Alignment
            'flex xl:flex-col justify-center gap-2',

            // Spacing
            'p-[1.125rem]'
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
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
        class: [
            // Flexbox & Alignment
            'flex xl:flex-col justify-center gap-2',

            // Spacing
            'p-[1.125rem]'
        ]
    },
    moveToTargetButton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

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
        class: [
            // Flexbox & Alignment
            'flex xl:flex-col justify-center gap-2',

            // Spacing
            'p-[1.125rem]'
        ]
    },
    transition: {
        enterFromClass: '!transition-none',
        enterActiveClass: '!transition-none',
        leaveActiveClass: '!transition-none',
        leaveToClass: '!transition-none'
    }
};
