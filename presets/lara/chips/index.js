export default {
    root: ({ props }) => ({
        class: [
            'flex',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    container: {
        class: [
            'm-0 py-1.5 px-3 list-none cursor-text overflow-hidden flex items-center flex-wrap',
            'w-full',
            'font-sans text-base text-surface-600 dark:text-white/70 bg-surface-0 dark:bg-surface-900 p-3 border border-surface-200 dark:border-surface-700 transition-colors duration-200 appearance-none rounded-lg',
            'hover:border-primary-500 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },

    inputtoken: {
        class: ['py-1.5 px-0', 'flex flex-1 inline-flex']
    },
    input: {
        class: ['font-sans text-base text-surface-700 dark:text-white/80 p-0 m-0', 'border-0 outline-none bg-transparent shadow-none rounded-none w-full']
    },
    token: {
        class: ['py-1 px-2 mr-2 bg-surface-50 dark:bg-surface-700 text-surface-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
    },
    removeTokenIcon: {
        class: 'ml-2'
    }
};
