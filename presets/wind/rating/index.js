export default {
    root: ({ props }) => ({
        class: [
            'relative flex items-center',
            'gap-2',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    cancelitem: ({ context }) => ({
        class: [
            'inline-flex items-center cursor-pointer',
            {
                'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
            }
        ]
    }),
    cancelicon: {
        class: ['text-red-500', 'w-5 h-5', 'transition duration-200 ease-in']
    },
    item: ({ props, context }) => ({
        class: [
            'inline-flex items-center',
            {
                'cursor-pointer': !props.readonly,
                'cursor-default': props.readonly
            },
            {
                'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
            }
        ]
    }),
    officon: {
        class: ['text-surface-700 hover:text-primary-400', 'w-5 h-5', 'transition duration-200 ease-in']
    },
    onicon: {
        class: ['text-primary-500', 'w-5 h-5', 'transition duration-200 ease-in']
    }
};
