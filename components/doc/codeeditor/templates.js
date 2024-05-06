import pkg from '@/package.json';
import Aura from '@/presets/aura';
import Lara from '@/presets/lara';
import { ObjectUtils } from 'primevue/utils';
import { services } from './services';

const PrimeVue = {
    version: '^3.43.0',
    description:
        'PrimeVue is an open source UI library for Vue featuring a rich set of 80+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, it integrates with PrimeBlock, which has 400+ ready to use UI blocks to build spectacular applications in no time.'
};

const app_dependencies = pkg ? pkg.devDependencies : {};

const core_dependencies = {
    vue: '^3.2.45',
    'vue-router': '^4.1.6',
    '@vitejs/plugin-vue': '^4.0.0',
    vite: '^4.0.0',
    primevue: PrimeVue.version || 'latest',
    primeicons: app_dependencies['primeicons'] || 'latest'
};

// create-vue -> https://github.com/vuejs/create-vue
const getVueApp = (props = {}, sourceType) => {
    const path = 'src/';
    const { code: sources, title = 'primevue_demo', description = '', service, extPages, dependencies: deps, component, extFiles, embedded } = props;
    const dependencies = { ...core_dependencies, ...deps };

    const fileExtension = '.vue';
    const mainFileName = 'App';
    const sourceFileName = `${path}${mainFileName}${fileExtension}`;
    let element = '',
        imports = '',
        unstyled = '',
        themeSwitchCode = '',
        routeFiles = {};

    sources.routeFiles &&
        Object.entries(sources.routeFiles).forEach(([key, value]) => {
            routeFiles[`${path + key}`] = {
                content: value
            };
        });

    let extFilesSource = extFiles
        ? embedded
            ? extFiles['composition']
            : extFiles[sourceType.language]
            ? { ...extFiles[sourceType.language] }
            : Object.keys(extFiles)
                  .filter((k) => !sourceTypes.includes(k))
                  .reduce((result, current) => (result[current] = extFiles[current]) && result, {})
        : {};

    if (deps !== null && component !== null) {
        imports += `import ${component} from 'primevue/${component.toLowerCase()}';
`;
        element += `app.component('${component}', ${component});
`;
    }

    // main.js
    unstyled += `, unstyled: true, pt: Lara`;
    imports += `import ThemeSwitcher from './components/ThemeSwitcher.vue';
import Configurator from './components/Configurator.vue';
import Lara from './presets/lara';
import Aura from './presets/aura';
import appState from './plugins/appState.js';`;
    element += `app.component('ThemeSwitcher', ThemeSwitcher);
app.component('Configurator', Configurator);
app.use(appState);`;

    // package.json
    dependencies['tailwindcss'] = '^3.3.2';
    dependencies['postcss'] = '^8.4.27';
    dependencies['autoprefixer'] = '^10.4.14';

    // App.vue
    themeSwitchCode = ''.concat(
        `<template>
    <ThemeSwitcher />`,
        sources.split('<template>')[1]
    );

    const files = {
        'package.json': {
            content: {
                name: title.toLowerCase().replaceAll(' ', '_'),
                description: `**${description}** ${PrimeVue.description}`,
                keywords: [],
                scripts: {
                    dev: 'vite',
                    build: 'vite build',
                    preview: 'vite preview'
                },
                dependencies,
                main: 'src/App.vue'
            }
        },
        'vite.config.js': {
            content: `import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});`
        },
        'index.html': {
            content: `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="**${description}** ${PrimeVue.description}" />
        <!-- Added to show icons in the editor -->
        <link rel="stylesheet" href="https://unpkg.com/primeicons@${dependencies['primeicons'].replace(/[\^|~]/gi, '')}/primeicons.css">
        <title>PrimeVue App</title>
    </head>
    <body>
        <div id="app"></div>
        <script type="module" src="/src/main.js"></script>
    </body>
</html>`
        },
        [`${path}main.js`]: {
            content: `
import "primeicons/primeicons.css";
import "./style.css";
import "./flags.css";

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import PrimeVue from "primevue/config";
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import AnimateOnScroll from 'primevue/animateonscroll';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from "primevue/badgedirective";
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import CascadeSelect from 'primevue/cascadeselect';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice'
import Divider from 'primevue/divider';
import Dock from 'primevue/dock';
import Dropdown from 'primevue/dropdown';
import DynamicDialog from 'primevue/dynamicdialog';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import FocusTrap from 'primevue/focustrap';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import Row from 'primevue/row';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import Timeline from 'primevue/timeline';
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import VirtualScroller from 'primevue/virtualscroller';
${imports}

const app = createApp(App);

app.use(PrimeVue, { ripple: true ${unstyled} });
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);

app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('focustrap', FocusTrap);
app.directive('animateonscroll', AnimateOnScroll);

app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('AutoComplete', AutoComplete);
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('Badge', Badge);
app.component('BlockUI', BlockUI);
app.component('Breadcrumb', Breadcrumb);
app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('CascadeSelect', CascadeSelect);
app.component('Checkbox', Checkbox);
app.component('Chip', Chip);
app.component('Chips', Chips);
app.component('ColorPicker', ColorPicker);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ConfirmPopup', ConfirmPopup);
app.component('ContextMenu', ContextMenu);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('DeferredContent', DeferredContent);
app.component('Dialog', Dialog);
app.component('Divider', Divider);
app.component('Dock', Dock);
app.component('Dropdown', Dropdown);
app.component('DynamicDialog', DynamicDialog);
app.component('Fieldset', Fieldset);
app.component('FileUpload', FileUpload);
app.component('Galleria', Galleria);
app.component('Image', Image);
app.component('InlineMessage', InlineMessage);
app.component('Inplace', Inplace);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('Knob', Knob);
app.component('Listbox', Listbox);
app.component('MegaMenu', MegaMenu);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('Message', Message);
app.component('MultiSelect', MultiSelect);
app.component('OrderList', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('OverlayPanel', OverlayPanel);
app.component('Paginator', Paginator);
app.component('Panel', Panel);
app.component('PanelMenu', PanelMenu);
app.component('Password', Password);
app.component('PickList', PickList);
app.component('ProgressBar', ProgressBar);
app.component('ProgressSpinner', ProgressSpinner);
app.component('RadioButton', RadioButton);
app.component('Rating', Rating);
app.component('Row', Row);
app.component('SelectButton', SelectButton);
app.component('ScrollPanel', ScrollPanel);
app.component('ScrollTop', ScrollTop);
app.component('Slider', Slider);
app.component('Sidebar', Sidebar);
app.component('Skeleton', Skeleton);
app.component('SpeedDial', SpeedDial);
app.component('SplitButton', SplitButton);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Steps', Steps);
app.component('TabMenu', TabMenu);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Tag', Tag);
app.component('Textarea', Textarea);
app.component('Terminal', Terminal);
app.component('TieredMenu', TieredMenu);
app.component('Timeline', Timeline);
app.component('Toast', Toast);
app.component('Toolbar', Toolbar);
app.component('ToggleButton', ToggleButton);
app.component('Tree', Tree);
app.component('TreeSelect', TreeSelect);
app.component('TreeTable', TreeTable);
app.component('TriStateCheckbox', TriStateCheckbox);
app.component('VirtualScroller', VirtualScroller);
${element}

app.mount("#app");
`
        },
        [`${path}style.css`]: {
            content: tailwindConfig
        },
        [`${path}flags.css`]: {
            content: staticStyles.flags
        },
        [`${path}router.js`]: {
            content: `import { createRouter, createWebHistory } from "vue-router";
import ${mainFileName} from "./${mainFileName}${fileExtension}";

export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: ${mainFileName} }]
});`
        },
        [`${sourceFileName}`]: {
            content: themeSwitchCode
        },
        'public/logo.svg': {
            content: `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="139px" height="158px" viewBox="0 0 139 158" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 59.1 (86144) - https://sketch.com -->
    <title>head</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-3.000000, -7.000000)">
            <g id="head" transform="translate(3.000000, 7.000000)">
                <polygon id="chick-right" fill="#41B883" fill-rule="nonzero" points="102.295646 72.1832018 91.4643424 69.7770951 99.8886897 81.8076287 99.8886897 119.102283 128.772166 95.0412157 128.772166 54.1374014 115.533906 58.9496148"></polygon>
                <polygon id="chick-left" fill="#41B883" fill-rule="nonzero" transform="translate(27.078259, 86.619842) scale(-1, 1) translate(-27.078259, -86.619842) " points="19.255651 72.1832018 8.42434732 69.7770951 16.8486946 81.8076287 16.8486946 119.102283 45.7321712 95.0412157 45.7321712 54.1374014 32.4939111 58.9496148"></polygon>
                <polygon id="mask" fill="#41B883" points="40.9182584 84.2137354 50.5460839 69.7770951 56.5634749 73.3862552 80.6330387 73.3862552 86.6504296 69.7770951 96.2782551 84.2137354 96.2782551 138.351137 89.057386 149.178617 80.6330387 157.599991 56.5634749 157.599991 48.1391276 149.178617 40.9182584 138.351137"></polygon>
                <polygon id="bottom-chick-right" fill="#41B883" fill-rule="nonzero" points="99.8886897 141.960297 115.533906 126.320603 115.533906 110.680909 99.8886897 123.914496"></polygon>
                <polygon id="bottom-chick-left" fill="#41B883" fill-rule="nonzero" transform="translate(29.485216, 126.320603) scale(-1, 1) translate(-29.485216, -126.320603) " points="21.6626074 141.960297 37.3078239 126.320603 37.3078239 110.680909 21.6626074 123.914496"></polygon>
                <path d="M89.4422148,12.342 L93.8712988,22.8580139 L79.4295605,68.5740417 L71.0052132,68.5740417 L71.0042148,56.994 L89.4422148,12.342 Z M48.1982148,11.287 L66.1912148,57.769 L66.1913004,68.5740417 L58.9704313,68.5740417 L43.3252148,22.8580139 L48.1982148,11.287 Z M66.1913004,0 L66.1912148,46.688 L59.3732148,29.074 L61.3773876,30.0763341 L61.3773876,0 L66.1913004,0 Z M75.8191259,1.91846539e-13 L75.8191259,30.0763341 L78.3042148,28.833 L71.0042148,46.513 L71.0052132,0 L75.8191259,1.91846539e-13 Z M84.2434732,0 L87.2562148,7.154 L80.6322148,23.196 L80.6330387,1.91846539e-13 L84.2434732,0 Z M56.5634749,0 L56.5632148,21.816 L50.4332148,5.981 L52.9530403,0 L56.5634749,0 Z" fill="#455C71"></path>
                <path d="M138.399992,19.2488538 L131.179123,49.3251879 L79.4295605,68.5740417 L78.2260823,68.5740417 L92.6678206,22.8580139 L138.399992,19.2488538 Z M0,19.2488538 L44.528693,22.8580139 L60.1739095,68.5740417 L58.9704313,68.5740417 L7.22086913,49.3251879 L0,19.2488538 Z" id="head-right-2" fill="#41B883" fill-rule="nonzero"></path>
                <polygon id="ear-right" fill="#455C71" fill-rule="nonzero" points="96.2782551 19.2488538 121.551297 16.8427471 104.702602 0 87.8539078 0"></polygon>
                <polygon id="ear-left" fill="#455C71" fill-rule="nonzero" transform="translate(32.493911, 9.624427) scale(-1, 1) translate(-32.493911, -9.624427) " points="24.0695638 19.2488538 49.3426058 16.8427471 32.4939111 0 15.6452165 0"></polygon>
                <polygon id="Path-2" fill="#455C71" fill-rule="nonzero" points="18.7999989 20.7999988 44.7999973 22.7999986 60.3999964 68.5999959 58.7999965 68.5999959 41.9999975 62.3999963"></polygon>
                <polygon id="Path-3" fill="#455C71" fill-rule="nonzero" points="119.199993 20.7999988 92.3999945 22.7999986 77.5999954 68.5999959 79.5999953 68.5599959 95.1999943 62.7999963"></polygon>
                <polygon id="Path-4" fill="#455C71" fill-rule="nonzero" points="48.3999971 72.7999957 50.399997 69.5999959 57.1999966 72.7999957 81.1999952 72.7999957 86.3999949 69.5999959 88.7999947 72.7999957 68.5999959 107.199994"></polygon>
                <path d="M90.2104053,-1.0658141e-14 L68.485709,52.6144989 L48.1188062,-1.0658141e-14 L90.2104053,-1.0658141e-14 Z" id="Path-6" fill="#41B883" fill-rule="nonzero"></path>
            </g>
        </g>
    </g>
</svg>`
        },
        ...routeFiles,
        ...extFilesSource
    };

    if (extPages && extPages.length >= 1) {
        let routePaths = '';
        let viewImports = '';

        extPages.forEach((page, index) => {
            let compPath = page.tabName.replace('Demo', '').toLowerCase();

            routePaths += `{ path: "/${index === 0 ? '' : compPath}", component: ${page.tabName} },\n`;
            viewImports += `import ${page.tabName} from "./components/${page.tabName}${fileExtension}";\n`;
            files[`${path}components/${page.tabName}${fileExtension}`] = {
                content: page.content
            };
        });

        files[`${path}router.js`] = {
            content: `import { createRouter, createWebHistory } from "vue-router";
${viewImports}
export const router = createRouter({
    history: createWebHistory(),
    routes: [ ${routePaths}]
});`
        };
    }

    if (service) {
        service.forEach((name) => {
            files[`${path}service/${name}.js`] = {
                content: services[name]
            };
        });
    }

    files['tailwind.config.js'] = {
        content: `/** @type {import('tailwindcss').Config} */
export default {
darkMode: 'class',
content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*/.{vue,js,ts,jsx,tsx}",
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
},
plugins: []
}`
    };

    files['postcss.config.js'] = {
        content: `module.exports = {
plugins: {
    tailwindcss: {},
    autoprefixer: {}
}
}`
    };

    files[`${path}components/ThemeSwitcher.vue`] = {
        content: `<template>
    <div class="card flex justify-end p-2 mb-4">
        <ul class="flex list-none m-0 p-0 gap-2 items-center">
            <li>
                <button
                    type="button"
                    class="inline-flex border w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
                    @click="onThemeToggler"
                >
                    <i :class="\`dark:text-white pi \${iconClass}\`" />
                </button>
            </li>
        <li class="relative">
            <button
                v-styleclass="{selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}"
                type="button"
                class="inline-flex border w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
            >
                <i class="pi pi-palette dark:text-white"></i>
            </button>
            <Configurator />
        </li>
        </ul>
    </div>
    </template>

<script>
export default {
    data() {
        return {
            iconClass: 'pi-moon'
        }
    },
    methods: {
        onThemeToggler() {
            const root = document.getElementsByTagName('html')[0];

            root.classList.toggle('dark');
            this.iconClass = this.iconClass === 'pi-moon' ? 'pi-sun' : 'pi-moon';
        }
    },
};
<\/script>
    `
    };

    files[`${path}components/Configurator.vue`] = {
        content: `<template>
<div class="absolute top-[2.5rem] right-0 hidden w-[14rem] p-3 bg-white dark:bg-surface-800 rounded-md shadow border border-surface-200 dark:border-surface-700 flex-col justify-start items-start gap-3.5 inline-flex origin-top z-10">
    <div class="flex-col justify-start items-start gap-2 inline-flex w-full">
        <span class="text-black dark:text-surface-0 text-sm font-medium">Preset</span>
        <div class="custom-selectbutton inline-flex p-[0.28rem] items-start gap-[0.28rem] rounded-[0.71rem] border border-[#00000003] bg-surface-100 dark:bg-surface-900 w-full">
            <button
                type="button"
                class="px-[0.5rem] w-full tracking-tight py-[0.3rem] leading-none rounded-md text-surface-900 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 focus:outline-none duration-200 transition-[backgroundColor]"
                :class="{
                    'shadow shadow-inner bg-surface-0 dark:bg-surface-800 dark:shadow-[inset_0px_1px_0px_0px_var(--surface-800)]': isLara,
                    'bg-surface-100 dark:bg-surface-900': !isLara
                }"
                @click="setPreset('lara')"
            >
                Lara
            </button>
            <button
                type="button"
                class="px-[0.5rem] w-full tracking-tight py-[0.3rem] leading-none rounded-md text-surface-900 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 focus:outline-none duration-200 transition-[backgroundColor]"
                :class="{
                    'shadow shadow-inner bg-surface-0 dark:bg-surface-800 dark:shadow-[inset_0px_1px_0px_0px_var(--primary-400)]': isAura,
                    'bg-surface-100 dark:bg-surface-900': !isAura
                }"
                @click="setPreset('aura')"
            >
                Aura
            </button>
        </div>
    </div>
        <div class="flex-col justify-start items-start gap-2 inline-flex pr-4">
            <span class="text-black dark:text-surface-0 text-sm font-medium">Primary Colors</span>
            <div class="self-stretch justify-start items-start gap-2 inline-flex flex-wrap">
                <button
                    v-for="primaryColor of primaryColors"
                    :key="primaryColor.name"
                    type="button"
                    @click="updateColors('primary', primaryColor.palette)"
                    class="w-4 h-4 rounded-full cursor-pointer"
                    :style="{ backgroundColor: \`rgb(\${primaryColor.palette[5]})\` }"
                ></button>
            </div>
        </div>
        <div class="flex-col justify-start items-start gap-2 inline-flex pr-2">
            <span class="text-black dark:text-surface-0 text-sm font-medium">Surface Colors</span>
            <div class="self-stretch justify-start items-start gap-2 inline-flex">
                <button v-for="surface of surfaces" :key="surface.name" type="button" @click="updateColors('surface', surface.palette)" class="w-4 h-4 rounded-full cursor-pointer" :style="{ backgroundColor: \`rgb(\${surface.palette[6]})\` }"></button>
            </div>
        </div>
        <div class="flex justify-between items-center gap-2 flex w-full pt-4 pb-2 border-t border-surface-200 dark:border-surface-700">
            <span class="text-black dark:text-surface-0 text-sm font-medium m-0">Ripple Effect</span>
            <InputSwitch :modelValue="$primevue.config.ripple" @update:model-value="setRipple($event)" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                primaryColors: [
                    { name: 'emerald', palette: ['236 253 245', '209 250 229', '167 243 208', '110 231 183', '52 211 153', '16 185 129', '5 150 105', '4 120 87', '6 95 70', '4 78 56', '2 44 34'] },
                    { name: 'green', palette: ['240 253 244', '220 252 231', '187 247 208', '134 239 172', '78 222 128', '34 197 94', '22 163 74', '21 128 61', '22 101 52', '20 83 45', '23 78 22'] },
                    { name: 'lime', palette: ['247 254 231', '236 252 203', '217 249 157', '190 242 100', '163 230 53', '132 204 22', '101 163 13', '77 124 15', '63 98 18', '54 83 20', '26 46 5'] },
                    { name: 'red', palette: ['254 242 242', '254 226 226', '254 202 202', '252 165 165', '248 113 113', '239 68 68', '220 38 38', '185 28 28', '153 27 27', '127 29 29', '69 10 10'] },
                    { name: 'orange', palette: ['255 247 237', '255 237 213', '254 215 170', '253 186 116', '251 146 60', '249 115 22', '234 88 12', '194 65 12', '154 52 18', '124 45 18', '67 20 7'] },
                    { name: 'amber', palette: ['255 251 235', '254 243 199', '253 230 138', '252 211 77', '251 191 36', '245 158 11', '217 119 6', '180 83 9', '146 64 14', '120 53 15', '69 26 3'] },
                    { name: 'yellow', palette: ['254 252 232', '254 249 195', '254 240 138', '253 224 71', '250 204 21', '234 179 8', '202 138 4', '161 98 7', '130 77 14', '113 63 18', '66 32 6'] },
                    { name: 'teal', palette: ['240 253 250', '204 251 241', '153 246 228', '94 234 212', '45 212 191', '20 184 166', '13 148 136', '15 118 110', '21 94 89', '20 78 74', '4 47 46'] },
                    { name: 'cyan', palette: ['236 254 255', '207 250 254', '165 243 252', '103 232 249', '34 211 238', '6 182 212', '8 145 178', '14 116 144', '21 94 117', '22 78 99', '8 51 68'] },
                    { name: 'sky', palette: ['240 249 255', '224 242 254', '186 230 253', '125 211 252', '56 189 248', '14 165 233', '2 132 199', '3 105 161', '21 94 133', '12 74 110', '8 47 73'] },
                    { name: 'blue', palette: ['239 246 255', '219 234 254', '191 219 254', '147 197 253', '96 165 250', '59 130 246', '37 99 235', '29 78 216', '30 64 175', '30 58 138', '23 37 84'] },
                    { name: 'indigo', palette: ['238 242 255', '224 231 255', '199 210 254', '165 180 252', '129 140 248', '99 102 241', '79 70 229', '67 56 202', '55 48 163', '49 46 129', '30 27 75'] },
                    { name: 'violet', palette: ['245 243 255', '237 233 254', '221 214 254', '196 181 253', '167 139 250', '139 92 246', '124 58 237', '109 40 217', '91 33 182', '76 29 149', '50 23 102'] },
                    { name: 'purple', palette: ['250 245 255', '243 232 255', '233 213 255', '216 180 254', '192 132 252', '168 85 247', '147 51 234', '126 34 206', '107 33 168', '88 28 135', '59 20 100'] },
                    { name: 'fuchsia', palette: ['253 244 255', '250 232 255', '245 208 254', '240 171 252', '232 121 249', '217 70 239', '192 38 211', '162 28 175', '126 34 153', '109 40 121', '74 9 78'] },
                    { name: 'pink', palette: ['253 242 248', '252 231 243', '251 207 232', '249 168 212', '244 114 182', '236 72 153', '219 39 119', '190 24 93', '157 23 77', '131 24 67', '80 7 36'] },
                    { name: 'rose', palette: ['255 241 242', '255 228 230', '254 205 211', '253 164 175', '251 113 133', '244 63 94', '225 29 72', '190 18 60', '159 18 57', '136 19 55', '76 5 25'] }
                ],
                surfaces: [
                    {
                        name: 'gray',
                        palette: ['255 255 255', '249 250 251', '243 244 246', '229 231 235', '209 213 219', '156 163 175', '107 114 128', '75 85 99', '55 65 81', '31 41 55', '17 24 39', '8 8 8']
                    },
                    {
                        name: 'slate',
                        palette: ['255 255 255', '248 250 252', '241 245 249', '226 232 240', '203 213 225', '148 163 184', '100 116 139', '71 85 105', '45 55 72', '30 41 59', '15 23 42', '3 6 23']
                    },
                    {
                        name: 'zinc',
                        palette: ['255 255 255', '250 250 250', '244 244 245', '228 228 231', '212 212 216', '161 161 170', '113 113 122', '82 82 91', '63 63 70', '39 39 42', '24 24 27', '18 18 19']
                    },
                    {
                        name: 'neutral',
                        palette: ['255 255 255', '250 250 250', '245 245 245', '229 229 229', '212 212 212', '163 163 163', '115 115 115', '82 82 82', '64 64 64', '38 38 38', '24 24 24', '17 17 17']
                    },
                    {
                        name: 'stone',
                        palette: ['255 255 255', '250 250 249', '245 245 244', '231 229 228', '214 211 209', '168 162 158', '120 113 108', '87 83 78', '68 64 60', '46 42 41', '36 33 31', '28 25 23']
                    }
                ]
            };
        },
        methods: {
            updateColors(type, colors) {
                if (!document.startViewTransition) {
                    this.applyTheme(type, colors);

                    return;
                }

                document.startViewTransition(() => this.applyTheme(type, colors));
            },
            applyTheme(type, colors) {
                let increments;

                if (type === 'primary') {
                    increments = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
                } else if (type === 'surface') {
                    increments = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
                }

                colors.forEach((color, index) => {
                    document.documentElement.style.setProperty(\`--\${type}-\${increments[index]}\`, color);
                });
            },
            setPreset(preset) {
                this.$appState.preset = preset;
            },
            setRipple(value) {
                const app = document.getElementById('app');

                app.classList.toggle('layout-ripple-disabled');
                this.$primevue.config.ripple = value;

            }
        },
        computed: {
            isLara() {
                return this.$appState.preset === 'lara';
            },
            isAura() {
                return this.$appState.preset === 'aura';
            }
        }
    };
    <\/script>
    `
    };

    files[`${path}plugins/appState.js`] = {
        content: `import Lara from '@/presets/lara';
import Aura from '@/presets/aura';
import { reactive, watch } from 'vue';

export default {
    install: (app) => {
    const _appState = reactive({ preset: 'lara' });

    watch(
        () => _appState.preset,
        (newValue) => {
        if (newValue === 'lara')
            app.config.globalProperties.$primevue.config.pt = Lara;
        else if (newValue === 'aura')
            app.config.globalProperties.$primevue.config.pt = Aura;
        }
    );

    app.config.globalProperties.$appState = _appState;
    }
};
`
    };

    // @todo - Refactor
    const stringify = (value, indent = 2, currentIndent = 0) => {
        const currentIndentStr = ' '.repeat(currentIndent);
        const nextIndentStr = ' '.repeat(currentIndent + indent);

        if (ObjectUtils.isArray(value)) {
            return '[' + value.map((v) => stringify(v, indent, currentIndent + indent)).join(', ') + ']';
        } else if (ObjectUtils.isDate(value)) {
            return value.toISOString();
        } else if (ObjectUtils.isFunction(value)) {
            return value
                .toString()
                .split('\n')
                .map((line, i, arr) => {
                    try {
                        return process?.dev ? line : i === 0 ? line : arr.length - 1 === i ? ' '.repeat(2) + line : currentIndentStr + line;
                    } catch {
                        return i === 0 ? line : arr.length - 1 === i ? ' '.repeat(2) + line : currentIndentStr + line;
                    }
                })
                .join('\n');
        } else if (ObjectUtils.isObject(value)) {
            return (
                '{\n' +
                Object.entries(value)
                    .map(([k, v]) => `${nextIndentStr}${k}: ${stringify(v, indent, currentIndent + indent)}`)
                    .join(',\n') +
                `\n${currentIndentStr}` +
                '}'
            );
        } else {
            return JSON.stringify(value);
        }
    };

    const createPresetFiles = (presetName, stringPresetName) => {
        const presetPath = `${path}presets/${stringPresetName}`;
        const imports = [];
        const keys = [];
        const directivesKeys = [];

        Object.entries(presetName).forEach(([name, value]) => {
            if (name === 'global') {
                imports.push(`import ${name} from './${name}'`);
                keys.push(name);
                files[`${presetPath}/${name}.js`] = {
                    content: `export default {
    css: \`${value?.css}\`
                    }`
                };
            } else if (name === 'directives') {
                Object.entries(value).forEach(([dname, dvalue]) => {
                    const _name = dname === 'badge' ? 'badgedirective' : dname;

                    imports.push(`import ${_name} from './${_name}'`);
                    directivesKeys.push(dname === 'badge' ? `badge: badgedirective` : dname);
                    files[`${presetPath}/${_name}/index.js`] = {
                        content: `export default ${stringify(dvalue)}`
                    };
                });
            } else {
                imports.push(`import ${name} from './${name}'`);
                keys.push(name);
                files[`${presetPath}/${name}/index.js`] = {
                    content: `export default ${stringify(value)}`
                };
            }
        });

        files[`${path}presets/${stringPresetName}/index.js`] = {
            content: `${imports.join(';\n')}

export default {
  directives: {
    ${directivesKeys.join(',\n\t\t')}
  },
  ${keys.join(',\n\t')}
}
            `
        };
    };

    createPresetFiles(Lara, 'lara');
    createPresetFiles(Aura, 'aura');

    return { files, dependencies, sourceFileName };
};

