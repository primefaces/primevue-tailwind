<template>
    <DocSectionText v-bind="$attrs">
        <p>Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of <i>p-ink</i> element.</p>
    </DocSectionText>
    <div class="card flex flex-col gap-4 items-center">
        <span
            >Ripple option at the <span class="mx-1 h-8 w-8 rounded-border inline-flex items-center justify-center bg-primary text-primary-contrast"><i class="pi pi-palette"></i></span> configurator needs to be turned on for the demo.</span
        >
        <div class="flex justify-center gap-2">
            <div
                v-ripple="{
                    pt: {
                        root: { style: 'transform: scale(0); background: rgba(75, 175, 80, 0.3)' }
                    }
                }"
                class="box"
                style="border-color: rgba(75, 175, 80, 0.3)"
            >
                Green
            </div>
            <div
                v-ripple="{
                    pt: {
                        root: { style: 'transform: scale(0); background: rgba(255, 193, 6, 0.3)' }
                    }
                }"
                class="box"
                style="border-color: rgba(255, 193, 6, 0.3)"
            >
                Orange
            </div>
            <div
                v-ripple="{
                    pt: {
                        root: { style: 'transform: scale(0); background: rgba(156, 39, 176, 0.3)' }
                    }
                }"
                class="box"
                style="border-color: rgba(156, 39, 176, 0.3)"
            >
                Purple
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div class="flex justify-center gap-2">
    <div
        v-ripple="{
            pt: {
                root: { style: 'transform: scale(0); background: rgba(75, 175, 80, 0.3)' }
            }
        }"
        class="box"
        style="border-color: rgba(75, 175, 80, 0.3)"
    >
        Green
    </div>
    <div
        v-ripple="{
            pt: {
                root: { style: 'transform: scale(0); background: rgba(255, 193, 6, 0.3)' }
            }
        }"
        class="box"
        style="border-color: rgba(255, 193, 6, 0.3)"
    >
        Orange
    </div>
    <div
        v-ripple="{
            pt: {
                root: { style: 'transform: scale(0); background: rgba(156, 39, 176, 0.3)' }
            }
        }"
        class="box"
        style="border-color: rgba(156, 39, 176, 0.3)"
    >
        Purple
    </div>
</div>
`,
                options: `
<template>
    <div class="flex justify-center items-center gap-2">
        <div class="flex justify-center gap-2">
            <div
                v-ripple="{
                    pt: {
                        root: { style: 'transform: scale(0); background: rgba(75, 175, 80, 0.3)' }
                    }
                }"
                class="box"
                style="border-color: rgba(75, 175, 80, 0.3)"
            >
                Green
            </div>
            <div
                v-ripple="{
                    pt: {
                        root: { style: 'transform: scale(0); background: rgba(255, 193, 6, 0.3)' }
                    }
                }"
                class="box"
                style="border-color: rgba(255, 193, 6, 0.3)"
            >
                Orange
            </div>
            <div
                v-ripple="{
                    pt: {
                        root: { style: 'transform: scale(0); background: rgba(156, 39, 176, 0.3)' }
                    }
                }"
                class="box"
                style="border-color: rgba(156, 39, 176, 0.3)"
            >
                Purple
            </div>
        </div>
    </div>
</template>

<style scoped>
.box {
    padding: 2rem;
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    width: 110px;
    text-align: center;
}
</style>
`,
                composition: `
<template>
    <div class="flex justify-center items-center gap-2">
        <div class="flex justify-center gap-2">
            <div
                v-ripple="{
                    pt: {
                        root: { style: 'transform: scale(0); background: rgba(75, 175, 80, 0.3)' }
                    }
                }"
                class="box"
                style="border-color: rgba(75, 175, 80, 0.3)"
            >
                Green
            </div>
            <div
                v-ripple="{
                    pt: {
                        root: { style: 'transform: scale(0); background: rgba(255, 193, 6, 0.3)' }
                    }
                }"
                class="box"
                style="border-color: rgba(255, 193, 6, 0.3)"
            >
                Orange
            </div>
            <div
                v-ripple="{
                    pt: {
                        root: { style: 'transform: scale(0); background: rgba(156, 39, 176, 0.3)' }
                    }
                }"
                class="box"
                style="border-color: rgba(156, 39, 176, 0.3)"
            >
                Purple
            </div>
        </div>
    </div>
</template>

<style scoped>
.box {
    padding: 2rem;
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    width: 110px;
    text-align: center;
}
</style>
`
            }
        };
    }
};
</script>

<style scoped>
.box {
    padding: 2rem;
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    width: 110px;
    text-align: center;
}
</style>
