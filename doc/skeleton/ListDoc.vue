<template>
    <DocSectionText v-bind="$attrs">
        <p>Sample List implementation using different Skeleton components and PrimeFlex CSS utilities.</p>
    </DocSectionText>
    <div class="card">
        <ul>
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<ul>
    <li class="mb-4">
        <div class="flex">
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
            <div class="self-center flex-1">
                <Skeleton width="100%" class="mb-2"></Skeleton>
                <Skeleton width="75%"></Skeleton>
            </div>
        </div>
    </li>
    <li class="mb-4">
        <div class="flex">
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
            <div class="self-center flex-1">
                <Skeleton width="100%" class="mb-2"></Skeleton>
                <Skeleton width="75%"></Skeleton>
            </div>
        </div>
    </li>
    <li class="mb-4">
        <div class="flex">
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
            <div class="self-center flex-1">
                <Skeleton width="100%" class="mb-2"></Skeleton>
                <Skeleton width="75%"></Skeleton>
            </div>
        </div>
    </li>
    <li>
        <div class="flex">
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
            <div class="self-center flex-1">
                <Skeleton width="100%" class="mb-2"></Skeleton>
                <Skeleton width="75%"></Skeleton>
            </div>
        </div>
    </li>
</ul>
`,
                options: `
<template>
    <div class="card">
        <ul>
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <ul>
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="self-center flex-1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
