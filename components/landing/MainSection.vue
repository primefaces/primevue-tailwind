<template>
    <div class="w-full flex">
        <div class="w-1/2 h-screen pl-28 pr-15 py-44 flex-col justify-start items-center inline-flex">
            <div class="self-stretch flex-col justify-start items-start gap-6 inline-flex">
                <div class="px-3 py-1 bg-white dark:bg-surface-800 rounded-[7rem] border border-black border-opacity-10 justify-end items-start inline-flex">
                    <div class="text-neutral-800 dark:text-surface-50 font-medium leading-6">PrimeVue Based on Tailwind</div>
                </div>
                <div class="flex-col justify-start items-start gap-4 flex">
                    <div>
                        <span class="text-neutral-800 dark:text-surface-50 text-[4rem] font-medium leading-[4.5rem]">Tailwind CSS Based <br />UI Component Library <br />for </span
                        ><span class="text-primary-400 text-[4rem] font-medium leading-[4.5rem]">Vue.js</span>
                    </div>
                    <div class="text-zinc-600 dark:text-surface-50 font-normal leading-6 max-w-[35rem]">
                        Tailwind CSS is a popular utility first CSS library that fits perfectly to the unstyled mode to skin the entire UI suite with a design system of your choice.
                    </div>
                </div>
                <div class="justify-start items-start gap-4 inline-flex w-6/12">
                    <router-link to="/installation">
                        <Button
                            label="Get Started"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            :pt="{
                                root: {
                                    class: 'relative h-10 bg-primary-400 hover:bg-primary-500 focus:ring focus:ring-offset-2 focus:ring-primary-200 transition-all duration-300 rounded-lg inline-flex grow-0 justify-center items-center gap-2 py-2 px-4'
                                },
                                label: { class: 'text-white dark:text-surface-900 font-medium leading-6' },
                                icon: { class: 'mx-0 ml-2 order-1 text-white dark:text-surface-900' }
                            }"
                        />
                    </router-link>
                    <a href="https://github.com/primefaces/primevue" target="_blank" class="no-underline">
                        <Button
                            label="Give a Star"
                            icon="pi pi-star-fill text-yellow-400"
                            iconPos="right"
                            :pt="buttonPt"
                        />
                    </a>
                </div>
            </div>
        </div>
        <div class="w-1/2 h-screen bg-primary-50 dark:bg-primary-400/70 inline-flex justify-center items-center">
            <Button label="Give a Star" icon="pi pi-star-fill text-yellow-400" iconPos="right" />
        </div>
    </div>
</template>

<script>
// Import the Button component from PrimeVue
import Button from 'primevue/button';
export default {
    data() {
        return {
            buttonPt:{
                root: {
                    class: 'relative h-10 bg-blue-400 hover:bg-primary-500 focus:ring focus:ring-offset-2 focus:ring-primary-200 transition-all duration-300 rounded-lg inline-flex grow-0 justify-center items-center gap-2 py-2 px-4'
                },
                label: { class: 'text-white dark:text-surface-900 font-medium leading-6' },
                icon: { class: 'mx-0 ml-2 order-1 text-white dark:text-surface-900' }
            },
            buttonPtTailwind:{
                root: {
                    class: 'relative h-10 bg-pink-400 hover:bg-primary-500 focus:ring focus:ring-offset-2 focus:ring-primary-200 transition-all duration-300 rounded-lg inline-flex grow-0 justify-center items-center gap-2 py-2 px-4'
                },
                label: { class: 'text-white dark:text-surface-900 font-medium leading-6' },
                icon: { class: 'mx-0 ml-2 order-1 text-white dark:text-surface-900' }
            }
        };
    },
    components: {
        Button
    }
};
</script>
