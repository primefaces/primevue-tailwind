export default {
    root: ({ props }) => ({
        class: [
            // Spacing and Shape
            'my-4 mx-0',
            'rounded-md',
            'border-solid border-0 border-l-[6px]',

            // Colors
            {
                'bg-blue-100/70 dark:bg-blue-500/20 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-300': props.severity == 'info',
                'bg-green-100/70 dark:bg-green-500/20 border-green-500 dark:border-green-400 text-green-700 dark:text-green-300': props.severity == 'success',
                'bg-orange-100/70 dark:bg-orange-500/20 border-orange-500 dark:border-orange-400 text-orange-700 dark:text-orange-300': props.severity == 'warn',
                'bg-red-100/70 dark:bg-red-500/20 border-red-500 dark:border-red-400 text-red-700 dark:text-red-300': props.severity == 'error'
            }
        ]
    }),
    wrapper: {
        class: [
            // Flexbox
            'flex items-center',

            // Spacing
            'py-5 px-7'
        ]
    },
    icon: {
        class: [
            // Sizing and Spacing
            'w-6 h-6',
            'text-lg leading-none mr-2 shrink-0'
        ]
    },
    text: {
        class: [
            // Font and Text
            'text-base leading-none',
            'font-medium'
        ]
    },
    button: {
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
