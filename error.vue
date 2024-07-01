<template>
    <div>
        <NuxtLayout name="default">
            <div class="flex card flex-col items-center gap-8">
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary">
                    <span class="font-bold" :style="{ fontSize: '144px' }"> 4 </span>
                    <div class="flex items-center justify-center bg-primaryrounded-full w-[8rem] h-[8rem]">
                        <i class="pi pi-prime text-[4rem] text-white dark:text-gray-900"></i>
                    </div>
                    <span class="font-bold" :style="{ fontSize: '144px' }"> 4 </span>
                </div>
                <div class="font-bold text-center text-5xl border-t border-surface-100 pt-8">PAGE NOT FOUND</div>
            </div>
        </NuxtLayout>
    </div>
</template>
