export default {
    root: ({ context }) => ({
        class: [
            'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right m-0',
            'text-xs leading-6 flex items-center justify-center',
            'text-center text-white font-bold',
            {
                'rounded-full p-0': context.nogutter || context.dot,
                'rounded-[10px] px-2': !context.nogutter && !context.dot,
                'min-w-[0.5rem] w-2 h-2': context.dot,
                'min-w-[1.5rem] h-6': !context.dot
            },
            {
                'bg-blue-500 ': context.info || (!context.info && !context.success && !context.warning && !context.danger),
                'bg-green-500 ': context.success,
                'bg-orange-500 ': context.warning,
                'bg-red-500 ': context.danger
            }
        ]
    })
};
