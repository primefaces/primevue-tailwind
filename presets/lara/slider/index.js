export default {
    root: ({ props }) => ({
        class: [
            'relative',
            'bg-surface-100 dark:bg-surface-700 border-0 rounded-6',
            { 'h-1 w-60': props.orientation == 'horizontal', 'w-1 h-56': props.orientation == 'vertical' },
            { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
        ]
    }),
    range: ({ props }) => ({
        class: [
            'bg-primary-500',
            'block absolute',
            {
                'top-0 left-0 h-full': props.orientation == 'horizontal',
                'bottom-0 left-0 w-full': props.orientation == 'vertical'
            }
        ]
    }),
    handle: ({ props }) => ({
        class: [
            'h-4 w-4 bg-surface-0 dark:bg-surface-600 border-2 border-primary-500 rounded-full transition duration-200',
            'cursor-grab touch-action-none block',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50',
            'hover:bg-primary-500 hover:border hover:border-primary-500',
            {
                'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
            }
        ]
    }),
    starthandler: ({ props }) => ({
        class: [
            'h-4 w-4 bg-surface-0 dark:bg-surface-600 border-2 border-primary-500 rounded-full transition duration-200',
            'cursor-grab touch-action-none block',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50',
            'hover:bg-primary-500 hover:border hover:border-primary-500',
            {
                'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
            }
        ]
    }),
    endhandler: ({ props }) => ({
        class: [
            'h-4 w-4 bg-surface-0 dark:bg-surface-600 border-2 border-primary-500 rounded-full transition duration-200',
            'cursor-grab touch-action-none block',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            'hover:bg-primary-500 hover:border hover:border-primary-500',
            {
                'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
            }
        ]
    })
};
