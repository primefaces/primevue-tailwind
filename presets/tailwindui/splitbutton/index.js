export default {
    root: ({ props }) => ({
        class: ['inline-flex relative', 'rounded-md', { 'shadow-lg': props.raised }]
    }),
    button: {
        root: ({ parent }) => ({
            class: ['rounded-r-none border-r-0', { 'rounded-l-full': parent.props.rounded }]
        }),
        icon: {
            class: 'mr-2'
        }
    },
    menubutton: {
        root: ({ parent }) => ({
            class: ['rounded-l-none', { 'rounded-r-full': parent.props.rounded }]
        }),
        label: {
            class: 'hidden'
        }
    }
};
