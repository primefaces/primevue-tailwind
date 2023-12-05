export default {
    root: ({ props }) => ({
        class: [
            // Display
            'inline-flex',

            { 'flex-col': props.showButtons && props.buttonLayout == 'vertical' },
            { 'flex-auto': props.buttonLayout !== 'vertical' },

            //Sizing
            { '!w-16': props.showButtons && props.buttonLayout == 'vertical' }
        ]
    }),
    input: {
        root: ({ parent }) => ({
            class: [
                //Text
                { 'text-center': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Shape
                { 'rounded-tr-none rounded-br-none': parent.props.showButtons },
                { 'rounded-tl-none rounded-bl-none': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-none': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //Position
                { 'order-2': parent.props.buttonLayout == 'horizontal' || parent.props.buttonLayout == 'vertical' }
            ]
        })
    },
    buttongroup: {
        class: ['flex', 'flex-col']
    },

    //TODO: Label of these buttons should be h-0
    incrementbutton: {
        root: ({ parent }) => ({
            class: [
                // Display
                'flex flex-auto',

                // Alignment
                'items-center',
                'justify-center',
                'text-center align-bottom',

                //Position
                'relative',
                { 'order-3': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'order-1': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //Color
                'text-white dark:text-surface-900',
                'bg-primary-500 dark:bg-primary-400',
                'border border-primary-500 dark:border-primary-400',

                // Sizing
                'w-[3rem]',
                { '!p-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'h-[1.42rem]': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'w-full': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Shape
                'rounded-md',
                { 'rounded-tl-none rounded-br-none rounded-bl-none': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'rounded-bl-none rounded-tl-none': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-bl-none rounded-br-none': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //States
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300',

                //Misc
                'cursor-pointer overflow-hidden select-none'
            ]
        })
    },
    decrementbutton: {
        root: ({ parent }) => ({
            class: [
                // Display
                'flex flex-auto',

                // Alignment
                'items-center',
                'justify-center',
                'text-center align-bottom',

                //Position
                'relative',
                { 'order-1': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'order-3': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //Color
                'text-white dark:text-surface-900',
                'bg-primary-500 dark:bg-primary-400',
                'border border-primary-500 dark:border-primary-400',

                // Sizing
                'w-[3rem]',
                { 'h-[1.42rem]': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { '!p-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'w-full': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Shape
                'rounded-md',
                { 'rounded-tr-none rounded-tl-none rounded-bl-none': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'rounded-tr-none rounded-br-none ': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-tr-none rounded-tl-none ': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //States
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300',

                //Misc
                'cursor-pointer overflow-hidden select-none'
            ]
        })
    }
};
