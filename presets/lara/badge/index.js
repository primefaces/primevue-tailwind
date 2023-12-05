export default {
    root: ({ props }) => ({
        class: [
            // Font
            'font-bold',
            {
                'text-xs leading-[1.5rem]': props.size == null,
                'text-lg leading-[2.25rem]': props.size == 'large',
                'text-2xl leading-[3rem]': props.size == 'xlarge'
            },

            // Alignment
            'text-center inline-block',

            // Size
            'p-0',
            {
                'min-w-[1.5rem] h-[1.5rem]': props.size == null,
                'min-w-[2.25rem] h-[2.25rem]': props.size == 'large',
                'min-w-[3rem] h-[3rem]': props.size == 'xlarge'
            },

            // Shape
            'rounded-full',

            // Color
            'text-white',
            {
                'bg-primary-500': props.severity == null || props.severity == 'primary',
                'bg-gray-500 ': props.severity == 'secondary',
                'bg-green-500 ': props.severity == 'success',
                'bg-blue-500 ': props.severity == 'info',
                'bg-orange-500 ': props.severity == 'warning',
                'bg-purple-500 ': props.severity == 'help',
                'bg-red-500 ': props.severity == 'danger'
            }
        ]
    })
};
