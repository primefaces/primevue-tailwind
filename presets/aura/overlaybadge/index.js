export default {
    root: {
        class: [
            'relative',
            '[&>[data-pc-name=pcbadge]]:absolute',
            '[&>[data-pc-name=pcbadge]]:top-0',
            '[&>[data-pc-name=pcbadge]]:right-0',
            '[&>[data-pc-name=pcbadge]]:translate-x-1/2',
            '[&>[data-pc-name=pcbadge]]:-translate-y-1/2',
            '[&>[data-pc-name=pcbadge]]:m-0',
            '[&>[data-pc-name=pcbadge]]:origin-[100%_0]',
            '[&>[data-pc-name=pcbadge]]:outline',
            '[&>[data-pc-name=pcbadge]]:outline-[2px]',
            '[&>[data-pc-name=pcbadge]]:outline-surface-0',
            'dark:[&>[data-pc-name=pcbadge]]:outline-surface-900'
        ]
    }
};
