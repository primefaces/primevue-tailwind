<template>
    <DocSectionText v-bind="$attrs">
        <p>
            If you have not configured Tailwind CSS already, refer to the <a href="https://tailwindcss.com/docs/installation/framework-guides">framework guides</a> installation. Tailwind only includes the used utility classes by scanning the project
            content, as PrimeVue components are loaded from node_modules the content property at <i>tailwind.config.js</i> needs to be aware of PrimeVue, otherwise the classes utilized in the preset will be removed as well. In addition, the two
            built-in presets use an extended semantic palette that needs to be defined as an extension as well.
        </p>
        <DocSectionCode :code="code1" hideToggleCode hideCodeSandbox hideStackBlitz />
        <p>
            The <a href="https://tailwindcss.com/docs/preflight" target="_blank" rel="noopener noreferrer">preflight</a> mode may break styling of some PrimeVue features so <i>@layer</i> configuration in your style file that includes tailwind styles
            is necessary for compatibility.
        </p>
        <DocSectionCode :code="code2" hideToggleCode hideCodeSandbox hideStackBlitz />
        <p>
            In a Nuxt project utilizing the modules of <a href="https://primevue.org/nuxt" target="_blank" rel="noopener noreferrer">Nuxt</a> and <a href="https://tailwindcss.nuxtjs.org/" target="_blank" rel="noopener noreferrer">Tailwind</a>, the
            layer order can be configured with the <a href="https://primevue.org/nuxt/#layerorder">cssLayerOrder</a> option. The <a href="https://tailwindcss.nuxtjs.org/getting-started/options#csspath">cssPath</a> property can be used to define a
            custom css file to configure Tailwind e.g.
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
    theme: {
        extend: {
            colors: {
                'primary-50': 'rgb(var(--primary-50))',
                'primary-100': 'rgb(var(--primary-100))',
                'primary-200': 'rgb(var(--primary-200))',
                'primary-300': 'rgb(var(--primary-300))',
                'primary-400': 'rgb(var(--primary-400))',
                'primary-500': 'rgb(var(--primary-500))',
                'primary-600': 'rgb(var(--primary-600))',
                'primary-700': 'rgb(var(--primary-700))',
                'primary-800': 'rgb(var(--primary-800))',
                'primary-900': 'rgb(var(--primary-900))',
                'primary-950': 'rgb(var(--primary-950))',
                'surface-0': 'rgb(var(--surface-0))',
                'surface-50': 'rgb(var(--surface-50))',
                'surface-100': 'rgb(var(--surface-100))',
                'surface-200': 'rgb(var(--surface-200))',
                'surface-300': 'rgb(var(--surface-300))',
                'surface-400': 'rgb(var(--surface-400))',
                'surface-500': 'rgb(var(--surface-500))',
                'surface-600': 'rgb(var(--surface-600))',
                'surface-700': 'rgb(var(--surface-700))',
                'surface-800': 'rgb(var(--surface-800))',
                'surface-900': 'rgb(var(--surface-900))',
                'surface-950': 'rgb(var(--surface-950))'
            }
        }
    }
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

/* Initial Values */
:root {
    --primary-50: 236 253 245;
    --primary-100: 209 250 229;
    --primary-200: 167 243 208;
    --primary-300: 110 231 183;
    --primary-400: 52 211 153;
    --primary-500: 16 185 129;
    --primary-600: 5 150 105;
    --primary-700: 4 120 87;
    --primary-800: 6 95 70;
    --primary-900: 4 78 56;
    --primary-950: 2 44 34;
    
    --surface-0: 255 255 255;
    --surface-50: 249 250 251;
    --surface-100: 243 244 246;
    --surface-200: 229 231 235;
    --surface-300: 209 213 219;
    --surface-400: 156 163 175;
    --surface-500: 107 114 128;
    --surface-600: 75 85 99;
    --surface-700: 55 65 81;
    --surface-800: 31 41 55;
    --surface-900: 17 24 39;
    --surface-950: 8 8 8;
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
