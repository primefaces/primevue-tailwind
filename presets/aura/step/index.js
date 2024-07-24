export default {
    root: ({ context }) => ({
        class: ['relative flex flex-auto items-center gap-2 p-2 last-of-type:flex-[initial]', { 'cursor-default pointer-events-none select-none opacity-60': context.disabled }, '[&_[data-pc-section=separator]]:has-[~[data-p-active=true]]:bg-primary']
    }),
    header: ({ props, context }) => ({
        class: [
            'inline-flex items-center border-0 cursor-pointer rounded-md outline-transparent bg-transparent p-0 gap-2',
            'focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300',
            { '!cursor-default': context.active },
            { 'cursor-auto': props.linear }
        ]
    }),
    number: ({ context }) => ({
        class: [
            // Flexbox
            'flex',
            'items-center',
            'justify-center',

            //Colors
            'border-solid border-2 border-surface-200 dark:border-surface-700',

            // Colors (Conditional)
            context.active ? 'text-primary' : 'text-surface-900 dark:text-surface-0', // Adjust colors as needed

            // Size and Shape
            'min-w-[2rem]',
            'h-[2rem]',
            'line-height-[2rem]',
            'rounded-full',

            // Text
            'text-lg',

            // Transitions
            'transition',
            'transition-colors',
            'transition-shadow',
            'duration-200'
        ]
    }),
    title: ({ context }) => ({
        class: [
            // Layout
            'block',
            'whitespace-nowrap',
            'overflow-hidden',
            'text-ellipsis',
            'max-w-full',

            // Text
            context.active ? 'text-primary' : 'text-surface-700 dark:text-surface-0/80',
            'font-medium',

            // Transitions
            'transition',
            'transition-colors',
            'transition-shadow',
            'duration-200'
        ]
    })
};
