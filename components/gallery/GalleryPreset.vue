<template>
    <div class="card flex flex-col gap-4 h-full">
        <a class="flex items-center justify-center" target="_blank" rel="noopener noreferrer" :href="`https://stackblitz.com/github.com/${preset.owner}/${preset.repository}`">
            <img v-if="preset.thumbnail" :src="preset.thumbnail" class="w-full overflow-hidden mx-auto rounded" />
            <img v-if="!preset.thumbnail" src="assets/wind.jpg" class="w-full overflow-hidden mx-auto rounded" />
        </a>
        <div class="flex items-center gap-2">
            <img :src="avatar" width="32" class="rounded-full" />
            <span class="text-lg font-medium">{{ preset.name }}</span>
            <span class="inline-flex gap-1 items-center ml-auto">
                <span>{{ stars }}</span>
                <i class="pi pi-star-fill text-primary"></i>
            </span>
        </div>
        <div class="overflow-hidden whitespace-nowrap text-ellipsis">
            {{ description }}
        </div>
        <div class="flex items-center gap-2 mt-auto">
            <a
                target="_blank"
                rel="noopener noreferrer"
                :href="`https://github.com/${preset.owner}/${preset.repository}`"
                class="flex-auto border text-center rounded p-2 border-surface-200 hover:bg-surface-100 dark:hover:bg-surface-100/10 font-semibold duration-150"
            >
                View Source
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                :href="`https://stackblitz.com/github.com/${preset.owner}/${preset.repository}`"
                class="flex-auto border text-center rounded p-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-inverse duration-150"
            >
                Live Preview
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        preset: null
    },
    data() {
        return {
            avatar: null,
            stars: 0,
            description: null
        };
    },
    async beforeMount() {
        const data = await $fetch(`/api/repo/${this.preset.owner}/${this.preset.repository}`);

        this.avatar = data.owner.avatar_url;
        this.description = data.description;
        this.stars = data.stargazers_count;
    }
};
</script>
