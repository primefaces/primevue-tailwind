<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Wrapping UI components to encapsulate customized behaviors is a common pattern when building your own UI library, especially in larger scale teams where a shared library is utilized amongst numerous applications. A major advantage of this
            approach is decoupling the dependency to a 3rd party library since the consuming applications depend on the shared library instead. PrimeVue unstyled core and Tailwind CSS would be a perfect toolset if you require to build a custom UI
            library. The main idea is to create your UI component by wrapping a PrimeVue component, pass your props as <a href="https://vuejs.org/guide/components/attrs" target="_blank" rel="noopener noreferrer">fall through</a> and configure the
            pass-through Tailwind preset <b>locally instead of a global configuration</b>.
        </p>
    </DocSectionText>
</template>
