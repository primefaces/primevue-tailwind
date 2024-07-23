export default {
    root: 'flex [&_[data-pc-name=pclist]]:h-full',
    sourceControls: {
        class: [
            // Flexbox & Alignment
            'flex lg:flex-col justify-center gap-2',

            // Spacing
            'p-5'
        ]
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
