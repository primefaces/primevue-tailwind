export default {
    root: ({ props }) => ({
        class: [
            'inline-flex items-center justify-center',
            'bg-primary-500 text-white text-xs font-semibold px-2 py-1 ',
            {
                'bg-green-500 ': props.severity == 'success',
                'bg-blue-500 ': props.severity == 'info',
                'bg-orange-500 ': props.severity == 'warning',
                'bg-red-500 ': props.severity == 'danger'
            },
            {
                'rounded-md': !props.rounded,
                'rounded-full': props.rounded
            }
        ]
    }),
    value: {
        class: 'leading-6'
    },
    icon: {
        class: 'mr-1 text-sm'
    }
};
