<template>
    <DocSectionText v-bind="$attrs">
        <p class="!mb-0">A simple Card is created with a <i>title</i> property along with the content as children.</p>
    </DocSectionText>
    <div class="card flex items-center justify-center">
        <Card class="card max-w-3xl">
            <template #title> Simple Card </template>
            <template #content>
                <p class="!mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Card class="card max-w-3xl">
    <template #title> Simple Card </template>
    <template #content>
        <p class="!mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
</Card>`,
                options: `
<template>
    <div class="card flex items-center justify-center">
        <Card class="card max-w-3xl">
            <template #title> Simple Card </template>
            <template #content>
                <p class="!mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex items-center justify-center">
        <Card class="card max-w-3xl">
            <template #title> Simple Card </template>
            <template #content>
                <p class="!mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
