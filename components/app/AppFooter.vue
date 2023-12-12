<template>
    <div class="layout-footer">
        <div>
            <span>Tailwind Presets {{ version }} by </span>
            <a href="https://www.primetek.com.tr" target="_blank" rel="noopener noreferrer">PrimeVue</a>
        </div>
    </div>
</template>

<script>
import pkg from '@/package.json';

export default {
    data() {
        return {
            version: pkg.version
        };
    }
};
</script>
