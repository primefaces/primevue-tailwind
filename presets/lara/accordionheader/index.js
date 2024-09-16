export default {
    root: ({ context }) => ({
        class: [
            'flex items-center justify-between font-bold leading-none p-5 border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 text-surface-600 dark:text-surface-0/80 transition duration-200 ease-in-out',
            {
                'focus-visible:outline-none focus-visible:border-primary-500 dark:focus-visible:border-primary-400 focus-visible:ring-2 focus-visible:ring-primary-400/20 dark:focus-visible:ring-primary-300/20': !context.disabled
            },
            {
                'hover:text-surface-700 dark:hover:text-surface-0': !context.disabled
            }
        ]
    }),
    toggleIcon: 'text-surface-600 dark:text-surface-0/80'
};
