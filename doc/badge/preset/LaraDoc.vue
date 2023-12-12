<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
badge: {
    root: ({ props }) => ({
        class: [
            // Font
            'font-bold',
            {
                'text-xs leading-[1.5rem]': props.size == null,
                'text-lg leading-[2.25rem]': props.size == 'large',
                'text-2xl leading-[3rem]': props.size == 'xlarge'
            },

            // Alignment
            'text-center inline-block',

            // Size
            'p-0',
            {
                'min-w-[1.5rem] h-[1.5rem]': props.size == null,
                'min-w-[2.25rem] h-[2.25rem]': props.size == 'large',
                'min-w-[3rem] h-[3rem]': props.size == 'xlarge'
            },

            // Shape
            'rounded-full',

            // Color
            'text-white dark:text-surface-900',
            {
                'bg-primary-500 dark:bg-primary-400': props.severity == null || props.severity == 'primary',
                'bg-surface-500 dark:bg-surface-400': props.severity == 'secondary',
                'bg-green-500 dark:bg-green-400': props.severity == 'success',
                'bg-blue-500 dark:bg-blue-400': props.severity == 'info',
                'bg-orange-500 dark:bg-orange-400': props.severity == 'warning',
                'bg-purple-500 dark:bg-purple-400': props.severity == 'help',
                'bg-red-500 dark:bg-red-400': props.severity == 'danger'
            }
        ]
    })
},
directives: {
    badge:{
        root: ({ context }) => ({
            class: [
                // Font
                'font-bold',
                'text-xs leading-6',

                // Alignment
                'flex items-center justify-center',
                'text-center',

                // Position
                'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right',

                // Size
                'm-0',
                {
                    'p-0': context.nogutter || context.dot,
                    'px-2': !context.nogutter && !context.dot,
                    'min-w-[0.5rem] w-2 h-2': context.dot,
                    'min-w-[1.5rem] h-6': !context.dot
                },

                // Shape
                {
                    'rounded-full': context.nogutter || context.dot,
                    'rounded-[10px]': !context.nogutter && !context.dot
                },

                // Color
                'text-white dark:text-surface-900',
                {
                    'bg-primary-500 dark:bg-primary-400': !context.info && !context.success && !context.warning && !context.danger && !context.help && !context.secondary,
                    'bg-surface-500 dark:bg-surface-400': context.secondary,
                    'bg-green-500 dark:bg-green-400': context.success,
                    'bg-blue-500 dark:bg-blue-400': context.info,
                    'bg-orange-500 dark:bg-orange-400': context.warning,
                    'bg-purple-500 dark:bg-purple-400': context.help,
                    'bg-red-500 dark:bg-red-400': context.danger
                }
            ]
        })
    }
}
`
            }
        };
    }
};
</script>
