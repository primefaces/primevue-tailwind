<template>
    <div>
        <div class="doc-intro">
            <h1>Builder</h1>
            <p>Build your own preset with the components of your choice.</p>
        </div>

        <section class="py-6 flex flex-wrap gap-16">
            <div>
                <h2 class="border-b pb-4 border-surface-200 dark:border-surface-700">Base</h2>
                <SelectButton v-model="preset" :options="presets" optionLabel="name" optionValue="value" :allowEmpty="false" />
            </div>
            <div class="flex-auto">
                <div class="flex items-center justify-between gap-2 mb-4 border-b pb-4 border-surface-200 dark:border-surface-700">
                    <h2 class="!mb-0">Components</h2>
                    <div class="flex items-center gap-2">
                        <Checkbox inputId="toggleAll" :modelValue="isAllSelected()" @update:model-value="toggleAll($event)" binary />
                        <label for="toggleAll">Select All</label>
                    </div>
                </div>
                <div class="flex flex-wrap justify-between gap-4">
                    <div v-for="(group, i) of groups" :key="i" class="flex-auto">
                        <div v-for="category of group" :key="category" class="border !p-4 mb-12 card">
                            <div class="flex items-center gap-2 mb-4 border-b pb-2 border-surface-200 dark:border-surface-700">
                                <Checkbox :modelValue="isCategoryAllSelected(category)" @update:model-value="toggleCategory($event, category)" binary :disabled="!hasEnabledComponents(category)" />
                                <div class="font-semibold uppercase tracking-widest text-sm">{{ builderData[category].name }}</div>
                            </div>
                            <ul class="flex flex-col gap-4">
                                <li v-for="component of builderData[category].components" :key="component.name" class="flex items-center gap-2">
                                    <Checkbox v-model="selectedComponents" :inputId="component.path" name="component" :value="component.path" :disabled="component.disabled" />
                                    <label :for="component.path" :class="{ 'opacity-50': component.disabled }">{{ component.name }}</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="border-b pb-4 border-surface-200 dark:border-surface-700">Download</h2>
                <div class="flex w-full">
                    <InputText v-model="filename" class="!rounded-r-none" placeholder="Preset name" />
                    <Button icon="pi pi-download" class="!rounded-l-none" @click="generate" />
                </div>
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
                { name: 'Aura', value: 'aura' }
            ],
            groups: [],
            filename: ''
        };
    },
    created() {
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
        },
        isCategoryAllSelected(category) {
            const components = this.getEnabledComponents(category);

            return components.length && components.filter((component) => this.selectedComponents.includes(component)).length === components.length;
        },
        hasEnabledComponents(category) {
            return this.getEnabledComponents(category).length > 0;
        },
        toggleCategory(value, category) {
            const components = this.getEnabledComponents(category);

            if (value) {
                components.map((component) => {
                    if (!this.selectedComponents.includes(component)) {
                        this.selectedComponents.push(component);
                    }
                });
            } else {
                this.selectedComponents = this.selectedComponents.filter((name) => !components.includes(name));
            }
        },
        getEnabledComponents(category) {
            return this.builderData[category].components.filter((component) => component.disabled !== true).map((component) => component.path);
        },
        isAllSelected() {
            for (let category in this.builderData) {
                if (!this.hasEnabledComponents(category)) continue;
                else if (!this.isCategoryAllSelected(category)) return false;
            }

            return true;
        },
        toggleAll(value) {
            for (let category in this.builderData) {
                this.toggleCategory(value, category);
            }
        }
    }
};
</script>
