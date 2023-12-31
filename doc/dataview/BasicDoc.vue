<template>
    <DocSectionText v-bind="$attrs">
        <p>DataView requires a <i>value</i> to display along with a <i>list</i> slot that receives an object in the collection to return content.</p>
    </DocSectionText>
    <div class="card">
        <DataView :value="products">
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
            code: {
                basic: `
<DataView :value="products">
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
</DataView>
`,
                options: `
<template>
    <div class="card">
        <DataView :value="products">
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
        </DataView>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 5)));
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
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <DataView :value="products">
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
        </DataView>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 5)));
});

const products = ref();
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
};
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
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 5)));
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
