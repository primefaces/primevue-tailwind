export default {
    root: {
        class: [
            'block relative',

            // Base Label Appearance
            '[&>*:last-child]:text-surface-900/60 dark:[&>*:last-child]:text-white/60',
            '[&>*:last-child]:absolute',
            '[&>*:last-child]:left-3',
            '[&>*:last-child]:pointer-events-none',
            '[&>*:last-child]:transition-all',
            '[&>*:last-child]:duration-200',
            '[&>*:last-child]:ease',

            // Position for all labels except those following textarea
            '[&>:not(textarea)~label]:top-1/2 [&>:not(textarea)~label]:-translate-y-1/2 ',

            // Position for labels following textareas
            '[&>textarea~label]:top-4',

            // Focus Label Appearance
            '[&>*:last-child]:has-[:focus]:-top-3',
            '[&>*:last-child]:has-[:focus]:text-sm',
            '[&>*:last-child]:has-[:focus]:z-10',

            // Filled Input Label Appearance
            '[&>*:last-child]:has-[.filled]:-top-3',
            '[&>*:last-child]:has-[.filled]:text-sm',
            '[&>*:last-child]:has-[.filled]:z-10'
        ]
    }
};
