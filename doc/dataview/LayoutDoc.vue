<template>
    <DocSectionText v-bind="$attrs">
        <p>
            DataView supports <i>list</i> and <i>grid</i> display modes defined with the <i>layout</i> property. The helper <i>DataViewLayoutOptions</i> component can be used to switch between the modes however this component is optional and you may
            use your own UI to switch modes as well.
        </p>
    </DocSectionText>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3">
                        <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <img class="w-9/12 sm:w-[16rem] xl:w-[10rem] shadow-md block xl:block mx-auto rounded" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                            <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                                <div class="flex flex-col items-center sm:items-start gap-3">
                                    <div class="text-2xl font-bold text-surface-900 dark:text-surface-0">{{ item.name }}</div>
                                    <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                                    <div class="flex items-center gap-3">
                                        <span class="flex items-center gap-2">
                                            <i class="pi pi-tag"></i>
                                            <span class="font-semibold">{{ item.category }}</span>
                                        </span>
                                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                                    </div>
                                </div>
                                <div class="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                                    <span class="text-2xl font-semibold">${{ item.price }}</span>
                                    <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3 sm:w-6/12 xl:w-4/12">
                        <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 rounded">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <div class="flex items-center gap-2">
                                    <i class="pi pi-tag"></i>
                                    <span class="font-semibold">{{ item.category }}</span>
                                </div>
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                            </div>
                            <div class="flex flex-col items-center gap-3 py-5">
                                <img class="w-9/12 shadow-md rounded" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                                <div class="text-2xl font-bold">{{ item.name }}</div>
                                <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-2xl font-semibold">${{ item.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
            code: {
                basic: `
<DataView :value="products" :layout="layout">
    <template #header>
        <div class="flex justify-end">
            <DataViewLayoutOptions v-model="layout" />
        </div>
    </template>

    <template #list="slotProps">
        <div class="flex flex-wrap">
            <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3">
                <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                    <img class="w-9/12 sm:w-[16rem] xl:w-[10rem] shadow-md block xl:block mx-auto rounded" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                    <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                        <div class="flex flex-col items-center sm:items-start gap-3">
                            <div class="text-2xl font-bold text-surface-900 dark:text-surface-0">{{ item.name }}</div>
                            <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                            <div class="flex items-center gap-3">
                                <span class="flex items-center gap-2">
                                    <i class="pi pi-tag"></i>
                                    <span class="font-semibold">{{ item.category }}</span>
                                </span>
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                            </div>
                        </div>
                        <div class="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                            <span class="text-2xl font-semibold">\${{ item.price }}</span>
                            <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <template #grid="slotProps">
        <div class="flex flex-wrap">
            <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3 sm:w-6/12 xl:w-4/12">
                <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 rounded">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <div class="flex items-center gap-2">
                            <i class="pi pi-tag"></i>
                            <span class="font-semibold">{{ item.category }}</span>
                        </div>
                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                    </div>
                    <div class="flex flex-col items-center gap-3 py-5">
                        <img class="w-9/12 shadow-md rounded" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                        <div class="text-2xl font-bold">{{ item.name }}</div>
                        <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-semibold">\${{ item.price }}</span>
                        <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3">
                        <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <img class="w-9/12 sm:w-[16rem] xl:w-[10rem] shadow-md block xl:block mx-auto rounded" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                            <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                                <div class="flex flex-col items-center sm:items-start gap-3">
                                    <div class="text-2xl font-bold text-surface-900 dark:text-surface-0">{{ item.name }}</div>
                                    <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                                    <div class="flex items-center gap-3">
                                        <span class="flex items-center gap-2">
                                            <i class="pi pi-tag"></i>
                                            <span class="font-semibold">{{ item.category }}</span>
                                        </span>
                                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                                    </div>
                                </div>
                                <div class="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                                    <span class="text-2xl font-semibold">\${{ item.price }}</span>
                                    <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3 sm:w-6/12 xl:w-4/12">
                        <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 rounded">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <div class="flex items-center gap-2">
                                    <i class="pi pi-tag"></i>
                                    <span class="font-semibold">{{ item.category }}</span>
                                </div>
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                            </div>
                            <div class="flex flex-col items-center gap-3 py-5">
                                <img class="w-9/12 shadow-md rounded" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                                <div class="text-2xl font-bold">{{ item.name }}</div>
                                <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-2xl font-semibold">\${{ item.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
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
            layout: 'grid'
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
                    return 'warning';

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
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3">
                        <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <img class="w-9/12 sm:w-[16rem] xl:w-[10rem] shadow-md block xl:block mx-auto rounded" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                            <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                                <div class="flex flex-col items-center sm:items-start gap-3">
                                    <div class="text-2xl font-bold text-surface-900 dark:text-surface-0">{{ item.name }}</div>
                                    <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                                    <div class="flex items-center gap-3">
                                        <span class="flex items-center gap-2">
                                            <i class="pi pi-tag"></i>
                                            <span class="font-semibold">{{ item.category }}</span>
                                        </span>
                                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                                    </div>
                                </div>
                                <div class="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                                    <span class="text-2xl font-semibold">\${{ item.price }}</span>
                                    <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="flex flex-wrap">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="w-full p-3 sm:w-6/12 xl:w-4/12">
                        <div class="p-4 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 rounded">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <div class="flex items-center gap-2">
                                    <i class="pi pi-tag"></i>
                                    <span class="font-semibold">{{ item.category }}</span>
                                </div>
                                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                            </div>
                            <div class="flex flex-col items-center gap-3 py-5">
                                <img class="w-9/12 shadow-md rounded" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                                <div class="text-2xl font-bold">{{ item.name }}</div>
                                <Rating :modelValue="item.rating" readonly :cancel="false"></Rating>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-2xl font-semibold">\${{ item.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button>
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

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

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
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
};
</script>
