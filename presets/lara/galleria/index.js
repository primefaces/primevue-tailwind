export default {
    root: {
        class: 'flex flex-col'
    },
    content: {
        class: 'flex flex-col'
    },
    itemwrapper: {
        class: 'flex flex-col relative'
    },
    itemcontainer: {
        class: 'relative flex h-full'
    },
    item: {
        class: [
            // Flex
            'flex justify-center items-center h-full w-full',

            // Sizing
            'h-full w-full'
        ]
    },
    thumbnailwrapper: {
        class: [
            // Flex
            'flex flex-col shrink-0',

            // Misc
            'overflow-auto'
        ]
    },
    thumbnailcontainer: {
        class: [
            // Flex
            'flex flex-row',

            // Spacing
            'p-4',

            // Colors
            'bg-black/90'
        ]
    },
    previousthumbnailbutton: {
        class: [
            // Positioning
            'self-center relative',

            // Display & Flexbox
            'flex shrink-0 justify-center items-center overflow-hidden',

            // Spacing
            'm-2',

            // Appearance
            'bg-transparent text-white w-8 h-8 rounded-full transition duration-200 ease-in-out',

            // Hover Effects
            'hover:bg-surface-0/10 hover:text-white',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    thumbnailitemscontainer: {
        class: 'overflow-hidden w-full'
    },
    thumbnailitems: {
        class: 'flex'
    },
    thumbnailitem: {
        class: ['overflow-auto flex items-center justify-center cursor-pointer opacity-50', 'flex-1 grow-0 shrink-0 w-20', 'hover:opacity-100 hover:transition-opacity hover:duration-300']
    },
    nextthumbnailbutton: {
        class: [
            // Positioning
            'self-center relative',

            // Display & Flexbox
            'flex shrink-0 justify-center items-center overflow-hidden',

            // Spacing
            'm-2',

            // Appearance
            'bg-transparent text-white w-8 h-8 rounded-full transition duration-200 ease-in-out',

            // Hover Effects
            'hover:bg-surface-0/10 hover:text-white',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    indicators: {
        class: ['flex items-center justify-center', 'p-4']
    },
    indicator: {
        class: 'mr-2'
    },
    indicatorbutton: ({ context }) => ({
        class: [
            // Size
            'w-4 h-4',

            // Appearance
            'rounded-full transition duration-200',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Conditional Appearance: Not Highlighted
            { 'bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600': !context.highlighted },

            // Conditional Appearance: Highlighted
            { 'bg-primary-500 hover:bg-primary-600': context.highlighted }
        ]
    }),
    mask: {
        class: ['fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90']
    },
    closebutton: {
        class: [
            // Positioning
            'absolute top-0 right-0',

            // Display & Flexbox
            'flex justify-center items-center overflow-hidden',

            // Spacing
            'm-2',

            // Appearance
            'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out',

            // Hover Effect
            'hover:text-white hover:bg-surface-0/10',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    closeicon: {
        class: 'w-6 h-6'
    },
    previousitembutton: {
        class: [
            // Display & Flexbox
            'inline-flex justify-center items-center overflow-hidden',

            // Appearance
            'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md',

            // Spacing
            'mx-2',

            // Positioning
            'fixed top-1/2 mt-[-0.5rem] left-0',

            // Hover Effect
            'hover:bg-surface-0/10 hover:text-white',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    nextitembutton: {
        class: [
            // Display & Flexbox
            'inline-flex justify-center items-center overflow-hidden',

            // Appearance
            'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md',

            // Spacing
            'mx-2',

            // Positioning
            'fixed top-1/2 mt-[-0.5rem] right-0',

            // Hover Effect
            'hover:bg-surface-0/10 hover:text-white',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    caption: {
        class: [
            // Positioning
            'absolute bottom-0 left-0 w-full',

            // Appearance
            'bg-black/50 text-white p-4'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-all duration-150 ease-in-out',
        leaveActiveClass: 'transition-all duration-150 ease-in',
        leaveToClass: 'opacity-0 scale-75'
    }
};
