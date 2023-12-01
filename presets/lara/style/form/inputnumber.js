export default {
    root: ({ props, context }) => ({
        class: [
            // Display
            'w-full',
            'inline-flex'
        ]
    }),
    input: ({ props }) => ({
        class: [
            // Sizing
            'w-44',
            'h-13',

            // Shape
            'rounded-tr-none',
            'rounded-br-none'
        ]
    }),
    buttongroup: ({ props }) => ({
        class: [
            // Display
            'flex',

            // Sizing
            'h-13',

            // Alignment
            'flex-col'
        ]
    }),
    incrementbutton: ({ props }) => ({
        class: [
            // Display
            'flex',

            // Alignment
            'items-center',
            'justify-center',

            // Sizing
            'w-[3rem]',
            'flex-1',

            // Shape
            'rounded-tl-none',
            'rounded-br-none',
            'rounded-bl-none',

            // Padding
            'p-0'
        ]
    }),
    decrementbutton: ({ props }) => ({
        class: [
            // Display
            'flex',

            // Alignment
            'items-center',
            'justify-center',

            // Sizing
            'w-[3rem]',
            'flex-1',

            // Shape
            'rounded-bl-none',
            'rounded-tr-none',
            'rounded-tl-none',

            // Padding
            'p-0'
        ]
    }),
    label: {
        class: 'hidden'
    }
};
