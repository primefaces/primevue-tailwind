export default {
    root: {
        class: 'relative inline-block'
    },
    button: {
        class: [
            'absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300',
            'bg-transparent text-surface-100',
            'hover:opacity-100 hover:cursor-pointer hover:bg-black hover:bg-opacity-50' //Hover
        ]
    },
    mask: {
        class: ['fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90']
    },
    toolbar: {
        class: ['absolute top-0 right-0 flex', 'p-4']
    },
    rotaterightbutton: {
        class: [
            'flex justify-center items-center',
            'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
            'hover:text-white hover:bg-surface-0/10',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    rotaterighticon: {
        class: 'w-6 h-6'
    },
    rotateleftbutton: {
        class: [
            'flex justify-center items-center',
            'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
            'hover:text-white hover:bg-surface-0/10',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    rotatelefticon: {
        class: 'w-6 h-6'
    },
    zoomoutbutton: {
        class: [
            'flex justify-center items-center',
            'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
            'hover:text-white hover:bg-surface-0/10',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    zoomouticon: {
        class: 'w-6 h-6'
    },
    zoominbutton: {
        class: [
            'flex justify-center items-center',
            'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
            'hover:text-white hover:bg-surface-0/10',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    zoominicon: {
        class: 'w-6 h-6'
    },
    closebutton: {
        class: [
            'flex justify-center items-center',
            'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
            'hover:text-white hover:bg-surface-0/10',
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    closeicon: {
        class: 'w-6 h-6'
    },
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-all duration-150 ease-in-out',
        leaveActiveClass: 'transition-all duration-150 ease-in',
        leaveToClass: 'opacity-0 scale-75'
    }
};
