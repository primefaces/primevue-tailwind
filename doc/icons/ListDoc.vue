<template>
    <DocSectionText v-bind="$attrs">
        <p>Here is the full list of PrimeIcons. More icons will be added periodically and you may also <a href="https://github.com/primefaces/primeicons/issues">request new icons</a> at the issue tracker.</p>
    </DocSectionText>

    <InputText v-model="filter" class="w-full p-3 mt-3 mb-4" placeholder="Search an icon" />

    <div class="card">
        <div class="flex flex-wrap justify-center gap-5 text-center">
            <div v-for="icon of filteredIcons" :key="icon.properties.name" class="w-full sm:w-6/2 md:w-4/12 lg:w-2/12">
                <i :class="'text-2xl mb-3 text-surface-700 dark:text-surface-0/70 pi pi-' + icon.properties.name"></i>
                <div>pi-{{ icon.properties.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { IconService } from '@/service/IconService';

export default {
    data() {
        return {
            icons: null,
            filter: null
        };
    },
    mounted() {
        IconService.getIcons().then((data) => {
            let d_data = data;
            let d_icons = d_data.filter((value) => {
                return value.icon.tags.indexOf('deprecate') === -1;
            });

            d_icons.sort((icon1, icon2) => {
                if (icon1.properties.name < icon2.properties.name) return -1;
                else if (icon1.properties.name < icon2.properties.name) return 1;
                else return 0;
            });

            this.icons = d_icons;
        });
    },
    computed: {
        filteredIcons() {
            if (this.filter) return this.icons.filter((icon) => icon.properties.name.indexOf(this.filter.toLowerCase()) > -1);
            else return this.icons;
        }
    }
};
</script>
