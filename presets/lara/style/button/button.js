export const button = {
    root: ({ props, context }) => ({
        class: [
            'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom h-full',
            'transition duration-200 ease-in-out focus:outline-none focus:outline-offset-0 focus:ring',
            {
                'text-white dark:text-surface-900 bg-primary-500 dark:bg-primary-400 border border-primary-500 dark:border-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 hover:border-primary-600 dark:hover:border-primary-500':
                    !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                'text-primary-600 bg-transparent border-transparent focus:ring-primary-400/50 dark:focus:ring-primary-300/50': props.link
            },
            {
                'focus:ring-surface-400/50 dark:focus:ring-surface-300/50': props.severity === 'secondary',
                'focus:ring-green-400/50 dark:focus:ring-green-300/50': props.severity === 'success',
                'focus:ring-blue-400/50 dark:focus:ring-blue-300/50': props.severity === 'info',
                'focus:ring-orange-400/50 dark:focus:ring-orange-300/50': props.severity === 'warning',
                'focus:ring-purple-400/50 dark:focus:ring-purple-300/50': props.severity === 'help',
                'focus:ring-red-400/50 dark:focus:ring-red-300/50': props.severity === 'danger'
            },
            {
                'text-white dark:text-surface-900 bg-surface-500 dark:bg-surface-400 border border-surface-500 dark:border-surface-400 hover:bg-surface-600 dark:hover:bg-surface-500 hover:border-surface-600 dark:hover:border-surface-500':
                    props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                'text-white dark:text-surface-900 bg-green-500 dark:bg-green-400 border border-green-500 dark:border-green-400 hover:bg-green-600 dark:hover:bg-green-500 hover:border-green-600 dark:hover:border-green-500':
                    props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                'text-white dark:text-surface-900 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:border-blue-600 dark:hover:border-blue-500':
                    props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                'text-white dark:text-surface-900 bg-orange-500 dark:bg-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-600 dark:hover:bg-orange-500 hover:border-orange-600 dark:hover:border-orange-500':
                    props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                'text-white dark:text-surface-900 bg-purple-500 dark:bg-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:border-purple-600 dark:hover:border-purple-500':
                    props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                'text-white dark:text-surface-900 bg-red-500 dark:bg-red-400 border border-red-500 dark:border-red-400 hover:bg-red-600 dark:hover:bg-red-500 hover:border-red-600 dark:hover:border-red-500':
                    props.severity === 'danger' && !props.text && !props.outlined && !props.plain
            },
            { 'shadow-lg': props.raised },
            { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
            {
                'bg-transparent border-transparent': props.text && !props.plain,
                'text-primary-500 dark:text-primary-400 hover:bg-primary-300/20': props.text && props.severity === null && !props.plain,
                'text-blue-500 dark:text-blue-400 hover:bg-blue-300/20': props.text && props.severity === 'info' && !props.plain,
                'text-surface-500 dark:text-surface-400 hover:bg-surface-300/20': props.text && props.severity === 'secondary' && !props.plain,
                'text-green-500 dark:text-green-400 hover:bg-green-300/20': props.text && props.severity === 'success' && !props.plain,
                'text-orange-500 dark:text-orange-400 hover:bg-orange-300/20': props.text && props.severity === 'warning' && !props.plain,
                'text-purple-500 dark:text-purple-400 hover:bg-purple-300/20': props.text && props.severity === 'help' && !props.plain,
                'text-red-500 dark:text-red-400 hover:bg-red-300/20': props.text && props.severity === 'danger' && !props.plain
            },
            { 'shadow-lg': props.raised && props.text },
            {
                'text-surface-500 hover:bg-surface-300/20': props.plain && props.text,
                'text-surface-500 border border-gray-500 hover:bg-surface-300/20': props.plain && props.outlined,
                'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain && !props.outlined && !props.text
            },
            {
                'bg-transparent border': props.outlined && !props.plain,
                'text-primary-500 border border-primary-500 hover:bg-primary-300/20': props.outlined && props.severity === null && !props.plain,
                'text-surface-500 border border-gray-500 hover:bg-surface-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
                'text-blue-500 border border-blue-500 hover:bg-blue-300/20 ': props.outlined && props.severity === 'info' && !props.plain,
                'text-green-500 border border-green-500 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
                'text-orange-500 border border-orange-500 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
                'text-purple-500 border border-purple-500 hover:bg-purple-300/20': props.outlined && props.severity === 'help' && !props.plain,
                'text-red-500 border border-red-500 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
            },
            { 'px-4 py-3 text-base': props.size === null, 'text-xs py-2 px-3': props.size === 'small', 'text-xl py-3 px-4': props.size === 'large' },
            { 'opacity-60 pointer-events-none cursor-default': context.disabled }
        ]
    }),
    label: ({ props }) => ({
        class: [
            'duration-200',
            'font-bold',
            {
                'hover:underline': props.link
            },
            { 'invisible w-0': props.label == null }
        ]
    }),
    icon: ({ props }) => ({
        class: [
            'mx-0',
            {
                'mr-2': props.iconPos == 'left' && props.label != null,
                'ml-2': props.iconPos == 'right' && props.label != null,
                'mb-2': props.iconPos == 'top' && props.label != null,
                'mt-2': props.iconPos == 'bottom' && props.label != null
            }
        ]
    }),
    badge: ({ props }) => ({
        class: [{ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge }]
    })
};
