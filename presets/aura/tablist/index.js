export default {
    root: 'relative flex',
    content: 'overflow-x-auto overflow-y-hidden scroll-smooth overscroll-x-contain overscroll-y-auto [&::-webkit-scrollbar]:hidden grow',
    tabList: 'relative flex border-solid border-b border-surface-200 dark:border-surface-700',
    nextButton: '!absolute top-0 right-0 z-20 h-full w-10 flex items-center justify-center text-surface-700 dark:text-surface-0/80 bg-surface-0 dark:bg-surface-900 outline-transparent cursor-pointer shrink-0',
    prevButton: '!absolute top-0 left-0 z-20 h-full w-10 flex items-center justify-center text-surface-700 dark:text-surface-0/80 bg-surface-0 dark:bg-surface-900 outline-transparent cursor-pointer shrink-0',
    activeBar: 'z-10 block absolute h-[1px] bottom-[-1px] bg-primary'
};
