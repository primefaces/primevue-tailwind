<template>
    <DocSectionText v-bind="$attrs">
        <p>Children of the component are passed as the content for templating.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Tag class="bg-gradient-to-r from-surface-900 dark:from-surface-0 to-surface-800 dark:to-surface-100">
            <div class="flex items-center gap-2 px-1">
                <img alt="Country" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 20px; height: 13.4px" />
                <span class="text-base text-surface-0 dark:text-surface-900">Italy</span>
            </div>
        </Tag>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Tag class="bg-gradient-to-r from-primary-600 to-primary-400">
    <div class="flex items-center gap-2">
        <img alt="Country" src="/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 20px; height: 13.4px" />
        <span class="text-base">Italia</span>
        <i class="pi pi-times text-xs"></i>
    </div>
</Tag>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Tag class="bg-gradient-to-r from-primary-600 to-primary-400">
            <div class="flex items-center gap-2">
                <img alt="Country" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 20px; height: 13.4px" />
                <span class="text-base">Italia</span>
                <i class="pi pi-times text-xs"></i>
            </div>
        </Tag>
    </div>    
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Tag class="bg-gradient-to-r from-primary-600 to-primary-400">
            <div class="flex items-center gap-2">
                <img alt="Country" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 20px; height: 13.4px" />
                <span class="text-base">Italia</span>
                <i class="pi pi-times text-xs"></i>
            </div>
        </Tag>
    </div>    
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
