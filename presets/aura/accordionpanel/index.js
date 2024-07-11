export default {
    root: ({ props, context }) => ({
        class: [
            'flex flex-col border-b border-surface-200 dark:border-surface-700',
            {
                '[&>[data-pc-name=accordionheader]]:select-none [&>[data-pc-name=accordionheader]]:pointer-events-none [&>[data-pc-name=accordionheader]]:cursor-default [&>[data-pc-name=accordionheader]]:opacity-60': props?.disabled,
                '[&>[data-pc-name=accordionheader]]:text-surface-700 dark:[&>[data-pc-name=accordionheader]]:text-surface-100 hover:[&>[data-pc-name=accordionheader]]:text-surface-800 dark:hover:[&>[data-pc-name=accordionheader]]:text-surface-0':
                    !props.disabled && context.active,
                '[&>[data-pc-section=toggleicon]]:text-surface-700 dark:[&>[data-pc-section=toggleicon]]:text-surface-100 hover:[&>[data-pc-section=toggleicon]]:text-surface-800 dark:hover:[&>[data-pc-section=toggleicon]]:text-surface-0':
                    !props.disabled && context.active,
                '[&:last-child>[data-pc-name=accordioncontent]>[data-pc-section=content]]:rounded-b-md': !props.disabled && context.active,
                '[&:last-child>[data-pc-name=accordionheader]]:rounded-b-md': !props.disabled && !context.active
            },
            '[&:nth-child(n+2)>[data-pc-name=accordionheader]]:border-t-0',
            '[&:first-child>[data-pc-name=accordionheader]]:rounded-t-md'
        ]
    })
};
