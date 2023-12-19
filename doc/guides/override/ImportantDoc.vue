<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Tailwind provides a <i>!</i> prefix to mark a utility as important, as an edge case when <i>mergeProps</i> is enabled the utility classes of the local configuration may not be used due to CSS specifity. In these particular cases prefixing
            the class with <i>!</i> would be a solution. The two input fields in the following example tries to change the background color of the default configuration, first one fails because <i>.bg-blue-500</i> is defined before the background
            class (<i>bg-surface-0</i>) of the preset by Tailwind code generation.
        </p>
    </DocSectionText>
    <div class="card flex gap-2 items-center justify-center">
        <InputText :pt="{ root: 'bg-blue-500' }" :ptOptions="{ mergeProps: true }" placeholder="Not bg-blue-500" />
        <InputText :pt="{ root: '!bg-blue-500 placeholder:!text-blue-100 !text-white' }" :ptOptions="{ mergeProps: true }" placeholder="!bg-blue-500" />
    </div>
    <DocSectionCode :code="code" hideToggleCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InputText :pt="{ root: 'bg-blue-500' }" 
           :ptOptions="{ mergeProps: true }" 
           placeholder="Not bg-blue-500" />

<InputText :pt="{ root: '!bg-blue-500 placeholder:!text-blue-100 !text-white' }" 
           :ptOptions="{ mergeProps: true }" 
           placeholder="!bg-blue-500" />
`
            }
        };
    }
};
</script>
