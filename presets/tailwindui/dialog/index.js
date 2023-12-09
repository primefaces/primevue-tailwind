export default {
    root: ({ state }) => ({
        class: [
            'rounded-lg shadow-lg border-0',
            'max-h-90 transform scale-100',
            'm-0 w-[50vw]',
            'dark:border dark:border-surface-700',
            {
                'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': state.maximized
            }
        ]
    }),
    header: {
        class: ['flex items-center justify-between shrink-0', 'bg-surface-0 text-surface-700 border-t-0 rounded-tl-lg rounded-tr-lg p-6', 'dark:bg-surface-900 dark:text-surface-0/80']
    },
    headerTitle: {
        class: 'font-bold text-lg'
    },
    headerIcons: {
        class: 'flex items-center'
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
    content: ({ state, instance }) => ({
        class: [
            'overflow-y-auto',
            'bg-surface-0 text-surface-700 px-6 pb-8 pt-0',
            'dark:bg-surface-900 dark:text-surface-0/80',
            {
                grow: state.maximized
            },
            {
                'rounded-bl-lg rounded-br-lg': !instance.$slots.footer
            }
        ]
    }),
    footer: {
        class: ['shrink-0 ', 'border-t-0 bg-surface-0 text-surface-700 px-6 pb-6 text-right rounded-b-lg', 'dark:bg-surface-900 dark:text-surface-0/80']
    },
    mask: ({ props }) => ({
        class: ['transition duration-200', { 'bg-black/40 backdrop-blur-sm': props.modal }]
    }),
    transition: ({ props }) => {
        return props.position === 'top'
            ? {
                  enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                  enterActiveClass: 'transition-all duration-200 ease-out',
                  leaveActiveClass: 'transition-all duration-200 ease-out',
                  leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0'
              }
            : props.position === 'bottom'
            ? {
                  enterFromClass: 'opacity-0 scale-75 translate-y-full',
                  enterActiveClass: 'transition-all duration-200 ease-out',
                  leaveActiveClass: 'transition-all duration-200 ease-out',
                  leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0'
              }
            : props.position === 'left' || props.position === 'topleft' || props.position === 'bottomleft'
            ? {
                  enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                  enterActiveClass: 'transition-all duration-200 ease-out',
                  leaveActiveClass: 'transition-all duration-200 ease-out',
                  leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0'
              }
            : props.position === 'right' || props.position === 'topright' || props.position === 'bottomright'
            ? {
                  enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                  enterActiveClass: 'transition-all duration-200 ease-out',
                  leaveActiveClass: 'transition-all duration-200 ease-out',
                  leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
              }
            : {
                  enterFromClass: 'opacity-0 scale-75',
                  enterActiveClass: 'transition-all duration-200 ease-out',
                  leaveActiveClass: 'transition-all duration-200 ease-out',
                  leaveToClass: 'opacity-0 scale-75'
              };
    }
};
