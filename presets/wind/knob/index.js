export default {
    root: ({ props }) => ({
        class: [
            'focus:outline-none focus:outline-offset-0 focus:shadow-0',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    range: {
        class: 'stroke-current transition duration-100 ease-in stroke-surface-200 dark:stroke-surface-700 fill-none'
    },
    value: {
        class: 'animate-dash-frame  stroke-primary-500 fill-none'
    },
    label: {
        class: 'text-center text-xl'
    }
};
