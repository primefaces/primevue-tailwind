<template>
    <DocSectionText v-bind="$attrs">
        <p>DataView supports <i>list</i> and <i>grid</i> display modes defined with the <i>layout</i> property.</p>
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

            <template #list="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full">
                        <div class="flex flex-col sm:flex-row sm:items-center p-4 gap-3" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <div class="md:w-[10rem] relative">
                                <img class="block xl:block mx-auto rounded-md w-full" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                            </div>
                            <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-4">
                                <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                    <div>
                                        <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                        <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                                    </div>
                                    <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                        <div class="surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; shadow-md 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col md:items-end gap-5">
                                    <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">${{ item.price }}</span>
                                    <div class="flex flex-row-reverse md:flex-row gap-2">
                                        <Button icon="pi pi-heart" outlined></Button>
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap"></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full sm:w-1/2 md:w-4/12 xl:w-1/2 p-2">
                        <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded-md flex flex-col">
                            <div class="surface-50 flex justify-center rounded-md p-3">
                                <div class="relative mx-auto">
                                    <img class="rounded-md w-full" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" style="max-width: 300px" />
                                    <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                                </div>
                            </div>
                            <div class="pt-4">
                                <div class="flex flex-row justify-between items-start gap-2">
                                    <div>
                                        <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                        <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-1">{{ item.name }}</div>
                                    </div>
                                    <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                        <div class="surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; shadow-md 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4 mt-4">
                                    <span class="text-2xl font-semibold text-surface-900 dark:text-surface-0">${{ item.price }}</span>
                                    <div class="flex gap-2">
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto white-space-nowrap"></Button>
                                        <Button icon="pi pi-heart" outlined></Button>
                                    </div>
                                </div>
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

    <template #list="slotProps">
        <div class="flex flex-wrap">
            <div v-for="(item, index) in slotProps.items" :key="index" class="w-full">
                <div class="flex flex-col sm:flex-row sm:items-center p-4 gap-3" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                    <div class="md:w-[10rem] relative">
                        <img class="block xl:block mx-auto rounded-md w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                    </div>
                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-4">
                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                            <div>
                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                            </div>
                            <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                <div class="surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; shadow-md 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{ item.rating }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col md:items-end gap-5">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">\${{ item.price }}</span>
                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                <Button icon="pi pi-heart" outlined></Button>
                                <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <template #grid="slotProps">
        <div class="flex flex-wrap">
            <div v-for="(item, index) in slotProps.items" :key="index" class="w-full sm:w-1/2 md:w-4/12 xl:w-1/2 p-2">
                <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded-md flex flex-col">
                    <div class="surface-50 flex justify-center rounded-md p-3">
                        <div class="relative mx-auto">
                            <img class="rounded-md w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" style="max-width: 300px"/>
                            <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                        </div>
                    </div>
                    <div class="pt-4">
                        <div class="flex flex-row justify-between items-start gap-2">
                            <div>
                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-1">{{ item.name }}</div>
                            </div>
                            <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                <div class="surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; shadow-md 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{ item.rating }}</span>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4 mt-4">
                            <span class="text-2xl font-semibold text-surface-900 dark:text-surface-0">\${{ item.price }}</span>
                            <div class="flex gap-2">
                                <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto white-space-nowrap"></Button>
                                <Button icon="pi pi-heart" outlined></Button>
                            </div>
                        </div>
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

            <template #list="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full">
                        <div class="flex flex-col sm:flex-row sm:items-center p-4 gap-3" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <div class="md:w-[10rem] relative">
                                <img class="block xl:block mx-auto rounded-md w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                            </div>
                            <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-4">
                                <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                    <div>
                                        <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                        <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                                    </div>
                                    <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                        <div class="surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; shadow-md 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col md:items-end gap-5">
                                    <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">\${{ item.price }}</span>
                                    <div class="flex flex-row-reverse md:flex-row gap-2">
                                        <Button icon="pi pi-heart" outlined></Button>
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap"></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full sm:w-1/2 md:w-4/12 xl:w-1/2 p-2">
                        <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded-md flex flex-col">
                            <div class="surface-50 flex justify-center rounded-md p-3">
                                <div class="relative mx-auto">
                                    <img class="rounded-md w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" style="max-width: 300px"/>
                                    <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                                </div>
                            </div>
                            <div class="pt-4">
                                <div class="flex flex-row justify-between items-start gap-2">
                                    <div>
                                        <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                        <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-1">{{ item.name }}</div>
                                    </div>
                                    <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                        <div class="surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; shadow-md 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4 mt-4">
                                    <span class="text-2xl font-semibold text-surface-900 dark:text-surface-0">\${{ item.price }}</span>
                                    <div class="flex gap-2">
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto white-space-nowrap"></Button>
                                        <Button icon="pi pi-heart" outlined></Button>
                                    </div>
                                </div>
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
        ProductService.getProducts().then((data) => (this.products = data.slice(0, 12)));
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

            <template #list="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full">
                        <div class="flex flex-col sm:flex-row sm:items-center p-4 gap-3" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <div class="md:w-[10rem] relative">
                                <img class="block xl:block mx-auto rounded-md w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                            </div>
                            <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-4">
                                <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                    <div>
                                        <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                        <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-2">{{ item.name }}</div>
                                    </div>
                                    <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                        <div class="surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; shadow-md 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col md:items-end gap-5">
                                    <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">\${{ item.price }}</span>
                                    <div class="flex flex-row-reverse md:flex-row gap-2">
                                        <Button icon="pi pi-heart" outlined></Button>
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap"></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full sm:w-1/2 md:w-4/12 xl:w-1/2 p-2">
                        <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded-md flex flex-col">
                            <div class="surface-50 flex justify-center rounded-md p-3">
                                <div class="relative mx-auto">
                                    <img class="rounded-md w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" style="max-width: 300px"/>
                                    <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                                </div>
                            </div>
                            <div class="pt-4">
                                <div class="flex flex-row justify-between items-start gap-2">
                                    <div>
                                        <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                        <div class="text-lg font-medium text-surface-900 dark:text-surface-0 mt-1">{{ item.name }}</div>
                                    </div>
                                    <div class="bg-surface-100 dark:bg-surface-700 p-1" style="border-radius: 30px">
                                        <div class="surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; shadow-md 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-surface-900 dark:text-surface-0 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-4 mt-4">
                                    <span class="text-2xl font-semibold text-surface-900 dark:text-surface-0">\${{ item.price }}</span>
                                    <div class="flex gap-2">
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto white-space-nowrap"></Button>
                                        <Button icon="pi pi-heart" outlined></Button>
                                    </div>
                                </div>
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
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
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
        ProductService.getProducts().then((data) => (this.products = data.slice(0, 12)));
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