const staticStyles = {
    global: `html {
    font-size: 14px;
}

body {
    font-family: var(--font-family);
    font-weight: normal;
    background: rgb(var(--surface-0));
    color: rgb(var(--surface-900));
    padding: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.card {
    background: rgb(var(--surface-0));
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}

p {
    line-height: 1.75;
}
    `,
    flags: `span.flag{width:44px;height:30px;display:inline-block;}img.flag{width:30px}.flag{background:url(https://primefaces.org/cdn/primevue/images/flag/flags_responsive.png) no-repeat;background-size:100%;vertical-align: middle;}.flag-ad{background-position:0 .413223%}.flag-ae{background-position:0 .826446%}.flag-af{background-position:0 1.239669%}.flag-ag{background-position:0 1.652893%}.flag-ai{background-position:0 2.066116%}.flag-al{background-position:0 2.479339%}.flag-am{background-position:0 2.892562%}.flag-an{background-position:0 3.305785%}.flag-ao{background-position:0 3.719008%}.flag-aq{background-position:0 4.132231%}.flag-ar{background-position:0 4.545455%}.flag-as{background-position:0 4.958678%}.flag-at{background-position:0 5.371901%}.flag-au{background-position:0 5.785124%}.flag-aw{background-position:0 6.198347%}.flag-az{background-position:0 6.61157%}.flag-ba{background-position:0 7.024793%}.flag-bb{background-position:0 7.438017%}.flag-bd{background-position:0 7.85124%}.flag-be{background-position:0 8.264463%}.flag-bf{background-position:0 8.677686%}.flag-bg{background-position:0 9.090909%}.flag-bh{background-position:0 9.504132%}.flag-bi{background-position:0 9.917355%}.flag-bj{background-position:0 10.330579%}.flag-bm{background-position:0 10.743802%}.flag-bn{background-position:0 11.157025%}.flag-bo{background-position:0 11.570248%}.flag-br{background-position:0 11.983471%}.flag-bs{background-position:0 12.396694%}.flag-bt{background-position:0 12.809917%}.flag-bv{background-position:0 13.22314%}.flag-bw{background-position:0 13.636364%}.flag-by{background-position:0 14.049587%}.flag-bz{background-position:0 14.46281%}.flag-ca{background-position:0 14.876033%}.flag-cc{background-position:0 15.289256%}.flag-cd{background-position:0 15.702479%}.flag-cf{background-position:0 16.115702%}.flag-cg{background-position:0 16.528926%}.flag-ch{background-position:0 16.942149%}.flag-ci{background-position:0 17.355372%}.flag-ck{background-position:0 17.768595%}.flag-cl{background-position:0 18.181818%}.flag-cm{background-position:0 18.595041%}.flag-cn{background-position:0 19.008264%}.flag-co{background-position:0 19.421488%}.flag-cr{background-position:0 19.834711%}.flag-cu{background-position:0 20.247934%}.flag-cv{background-position:0 20.661157%}.flag-cx{background-position:0 21.07438%}.flag-cy{background-position:0 21.487603%}.flag-cz{background-position:0 21.900826%}.flag-de{background-position:0 22.31405%}.flag-dj{background-position:0 22.727273%}.flag-dk{background-position:0 23.140496%}.flag-dm{background-position:0 23.553719%}.flag-do{background-position:0 23.966942%}.flag-dz{background-position:0 24.380165%}.flag-ec{background-position:0 24.793388%}.flag-ee{background-position:0 25.206612%}.flag-eg{background-position:0 25.619835%}.flag-eh{background-position:0 26.033058%}.flag-er{background-position:0 26.446281%}.flag-es{background-position:0 26.859504%}.flag-et{background-position:0 27.272727%}.flag-fi{background-position:0 27.68595%}.flag-fj{background-position:0 28.099174%}.flag-fk{background-position:0 28.512397%}.flag-fm{background-position:0 28.92562%}.flag-fo{background-position:0 29.338843%}.flag-fr{background-position:0 29.752066%}.flag-ga{background-position:0 30.165289%}.flag-gd{background-position:0 30.578512%}.flag-ge{background-position:0 30.991736%}.flag-gf{background-position:0 31.404959%}.flag-gh{background-position:0 31.818182%}.flag-gi{background-position:0 32.231405%}.flag-gl{background-position:0 32.644628%}.flag-gm{background-position:0 33.057851%}.flag-gn{background-position:0 33.471074%}.flag-gp{background-position:0 33.884298%}.flag-gq{background-position:0 34.297521%}.flag-gr{background-position:0 34.710744%}.flag-gs{background-position:0 35.123967%}.flag-gt{background-position:0 35.53719%}.flag-gu{background-position:0 35.950413%}.flag-gw{background-position:0 36.363636%}.flag-gy{background-position:0 36.77686%}.flag-hk{background-position:0 37.190083%}.flag-hm{background-position:0 37.603306%}.flag-hn{background-position:0 38.016529%}.flag-hr{background-position:0 38.429752%}.flag-ht{background-position:0 38.842975%}.flag-hu{background-position:0 39.256198%}.flag-id{background-position:0 39.669421%}.flag-ie{background-position:0 40.082645%}.flag-il{background-position:0 40.495868%}.flag-in{background-position:0 40.909091%}.flag-io{background-position:0 41.322314%}.flag-iq{background-position:0 41.735537%}.flag-ir{background-position:0 42.14876%}.flag-is{background-position:0 42.561983%}.flag-it{background-position:0 42.975207%}.flag-jm{background-position:0 43.38843%}.flag-jo{background-position:0 43.801653%}.flag-jp{background-position:0 44.214876%}.flag-ke{background-position:0 44.628099%}.flag-kg{background-position:0 45.041322%}.flag-kh{background-position:0 45.454545%}.flag-ki{background-position:0 45.867769%}.flag-km{background-position:0 46.280992%}.flag-kn{background-position:0 46.694215%}.flag-kp{background-position:0 47.107438%}.flag-kr{background-position:0 47.520661%}.flag-kw{background-position:0 47.933884%}.flag-ky{background-position:0 48.347107%}.flag-kz{background-position:0 48.760331%}.flag-la{background-position:0 49.173554%}.flag-lb{background-position:0 49.586777%}.flag-lc{background-position:0 50%}.flag-li{background-position:0 50.413223%}.flag-lk{background-position:0 50.826446%}.flag-lr{background-position:0 51.239669%}.flag-ls{background-position:0 51.652893%}.flag-lt{background-position:0 52.066116%}.flag-lu{background-position:0 52.479339%}.flag-lv{background-position:0 52.892562%}.flag-ly{background-position:0 53.305785%}.flag-ma{background-position:0 53.719008%}.flag-mc{background-position:0 54.132231%}.flag-md{background-position:0 54.545455%}.flag-me{background-position:0 54.958678%}.flag-mg{background-position:0 55.371901%}.flag-mh{background-position:0 55.785124%}.flag-mk{background-position:0 56.198347%}.flag-ml{background-position:0 56.61157%}.flag-mm{background-position:0 57.024793%}.flag-mn{background-position:0 57.438017%}.flag-mo{background-position:0 57.85124%}.flag-mp{background-position:0 58.264463%}.flag-mq{background-position:0 58.677686%}.flag-mr{background-position:0 59.090909%}.flag-ms{background-position:0 59.504132%}.flag-mt{background-position:0 59.917355%}.flag-mu{background-position:0 60.330579%}.flag-mv{background-position:0 60.743802%}.flag-mw{background-position:0 61.157025%}.flag-mx{background-position:0 61.570248%}.flag-my{background-position:0 61.983471%}.flag-mz{background-position:0 62.396694%}.flag-na{background-position:0 62.809917%}.flag-nc{background-position:0 63.22314%}.flag-ne{background-position:0 63.636364%}.flag-nf{background-position:0 64.049587%}.flag-ng{background-position:0 64.46281%}.flag-ni{background-position:0 64.876033%}.flag-nl{background-position:0 65.289256%}.flag-no{background-position:0 65.702479%}.flag-np{background-position:0 66.115702%}.flag-nr{background-position:0 66.528926%}.flag-nu{background-position:0 66.942149%}.flag-nz{background-position:0 67.355372%}.flag-om{background-position:0 67.768595%}.flag-pa{background-position:0 68.181818%}.flag-pe{background-position:0 68.595041%}.flag-pf{background-position:0 69.008264%}.flag-pg{background-position:0 69.421488%}.flag-ph{background-position:0 69.834711%}.flag-pk{background-position:0 70.247934%}.flag-pl{background-position:0 70.661157%}.flag-pm{background-position:0 71.07438%}.flag-pn{background-position:0 71.487603%}.flag-pr{background-position:0 71.900826%}.flag-pt{background-position:0 72.31405%}.flag-pw{background-position:0 72.727273%}.flag-py{background-position:0 73.140496%}.flag-qa{background-position:0 73.553719%}.flag-re{background-position:0 73.966942%}.flag-ro{background-position:0 74.380165%}.flag-rs{background-position:0 74.793388%}.flag-ru{background-position:0 75.206612%}.flag-rw{background-position:0 75.619835%}.flag-sa{background-position:0 76.033058%}.flag-sb{background-position:0 76.446281%}.flag-sc{background-position:0 76.859504%}.flag-sd{background-position:0 77.272727%}.flag-se{background-position:0 77.68595%}.flag-sg{background-position:0 78.099174%}.flag-sh{background-position:0 78.512397%}.flag-si{background-position:0 78.92562%}.flag-sj{background-position:0 79.338843%}.flag-sk{background-position:0 79.752066%}.flag-sl{background-position:0 80.165289%}.flag-sm{background-position:0 80.578512%}.flag-sn{background-position:0 80.991736%}.flag-so{background-position:0 81.404959%}.flag-sr{background-position:0 81.818182%}.flag-ss{background-position:0 82.231405%}.flag-st{background-position:0 82.644628%}.flag-sv{background-position:0 83.057851%}.flag-sy{background-position:0 83.471074%}.flag-sz{background-position:0 83.884298%}.flag-tc{background-position:0 84.297521%}.flag-td{background-position:0 84.710744%}.flag-tf{background-position:0 85.123967%}.flag-tg{background-position:0 85.53719%}.flag-th{background-position:0 85.950413%}.flag-tj{background-position:0 86.363636%}.flag-tk{background-position:0 86.77686%}.flag-tl{background-position:0 87.190083%}.flag-tm{background-position:0 87.603306%}.flag-tn{background-position:0 88.016529%}.flag-to{background-position:0 88.429752%}.flag-tp{background-position:0 88.842975%}.flag-tr{background-position:0 89.256198%}.flag-tt{background-position:0 89.669421%}.flag-tv{background-position:0 90.082645%}.flag-tw{background-position:0 90.495868%}.flag-ty{background-position:0 90.909091%}.flag-tz{background-position:0 91.322314%}.flag-ua{background-position:0 91.735537%}.flag-ug{background-position:0 92.14876%}.flag-gb,.flag-uk{background-position:0 92.561983%}.flag-um{background-position:0 92.975207%}.flag-us{background-position:0 93.38843%}.flag-uy{background-position:0 93.801653%}.flag-uz{background-position:0 94.214876%}.flag-va{background-position:0 94.628099%}.flag-vc{background-position:0 95.041322%}.flag-ve{background-position:0 95.454545%}.flag-vg{background-position:0 95.867769%}.flag-vi{background-position:0 96.280992%}.flag-vn{background-position:0 96.694215%}.flag-vu{background-position:0 97.107438%}.flag-wf{background-position:0 97.520661%}.flag-ws{background-position:0 97.933884%}.flag-ye{background-position:0 98.347107%}.flag-za{background-position:0 98.760331%}.flag-zm{background-position:0 99.173554%}.flag-zr{background-position:0 99.586777%}.flag-zw{background-position:0 100%}`
};

