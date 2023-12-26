export default {
    root: ({ context }) => ({
        class: [
            'm-0',
            'font-sans text-base text-surface-600 dark:text-white/80 bg-surface-0 dark:bg-surface-900 p-3 border border-surface-50 dark:border-surface-700 transition-colors duration-200 appearance-none rounded-lg',
            'hover:border-primary-500 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled }
        ]
    })
};
