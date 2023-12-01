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
    input: ({ props }) => ({
        class: [
            //Text
            { 'text-center': props.showButtons && props.buttonLayout == 'vertical' },

            // Shape
            { 'rounded-tr-none rounded-br-none': props.showButtons },
            { 'rounded-tl-none rounded-bl-none': props.showButtons && props.buttonLayout == 'horizontal' },
            { 'rounded-none': props.showButtons && props.buttonLayout == 'vertical' },

            //Position
            { 'order-2': props.buttonLayout == 'horizontal' || props.buttonLayout == 'vertical' }
        ]
    }),
    buttongroup: ({ props }) => ({
        class: [
            // Flex
            'flex',
            'flex-col'
        ]
    }),
    incrementbutton: ({ props }) => ({
        class: [
            // Display
            'flex flex-auto',

            // Alignment
            'items-center',
            'justify-center',

            //Position
            { 'order-3': props.showButtons && props.buttonLayout == 'horizontal' },
            { 'order-1': props.showButtons && props.buttonLayout == 'vertical' },

            // Sizing
            'w-[3rem]',
            { '!p-0': props.showButtons && props.buttonLayout == 'stacked' },
            { 'h-[1.2rem]': props.showButtons && props.buttonLayout == 'stacked' },
            { 'w-full': props.showButtons && props.buttonLayout == 'vertical' },

            // Shape
            { 'rounded-tl-none rounded-br-none rounded-bl-none': props.showButtons && props.buttonLayout == 'stacked' },
            { 'rounded-bl-none rounded-tl-none': props.showButtons && props.buttonLayout == 'horizontal' },
            { 'rounded-bl-none rounded-br-none': props.showButtons && props.buttonLayout == 'vertical' }
        ]
    }),
    decrementbutton: ({ props }) => ({
        class: [
            // Flex
            'flex flex-auto last:height-auto',

            // Alignment
            'items-center',
            'justify-center',

            //Position
            { 'order-1': props.showButtons && props.buttonLayout == 'horizontal' },
            { 'order-3': props.showButtons && props.buttonLayout == 'vertical' },

            // Sizing
            'w-[3rem]',
            { 'h-[1.2rem]': props.showButtons && props.buttonLayout == 'stacked' },
            { '!p-0': props.showButtons && props.buttonLayout == 'stacked' },
            { 'w-full': props.showButtons && props.buttonLayout == 'vertical' },

            // Shape
            { 'rounded-tr-none rounded-tl-none rounded-bl-none': props.showButtons && props.buttonLayout == 'stacked' },
            { 'rounded-tr-none rounded-br-none ': props.showButtons && props.buttonLayout == 'horizontal' },
            { 'rounded-tr-none rounded-tl-none ': props.showButtons && props.buttonLayout == 'vertical' }
        ]
    })
};
