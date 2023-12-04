<template>
    <div class="card flex flex-col gap-4 h-full">
        <a class="block" target="_blank" rel="noopener noreferrer" :href="`https://stackblitz.com/github.com/${preset.username}/${preset.repository}`">
            <img :src="preset.thumbnail" class="w-full max-w-[30rem] max-h-[15rem] overflow-hidden mx-auto rounded" />
        </a>
        <div class="flex items-center gap-2">
            <img :src="avatar" width="32" class="rounded-full" />
            <span class="text-lg font-medium">{{ preset.name }}</span>
            <span class="inline-flex gap-1 items-center ml-auto">
                <span>{{ stars }}</span>
                <i class="pi pi-star-fill text-primary-500"></i>
            </span>
        </div>
        <div class="overflow-hidden whitespace-nowrap text-ellipsis">
            {{ description }}
        </div>
        <div class="flex items-center gap-2 mt-auto">
            <a target="_blank" rel="noopener noreferrer" :href="`https://github.com/${preset.owner}/${preset.repository}`" class="flex-auto border text-center rounded p-2 border-surface-200 hover:bg-surface-100 font-semibold duration-150">
                View Source
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                :href="`https://stackblitz.com/github.com/${preset.owner}/${preset.repository}`"
                class="flex-auto border text-center rounded p-2 border-primary-500 text-primary-500 font-semibold hover:bg-primary-500 hover:text-white duration-150"
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
