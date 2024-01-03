export default {
    wrapper: {
        class: 'overflow-hidden relative float-left h-full w-full z-[1]'
    },
    content: {
        class: 'box-border h-[calc(100%+18px)] overflow-scroll pr-[18px] pb-[18px] pl-0 pt-0 relative scrollbar-none w-[calc(100%+18px)] [&::-webkit-scrollbar]:hidden'
    },
    barX: {
        class: ['relative bg-surface-50 invisible rounded cursor-pointer h-[9px] bottom-0 z-[2]', 'transition duration-[250ms] ease-linear']
    },
    barY: {
        class: ['relative bg-surface-50 rounded cursor-pointer w-[9px] top-0 z-[2]', 'transition duration-[250ms] ease-linear']
    }
};