const tailwindConfig = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
    font-family: 'Inter var', sans-serif;
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
    font-variation-settings: normal;
    --font-family: 'Inter var', sans-serif;
    --font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
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

:root {
    --body-bg: rgb(var(--surface-50));
    --body-text-color: rgb(var(--surface-900));
    --card-border: 1px solid var(--border-color);
    --card-bg: rgb(var(--surface-0));
    --border-color: rgb(var(--surface-200));
}

:root[class='dark'] {
    --body-bg: rgb(var(--surface-950));
    --body-text-color: rgb(var(--surface-50));
    --card-border: 1px solid transparent;
    --card-bg: rgb(var(--surface-900));
    --border-color: rgba(255, 255, 255, 0.1);
}

html {
    font-size: 14px;
}

body {
    margin: 0px;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--body-bg);
    font-weight: normal;
    color: var(--body-text-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 1rem;
}

.card {
    background: var(--card-bg);
    border: var(--card-border);
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}

@keyframes fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeout {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes scalein {
    0% {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }
    100% {
        opacity: 1;
        transform: scaleY(1);
    }
}

@keyframes slidedown {
    0% {
        max-height: 0;
    }
    100% {
        max-height: auto;
    }
}
@keyframes slideup {
    0% {
        max-height: 1000px;
    }
    100% {
        max-height: 0;
    }
}

.scalein {
    animation: scalein 150ms linear;
}

.fadein {
    animation: fadein 150ms linear;
}

.fadeout {
    animation: fadeout 150ms linear;
}

.slidedown {
    animation: slidedown 0.45s ease-in-out;
}

.slideup {
    animation: slideup 0.45s cubic-bezier(0, 1, 0, 1);
}

.layout-ripple-disabled [data-pc-name='ripple'] {
    display: none !important;
}
`;

export { getVueApp };
