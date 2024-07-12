export default {
    root: ({ props }) => ({
        class: [
            // Spacing and Shape
            'rounded-md',
            'outline-solid outline-0 outline-l-[6px]',

            // Colors
            {
                'bg-blue-100/70 dark:bg-blue-500/20': props.severity == 'info',
                'bg-green-100/70 dark:bg-green-500/20': props.severity == 'success',
                'bg-surface-100/70 dark:bg-surface-500/20': props.severity == 'secondary',
                'bg-orange-100/70 dark:bg-orange-500/20': props.severity == 'warn',
                'bg-red-100/70 dark:bg-red-500/20': props.severity == 'error',
                'bg-surface-950 dark:bg-surface-0': props.severity == 'contrast'
            },
            {
                'outline-blue-500 dark:outline-blue-400': props.severity == 'info',
                'outline-green-500 dark:outline-green-400': props.severity == 'success',
                'outline-surface-500 dark:outline-surface-400': props.severity == 'secondary',
                'outline-orange-500 dark:outline-orange-400': props.severity == 'warn',
                'outline-red-500 dark:outline-red-400': props.severity == 'error',
                'outline-surface-950 dark:outline-surface-0': props.severity == 'contrast'
            },
            {
                'text-blue-700 dark:text-blue-300': props.severity == 'info',
                'text-green-700 dark:text-green-300': props.severity == 'success',
                'text-surface-700 dark:text-surface-300': props.severity == 'secondary',
                'text-orange-700 dark:text-orange-300': props.severity == 'warn',
                'text-red-700 dark:text-red-300': props.severity == 'error',
                'text-surface-0 dark:text-surface-950': props.severity == 'contrast'
            }
        ]
    }),
    content: {
        class: [
            // Flexbox
            'flex items-center h-full',

            // Spacing
            'py-3 px-5 gap-2'
        ]
    },
    icon: {
        class: [
            // Sizing and Spacing
            'w-6 h-6',
            'text-lg leading-none shrink-0'
        ]
    },
    text: {
        class: [
            // Font and Text
            'text-base leading-none',
            'font-medium'
        ]
    },
    closeButton: {
        class: [
            // Flexbox
            'flex items-center justify-center',

            // Size
            'w-8 h-8',

            // Spacing and Misc
            'ml-auto  relative',

            // Shape
            'rounded-full',

            // Colors
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:bg-surface-0/50 dark:hover:bg-surface-0/10',

            // Misc
            'overflow-hidden'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0',
        enterActiveClass: 'transition-opacity duration-300',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-300 ease-in',
        leaveToClass: 'max-h-0 opacity-0 !m-0'
    }
};
