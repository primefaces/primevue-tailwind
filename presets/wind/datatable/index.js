export default {
    root: ({ props }) => ({
        class: [
            'relative',
            {
                'flex flex-col h-full': props.scrollable && props.scrollHeight === 'flex'
            }
        ]
    }),
    loadingoverlay: {
        class: [
            'fixed w-full h-full t-0 l-0 bg-surface-100/40',
            'transition duration-200',
            'absolute flex items-center justify-center z-2',
            'dark:bg-surface-900/40' // Dark Mode
        ]
    },
    loadingicon: {
        class: 'w-8 h-8'
    },
    wrapper: ({ props }) => ({
        class: [
            {
                relative: props.scrollable,
                'flex flex-col grow h-full': props.scrollable && props.scrollHeight === 'flex'
            }
        ]
    }),
    header: ({ props }) => ({
        class: [
            'bg-slate-50 text-slate-700 border-surface-200 font-bold p-4',
            'dark:border-surface-700 dark:text-white/80 dark:bg-surface-900', // Dark Mode
            props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0'
        ]
    }),
    table: {
        class: 'w-full border-spacing-0'
    },
    thead: ({ context }) => ({
        class: [
            {
                'bg-slate-50 top-0 z-[1]': context.scrollable
            }
        ]
    }),
    tbody: ({ instance, context }) => ({
        class: [
            {
                'sticky z-[1]': instance.frozenRow && context.scrollable
            }
        ]
    }),
    tfoot: ({ context }) => ({
        class: [
            {
                'bg-slate-50 bottom-0 z-[1]': context.scrollable
            }
        ]
    }),
    footer: {
        class: [
            'bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-surface-200 font-bold p-4',
            'dark:border-surface-700 dark:text-white/80 dark:bg-surface-900' // Dark Mode
        ]
    },
    column: {
        headercell: ({ context, props }) => ({
            class: [
                'text-left border-0 border-b border-solid border-surface-200 dark:border-surface-700 font-bold',
                'transition duration-200',
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                context.sorted ? 'bg-primary-50 text-primary-700' : 'bg-slate-50 text-slate-700', // Sort
                context.sorted ? 'dark:text-white/80 dark:bg-primary-300' : 'dark:text-white/80 dark:bg-surface-900', // Dark Mode
                {
                    'sticky z-[1]': props.frozen || props.frozen === '', // Frozen Columns
                    'border-x border-y': context?.showGridlines,
                    'overflow-hidden space-nowrap border-y relative bg-clip-padding': context.resizable // Resizable
                }
            ]
        }),
        headercontent: {
            class: 'flex items-center'
        },
        bodycell: ({ props, context }) => ({
            class: [
                'text-left border-0 border-b border-solid border-surface-200',
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                'dark:text-white/80 dark:border-surface-700', // Dark Mode
                {
                    'sticky bg-inherit': props.frozen || props.frozen === '', // Frozen Columns
                    'border-x border-y': context?.showGridlines
                }
            ]
        }),
        footercell: ({ context }) => ({
            class: [
                'text-left border-0 border-b border-solid border-surface-200 font-bold',
                'bg-slate-50 text-slate-700',
                'transition duration-200',
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                'dark:text-white/80 dark:bg-surface-900 dark:border-surface-700', // Dark Mode
                {
                    'border-x border-y': context?.showGridlines
                }
            ]
        }),
        sorticon: ({ context }) => ({
            class: ['ml-2', context.sorted ? 'text-primary-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70']
        }),
        sortbadge: {
            class: [
                'flex items-center justify-center align-middle',
                'rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2',
                'text-primary-700 bg-primary-50',
                'dark:text-white/80 dark:bg-primary-400' // Dark Mode
            ]
        },
        columnfilter: {
            class: 'inline-flex items-center ml-auto'
        },
        filteroverlay: {
            class: [
                'bg-surface-0 text-surface-600 border-0 rounded-md min-w-[12.5rem]',
                'dark:bg-surface-900 dark:border-surface-700 dark:text-white/80' //Dark Mode
            ]
        },
        filtermatchmodedropdown: {
            root: {
                class: 'min-[0px]:flex mb-2'
            }
        },
        filterrowitems: {
            class: 'm-0 p-0 py-3 list-none'
        },
        filterrowitem: ({ context }) => ({
            class: ['m-0 py-3 px-5 bg-transparent', 'transition duration-200', context?.highlighted ? 'text-primary-700 bg-primary-100 dark:text-white/80 dark:bg-primary-300' : 'text-surface-600 bg-transparent dark:text-white/80 dark:bg-transparent']
        }),
        filteroperator: {
            class: [
                'px-5 py-3 border-b border-solid border-surface-200 text-slate-700 bg-slate-50 rounded-t-md',
                'dark:border-surface-700 dark:text-white/80 dark:bg-surface-900' // Dark Mode
            ]
        },
        filteroperatordropdown: {
            root: {
                class: 'min-[0px]:flex'
            }
        },
        filterconstraint: {
            class: 'p-5 border-b border-solid border-surface-200 dark:border-surface-700'
        },
        filteraddrule: {
            class: 'py-3 px-5'
        },
        filteraddrulebutton: {
            root: {
                class: 'justify-center w-full min-[0px]:text-sm'
            },
            label: {
                class: 'flex-auto grow-0'
            },
            icon: {
                class: 'mr-2'
            }
        },
        filterremovebutton: {
            root: {
                class: 'ml-2'
            },
            label: {
                class: 'grow-0'
            }
        },
        filterbuttonbar: {
            class: 'flex items-center justify-between p-5'
        },
        filterclearbutton: {
            root: {
                class: 'w-auto min-[0px]:text-sm border-primary-500 text-primary-500 px-4 py-3'
            }
        },
        filterapplybutton: {
            root: {
                class: 'w-auto min-[0px]:text-sm px-4 py-3'
            }
        },
        filtermenubutton: ({ context }) => ({
            class: [
                'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2',
                'w-8 h-8 rounded-[50%]',
                'transition duration-200',
                'hover:text-slate-700 hover:bg-surface-300/20', // Hover
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50', // Focus
                'dark:text-white/70 dark:hover:text-white/80 dark:bg-surface-900', // Dark Mode
                {
                    'bg-primary-50 text-primary-700': context.active
                }
            ]
        }),
        headerfilterclearbutton: ({ context }) => ({
            class: [
                'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative',
                'text-left bg-transparent m-0 p-0 border-none select-none ml-2',
                {
                    invisible: !context.hidden
                }
            ]
        }),
        columnresizer: {
            class: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent'
        },
        rowreordericon: {
            class: 'cursor-move'
        },
        roweditorinitbutton: {
            class: [
                'inline-flex items-center justify-center overflow-hidden relative',
                'text-left cursor-pointer select-none',
                'w-8 h-8 border-0 rounded-[50%]',
                'transition duration-200',
                'text-slate-700 border-transparent',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50', //Focus
                'hover:text-slate-700 hover:bg-surface-300/20', //Hover
                'dark:text-white/70' // Dark Mode
            ]
        },
        roweditorsavebutton: {
            class: [
                'inline-flex items-center justify-center overflow-hidden relative',
                'text-left cursor-pointer select-none',
                'w-8 h-8 border-0 rounded-[50%]',
                'transition duration-200',
                'text-slate-700 border-transparent',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50', //Focus
                'hover:text-slate-700 hover:bg-surface-300/20', //Hover
                'dark:text-white/70' // Dark Mode
            ]
        },
        roweditorcancelbutton: {
            class: [
                'inline-flex items-center justify-center overflow-hidden relative',
                'text-left cursor-pointer select-none',
                'w-8 h-8 border-0 rounded-[50%]',
                'transition duration-200',
                'text-slate-700 border-transparent',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50', //Focus
                'hover:text-slate-700 hover:bg-surface-300/20', //Hover
                'dark:text-white/70' // Dark Mode
            ]
        },
        radiobuttonwrapper: {
            class: ['relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6']
        },
        radiobutton: ({ context }) => ({
            class: [
                'flex justify-center items-center',
                'border-2 w-6 h-6 text-surface-700 rounded-full transition duration-200 ease-in-out',
                context.checked ? 'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400' : 'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900',
                {
                    'hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !context.disabled,
                    'cursor-default opacity-60': context.disabled
                }
            ]
        }),
        radiobuttonicon: ({ context }) => ({
            class: ['transform rounded-full', 'block w-3 h-3 transition duration-200 bg-surface-0 dark:bg-surface-900', { 'backface-hidden scale-10 invisible': context.checked === false, 'transform scale-100 visible': context.checked === true }]
        }),
        headercheckboxwrapper: {
            class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
        },
        headercheckbox: ({ context }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-surface-600 rounded-lg transition-colors duration-200',
                context.checked ? 'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400' : 'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900',
                {
                    'hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !context.disabled,
                    'cursor-default opacity-60': context.disabled
                }
            ]
        }),
        headercheckboxicon: {
            class: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-surface-900'
        },
        checkboxwrapper: {
            class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
        },
        checkbox: ({ context }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-surface-600 rounded-lg transition-colors duration-200',
                context.checked ? 'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400' : 'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900',
                {
                    'hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !context.disabled,
                    'cursor-default opacity-60': context.disabled
                }
            ]
        }),
        checkboxicon: {
            class: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-surface-900'
        },
        transition: {
            enterFromClass: 'opacity-0 scale-y-[0.8]',
            enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
            leaveActiveClass: 'transition-opacity duration-100 ease-linear',
            leaveToClass: 'opacity-0'
        }
    },
    bodyrow: ({ context }) => ({
        class: [
            context.selected ? 'bg-primary-50 text-primary-700 dark:bg-primary-300' : 'bg-surface-0 text-surface-600 dark:bg-surface-900',
            context.stripedRows ? (context.index % 2 === 0 ? 'bg-surface-0 text-surface-600 dark:bg-surface-900' : 'bg-primary-100/50 text-surface-600 dark:bg-surface-900') : '',
            'transition duration-200',
            'focus:outline focus:outline-[0.15rem] focus:outline-primary-200 focus:outline-offset-[-0.15rem]', // Focus
            'dark:text-white/80 dark:focus:outline dark:focus:outline-[0.15rem] dark:focus:outline-primary-300 dark:focus:outline-offset-[-0.15rem]', // Dark Mode
            {
                'cursor-pointer': context.selectable,
                'hover:bg-surface-300/20 hover:text-surface-600': context.selectable && !context.selected // Hover
            }
        ]
    }),
    rowexpansion: {
        class: 'bg-surface-0 text-surface-600 dark:bg-surface-900 dark:text-white/80'
    },
    rowgroupheader: {
        class: ['sticky z-[1]', 'bg-surface-0 text-surface-600', 'dark:bg-surface-900', 'transition duration-200']
    },
    rowgroupfooter: {
        class: ['sticky z-[1]', 'bg-surface-0 text-surface-600', 'dark:bg-surface-900', 'transition duration-200']
    },
    rowgrouptoggler: {
        class: [
            'text-left m-0 p-0 cursor-pointer select-none',
            'inline-flex items-center justify-center overflow-hidden relative',
            'w-8 h-8 text-surface-500 border-0 bg-transparent rounded-[50%]',
            'transition duration-200',
            'dark:text-white/70' // Dark Mode
        ]
    },
    rowgrouptogglericon: {
        class: 'inline-block w-4 h-4'
    },
    resizehelper: {
        class: 'absolute hidden w-px z-10 bg-primary-500 dark:bg-primary-300'
    }
};
