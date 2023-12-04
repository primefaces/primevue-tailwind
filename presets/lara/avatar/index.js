export default {
    root: ({ props, parent }) => ({
        class: [
            'flex items-center justify-center',
            'bg-surface-300 dark:bg-surface-800',
            {
                'rounded-lg': props.shape == 'square',
                'rounded-full': props.shape == 'circle'
            },
            {
                'text-base h-8 w-8': props.size == null || props.size == 'normal',
                'w-12 h-12 text-xl': props.size == 'large',
                'w-16 h-16 text-2xl': props.size == 'xlarge'
            },
            {
                '-ml-4 border-2 border-white dark:border-surface-900': parent.instance.$css !== undefined
            }
        ]
    }),
    image: {
        class: 'h-full w-full'
    }
};
