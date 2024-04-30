<template>
    <DocSectionText v-bind="$attrs">
        <p>While data is being loaded. <PrimeVueNuxtLink to="/skeleton">Skeleton</PrimeVueNuxtLink> component may be used to indicate the busy state.</p>
    </DocSectionText>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-end">
                    <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                        <template #option="{ option }">
                            <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-th-large']" />
                        </template>
                    </SelectButton>
                </div>
            </template>

            <template #list>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12">
                        <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
                            <Skeleton class="w-9/12 sm:w-16rem xl:w-[10rem] h-6rem block xl:block mx-auto rounded-md" />
                            <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                                <div class="flex flex-col items-center sm:items-start gap-3">
                                    <Skeleton class="w-[8rem] rounded-md h-2rem" />
                                    <Skeleton class="w-[6rem] rounded-md h-1rem" />
                                    <div class="flex items-center gap-3">
                                        <Skeleton class="w-[6rem] rounded-md h-1rem" />
                                        <Skeleton class="w-[3rem] rounded-md h-1rem" />
                                    </div>
                                </div>
                                <div class="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                                    <Skeleton class="w-[4rem] rounded-md h-2rem" />
                                    <Skeleton shape="circle" class="w-[3rem] h-3rem" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded-md">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <Skeleton class="w-[6rem] rounded-md h-2rem" />
                                <Skeleton class="w-[3rem] rounded-md h-1rem" />
                            </div>
                            <div class="flex flex-col items-center gap-3 py-5">
                                <Skeleton class="w-9/12 rounded-md h-10rem" />
                                <Skeleton class="w-[8rem] rounded-md h-2rem" />
                                <Skeleton class="w-[6rem] rounded-md h-1rem" />
                            </div>
                            <div class="flex items-center justify-between">
                                <Skeleton class="w-[4rem] rounded-md h-2rem" />
                                <Skeleton shape="circle" class="w-[3rem] h-3rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
    <DocSectionCode :code="code" :service="['ProductService']" />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            layout: 'grid',
            options: ['list', 'grid'],
            code: {
                basic: `
<DataView :value="products" :layout="layout">
    <template #header>
        <div class="flex justify-end">
            <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                <template #option="{ option }">
                    <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-th-large']" />
                </template>
            </SelectButton>
        </div>
    </template>

    <template #list>
        <div class="grid grid-nogutter">
            <div v-for="i in 6" :key="i" class="col-12">
                <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
                    <Skeleton class="w-9/12 sm:w-16rem xl:w-[10rem] h-6rem block xl:block mx-auto rounded-md" />
                    <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                        <div class="flex flex-col items-center sm:items-start gap-3">
                            <Skeleton class="w-[8rem] rounded-md h-2rem" />
                            <Skeleton class="w-[6rem] rounded-md h-1rem" />
                            <div class="flex items-center gap-3">
                                <Skeleton class="w-[6rem] rounded-md h-1rem" />
                                <Skeleton class="w-[3rem] rounded-md h-1rem" />
                            </div>
                        </div>
                        <div class="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                            <Skeleton class="w-[4rem] rounded-md h-2rem" />
                            <Skeleton shape="circle" class="w-[3rem] h-3rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <template #grid>
        <div class="grid grid-nogutter">
            <div v-for="i in 6" :key="i" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded-md">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <Skeleton class="w-[6rem] rounded-md h-2rem" />
                        <Skeleton class="w-[3rem] rounded-md h-1rem" />
                    </div>
                    <div class="flex flex-col items-center gap-3 py-5">
                        <Skeleton class="w-9/12 rounded-md h-10rem" />
                        <Skeleton class="w-[8rem] rounded-md h-2rem" />
                        <Skeleton class="w-[6rem] rounded-md h-1rem" />
                    </div>
                    <div class="flex items-center justify-between">
                        <Skeleton class="w-[4rem] rounded-md h-2rem" />
                        <Skeleton shape="circle" class="w-[3rem] h-3rem" />
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>
`,
                options: `
<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-end">
                    <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                        <template #option="{ option }">
                            <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-th-large']" />
                        </template>
                    </SelectButton>
                </div>
            </template>

            <template #list>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12">
                        <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
                            <Skeleton class="w-9/12 sm:w-16rem xl:w-[10rem] h-6rem block xl:block mx-auto rounded-md" />
                            <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                                <div class="flex flex-col items-center sm:items-start gap-3">
                                    <Skeleton class="w-[8rem] rounded-md h-2rem" />
                                    <Skeleton class="w-[6rem] rounded-md h-1rem" />
                                    <div class="flex items-center gap-3">
                                        <Skeleton class="w-[6rem] rounded-md h-1rem" />
                                        <Skeleton class="w-[3rem] rounded-md h-1rem" />
                                    </div>
                                </div>
                                <div class="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                                    <Skeleton class="w-[4rem] rounded-md h-2rem" />
                                    <Skeleton shape="circle" class="w-[3rem] h-3rem" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded-md">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <Skeleton class="w-[6rem] rounded-md h-2rem" />
                                <Skeleton class="w-[3rem] rounded-md h-1rem" />
                            </div>
                            <div class="flex flex-col items-center gap-3 py-5">
                                <Skeleton class="w-9/12 rounded-md h-10rem" />
                                <Skeleton class="w-[8rem] rounded-md h-2rem" />
                                <Skeleton class="w-[6rem] rounded-md h-1rem" />
                            </div>
                            <div class="flex items-center justify-between">
                                <Skeleton class="w-[4rem] rounded-md h-2rem" />
                                <Skeleton shape="circle" class="w-[3rem] h-3rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            layout: 'grid',
            options: ['list', 'grid'],
        }
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 6)));
    },
    methods: {
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warn';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-end">
                    <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                        <template #option="{ option }">
                            <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-th-large']" />
                        </template>
                    </SelectButton>
                </div>
            </template>

            <template #list>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12">
                        <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
                            <Skeleton class="w-9/12 sm:w-16rem xl:w-[10rem] h-6rem block xl:block mx-auto rounded-md" />
                            <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                                <div class="flex flex-col items-center sm:items-start gap-3">
                                    <Skeleton class="w-[8rem] rounded-md h-2rem" />
                                    <Skeleton class="w-[6rem] rounded-md h-1rem" />
                                    <div class="flex items-center gap-3">
                                        <Skeleton class="w-[6rem] rounded-md h-1rem" />
                                        <Skeleton class="w-[3rem] rounded-md h-1rem" />
                                    </div>
                                </div>
                                <div class="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                                    <Skeleton class="w-[4rem] rounded-md h-2rem" />
                                    <Skeleton shape="circle" class="w-[3rem] h-3rem" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid>
                <div class="grid grid-nogutter">
                    <div v-for="i in 6" :key="i" class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                        <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded-md">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <Skeleton class="w-[6rem] rounded-md h-2rem" />
                                <Skeleton class="w-[3rem] rounded-md h-1rem" />
                            </div>
                            <div class="flex flex-col items-center gap-3 py-5">
                                <Skeleton class="w-9/12 rounded-md h-10rem" />
                                <Skeleton class="w-[8rem] rounded-md h-2rem" />
                                <Skeleton class="w-[6rem] rounded-md h-1rem" />
                            </div>
                            <div class="flex items-center justify-between">
                                <Skeleton class="w-[4rem] rounded-md h-2rem" />
                                <Skeleton shape="circle" class="w-[3rem] h-3rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 6)));
});

const products = ref();
const layout = ref('grid');
const options = ref(['list', 'grid']);

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}

<\/script>
`,
                data: `
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `
            }
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 6)));
    },
    methods: {
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warn';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
};
</script>
