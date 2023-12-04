export default {
    root: ({ props }) => ({
        class: [
            'rounded-full p-0 text-center inline-block',
            'bg-primary-500 text-white font-bold',
            {
                'bg-gray-500 ': props.severity == 'secondary',
                'bg-green-500 ': props.severity == 'success',
                'bg-blue-500 ': props.severity == 'info',
                'bg-orange-500 ': props.severity == 'warning',
                'bg-purple-500 ': props.severity == 'help',
                'bg-red-500 ': props.severity == 'danger'
            },
            {
                'text-xs min-w-[1.5rem] h-[1.5rem] leading-[1.5rem]': props.size == null,
                'text-lg min-w-[2.25rem] h-[2.25rem] leading-[2.25rem]': props.size == 'large',
                'text-2xl min-w-[3rem] h-[3rem] leading-[3rem]': props.size == 'xlarge'
            }
        ]
    })
};
