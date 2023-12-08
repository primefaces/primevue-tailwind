<template>
    <div>
        <div class="doc-intro">
            <h1>Gallery</h1>
            <p>
                A community-driven collection of customizable presets with Tailwind CSS for PrimeVue. Create, share and discover unique designs. If you'd like contribute, please build your design based on the
                <a href="https://github.com/primefaces/primevue-tailwind-preset-template">custom preset template</a> project and then
                <a href="https://github.com/primefaces/primevue-tailwind/issues/new?assignees=&labels=Status%3A+Needs+Triage&projects=&template=new_preset.yml&title=Preset+Name">submit</a> it to be displayed here. It may be just for a single
                component or multiple.
            </p>
        </div>

        <div class="flex flex-wrap -mt-4 -ml-4 -mr-4 pt-6">
            <div v-for="preset of presets" :key="preset.username + '/' + preset.repository" class="p-4 w-full md:w-6/12 lg:w-4/12">
                <GalleryPreset :preset="preset"></GalleryPreset>
            </div>
        </div>
    </div>
</template>

<script>
import GalleryData from '@/assets/data/gallery.json';

export default {
    data() {
        return {
            presets: GalleryData.data
        };
    }
};
</script>
