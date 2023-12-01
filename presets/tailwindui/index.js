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

export default {
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

    //Forms
    inputtext: {
        root: ({ props, context }) => ({
            class: [
                // Font
                'font-sans leading-5',

                // Spacing
                'm-0',
                {
                    'py-3 px-4 text-md': props.size == 'large',
                    'py-1 px-2 text-sm': props.size == 'small',
                    'py-1.5 px-3 text-sm': props.size == null
                },

                // Colors
                'text-surface-900 dark:text-surface-0',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                'bg-surface-0 dark:bg-surface-900',
                'ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0',
                'shadow-sm',

                // Shape
                'rounded-md',
                'appearance-none',

                // Interactions
                {
                    'outline-none focus:ring-primary-600 dark:focus:ring-primary-500': !context.disabled,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                }
            ]
        })
    },

    //un-refactored components (for landing page)
    inputnumber: {
        root: {
            class: 'w-full inline-flex'
        },
        input: ({ props }) => ({
            class: [{ 'rounded-tr-none rounded-br-none w-44 h-13': props.showButtons && props.buttonLayout == 'stacked' }]
        }),
        buttongroup: ({ props }) => ({
            class: [{ 'flex flex-col h-13': props.showButtons && props.buttonLayout == 'stacked' }]
        }),
        incrementbutton: ({ props }) => ({
            class: [
                'flex !items-center !justify-center',
                {
                    '!rounded-tl-none !rounded-br-none !rounded-bl-none rounded-bl-none !p-0 flex-1 w-[3rem] last:hidden': props.showButtons && props.buttonLayout == 'stacked'
                }
            ]
        }),
        label: {
            class: 'hidden'
        },
        decrementbutton: ({ props }) => ({
            class: [
                'flex items-center justify-center',
                {
                    '!rounded-bl-none !rounded-tr-none !rounded-tl-none !p-0 flex-1 w-[3rem]': props.showButtons && props.buttonLayout == 'stacked'
                }
            ]
        })
    },
    inputswitch: {
        root: ({ props }) => ({
            class: [
                'inline-block relative',
                'w-12 h-7',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        slider: ({ props }) => ({
            class: [
                'absolute cursor-pointer top-0 left-0 right-0 bottom-0 border border-transparent',
                'transition-colors duration-200 rounded-2xl',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50',
                "before:absolute before:content-'' before:top-1/2 before:bg-surface-0 before:dark:bg-surface-900 before:w-5 before:h-5 before:left-1 before:-mt-2.5 before:rounded-full before:transition-duration-200",
                {
                    'bg-surface-200 dark:bg-surface-800 hover:bg-surface-300 hover:dark:bg-surface-700 ': !props.modelValue,
                    'bg-primary-500 before:transform before:translate-x-5': props.modelValue
                }
            ]
        })
    },
    selectbutton: {
        root: ({ props }) => ({
            class: [{ 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
        }),
        button: ({ context }) => ({
            class: [
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'py-1.5 px-3 text-sm',
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
    },
    slider: {
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
    },
    checkbox: {
        root: {
            class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
        },
        input: ({ props, context }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-surface-600 rounded-lg transition-colors duration-200',
                {
                    'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked,
                    'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked
                },
                {
                    'hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        }),
        icon: {
            class: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-surface-900'
        }
    },
    button: {
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
                { 'py-1.5 px-3 text-sm': props.size === null, 'py-3 px-4 text-md': props.size == 'large', 'py-1 px-2 text-sm': props.size == 'small' },
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
    },
    tag: {
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
    },
    dropdown: {
        root: ({ props }) => ({
            class: [
                'cursor-pointer inline-flex relative select-none',
                'bg-surface-0 border border-surface-200 transition-colors duration-200 ease-in-out rounded-md',
                'dark:bg-surface-900 dark:border-surface-700 dark:hover:border-primary-300',
                'w-full md:w-56',
                'hover:border-primary-500 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        panel: {
            class: 'w-full'
        },

        input: ({ props }) => ({
            class: [
                'cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative',
                'bg-transparent border-0 text-surface-800',
                'dark:text-white/80',
                'py-1 px-2 text-sm transition duration-200 bg-transparent rounded appearance-none font-sans',
                'focus:outline-none focus:shadow-none',
                { 'pr-7': props.showClear }
            ]
        }),
        trigger: {
            class: ['flex items-center justify-center shrink-0', 'bg-transparent text-surface-500 w-12 rounded-tr-lg rounded-br-lg']
        },
        wrapper: {
            class: ['max-h-[250px] overflow-auto', 'bg-surface-0 text-surface-700 border-0 rounded-md shadow-lg', 'dark:bg-surface-900 dark:text-white/80']
        },
        list: {
            class: 'py-3 list-none m-0'
        },
        item: ({ context }) => ({
            class: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 py-1 px-2 text-sm border-0 transition-shadow duration-200 rounded-none',
                {
                    'text-surface-700 hover:text-surface-700 hover:bg-surface-100 dark:text-white/80 dark:hover:bg-surface-800': !context.focused && !context.selected,
                    'bg-surface-50 text-surface-700 dark:text-white/80 dark:bg-surface-800/90 hover:text-surface-700 hover:bg-surface-100 dark:text-white/80 dark:hover:bg-surface-800': context.focused && !context.selected,
                    'bg-primary-100 text-primary-700 dark:bg-primary-400 dark:text-white/80': context.focused && context.selected,
                    'bg-primary-50 text-primary-700 dark:bg-primary-300 dark:text-white/80': !context.focused && context.selected
                }
            ]
        }),
        itemgroup: {
            class: ['m-0 p-3 text-surface-800 bg-surface-0 font-bold', 'dark:bg-surface-900 dark:text-white/80', 'cursor-auto']
        },
        header: {
            class: ['p-3 border-b border-surface-200 text-surface-700 bg-surface-100 mt-0 rounded-tl-lg rounded-tr-lg', 'dark:bg-surface-800 dark:text-white/80 dark:border-surface-700']
        },
        filtercontainer: {
            class: 'relative'
        },
        filterinput: {
            class: [
                'pr-7 -mr-7',
                'w-full',
                'font-sans text-base text-surface-700 bg-surface-0 py-3 px-3 border border-surface-200 transition duration-200 rounded-lg appearance-none',
                'dark:bg-surface-900 dark:border-surface-700 dark:hover:border-primary-300 dark:text-white/80',
                'hover:border-primary-500 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
            ]
        },
        filtericon: {
            class: '-mt-2 absolute top-1/2'
        },
        clearicon: {
            class: 'text-surface-500 right-12 -mt-2 absolute top-1/2'
        },
        transition: TRANSITIONS.overlay
    },
    calendar: {
        root: ({ props }) => ({
            class: [
                'inline-flex max-w-full relative',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        input: {
            class: [
                'font-sans text-base text-surface-600 dark:text-white/80 bg-surface-0 dark:bg-surface-900 py-1 px-2 text-sm border border-surface-200 dark:border-surface-700 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-primary-500' //Hover
            ]
        },
        panel: ({ props }) => ({
            class: [
                'bg-surface-0 dark:bg-surface-900',
                'min-w-[350px]',
                {
                    'shadow-md border-0 absolute': !props.inline,
                    'inline-block overflow-x-auto border border-surface-200 dark:border-surface-700 p-1.5 rounded-lg': props.inline
                }
            ]
        }),
        header: {
            class: ['flex items-center justify-between', 'p-1.5 text-surface-700 dark:text-white/80 bg-surface-0 dark:bg-surface-900 font-semibold m-0 border-b border-surface-200 dark:border-surface-700 rounded-t-lg']
        },
        previousbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-surface-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-surface-700 dark:hover:text-white/80 hover:border-transparent hover:bg-surface-100 dark:hover:bg-surface-800/80 '
            ]
        },
        title: {
            class: 'leading-8 mx-auto'
        },
        monthTitle: {
            class: ['text-surface-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'mr-2', 'hover:text-primary-500']
        },
        yearTitle: {
            class: ['text-surface-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'hover:text-primary-500']
        },
        nextbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-surface-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-surface-700 dark:hover:text-white/80 hover:border-transparent hover:bg-surface-100 dark:hover:bg-surface-800/80 '
            ]
        },
        table: {
            class: ['border-collapse w-full', 'my-2']
        },
        tableheadercell: {
            class: 'p-2'
        },
        weekday: {
            class: 'text-surface-600 dark:text-white/70'
        },
        day: {
            class: 'p-2'
        },
        daylabel: ({ context }) => ({
            class: [
                'w-10 h-10 rounded-full transition-shadow duration-200 border-transparent border',
                'flex items-center justify-center mx-auto overflow-hidden relative',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
                {
                    'opacity-60 cursor-default': context.disabled,
                    'cursor-pointer': !context.disabled
                },
                {
                    'text-surface-600 dark:text-white/70 bg-transprent hover:bg-surface-100 dark:hover:bg-surface-800/80': !context.selected && !context.disabled,
                    'text-primary-700 bg-primary-100 hover:bg-primary-200': context.selected && !context.disabled
                }
            ]
        }),
        monthpicker: {
            class: 'my-2'
        },
        month: ({ context }) => ({
            class: [
                'w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
                {
                    'text-surface-600 dark:text-white/70 bg-transprent hover:bg-surface-100 dark:hover:bg-surface-800/80': !context.selected && !context.disabled,
                    'text-primary-700 bg-primary-100 hover:bg-primary-200': context.selected && !context.disabled
                }
            ]
        }),
        yearpicker: {
            class: 'my-2'
        },
        year: ({ context }) => ({
            class: [
                'w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
                {
                    'text-surface-600 dark:text-white/70 bg-transprent hover:bg-surface-100 dark:hover:bg-surface-800/80': !context.selected && !context.disabled,
                    'text-primary-700 bg-primary-100 hover:bg-primary-200': context.selected && !context.disabled
                }
            ]
        }),
        timepicker: {
            class: ['flex justify-center items-center', 'border-t-1 border-solid border-surface-200 p-2']
        },
        separatorcontainer: {
            class: 'flex items-center flex-col px-2'
        },
        separator: {
            class: 'text-xl'
        },
        hourpicker: {
            class: 'flex items-center flex-col px-2'
        },
        minutepicker: {
            class: 'flex items-center flex-col px-2'
        },
        ampmpicker: {
            class: 'flex items-center flex-col px-2'
        },
        incrementbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-surface-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-surface-700 dark:hover:text-white/80 hover:border-transparent hover:bg-surface-100 dark:hover:bg-surface-800/80 '
            ]
        },
        decrementbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-surface-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-surface-700 dark:hover:text-white/80 hover:border-transparent hover:bg-surface-100 dark:hover:bg-surface-800/80 '
            ]
        },
        groupcontainer: {
            class: 'flex'
        },
        group: {
            class: ['flex-1', 'border-l border-surface-200 pr-0.5 pl-0.5 pt-0 pb-0', 'first:pl-0 first:border-l-0']
        },
        transition: TRANSITIONS.overlay
    },
    badge: {
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
    },
    avatar: {
        root: ({ props, parent }) => ({
            class: [
                'flex items-center justify-center',
                'bg-surface-300 dark:bg-surface-800',
                {
                    'rounded-lg': props.shape == 'square',
                    'rounded-full': props.shape == 'circle'
                },
                {
                    'text-base h-8 w-8': props.size == null || props.size == 'normal',
                    'w-12 h-12 text-xl': props.size == 'large',
                    'w-16 h-16 text-2xl': props.size == 'xlarge'
                },
                {
                    '-ml-4 border-2 border-white dark:border-surface-900': parent.instance.$css !== undefined
                }
            ]
        }),
        image: {
            class: 'h-full w-full'
        }
    },
    avatargroup: {
        root: {
            class: 'flex items-center'
        }
    }
};
