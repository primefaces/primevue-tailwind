<template>
    <DocSectionText v-bind="$attrs">
        <p>
            So far so good as all the wiring is in place, time to apply our custom material design inspired style implemented with Tailwind utilities. The style is applied with the <i>pt</i> property of the InputSwitch locally, since we are using a
            local preset disable the merging with the global preset with <i>ptOptions</i>.
        </p>
        <DocSectionCode :code="code1" hideToggleCode hideCodeSandbox hideStackBlitz />
        <p>
            The preset is a simple pt configuration based on the <a href="https://primevue.org/inputswitch/#pt" target="_blank" rel="noopener noreferrer">InputSwitch PassThrough</a> API with some extensions, notice the use of <i>attrs</i> to add an
            <i>accent</i> mode which does not exist in the API of the PrimeVue InputSwitch. We're able to utilize arbitrary attributes to add functionality to the components we wrap without waiting for component library maintainer to add it for us.
            This is a great example of the PrimeVue philosophy, providing 3rd party UI library that is easy to tune and customize as if it were an in-house library.
        </p>
        <DocSectionCode :code="code2" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
<template>
    <div class="flex items-center gap-4">
        <label :for="$attrs.inputId">{{ label }}</label>
        <InputSwitch v-bind="$attrs" :pt="preset" :ptOptions="{ mergeSections: false, mergeProps: false }" />
    </div>
</template>
`
            },
            code2: {
                basic: `
<script setup>
defineOptions({
    inheritAttrs: false
});

defineProps(['label']);

const preset = {
    root: ({ props }) => ({
        class: [
            'inline-block relative',
            'w-10 h-4',
            {
                'opacity-40 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    slider: ({ props, state, attrs }) => ({
        class: [
            // Position
            'absolute top-0 left-0 right-0 bottom-0 before:transform',
            { 'before:translate-x-5': props.modelValue },
            { 'before:-translate-x-1': !props.modelValue },

            // Shape
            'rounded-2xl',

            // Before:
            'before:absolute before:top-1/2',
            'before:-mt-3',
            'before:h-6 before:w-6',
            'before:rounded-full',
            'before:duration-200',
            'before:flex before:justify-center before:items-center',
            'before:[text-shadow:0px_0px_WHITE] before:text-transparent',
            { 'before:ring-4': state.focused },
            {
                "before:bg-surface-500 before:dark:bg-surface-500 before:content-['➖']": !props.modelValue,
                "before:content-['✔️']": props.modelValue,
                'before:bg-violet-500 before:ring-violet-300': !attrs.type & props.modelValue,
                'before:bg-amber-500 before:ring-amber-300': attrs.type === 'accent' && props.modelValue
            },

            // Colors
            'border border-transparent',
            {
                'bg-surface-200 dark:bg-surface-400 before:ring-surface-200 dark:before:ring-surface-400': !props.modelValue,
                'bg-violet-300': !attrs.type & props.modelValue,
                'bg-amber-300': attrs.type === 'accent' && props.modelValue
            },

            // States
            {
                'peer-hover:before:bg-surface-400 peer-hover:dark:before:bg-surface-600': !props.modelValue,
                'peer-hover:before:bg-violet-600': !attrs.type & props.modelValue,
                'peer-hover:before:bg-amber-600': attrs.type === 'accent' && props.modelValue
            },

            // Transition
            'transition-colors duration-200',

            // Misc
            'cursor-pointer'
        ]
    }),
    input: {
        class: [
            'peer',

            // Size
            'w-full ',
            'h-full',

            // Position
            'absolute',
            'top-0 left-0',
            'z-10',

            // Spacing
            'p-0',
            'm-0',

            // Shape
            'opacity-0',
            'rounded-[2.5rem]',
            'outline-none',

            // Misc
            'appearance-none',
            'cursor-pointer'
        ]
    }
};
<\/script>
`
            }
        };
    }
};
</script>
