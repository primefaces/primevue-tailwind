root: ({ props, state }) => ({
    class: [
        // ...other classes...

        // Colors
        'bg-surface-0 dark:bg-surface-900',
        'border',
        { 'border-surface-300 dark:border-surface-600': !props.invalid },

        // Invalid State
        { 'border-red-500 dark:border-red-400': props.invalid }

        // ...other classes...
    ]
});
