import path from 'path';

const baseUrl = '/';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    modules: ['nuxt-gtag', 'nuxt-primevue'],
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    experimental: {
        watcher: 'chokidar'
    },
    vite: {
        optimizeDeps: {
            disabled: true
        },
        esbuild: {
            minifyIdentifiers: false,
            minifyWhitespace: false
        }
    },
    runtimeConfig: {
        GITHUB_TOKEN: ''
    },
    primevue: {
        options: {
            ripple: true,
            unstyled: true
        },
        importPT: { from: path.resolve(__dirname, './presets/aura/') }
        // importPT: { as: 'Aura', from: '~/presets/aura' } for Windows Users
    },
    app: {
        baseURL: baseUrl,
        head: {
            title: 'Tailwind CSS based Vue UI Component Library',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeVue components.' },
                { name: 'robots', content: 'index,follow' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@primevue' },
                { name: 'twitter:title', content: 'Tailwind CSS based Vue UI Component Library' },
                { name: 'twitter:description', content: 'Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeVue components.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'Tailwind CSS based Vue UI Component Library' },
                { property: 'og:url', content: 'https://tailwind.primevue.org/' },
                { property: 'og:description', content: 'Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeVue components.' },
                { property: 'og:image', content: 'https://www.primefaces.org/static/social/primevue-preview.jpg' },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [
                { rel: 'icon', href: baseUrl + 'favicon.ico' },
                { rel: 'stylesheet', as: 'font', href: 'https://rsms.me/inter/inter.css' }
            ],
            script: [
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ]
        }
    },
    gtag: {
        id: 'G-48TTQ6G6KV'
    },
    css: ['~/assets/styles/style.css', '/node_modules/primeicons/primeicons.css', '@/assets/styles/flags.css', '@docsearch/css/dist/style.css', '@/assets/styles/layout/layout.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    nitro: {
        serverAssets: [
            {
                baseName: 'presets',
                dir: '../presets'
            }
        ]
    }
});
