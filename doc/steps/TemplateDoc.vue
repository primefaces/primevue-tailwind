<template>
    <DocSectionText v-bind="$attrs">
        <p>Steps offers item customization with the <i>item</i> template that receives the item instance from the model as a parameter.</p>
    </DocSectionText>
    <div class="card">
        <Steps :model="items" class="custom-steps" :readonly="false">
            <template #item="{ item, active }">
                <span
                    :class="[
                        'inline-flex items-center justify-center items-center rounded-full border-primary-500 dark:border-primary-400 border h-12 w-12 z-20 cursor-pointer',
                        { 'bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900': active, 'bg-surface-0 dark:bg-surface-700 text-primary-500 dark:text-primary-400': !active }
                    ]"
                >
                    <i :class="[item.icon, 'text-xl']" />
                </span>
            </template>
        </Steps>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    icon: 'pi pi-user'
                },
                {
                    icon: 'pi pi-calendar'
                },
                {
                    icon: 'pi pi-check'
                }
            ],
            code: {
                basic: `
<Steps :model="items" class="custom-steps" :readonly="false">
    <template #item="{ item, active }">
        <span :class="['inline-flex items-center justify-center items-center rounded-full border-primary-500 dark:border-primary-400 border h-12 w-12 z-20 cursor-pointer', { 'bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900': active, 'bg-surface-0 dark:bg-surface-700 text-primary-500 dark:text-primary-400': !active }]">
            <i :class="[item.icon, 'text-xl']" />
        </span>
    </template>
</Steps>
`,
                options: `
<template>
    <div class="card">
        <Steps :model="items" class="custom-steps" :readonly="false">
            <template #item="{ item, active }">
                <span :class="['inline-flex items-center justify-center items-center rounded-full border-primary-500 dark:border-primary-400 border h-12 w-12 z-20 cursor-pointer', { 'bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900': active, 'bg-surface-0 dark:bg-surface-700 text-primary-500 dark:text-primary-400': !active }]">
                    <i :class="[item.icon, 'text-xl']" />
                </span>
            </template>
        </Steps>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    icon: 'pi pi-user'
                },
                {
                    icon: 'pi pi-calendar'
                },
                {
                    icon: 'pi pi-check'
                }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Steps :model="items" class="custom-steps" :readonly="false">
            <template #item="{ item, active }">
                <span :class="['inline-flex items-center justify-center items-center rounded-full border-primary-500 dark:border-primary-400 border h-12 w-12 z-20 cursor-pointer', { 'bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900': active, 'bg-surface-0 dark:bg-surface-700 text-primary-500 dark:text-primary-400': !active }]">
                    <i :class="[item.icon, 'text-xl']" />
                </span>
            </template>
        </Steps>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        icon: 'pi pi-user'
    },
    {
        icon: 'pi pi-calendar'
    },
    {
        icon: 'pi pi-check'
    }
]);

<\/script>
`
            }
        };
    }
};
</script>

<style lang="scss" scoped>
::v-deep(.custom-steps) {
    .p-steps-item:before {
        margin-top: 0;
        border-color: var(--primary-color);
    }
}
</style>
