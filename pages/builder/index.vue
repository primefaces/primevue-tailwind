<template>
    <div>
        <div class="doc-intro">
            <h1>Builder</h1>
            <p>Build your own preset with the components you pick.</p>
        </div>

        <div v-for="group of groups" :key="group.name" class="flex align-items-center gap-8 mb-8">
            <div v-for="component of group.components" :key="component" class="flex align-items-center gap-8">
                <Checkbox v-model="selectedComponents" :inputId="component" name="component" :value="component" />
                <label :for="component">{{ component }}</label>
            </div>
        </div>
    </div>

    <button type="button" @click="generate">Download</button>
</template>

<script>
export default {
    data() {
        return {
            groups: [
                {
                    name: 'Form',
                    components: ['inputtext', 'dropdown']
                },
                {
                    name: 'Panel',
                    components: ['panel', 'fieldset']
                }
            ],
            selectedComponents: [],
            preset: 'lara'
        };
    },
    methods: {
        async generate() {
            const blob = await $fetch(`/api/builder`, {
                method: 'POST',
                body: {
                    components: this.selectedComponents,
                    preset: this.preset
                }
            });

            let elm = document.createElement('a');

            elm.href = URL.createObjectURL(blob);
            elm.setAttribute('download', 'mypreset.zip');
            elm.click();
            elm.remove();
        }
    }
};
</script>
