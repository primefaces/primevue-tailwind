export const tooltip = {
    root: ({ context }) => ({
        class: [
            'absolute shadow-md',
            {
                'py-0 px-1': context?.right || context?.left || (!context?.right && !context?.left && !context?.top && !context?.bottom),
                'py-1 px-0': context?.top || context?.bottom
            }
        ]
    }),
    arrow: ({ context }) => ({
        class: [
            'absolute w-0 h-0 border-transparent border-solid',
            {
                '-m-t-1 border-y-[0.25rem] border-r-[0.25rem] border-l-0 border-r-surface-600': context?.right || (!context?.right && !context?.left && !context?.top && !context?.bottom),
                '-m-t-1 border-y-[0.25rem] border-l-[0.25rem] border-r-0 border-l-surface-600': context?.left,
                '-m-l-1 border-x-[0.25rem] border-t-[0.25rem] border-b-0 border-t-surface-600': context?.top,
                '-m-l-1 border-x-[0.25rem] border-b-[0.25rem] border-t-0 border-b-surface-600': context?.bottom
            }
        ]
    }),
    text: {
        class: 'p-3 bg-surface-600 text-white rounded-md whitespace-pre-line break-words'
    }
};
