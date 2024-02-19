export default {
    input: {
        class: 'hidden'
    },
    buttonbar: {
        class: [
            // Flexbox
            'flex',
            'flex-wrap',

            // Colors
            'bg-surface-50',
            'dark:bg-surface-800',
            'text-surface-700',
            'dark:text-white/80',

            // Spacing
            'p-5',
            'gap-2',

            // Borders
            'border',
            'border-solid',
            'border-surface-50',
            'dark:border-surface-700',
            'border-b-0',

            // Shape
            'rounded-tr-lg',
            'rounded-tl-lg'
        ]
    },
    chooseButton: {
        class: [
            // Colors
            'text-white',
            'bg-primary-500',
            'border-primary-500',

            // Spacing
            'p-3',
            'px-5',

            // Shape
            'rounded-md',

            // Font
            'text-base',

            // Misc
            'overflow-hidden',
            'relative'
        ]
    },
    chooseIcon: {
        class: ['mr-2', 'inline-block']
    },
    chooseButtonLabel: {
        class: ['flex-1', 'font-bold']
    },
    uploadbutton: {
        icon: {
            class: 'mr-2'
        }
    },
    cancelbutton: {
        icon: {
            class: 'mr-2'
        }
    },
    content: {
        class: [
            // Position
            'relative',

            // Colors
            'bg-surface-0',
            'dark:bg-surface-900',
            'text-surface-700',
            'dark:text-white/80',

            // Spacing
            'p-8',

            // Borders
            'border',
            'border-surface-50',
            'dark:border-surface-700',

            // Shape
            'rounded-b-lg'
        ]
    },
    file: {
        class: [
            // Flexbox
            'flex',
            'items-center',
            'flex-wrap',

            // Spacing
            'p-4',
            'mb-2',
            'last:mb-0',

            // Borders
            'border',
            'border-surface-50',
            'dark:border-surface-700',
            'gap-2',

            // Shape
            'rounded'
        ]
    },
    thumbnail: {
        class: 'shrink-0'
    },
    fileName: {
        class: 'mb-2'
    },
    fileSize: {
        class: 'mr-2'
    },
    uploadicon: {
        class: 'mr-2'
    }
};
