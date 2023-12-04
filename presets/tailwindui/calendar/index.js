export default {
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
