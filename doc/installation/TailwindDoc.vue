<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Tailwind CSS is required for theming the PrimeVue components, refer to the <a href="https://tailwindcss.com/docs/installation/framework-guides">framework guides</a> installation if you have not configured Tailwind CSS already. The
            <a href="https://tailwindcss.com/docs/preflight" target="_blank" rel="noopener noreferrer">preflight</a> mode may break styling of the core functionality so <i>@layer</i> configuration in your style file that includes tailwind styles is
            necessary for compatibility.
        </p>
        <DocSectionCode :code="code1" hideToggleCode hideCodeSandbox hideStackBlitz />
        <p>
            In a <strong>Nuxt</strong> project utilizing the modules of <NuxtLink to="/nuxt">PrimeVue</NuxtLink> and <a href="https://tailwindcss.nuxtjs.org/" target="_blank" rel="noopener noreferrer">Tailwind</a>, the layer order can be configured
            with the <a href="https://primevue.org/nuxt/#layerorder">cssLayerOrder</a> option.
        </p>
        <DocSectionCode :code="code2" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
        <DocSectionCode :code="code3" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
@layer tailwind-base, primevue, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}
`
            },
            code2: {
                basic: `
primevue: { 
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
}
`
            },
            code3: {
                basic: `
/* tailwind.css */
@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}
`
            }
        };
    }
};
</script>
