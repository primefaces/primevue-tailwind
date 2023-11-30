const TRANSITIONS = {
    toggleable: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40	',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    },
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

const tailwindui = {
    global: {
        css: `
        *[data-pd-ripple="true"]{
            overflow: hidden;
            position: relative;
        }
        span[data-p-ink-active="true"]{
            animation: ripple 0.4s linear;
        }
        @keyframes ripple {
            100% {
                opacity: 0;
                transform: scale(2.5);
            }
        }

        .progress-spinner-circle {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: 0;
            animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
            stroke-linecap: round;
        }

        @keyframes p-progress-spinner-dash{
            0% {
                stroke-dasharray: 1, 200;
                stroke-dashoffset: 0;
            }
            
            50% {
                stroke-dasharray: 89, 200;
                stroke-dashoffset: -35px;
            }
            100% {
                stroke-dasharray: 89, 200;
                stroke-dashoffset: -124px;
            }
        }
        @keyframes p-progress-spinner-color {
            100%, 0% {
                stroke: #ff5757;
            }
            40% {
                stroke: #696cff;
            }
            66% {
                stroke: #1ea97c;
            }
            80%, 90% {
                stroke: #cc8925;
            }
        }

        .progressbar-value-animate::after {
            will-change: left, right;
            animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        }
        .progressbar-value-animate::before {
            will-change: left, right;
            animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        }
        @keyframes p-progressbar-indeterminate-anim {
            0% {
                left: -35%;
                right: 100%;
            }
            60% {
                left: 100%;
                right: -90%;
            }
            100% {
                left: 100%;
                right: -90%;
            }
        }
`
    },
    directives: {
        ripple: {
            root: {
                class: ['block absolute bg-surface-0/50 rounded-full pointer-events-none'],
                style: 'transform: scale(0)'
            }
        },
        badge: {
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
        },
        tooltip: {
            root: ({ context }) => ({
                class: [
                    'absolute shadow-md',
                    {
                        'py-0 px-1': context?.right || context?.left || (!context?.right && !context?.left && !context?.top && !context?.bottom),
                        'py-1 px-0': context?.top || context?.bottom
                    }
                ]
            }),
            arrow: ({ context }) => ({
                class: [
                    'absolute w-0 h-0 border-transparent border-solid',
                    {
                        '-m-t-1 border-y-[0.25rem] border-r-[0.25rem] border-l-0 border-r-surface-600': context?.right || (!context?.right && !context?.left && !context?.top && !context?.bottom),
                        '-m-t-1 border-y-[0.25rem] border-l-[0.25rem] border-r-0 border-l-surface-600': context?.left,
                        '-m-l-1 border-x-[0.25rem] border-t-[0.25rem] border-b-0 border-t-surface-600': context?.top,
                        '-m-l-1 border-x-[0.25rem] border-b-[0.25rem] border-t-0 border-b-surface-600': context?.bottom
                    }
                ]
            }),
            text: {
                class: 'p-3 bg-surface-600 text-white rounded-md whitespace-pre-line break-words'
            }
        }
    },
    button: {
        root: ({ props, context }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom h-full',
                'transition duration-200 ease-in-out focus:outline-none focus:outline-offset-0 focus:ring',
                {
                    'text-white dark:text-surface-900 bg-pink-500 dark:bg-pink-400 border border-primary-500 dark:border-primary-400 hover:bg-pink-600 dark:hover:bg-pink-500 hover:border-primary-600 dark:hover:border-primary-500':
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
                    'text-primary-500 dark:text-primary-400 hover:bg-pink-300/20': props.text && props.severity === null && !props.plain,
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
                    'text-primary-500 border border-primary-500 hover:bg-pink-300/20': props.outlined && props.severity === null && !props.plain,
                    'text-surface-500 border border-gray-500 hover:bg-surface-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
                    'text-blue-500 border border-blue-500 hover:bg-blue-300/20 ': props.outlined && props.severity === 'info' && !props.plain,
                    'text-green-500 border border-green-500 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
                    'text-orange-500 border border-orange-500 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
                    'text-purple-500 border border-purple-500 hover:bg-purple-300/20': props.outlined && props.severity === 'help' && !props.plain,
                    'text-red-500 border border-red-500 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
                },
                { 'p-10 text-base': props.size === null, 'text-xs py-2 px-3': props.size === 'small', 'text-xl py-3 px-4': props.size === 'large' },
                { 'opacity-60 pointer-events-none cursor-default': context.disabled }
            ]
        }),
        label: ({ props }) => ({
            class: [
                'flex-1',
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
    }
};

export default tailwindui;
