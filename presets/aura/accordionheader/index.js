export default {
    root: ({ context }) => ({
        class: [
            'flex items-center justify-between bg-surface-0 dark:bg-surface-900 text-surface-600 dark:text-surface-0/70 p-[1.125rem] font-semibold outline-transparent',
            {
                'focus-visible:outline-offset-2 focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400': !context.disabled
            },
            {
                'hover:text-surface-700 dark:hover:text-surface-0': !context.disabled
            }
        ]
    }),
    toggleIcon: 'inline-block text-surface-900 dark:text-surface-0 w-4 h-4'
};
