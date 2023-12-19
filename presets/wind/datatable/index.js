export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Flex & Alignment
            { 'flex flex-col': props.scrollable && props.scrollHeight === 'flex' },

            // Size
            { 'h-full': props.scrollable && props.scrollHeight === 'flex' }
        ]
    }),
    loadingoverlay: {
        class: [
            // Position
            'absolute',
            'top-0 left-0',
            'z-20',

            // Flex & Alignment
            'flex items-center justify-center',

            // Size
            'w-full h-full',

            // Color
            'bg-surface-100/40 dark:bg-surface-900/40',

            // Transition
            'transition duration-200'
        ]
    },
    loadingicon: {
        class: 'w-8 h-8'
    },
    wrapper: ({ props }) => ({
        class: [
            { relative: props.scrollable, 'flex flex-col grow': props.scrollable && props.scrollHeight === 'flex' },

            // Size
            { 'h-full': props.scrollable && props.scrollHeight === 'flex' }
        ]
    }),
    header: ({ props }) => ({
        class: [
            'font-bold',

            // Shape
            props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0',

            // Spacing
            'p-4',

            // Color
            'bg-surface-50 dark:bg-surface-900',
            'border-surface-200 dark:border-surface-700',
            'text-surface-700 dark:text-white/80'
        ]
    }),
    table: {
        class: 'w-full border-spacing-0'
    },
    thead: ({ context }) => ({
        class: [
            {
                'bg-surface-50 top-0 z-[1]': context.scrollable
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
                'bg-surface-50 bottom-0 z-[1]': context.scrollable
            }
        ]
    }),
    footer: {
        class: [
            'font-bold',

            // Shape
            'border-t-0 border-b border-x-0',

            // Spacing
            'p-4',

            // Color
            'bg-surface-50 dark:bg-surface-900',
            'border-surface-200 dark:border-surface-700',
            'text-surface-700 dark:text-white/80'
        ]
    },
    column: {
        headercell: ({ context, props }) => ({
            class: [
                'font-bold',

                // Position
                { 'sticky z-[1]': props.frozen || props.frozen === '' },
                { relative: context.resizable },

                // Alignment
                'text-left',

                // Shape
                { 'border-x border-y': context?.showGridlines },
                'border-0 border-b border-solid',

                // Spacing
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4',

                // Color
                context.sorted ? 'bg-primary-50 text-primary-700' : 'bg-surface-50 text-surface-700',
                context.sorted ? 'dark:text-white/80 dark:bg-primary-300' : 'dark:text-white/80 dark:bg-surface-900',
                'border-surface-200 dark:border-surface-700 ',

                // Transition
                'transition duration-200',

                // Misc
                {
                    'overflow-hidden space-nowrap border-y bg-clip-padding': context.resizable // Resizable
                }
            ]
        }),
        headercontent: {
            class: 'flex items-center'
        },
        bodycell: ({ props, context }) => ({
            class: [
                //Position
                { 'sticky bg-inherit': props.frozen || props.frozen === '' },

                // Alignment
                'text-left',

                // Shape
                'border-0 border-b border-solid',
                { 'border-x border-y': context?.showGridlines },

                // Spacing
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4',

                // Color
                'border-surface-200 dark:border-surface-700',
                'text-surface-700 dark:text-white/80'
            ]
        }),
        footercell: ({ context }) => ({
            class: [
                // Font
                'font-bold',

                // Alignment
                'text-left',

                // Shape
                'border-0 border-b border-solid',
                { 'border-x border-y': context?.showGridlines },

                // Spacing
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4',

                // Color
                'border-surface-200 dark:border-surface-700',
                'text-surface-700 dark:text-white/80',
                'bg-surface-50 dark:bg-surface-900',

                // Transition
                'transition duration-200'
            ]
        }),
        sorticon: ({ context }) => ({
            class: ['ml-2', context.sorted ? 'text-primary-700 dark:text-white/80' : 'text-surface-700 dark:text-white/70']
        }),
        sortbadge: {
            class: [
                // Flex & Alignment
                'flex items-center justify-center align-middle',

                // Shape
                'rounded-[50%]',

                // Size
                'w-[1.143rem] leading-[1.143rem]',

                // Spacing
                'ml-2',

                // Color
                'text-primary-700 dark:text-white/80',
                'bg-primary-50 dark:bg-primary-400'
            ]
        },
        columnfilter: {
            class: 'inline-flex items-center ml-auto'
        },
        filteroverlay: {
            class: [
                // Shape
                'border-0 rounded-md',

                // Size
                'min-w-[12.5rem]',

                // Color
                'text-surface-600 dark:text-white/80',
                'bg-surface-0 dark:bg-surface-900',
                'dark:border-surface-700 '
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
            class: [
                // Spacing
                'm-0 py-3 px-5',

                // Color
                'bg-transparent',
                { 'text-primary-700 bg-primary-100 dark:text-white/80 dark:bg-primary-300': context?.highlighted },
                { 'text-surface-600 bg-transparent dark:text-white/80 dark:bg-transparent': !context?.highlighted },

                // Transition
                'transition duration-200'
            ]
        }),
        filteroperator: {
            class: [
                // Spacing
                'px-5 py-3',

                // Shape
                'border-b border-solid',
                'rounded-t-md',

                // Color
                'text-surface-700 dark:text-white/80',
                'border-surface-200 dark:border-surface-700',
                'bg-surface-0 dark:bg-surface-900'
            ]
        },
        filteroperatordropdown: {
            root: {
                class: 'min-[0px]:flex'
            }
        },
        filterconstraint: {
            class: [
                // Spacing
                'p-5',

                // Shape
                'border-b border-solid',

                // Color
                'border-surface-200 dark:border-surface-700'
            ]
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
            class: [
                // Flex & Alignment
                'flex items-center justify-between',

                // Space
                'p-5'
            ]
        },
        filterclearbutton: {
            root: {
                class: [
                    // Size
                    'w-auto min-[0px]:text-sm',

                    // Spacing
                    'px-4 py-3',

                    // Color
                    'border-primary-500 text-primary-500'
                ]
            }
        },
        filterapplybutton: {
            root: {
                class: [
                    // Size
                    'w-auto min-[0px]:text-sm',

                    // Spacing
                    'px-4 py-3'
                ]
            }
        },
        filtermenubutton: ({ context }) => ({
            class: [
                'relative',
                // Flex & Alignment
                'inline-flex items-center justify-center',

                // Size
                'w-8 h-8',

                // Spacing
                'ml-2',

                // Shape
                'rounded-[50%]',

                // Color
                { 'bg-primary-50 text-primary-700': context.active },
                'dark:text-white/70 dark:hover:text-white/80 dark:bg-surface-900',

                // States
                'hover:text-surface-700 hover:bg-surface-300/20',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

                // Transition
                'transition duration-200',

                // Misc
                'cursor-pointer no-underline overflow-hidden'
            ]
        }),
        headerfilterclearbutton: ({ context }) => ({
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Shape
                'border-none',

                // Spacing
                'm-0 p-0 ml-2',

                // Color
                'bg-transparent',

                // Misc
                'cursor-pointer no-underline overflow-hidden select-none',
                {
                    invisible: !context.hidden
                }
            ]
        }),
        columnresizer: {
            class: [
                'block',

                // Position
                'absolute top-0 right-0',

                // Sizing
                'w-2 h-full',

                // Spacing
                'm-0 p-0',

                // Color
                'border border-transparent',

                // Misc
                'cursor-col-resize'
            ]
        },
        rowreordericon: {
            class: 'cursor-move'
        },
        roweditorinitbutton: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Size
                'w-8 h-8',

                // Shape
                'border-0 rounded-[50%]',

                // Color
                'text-surface-700 dark:text-white/70',
                'border-transparent',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
                'hover:text-surface-700 hover:bg-surface-300/20',

                // Transition
                'transition duration-200',

                // Misc
                'overflow-hidden',
                'cursor-pointer select-none'
            ]
        },
        roweditorsavebutton: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Size
                'w-8 h-8',

                // Shape
                'border-0 rounded-[50%]',

                // Color
                'text-surface-700 dark:text-white/70',
                'border-transparent',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
                'hover:text-surface-700 hover:bg-surface-300/20',

                // Transition
                'transition duration-200',

                // Misc
                'overflow-hidden',
                'cursor-pointer select-none'
            ]
        },
        roweditorcancelbutton: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Size
                'w-8 h-8',

                // Shape
                'border-0 rounded-[50%]',

                // Color
                'text-surface-700 dark:text-white/70',
                'border-transparent',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
                'hover:text-surface-700 hover:bg-surface-300/20',

                // Transition
                'transition duration-200',

                // Misc
                'overflow-hidden',
                'cursor-pointer select-none'
            ]
        },
        radiobuttonwrapper: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex align-bottom',

                // Size
                'w-6 h-6',

                // Misc
                'cursor-pointer select-none'
            ]
        },
        radiobutton: ({ context }) => ({
            class: [
                // Flexbox
                'flex justify-center items-center',

                // Size
                'w-6 h-6',

                // Shape
                'border-2 rounded-full',

                // Color
                'text-surface-700',
                { 'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked },
                { 'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked },

                // States
                { 'hover:border-primary-500 dark:hover:border-primary-400': !context.disabled },
                { 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !context.disabled },

                // Transition
                'transition duration-200 ease-in-out',

                // Misc
                { 'cursor-default opacity-60': context.disabled }
            ]
        }),
        radiobuttonicon: ({ context }) => ({
            class: [
                'block',

                // Shape
                'rounded-full',

                // Size
                'w-3 h-3',

                // Color
                'bg-surface-0 dark:bg-surface-900',

                // Transition
                'transition duration-200 transform',
                {
                    'backface-hidden scale-10 invisible': context.checked === false,
                    'transform scale-100 visible': context.checked === true
                }
            ]
        }),
        headercheckboxwrapper: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex align-bottom',

                // Size
                'w-6 h-6',

                // Misc
                'cursor-pointer select-none'
            ]
        },
        headercheckbox: ({ context }) => ({
            class: [
                // Flex & Alignment
                'flex items-center justify-center',

                // Shape
                'border-2 rounded-lg',

                // Size
                'w-6 h-6',

                // Color
                'text-surface-600',
                { 'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked },
                { 'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked },

                {
                    'hover:border-primary-500 dark:hover:border-primary-400 ': !context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !context.disabled
                },

                // Transition
                'transition-colors duration-200',

                // Misc
                { 'cursor-default opacity-60': context.disabled }
            ]
        }),
        headercheckboxicon: {
            class: [
                // Size
                'w-4 h-4',
                'text-base',

                // Color
                'text-white dark:text-surface-900',

                // Transition
                'transition-all duration-200'
            ]
        },
        checkboxwrapper: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex align-bottom',

                // Size
                'w-6 h-6',

                // Misc
                'cursor-pointer select-none'
            ]
        },
        checkbox: ({ context }) => ({
            class: [
                // Flex & Alignment
                'flex items-center justify-center',

                // Shape
                'border-2 rounded-lg',

                // Size
                'w-6 h-6',

                // Color
                'text-surface-600',
                { 'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400': context.checked },
                { 'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked },

                {
                    'hover:border-primary-500 dark:hover:border-primary-400 ': !context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50': !context.disabled
                },

                // Transition
                'transition-colors duration-200',

                // Misc
                { 'cursor-default opacity-60': context.disabled }
            ]
        }),
        checkboxicon: {
            class: [
                // Size
                'w-4 h-4',
                'text-base',

                // Color
                'text-white dark:text-surface-900',

                // Transition
                'transition-all duration-200'
            ]
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
            // Color
            'dark:text-white/80',
            { 'bg-primary-50 text-primary-700 dark:bg-primary-300': context.selected },
            { 'bg-surface-0 text-surface-600 dark:bg-surface-900': !context.selected },
            context.stripedRows ? (context.index % 2 === 0 ? 'bg-surface-0 text-surface-600 dark:bg-surface-900' : 'bg-primary-100/50 text-surface-600 dark:bg-surface-900') : '',

            // State
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50',
            { 'hover:bg-surface-300/20 hover:text-surface-600': context.selectable && !context.selected },

            // Transition
            'transition duration-200',

            // Misc
            { 'cursor-pointer': context.selectable }
        ]
    }),
    rowexpansion: {
        class: 'bg-surface-0 dark:bg-surface-900 text-surface-600 dark:text-white/80'
    },
    rowgroupheader: {
        class: ['sticky z-[1]', 'bg-surface-0 text-surface-600', 'dark:bg-surface-900', 'transition duration-200']
    },
    rowgroupfooter: {
        class: ['sticky z-[1]', 'bg-surface-0 text-surface-600', 'dark:bg-surface-900', 'transition duration-200']
    },
    rowgrouptoggler: {
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',
            'text-left',

            // Spacing
            'm-0 p-0',

            // Size
            'w-8 h-8',

            // Shape
            'border-0 rounded-[50%]',

            // Color
            'text-surface-500 dark:text-white/70',
            'bg-transparent',

            // Transition
            'transition duration-200',

            // Misc
            'overflow-hidden',
            'cursor-pointer select-none'
        ]
    },
    rowgrouptogglericon: {
        class: 'inline-block w-4 h-4'
    },
    resizehelper: {
        class: 'absolute hidden w-px z-10 bg-primary-500 dark:bg-primary-300'
    }
};
