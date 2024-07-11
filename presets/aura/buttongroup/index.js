export default {
    root: {
        class: [
            '[&>[data-pc-name=button]]:m-0',
            '[&>[data-pc-name=button]]:border-r-none',
            '[&>[data-pc-name=button]:nth-last-child(n+2)]:rounded-tr-none',
            '[&>[data-pc-name=button]:nth-last-child(n+2)]:rounded-br-none',
            '[&>[data-pc-name=button]:nth-child(n+2)]:rounded-tl-none',
            '[&>[data-pc-name=button]:nth-child(n+2)]:rounded-bl-none'
        ]
    }
};
