export default {
    root: {
        class: ['w-96', 'opacity-90']
    },
    container: ({ props }) => ({
        class: [
            'my-4 rounded-md w-full',
            {
                'bg-blue-100 border-solid border-0 border-l-4 border-blue-500 text-blue-700': props.message.severity == 'info',
                'bg-green-100 border-solid border-0 border-l-4 border-green-500 text-green-700': props.message.severity == 'success',
                'bg-orange-100 border-solid border-0 border-l-4 border-orange-500 text-orange-700': props.message.severity == 'warn',
                'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700': props.message.severity == 'error'
            }
        ]
    }),
    content: {
        class: 'flex items-center py-5 px-7'
    },
    icon: {
        class: ['w-6 h-6', 'text-lg mr-2']
    },
    text: {
        class: 'text-base font-normal flex flex-col flex-1 grow shrink ml-4'
    },
    summary: {
        class: 'font-bold block'
    },
    detail: {
        class: 'mt-1 block'
    },
    closebutton: {
        class: ['w-8 h-8 rounded-full bg-transparent transition duration-200 ease-in-out', 'ml-auto overflow-hidden relative', 'flex items-center justify-center', 'hover:bg-surface-0/30']
    },
    transition: {
        enterFromClass: 'opacity-0 translate-x-0 translate-y-2/4 translate-z-0',
        enterActiveClass: 'transition-transform transition-opacity duration-300',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0 opacity-0 mb-0 overflow-hidden'
    }
};
