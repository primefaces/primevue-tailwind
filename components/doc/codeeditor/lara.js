const Lara = {
    index: `import accordion from './accordion';
import avatar from './avatar';
import avatargroup from './avatargroup';
import badge from './badge';
import badgedirective from './badgedirective';
import button from './button';
import calendar from './calendar';
import card from './card';
import checkbox from './checkbox';
import dropdown from './dropdown';
import fieldset from './fieldset';
import global from './global';
import inputnumber from './inputnumber';
import inputswitch from './inputswitch';
import inputtext from './inputtext';
import panel from './panel';
import ripple from './ripple';
import selectbutton from './selectbutton';
import slider from './slider';
import tag from './tag';
import tooltip from './tooltip';

export default {
    global,
    directives: {
        badge: badgedirective,
        ripple,
        tooltip
    },

    //forms
    dropdown,
    inputnumber,
    inputtext,
    calendar,
    checkbox,
    inputswitch,
    slider,

    //buttons
    button,
    selectbutton,

    //panels
    accordion,
    panel,
    fieldset,
    card,

    //misc
    badge,
    avatar,
    avatargroup,
    tag
};
`,
    global: `export default {
    css: \`
    *[data-pd-ripple="true"]{
        overflow: hidden;
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
\`
};
`,
    accordion: `export default {
    accordiontab: {
        root: {
            class: 'mb-1'
        },
        header: ({ props }) => ({
            class: [
                // State
                { 'select-none pointer-events-none cursor-default opacity-60': props?.disabled }
            ]
        }),
        headerAction: ({ context }) => ({
            class: [
                //Font
                'font-bold',
                'leading-none',

                // Alignments
                'flex items-center',
                'relative',

                // Sizing
                'p-5',

                // Shape
                'rounded-t-md',
                { 'rounded-br-md rounded-bl-md': !context.active, 'rounded-br-0 rounded-bl-0': context.active },

                // Color
                'border border-surface-300 dark:border-surface-700',
                'bg-surface-50 dark:bg-surface-800',
                'text-surface-600 dark:text-surface-0/80',
                { 'text-surface-900': context.active },

                // Transition
                'transition duration-200 ease-in-out',
                'transition-shadow duration-200',

                // States
                'hover:bg-surface-100 dark:hover:bg-surface-700/40',
                'hover:text-surface-900',
                'focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 ring-inset dark:focus-visible:ring-primary-300/50', // Focus

                // Misc
                'cursor-pointer no-underline select-none'
            ]
        }),
        headerIcon: {
            class: 'inline-block mr-2'
        },
        headerTitle: {
            class: 'leading-none'
        },
        content: {
            class: [
                // Spacing
                'p-5',

                //Shape
                'rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg',
                'border-t-0',

                // Color
                'bg-surface-0 dark:bg-surface-800',
                'border border-surface-300 dark:border-surface-700',
                'text-surface-700 dark:text-surface-0/80'
            ]
        },
        transition: {
            enterFromClass: 'max-h-0',
            enterActiveClass: 'overflow-hidden transition-all duration-400 ease-in-out',
            enterToClass: 'max-h-40	',
            leaveFromClass: 'max-h-40',
            leaveActiveClass: 'overflow-hidden transition-all duration-400 ease-in',
            leaveToClass: 'max-h-0'
        }
    }
};
`,
    avatar: `export default {
    root: ({ props, parent }) => ({
        class: [
            // Font
            {
                'text-xl': props.size == 'large',
                'text-2xl': props.size == 'xlarge'
            },

            // Alignments
            'inline-flex items-center justify-center',
            'relative',

            // Sizes
            {
                'h-8 w-8': props.size == null || props.size == 'normal',
                'w-12 h-12': props.size == 'large',
                'w-16 h-16': props.size == 'xlarge'
            },
            { '-ml-4': parent.instance.$style !== undefined },

            // Shapes
            {
                'rounded-lg': props.shape == 'square',
                'rounded-full': props.shape == 'circle'
            },
            { 'border-2': parent.instance.$style !== undefined },

            // Colors
            'bg-surface-300 dark:bg-surface-700',
            { 'border-white dark:border-surface-800': parent.instance.$style !== undefined }
        ]
    }),
    image: {
        class: 'h-full w-full'
    }
};
`,
    avatargroup: `export default {
    root: {
        class: 'flex items-center'
    }
};
`,
    badge: `export default {
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
            'text-white dark:text-surface-900',
            {
                'bg-primary-500 dark:bg-primary-400': props.severity == null || props.severity == 'primary',
                'bg-surface-500 dark:bg-surface-400': props.severity == 'secondary',
                'bg-green-500 dark:bg-green-400': props.severity == 'success',
                'bg-blue-500 dark:bg-blue-400': props.severity == 'info',
                'bg-orange-500 dark:bg-orange-400': props.severity == 'warning',
                'bg-purple-500 dark:bg-purple-400': props.severity == 'help',
                'bg-red-500 dark:bg-red-400': props.severity == 'danger'
            }
        ]
    })
};
`,
    badgedirective: `export default {
    root: ({ context }) => ({
        class: [
            // Font
            'font-bold',
            'text-xs leading-6',

            // Alignment
            'flex items-center justify-center',
            'text-center',

            // Position
            'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right',

            // Size
            'm-0',
            {
                'p-0': context.nogutter || context.dot,
                'px-2': !context.nogutter && !context.dot,
                'min-w-[0.5rem] w-2 h-2': context.dot,
                'min-w-[1.5rem] h-6': !context.dot
            },

            // Shape
            {
                'rounded-full': context.nogutter || context.dot,
                'rounded-[10px]': !context.nogutter && !context.dot
            },

            // Color
            'text-white dark:text-surface-900',
            {
                'bg-primary-500 dark:bg-primary-400': !context.info && !context.success && !context.warning && !context.danger && !context.help && !context.secondary,
                'bg-surface-500 dark:bg-surface-400': context.secondary,
                'bg-green-500 dark:bg-green-400': context.success,
                'bg-blue-500 dark:bg-blue-400': context.info,
                'bg-orange-500 dark:bg-orange-400': context.warning,
                'bg-purple-500 dark:bg-purple-400': context.help,
                'bg-red-500 dark:bg-red-400': context.danger
            }
        ]
    })
};
`,
    button: `export default {
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
`,
    calendar: `export default {
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
            'font-sans text-base text-surface-600 dark:text-white/80 bg-surface-0 dark:bg-surface-900 p-3 border border-surface-200 dark:border-surface-700 transition-colors duration-200 appearance-none rounded-lg',
            'hover:border-primary-500' //Hover
        ]
    },
    panel: ({ props }) => ({
        class: [
            'bg-surface-0 dark:bg-surface-900',
            'min-w-[350px]',
            {
                'shadow-md border-0 absolute': !props.inline,
                'inline-block overflow-x-auto border border-surface-200 dark:border-surface-700 p-2 rounded-lg': props.inline
            }
        ]
    }),
    header: {
        class: ['flex items-center justify-between', 'p-2 text-surface-700 dark:text-white/80 bg-surface-0 dark:bg-surface-900 font-semibold m-0 border-b border-surface-200 dark:border-surface-700 rounded-t-lg']
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
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
`,
    card: `export default {
    root: {
        class: [
            //Shape
            'rounded-md',
            'shadow-md',

            //Color
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0'
        ]
    },
    body: {
        class: 'p-5'
    },
    title: {
        class: 'text-2xl font-bold mb-2'
    },
    subtitle: {
        class: [
            //Font
            'font-normal',

            //Spacing
            'mb-2',

            //Color
            'text-surface-600 dark:text-surface-0/60'
        ]
    },
    content: {
        class: 'py-5' // Vertical padding.
    },
    footer: {
        class: 'pt-5' // Top padding.
    }
};
`,
    checkbox: `export default {
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
};
`,
    dropdown: `export default {
    root: ({ props }) => ({
        class: [
            // Display and Position
            'inline-flex',
            'relative',

            // Shape
            'w-full md:w-56',
            'rounded-md',

            // Color and Background
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-300 dark:border-surface-700',

            // Transitions
            'transition-all',
            'duration-200',

            //TODO: Focus needs context/props. normally gets p-focus
            // States
            'hover:border-primary-500 dark:hover:border-primary-300',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Misc
            'cursor-pointer',
            'select-none',
            { 'opacity-60': props.disabled, 'pointer-events-none': props.disabled, 'cursor-default': props.disabled }
        ]
    }),
    input: ({ props }) => ({
        class: [
            //Font
            'font-sans',
            'leading-none',

            // Display
            'block',
            'flex-auto',

            // Color and Background
            'bg-transparent',
            'border-0',
            'text-surface-800 dark:text-white/80',

            // Sizing and Spacing
            'w-[1%]',
            'p-3',
            { 'pr-7': props.showClear },

            //Shape
            'rounded-none',

            // Transitions
            'transition',
            'duration-200',

            // States
            'focus:outline-none focus:shadow-none',

            // Misc
            'relative',
            'cursor-pointer',
            'overflow-hidden overflow-ellipsis',
            'whitespace-nowrap',
            'appearance-none'
        ]
    }),
    trigger: {
        class: [
            // Flexbox
            'flex items-center justify-center',
            'shrink-0',

            // Color and Background
            'bg-transparent',
            'text-surface-500',

            // Size
            'w-12',

            // Shape
            'rounded-tr-md',
            'rounded-br-md'
        ]
    },
    panel: {
        class: [
            // Position
            'absolute top-0 left-0',

            // Shape
            'border-0 dark:border',
            'rounded-md',
            'shadow-md',

            // Color
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-800 dark:text-white/80',
            'dark:border-surface-700'
        ]
    },
    wrapper: {
        class: [
            // Sizing
            'max-h-[200px]',

            // Misc
            'overflow-auto'
        ]
    },
    list: {
        class: 'py-3 list-none m-0'
    },
    item: ({ context }) => ({
        class: [
            // Font
            'font-normal',
            'leading-none',

            // Position
            'relative',

            // Shape
            'border-0',
            'rounded-none',

            // Spacing
            'm-0',
            'py-3 px-5',

            // Color
            { 'text-surface-700 dark:text-white/80': !context.focused && !context.selected },
            { 'bg-surface-50 dark:bg-surface-700/80 text-surface-700 dark:text-white/80': context.focused && !context.selected },
            { 'bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80': context.focused && context.selected },
            { 'bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80': !context.focused && context.selected },

            //States
            { 'hover:text-surface-700 hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.focused && !context.selected },
            { 'hover:text-surface-700 hover:bg-surface-100 dark:text-white/80 dark:hover:bg-surface-600/80': context.focused && !context.selected },

            // Transitions
            'transition-shadow',
            'duration-200',

            // Misc
            'cursor-pointer',
            'overflow-hidden',
            'whitespace-nowrap'
        ]
    }),
    itemgroup: {
        class: [
            //Font
            'font-bold',

            // Spacing
            'm-0',
            'p-3',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-600/80',

            // Misc
            'cursor-auto'
        ]
    },
    emptymessage: {
        class: [
            // Font
            'leading-none',

            // Spacing
            'py-3 px-5',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-transparent'
        ]
    },
    header: {
        class: [
            // Spacing
            'py-3 px-5',
            'm-0',

            //Shape
            'border-b',
            'rounded-tl-md',
            'rounded-tr-md',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-100 dark:bg-surface-800',
            'border-surface-300 dark:border-surface-700'
        ]
    },
    filtercontainer: {
        class: 'relative'
    },
    filterinput: {
        class: [
            // Font
            'font-sans',
            'leading-none',

            // Sizing
            'pr-7 py-3 px-3',
            '-mr-7',
            'w-full',

            //Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-900',
            'border-surface-200 dark:border-surface-700',

            // Shape
            'border',
            'rounded-lg',
            'appearance-none',

            // Transitions
            'transition',
            'duration-200',

            // States
            'hover:border-primary-500 dark:hover:border-primary-300',
            'focus:ring focus:outline-none focus:outline-offset-0',
            'focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Misc
            'appearance-none'
        ]
    },
    filtericon: {
        class: ['absolute', 'top-1/2', '-mt-2']
    },
    clearicon: {
        class: [
            // Color
            'text-surface-500',

            // Position
            'absolute',
            'top-1/2',
            'right-12',

            // Spacing
            '-mt-2'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
`,
    fieldset: `export default {
    root: {
        class: [
            'block',

            // Spacing
            'px-4 pt-2 py-3',
            'inline-size-min',

            // Shape
            'rounded-md',
            // Color
            'border border-surface-300 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    legend: ({ props }) => ({
        class: [
            // Font
            'font-bold',
            'leading-none',

            //Spacing
            { 'p-0': props.toggleable, 'p-5': !props.toggleable },

            // Shape
            'rounded-md',

            // Color
            'text-surface-700 dark:text-surface-0/80',
            'border border-surface-200 dark:border-surface-700',
            'bg-surface-50 dark:bg-surface-900',

            // Transition
            'transition-none',

            // States
            { 'hover:bg-surface-100 hover:border-surface-200 hover:text-surface-900 dark:hover:text-surface-0/80 dark:hover:bg-surface-800/80': props.toggleable },
            { 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': props.toggleable }
        ]
    }),
    toggler: ({ props }) => ({
        class: [
            // Alignments
            'flex items-center justify-center',
            'relative',

            //Spacing
            { 'p-5': props.toggleable },

            // Shape
            { 'rounded-md': props.toggleable },

            // Color
            { 'text-surface-700 dark:text-surface-200 hover:text-surface-900 hover:text-surface-900': props.toggleable },

            // States
            { 'hover:text-surface-900 dark:hover:text-surface-100': props.toggleable },
            { 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset focus:ring-primary-400/50 dark:focus:ring-primary-300/50': props.toggleable },

            // Misc
            {
                'transition-none cursor-pointer overflow-hidden select-none': props.toggleable
            }
        ]
    }),
    togglerIcon: {
        class: 'mr-2 inline-block'
    },
    legendTitle: {
        class: 'flex items-center justify-center leading-none'
    },
    content: {
        class: 'p-5'
    },
    transition: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    }
};
`,
    inputnumber: `export default {
    root: ({ props, context }) => ({
        class: [
            // Display
            'inline-flex',

            { 'flex-col': props.showButtons && props.buttonLayout == 'vertical' },

            //Sizing
            { '!w-16': props.showButtons && props.buttonLayout == 'vertical' }
        ]
    }),
    input: {
        root: ({ parent, context }) => ({
            class: [
                // Font
                'font-sans leading-none',

                //Text
                { 'text-center': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Spacing
                'p-3',
                'm-0',

                // Shape
                'rounded-lg',
                { 'rounded-tr-none rounded-br-none': parent.props.showButtons },
                { 'rounded-tl-none rounded-bl-none': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-none': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Colors
                'text-surface-600 dark:text-surface-200',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                'bg-surface-0 dark:bg-surface-900',
                'border border-surface-300 dark:border-surface-600',

                // States
                'hover:border-primary-500 dark:hover:border-primary-400',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50',
                { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled },

                //Position
                { 'order-2': parent.props.buttonLayout == 'horizontal' || parent.props.buttonLayout == 'vertical' }
            ]
        })
    },
    buttongroup: ({ props }) => ({
        class: [
            // Flex
            'flex',
            'flex-col'
        ]
    }),

    incrementbutton: {
        root: ({ parent }) => ({
            class: [
                // Display
                'flex flex-auto',

                // Alignment
                'items-center',
                'justify-center',
                'text-center align-bottom',

                //Position
                'relative',
                { 'order-3': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'order-1': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //Color
                'text-white dark:text-surface-900',
                'bg-primary-500 dark:bg-primary-400',
                'border border-primary-500 dark:border-primary-400',

                // Sizing
                'w-[3rem]',
                { 'px-4 py-3': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' },
                { 'p-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'w-full': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Shape
                'rounded-md',
                { 'rounded-tl-none rounded-br-none rounded-bl-none': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'rounded-bl-none rounded-tl-none': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-bl-none rounded-br-none': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //States
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300',

                //Misc
                'cursor-pointer overflow-hidden select-none'
            ]
        }),
        label: {
            class: 'h-0 w-0'
        }
    },
    decrementbutton: {
        root: ({ parent }) => ({
            class: [
                // Display
                'flex flex-auto',

                // Alignment
                'items-center',
                'justify-center',
                'text-center align-bottom',

                //Position
                'relative',
                { 'order-1': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'order-3': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //Color
                'text-white dark:text-surface-900',
                'bg-primary-500 dark:bg-primary-400',
                'border border-primary-500 dark:border-primary-400',

                // Sizing
                'w-[3rem]',
                { 'px-4 py-3': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' },
                { 'p-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'w-full': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Shape
                'rounded-md',
                { 'rounded-tr-none rounded-tl-none rounded-bl-none': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'rounded-tr-none rounded-br-none ': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-tr-none rounded-tl-none ': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //States
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300',

                //Misc
                'cursor-pointer overflow-hidden select-none'
            ]
        }),
        label: {
            class: 'h-0 w-0'
        }
    }
};
`,
    inputswitch: `export default {
    root: ({ props }) => ({
        class: [
            'inline-block relative',
            'w-12 h-7',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            },
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50  dark:focus:ring-primary-300/50'
        ]
    }),
    slider: ({ props }) => ({
        class: [
            // Position
            'absolute top-0 left-0 right-0 bottom-0',
            { 'before:transform before:translate-x-5': props.modelValue },

            // Shape
            'rounded-2xl',

            // Before:
            'before:absolute before:top-1/2 before:left-1',
            'before:-mt-2.5',
            'before:h-5 before:w-5',
            'before:rounded-full',
            'before:transition-duration-200',
            'before:bg-surface-0 before:dark:bg-surface-900',

            // Colors
            'border border-transparent',
            {
                'bg-surface-200 dark:bg-surface-700': !props.modelValue,
                'bg-primary-500 dark:bg-primary-400': props.modelValue
            },

            // States
            { 'hover:bg-surface-300 hover:dark:bg-surface-600 ': !props.modelValue },

            // Transition
            'transition-colors duration-200',

            // Misc
            'cursor-pointer'
        ]
    })
};
`,
    inputtext: `export default {
    root: ({ props, context }) => ({
        class: [
            // Font
            'font-sans leading-none',

            // Spacing
            'm-0',
            {
                'px-4 py-4': props.size == 'large',
                'px-2 py-2': props.size == 'small',
                'p-3': props.size == null
            },

            // Colors
            'text-surface-600 dark:text-surface-200',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-300 dark:border-surface-600',

            // States
            {
                'hover:border-primary-500 dark:hover:border-primary-400': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50': !context.disabled,
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled
            },

            // Misc
            'rounded-lg',
            'appearance-none',
            'transition-colors duration-200'
        ]
    })
};
`,
    panel: `export default {
    header: ({ props }) => ({
        class: [
            // Flex
            'flex items-center justify-between',

            // Colors
            'text-surface-700 dark:text-surface-0/80',
            'bg-surface-50 dark:bg-surface-900',
            'border border-surface-300 dark:border-surface-700',

            //Shape
            'rounded-tl-lg rounded-tr-lg',

            // Conditional Spacing
            { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable }
        ]
    }),
    title: {
        class: 'leading-none font-bold'
    },
    toggler: {
        class: [
            // Alignments
            'inline-flex items-center justify-center',
            'relative',

            // Sized
            'w-8 h-8',
            'm-0 p-0',

            //Shape
            'border-0 rounded-full',

            //Color
            'bg-transparent',
            'text-surface-600 dark:text-surface-0/80',

            // States
            'hover:text-surface-800 dark:hover:text-surface-0/80',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80',
            'focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 focus-visible:ring-inset dark:focus-visible:ring-primary-300/50',

            // Transitions
            'transition-all duration-200 ease-in-out',

            // Misc
            'overflow-hidden no-underline',
            'cursor-pointer'
        ]
    },
    togglerIcon: {
        class: 'inline-block'
    },
    content: {
        class: [
            // Spacing
            'p-5',

            // Shape
            'border border-t-0 last:rounded-br-lg last:rounded-bl-lg',

            //Color
            'border-surface-300 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    footer: {
        class: [
            // Spacing
            'py-3 p-5',

            // Shape
            'border border-t-0 rounded-br-lg rounded-bl-lg',

            //Color
            'border-surface-300 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    transition: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    }
};
`,
    ripple: `export default {
    root: {
        class: ['block absolute bg-surface-0/50 rounded-full pointer-events-none'],
        style: 'transform: scale(0)'
    }
};
`,
    selectbutton: `export default {
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
`,
    slider: `export default {
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
`,
    tag: `export default {
    root: ({ props }) => ({
        class: [
            //Font
            'text-xs font-bold',

            //Alignments
            'inline-flex items-center justify-center',

            //Spacing
            'px-2 py-1',

            //Shape
            {
                'rounded-md': !props.rounded,
                'rounded-full': props.rounded
            },

            //Colors
            'text-white dark:text-surface-900',
            {
                'bg-primary-500 dark:bg-primary-400': props.severity == null || props.severity == 'primary',
                'bg-green-500 dark:bg-green-400': props.severity == 'success',
                'bg-blue-500 dark:bg-blue-400': props.severity == 'info',
                'bg-orange-500 dark:bg-orange-400': props.severity == 'warning',
                'bg-red-500 dark:bg-red-400': props.severity == 'danger'
            }
        ]
    }),
    value: {
        class: 'leading-normal'
    },
    icon: {
        class: 'mr-1 text-sm'
    }
};
`,
    tooltip: `export default {
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
};
`
};

export { Lara };
