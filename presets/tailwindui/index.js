import badgedirective from './badgedirective';
import button from './button';
import dropdown from './dropdown';
import fieldset from './fieldset';
import global from './global';
import inputnumber from './inputnumber';
import inputtext from './inputtext';
import panel from './panel';
import ripple from './ripple';
import tooltip from './tooltip';

/**
 * @todo remove this line
 */
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
/***********/

export default {
    global,
    directives: {
        badgedirective,
        ripple,
        tooltip
    },

    //forms
    dropdown,
    inputnumber,
    inputtext,

    //buttons
    button,

    //panels
    panel,
    fieldset,

    //un-refactored components (for landing page)

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
