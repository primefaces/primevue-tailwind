export default {
    root: ({ context }) => ({
        class: [
            // Font
            'font-bold',
            'text-xs leading-6',

            // Alignment
            'flex items-center justify-center',
            'text-center',

            // Position
            'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right',

            // Size
            'm-0',
            {
                'p-0': context.nogutter || context.dot,
                'px-2': !context.nogutter && !context.dot,
                'min-w-[0.5rem] w-2 h-2': context.dot,
                'min-w-[1.5rem] h-6': !context.dot
            },

            // Shape
            {
                'rounded-full': context.nogutter || context.dot,
                'rounded-[10px]': !context.nogutter && !context.dot
            },

            // Color
            'text-white',
            {
                'bg-primary-500': !context.info && !context.success && !context.warning && !context.danger,
                'bg-green-500 ': context.success,
                'bg-blue-500 ': context.info,
                'bg-orange-500 ': context.warning,
                'bg-red-500 ': context.danger
            }
        ]
    })
};
