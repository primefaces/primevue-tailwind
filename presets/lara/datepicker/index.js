export default {
    root: ({ props }) => ({
        class: [
            // Display and Position
            {
                flex: props.fluid,
                'inline-flex': !props.fluid
            },
            'max-w-full',
            'relative',

            // Misc
            { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
        ]
    }),
    pcInput: ({ props, parent }) => ({
        root: {
            class: [
                // Display
                'flex-auto w-[1%]',

                // Font
                'leading-none',

                // Colors
                'text-surface-600 dark:text-surface-200',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                'bg-surface-0 dark:bg-surface-900',
                'border',
                { 'border-surface-300 dark:border-surface-600': !props.invalid },

                // Invalid State
                { 'border-red-500 dark:border-red-400': props.invalid },

                // Spacing
                'm-0 p-3',

                // Shape
                'appearance-none',
                { 'rounded-md': !props.showIcon || props.iconDisplay == 'input' },
                { 'rounded-l-md  flex-1 pr-9': props.showIcon && props.iconDisplay !== 'input' },
                { 'rounded-md flex-1 pr-9': props.showIcon && props.iconDisplay === 'input' },

                // Transitions
                'transition-colors',
                'duration-200',

                // States
                { 'hover:border-primary-emphasis': !props.invalid },
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50',

                // Filled State *for FloatLabel
                { filled: parent.instance?.$name == 'FloatLabel' && props.modelValue !== null }
            ]
        }
    }),
    dropdownIcon: {
        class: ['absolute top-[50%] -mt-2', 'text-surface-600 dark:text-surface-200', 'right-[.75rem]']
    },
    dropdown: {
        class: [
            'relative w-10',

            // Alignments
            'items-center inline-flex text-center align-bottom justify-center',

            // Shape
            'rounded-r-md',

            // Size
            'px-4 py-3 leading-none',

            // Colors
            'text-primary-inverse',
            'bg-primary',
            'border border-primary',

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring',
            'hover:bg-primary-hover hover:border-primary-hover',
            'focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    inputIconContainer: 'absolute cursor-pointer top-1/2 right-3 -mt-3',
    inputIcon: 'inline-block text-base',
    panel: ({ props }) => ({
        class: [
            // Display & Position
            {
                absolute: !props.inline,
                'inline-block': props.inline
            },

            // Size
            { 'w-auto p-2 ': !props.inline },
            { 'min-w-[80vw] w-auto p-2 ': props.touchUI },
            { 'p-2 min-w-full': props.inline },

            // Shape
            'border rounded-lg',
            {
                'shadow-md': !props.inline
            },

            // Colors
            'bg-surface-0 dark:bg-surface-800',
            'border-surface-200 dark:border-surface-700',

            //misc
            { 'overflow-x-auto': props.inline }
        ]
    }),
    header: {
        class: [
            //Font
            'font-semibold',

            // Flexbox and Alignment
            'flex items-center justify-between',

            // Spacing
            'p-2',
            'm-0',

            // Shape
            'border-b',
            'rounded-t-md',

            // Colors
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-800',
            'border-surface-200 dark:border-surface-700'
        ]
    },
    title: {
        class: [
            // Text
            'leading-8',
            'mx-auto my-0'
        ]
    },
    selectMonth: {
        class: [
            // Font
            'text-base leading-[normal]',
            'font-semibold',

            // Colors
            'text-surface-700 dark:text-white/80',

            // Transitions
            'transition duration-200',

            // Spacing
            'p-2',
            'm-0 mr-2',

            // States
            'hover:text-primary-500 dark:hover:text-primary-400',

            // Misc
            'cursor-pointer'
        ]
    },
    selectYear: {
        class: [
            // Font
            'text-base leading-[normal]',
            'font-semibold',

            // Colors
            'text-surface-700 dark:text-white/80',

            // Transitions
            'transition duration-200',

            // Spacing
            'p-2',
            'm-0',

            // States
            'hover:text-primary-500 dark:hover:text-primary-400',

            // Misc
            'cursor-pointer'
        ]
    },
    table: {
        class: [
            // Font
            'text-base leading-none',
            // Size & Shape
            'border-collapse',
            'w-full',

            // Spacing
            'm-0 my-2'
        ]
    },
    tableHeaderCell: {
        class: [
            // Spacing
            'p-0 md:p-2'
        ]
    },
    weekHeader: {
        class: ['leading-[normal]', 'text-surface-600 dark:text-white/70', 'opacity-60 cursor-default']
    },
    weekNumber: {
        class: ['text-surface-600 dark:text-white/70', 'opacity-60 cursor-default']
    },
    weekday: {
        class: [
            // Colors
            'text-surface-500 dark:text-white/60'
        ]
    },
    dayCell: {
        class: [
            // Spacing
            'p-0 md:p-2'
        ]
    },
    weekLabelContainer: {
        class: [
            // Flexbox and Alignment
            'flex items-center justify-center',
            'mx-auto',

            // Shape & Size
            'w-10 h-10',
            'rounded-full',
            'border-transparent border',

            // Colors
            'opacity-60 cursor-default'
        ]
    },
    dayView: 'w-full',
    day: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'flex items-center justify-center',
            'mx-auto',

            // Shape & Size
            'w-10 h-10',
            'rounded-full',
            'border-transparent border',

            // Colors
            {
                'text-primary': context.date.today,
                'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled && !context.date.today,
                'bg-highlight': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.selected && !context.disabled,
                'hover:bg-highlight-emphasis': context.selected && !context.disabled
            },
            {
                'opacity-60 cursor-default': context.disabled,
                'cursor-pointer': !context.disabled
            }
        ]
    }),
    monthView: {
        class: [
            // Spacing
            'my-2'
        ]
    },
    month: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-1/3',
            'p-2',

            // Shape
            'rounded-md',

            // Colors
            {
                'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled,
                'bg-highlight': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.selected && !context.disabled,
                'hover:bg-highlight-emphasis': context.selected && !context.disabled
            },

            // Misc
            'cursor-pointer'
        ]
    }),
    yearView: {
        class: [
            // Spacing
            'my-2'
        ]
    },
    year: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-1/3',
            'p-2',

            // Shape
            'rounded-md',

            // Colors
            {
                'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled,
                'bg-highlight': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            {
                'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.selected && !context.disabled,
                'hover:bg-highlight-emphasis': context.selected && !context.disabled
            },

            // Misc
            'cursor-pointer'
        ]
    }),
    timePicker: {
        class: [
            // Flexbox
            'flex',
            'justify-center items-center',

            // Borders
            'border-t-1',
            'border-solid border-surface-200',

            // Spacing
            'p-2'
        ]
    },
    separatorContainer: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    separator: {
        class: [
            // Text
            'text-xl'
        ]
    },
    hourPicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    minutePicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    secondPicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    ampmPicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    calendarContainer: 'flex',
    calendar: 'flex-auto border-l first:border-l-0 border-surface-200',
    buttonbar: {
        class: [
            // Flexbox
            'flex justify-between items-center',

            // Spacing
            'py-3 px-0',

            // Shape
            'border-t border-surface-200 dark:border-surface-700'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
