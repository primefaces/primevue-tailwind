export default {
    root: ({ props }) => ({
        class: [
            'flex relative',
            {
                'w-full my-5 mx-0 py-0 px-5 before:block before:left-0 before:absolute before:top-1/2 before:w-full before:border-t before:border-surface-200 before:dark:border-surface-700': props.layout == 'horizontal',
                'min-h-full mx-4 md:mx-5 py-5 before:block before:min-h-full before:absolute before:left-1/2 before:top-0 before:transform before:-translate-x-1/2 before:border-l before:border-surface-200 before:dark:border-surface-700':
                    props.layout == 'vertical'
            },
            {
                'before:border-solid': props.type == 'solid',
                'before:border-dotted': props.type == 'dotted',
                'before:border-dashed': props.type == 'dashed'
            }
        ]
    }),
    content: {
        class: 'px-1 bg-surface-0 z-10 dark:bg-surface-900'
    }
};
