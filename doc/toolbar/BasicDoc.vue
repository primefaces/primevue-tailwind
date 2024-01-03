<template>
    <DocSectionText v-bind="$attrs">
        <p>Toolbar provides <i>start</i>, <i>center</i> and <i>end</i> properties to place content at these sections.</p>
    </DocSectionText>
    <div class="card">
        <Toolbar>
            <template #start>
                <Button icon="pi pi-plus" class="mr-2" />
                <Button icon="pi pi-print" class="mr-2" />
                <Button icon="pi pi-upload" />
            </template>

            <template #center>
                <span class="relative">
                    <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                    <InputText placeholder="Search" class="pl-10" />
                </span>
            </template>

            <template #end> <SplitButton label="Save" icon="pi pi-check" :model="items"></SplitButton></template>
        </Toolbar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                }
            ],
            code: {
                basic: `
<Toolbar>
    <template #start>
        <Button icon="pi pi-plus" class="mr-2" />
        <Button icon="pi pi-print" class="mr-2" />
        <Button icon="pi pi-upload" />
    </template>

    <template #center>
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText placeholder="Search" />
        </span>
    </template>

    <template #end> <SplitButton label="Save" icon="pi pi-check" :model="items"></SplitButton></template>
</Toolbar>
`,
                options: `
<template>
    <div class="card">
        <Toolbar>
            <template #start>
                <Button icon="pi pi-plus" class="mr-2" />
                <Button icon="pi pi-print" class="mr-2" />
                <Button icon="pi pi-upload" />
            </template>

            <template #center>
                <span class="relative">
    <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
    <InputText placeholder="Search" class="pl-10" />
</span>
            </template>

            <template #end> <SplitButton label="Save" icon="pi pi-check" :model="items"></SplitButton></template>
        </Toolbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Toolbar>
            <template #start>
                <Button icon="pi pi-plus" class="mr-2" />
                <Button icon="pi pi-print" class="mr-2" />
                <Button icon="pi pi-upload" />
            </template>

            <template #center>
                <span class="relative">
    <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
    <InputText placeholder="Search" class="pl-10" />
</span>
            </template>

            <template #end> <SplitButton label="Save" icon="pi pi-check" :model="items"></SplitButton></template>
        </Toolbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        label: 'Update',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Delete',
        icon: 'pi pi-times'
    }
])
<\/script>
`
            }
        };
    }
};
</script>
