export default {
    root: ({ props }) => ({
        class: [
            'inline-block',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    input: {
        class: [
            'm-0',
            'font-sans text-base text-surface-600 bg-surface-0 dark:bg-surface-900 p-3 border border-surface-50 dark:border-surface-700 transition-colors duration-200 rounded-lg cursor-pointer',
            'hover:border-primary-500 focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
            'w-8 h-8'
        ]
    },
    panel: ({ props }) => ({
        class: [
            'shadow-md',
            'bg-surface-800 border-surface-900',
            {
                'relative h-48 w-52': props.inline,
                'absolute h-48 w-52': !props.inline
            }
        ]
    }),
    selector: {
        class: 'absolute h-44 w-40 top-2 left-2'
    },
    color: {
        class: 'h-44 w-40',
        style: 'background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)'
    },
    colorhandle: {
        class: ['rounded-full border border-solid cursor-pointer h-3 w-3 absolute  opacity-85', 'border-white']
    },
    hue: {
        class: ['h-44 w-6 absolute top-2 left-44 opacity-85'],
        style: 'background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)'
    },
    huehandle: {
        class: 'border-solid border-2 cursor-pointer h-2 w-8 left-0 -ml-1 -mt-1 opacity-85 absolute'
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
