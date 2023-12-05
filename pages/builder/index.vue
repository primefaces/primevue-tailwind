<template>
    <div>
        <div class="doc-intro">
            <h1>Builder</h1>
            <p>Build your own preset with the components of your choice.</p>
        </div>

        <section class="py-6">
            <h2>Base</h2>
            <SelectButton v-model="preset" :options="presets" optionLabel="name" optionValue="value" :allowEmpty="false" />
        </section>

        <section class="py-6">
            <h2>Components</h2>
            <div class="flex flex-wrap">
                <div v-for="(group, i) of groups" :key="i" class="flex-auto">
                    <div v-for="category of group" :key="category">
                        <div class="font-semibold mb-4">{{ builderData[category].name }}</div>
                        <ul class="flex flex-col gap-5 mb-8">
                            <li v-for="component of builderData[category].components" :key="component.name" class="flex items-center gap-2">
                                <Checkbox v-model="selectedComponents" :inputId="component.path" name="component" :value="component.path" :disabled="component.disabled" />
                                <label :for="component.path" :class="{ 'opacity-50': component.disabled }">{{ component.name }}</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-6">
            <h2>Download</h2>
            <div class="flex w-full">
                <InputText v-model="filename" class="!rounded-r-none" placeholder="Filename" />
                <Button icon="pi pi-download" class="!rounded-l-none" @click="generate" />
            </div>
        </section>
    </div>
</template>

<script>
import builder from '@/assets/data/builder.json';

export default {
    data() {
        return {
            builderData: builder.data,
            selectedComponents: [],
            preset: 'lara',
            presets: [
                { name: 'Lara', value: 'lara' },
                { name: 'TailwindUI', value: 'tailwindui' }
            ],
            groups: [],
            filename: ''
        };
    },
    beforeMount() {
        this.groups = [['form'], ['button', 'panel', 'overlay'], ['data', 'menu'], ['file', 'message', 'media', 'misc']];
    },
    methods: {
        async generate() {
            const blob = await $fetch(`/api/builder`, {
                method: 'POST',
                body: {
                    components: this.selectedComponents,
                    preset: this.preset,
                    filename: this.filename
                }
            });

            let elm = document.createElement('a');

            elm.href = URL.createObjectURL(blob);
            elm.setAttribute('download', (this.filename || 'mypreset') + '.zip');
            elm.click();
            elm.remove();
        }
    }
};
</script>
