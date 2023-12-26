export default {
    root: ({ props }) => ({
        class: [
            'inline-flex relative',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    panel: {
        class: 'p-5 bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80 shadow-md rounded-md'
    },
    meter: {
        class: 'mb-2 bg-surface-300 dark:bg-surface-700 h-3'
    },
    meterlabel: ({ instance, props }) => ({
        class: [
            'transition-width duration-1000 ease-in-out h-full',
            {
                'bg-red-500': instance?.meter?.strength == 'weak',
                'bg-orange-500': instance?.meter?.strength == 'medium',
                'bg-green-500': instance?.meter?.strength == 'strong'
            },
            { 'pr-[2.5rem] ': props.toggleMask }
        ]
    }),
    showicon: {
        class: ['absolute top-1/2 -mt-2', 'right-3 text-surface-600 dark:text-white/70']
    },
    hideicon: {
        class: ['absolute top-1/2 -mt-2', 'right-3 text-surface-600 dark:text-white/70']
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
