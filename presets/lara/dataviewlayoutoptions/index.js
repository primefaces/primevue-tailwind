export default {
    listbutton: ({ props }) => ({
        class: [
            'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
            'transition duration-200',
            'w-12 pt-3 pb-3 rounded-lg rounded-r-none',
            props.modelValue === 'list'
                ? 'bg-primary-500 border-primary-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-surface-900'
                : 'bg-surface-0 border-surface-50 text-surface-700 dark:bg-surface-900 dark:border-surface-700 dark:text-white/80' // highlighted state
        ]
    }),
    gridbutton: ({ props }) => ({
        class: [
            'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
            'transition duration-200',
            'w-12 pt-3 pb-3 rounded-lg rounded-l-none',
            props.modelValue === 'grid'
                ? 'bg-primary-500 border-primary-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-surface-900'
                : 'bg-surface-0 border-surface-50 text-surface-700 dark:bg-surface-900 dark:border-surface-700 dark:text-white/80' // highlighted state
        ]
    })
};
