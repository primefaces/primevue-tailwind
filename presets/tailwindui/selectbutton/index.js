export default {
    root: ({ props }) => ({
        class: [{ 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
    }),
    button: ({ context }) => ({
        class: [
            'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
            'px-4 py-3',
            'transition duration-200 border border-r-0',
            'first:rounded-l-md first:rounded-tr-none first:rounded-br-none last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50',
            {
                'bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80 border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800/80 ': !context.active,
                'bg-primary-500 border-primary-500 text-white hover:bg-primary-600': context.active,
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled
            }
        ]
    }),
    label: {
        class: 'font-bold'
    }
};
