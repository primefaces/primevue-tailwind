<template>
    <DocSectionText v-bind="$attrs">
        <p>
            If you have not configured Tailwind CSS already, refer to the <a href="https://tailwindcss.com/docs/installation/framework-guides">framework guides</a> installation. Tailwind only includes the used utility classes by scanning the project
            content, as PrimeVue components are loaded from node_modules the content property at <i>tailwind.config.js</i> needs to be aware of PrimeVue, otherwise the classes utilized in the preset will be removed as well.
        </p>
        <DocSectionCode :code="code1" hideToggleCode hideCodeSandbox hideStackBlitz />
        <p>
            The <a href="https://tailwindcss.com/docs/preflight" target="_blank" rel="noopener noreferrer">preflight</a> mode may break styling of some PrimeVue features so <i>@layer</i> configuration in your style file that includes tailwind styles
            is necessary for compatibility.
        </p>
        <DocSectionCode :code="code2" hideToggleCode hideCodeSandbox hideStackBlitz />
        <p>
            In a Nuxt project utilizing the modules of <NuxtLink to="/nuxt">PrimeVue</NuxtLink> and <a href="https://tailwindcss.nuxtjs.org/" target="_blank" rel="noopener noreferrer">Tailwind</a>, the layer order can be configured with the
            <a href="https://primevue.org/nuxt/#layerorder">cssLayerOrder</a> option. The <a href="https://tailwindcss.nuxtjs.org/getting-started/options#csspath">cssPath</a> property can be used to define a custom css file to configure Tailwind e.g.
            <i>layered.tailwind.css.</i>
        </p>
        <DocSectionCode :code="code3" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
        <DocSectionCode :code="code4" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    ...
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"  //primevue
    ],
    ...
}
`
            },
            code2: {
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
            code3: {
                basic: `
primevue: { 
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
}
`
            },
            code4: {
                basic: `
/* layered.tailwind.css */
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
