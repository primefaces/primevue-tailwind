export default {
    root: ({ props }) => ({
        class: [
            'flex flex-col pointer-events-auto relative transition-transform duration-300',
            'bg-surface-0 text-surface-700 border-0 shadow-lg',
            {
                '!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': props.position == 'full',
                'h-full w-80': props.position == 'left' || props.position == 'right',
                'h-40 w-full': props.position == 'top' || props.position == 'bottom'
            },
            'dark:border dark:border-surface-700 dark:bg-surface-900 dark:text-white/80'
        ]
    }),
    header: {
        class: ['flex items-center justify-end', 'p-5']
    },
    closeButton: {
        class: [
            'flex items-center justify-center overflow-hidden relative',
            'w-8 h-8 text-surface-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
            'hover:text-surface-700 hover:border-transparent hover:bg-surface-100',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50 ring-inset', // focus
            'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-surface-800/80'
        ]
    },
    closeButtonIcon: {
        class: 'w-4 h-4 inline-block'
    },
    content: {
        class: ['p-5 pt-0 h-full w-full', 'grow overflow-y-auto']
    },
    mask: ({ props }) => ({
        class: ['flex pointer-events-auto', 'transition duration-200 z-20 transition-colors', { 'bg-black/40 backdrop-blur-sm': props.modal }]
    }),
    transition: ({ props }) => {
        return props.position === 'top'
            ? {
                  enterFromClass: 'translate-x-0 -translate-y-full translate-z-0',
                  leaveToClass: 'translate-x-0 -translate-y-full translate-z-0'
              }
            : props.position === 'bottom'
            ? {
                  enterFromClass: 'translate-x-0 translate-y-full translate-z-0',
                  leaveToClass: 'translate-x-0 translate-y-full translate-z-0'
              }
            : props.position === 'left'
            ? {
                  enterFromClass: '-translate-x-full translate-y-0 translate-z-0',
                  leaveToClass: '-translate-x-full translate-y-0 translate-z-0'
              }
            : props.position === 'right'
            ? {
                  enterFromClass: 'translate-x-full translate-y-0 translate-z-0',
                  leaveToClass: 'translate-x-full translate-y-0 translate-z-0'
              }
            : {
                  enterFromClass: 'opacity-0',
                  enterActiveClass: 'transition-opacity duration-400 ease-in',
                  leaveActiveClass: 'transition-opacity duration-400 ease-in',
                  leaveToClass: 'opacity-0'
              };
    }
};
