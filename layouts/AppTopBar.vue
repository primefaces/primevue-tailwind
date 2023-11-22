<template>
    <div :ref="containerRef" class="layout-topbar">
        <div class="layout-topbar-inner">
            <div class="layout-topbar-logo-container">
                <PrimeVueNuxtLink to="/" class="layout-topbar-logo" aria-label="PrimeVue logo">
                    <svg width="165" height="40" viewBox="0 0 165 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M128.062 32C128.438 32 128.656 31.8125 128.75 31.4375L134.031 7.6875C134.125 7.25 133.938 7 133.469 7H130.5C130.125 7 129.906 7.1875 129.812 7.5625L126.5 24.3125L123.219 7.5625C123.125 7.1875 122.906 7 122.531 7H119.562C119.094 7 118.906 7.25 119 7.6875L124.25 31.4375C124.344 31.8125 124.562 32 124.938 32H128.062ZM144.562 32C147.5 32 149.062 30.4375 149.062 27.5V7.625C149.062 7.28125 148.781 7 148.438 7H145.562C145.219 7 144.938 7.28125 144.938 7.625V26.625C144.938 27.4688 144.5 27.875 143.688 27.875H142.062C141.25 27.875 140.812 27.4688 140.812 26.625V7.625C140.812 7.28125 140.531 7 140.188 7H137.188C136.844 7 136.562 7.28125 136.562 7.625V27.5C136.562 30.4375 138.125 32 141.062 32H144.562ZM164.656 31.5C164.656 31.8125 164.531 32 164.156 32H152.656C152.375 32 152.188 31.8125 152.188 31.5V7.5C152.188 7.1875 152.375 7 152.656 7H164.156C164.531 7 164.656 7.1875 164.656 7.5V10.625C164.656 10.9375 164.531 11.1562 164.156 11.1562H156.344V17.4062H162.312C162.625 17.4062 162.812 17.5938 162.812 17.9375V21.0312C162.812 21.375 162.625 21.5625 162.312 21.5625H156.344V27.875H164.156C164.531 27.875 164.656 28.0312 164.656 28.375V31.5Z"
                            class="fill-primary-500"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M48.0938 32C48.4375 32 48.5938 31.8125 48.5938 31.5V23.625H52.3438C55.2812 23.625 56.8438 22.0312 56.8438 19.125V11.5C56.8438 8.5625 55.2812 7 52.3438 7H44.8438C44.5312 7 44.3438 7.1875 44.3438 7.5V31.5C44.3438 31.8125 44.5312 32 44.8438 32H48.0938ZM51.3438 19.5H48.5938V11.125H51.3438C52.1875 11.125 52.5938 11.5625 52.5938 12.375V18.25C52.5938 19.0312 52.1875 19.5 51.3438 19.5ZM63.9062 31.5C63.9062 31.8125 63.7188 32 63.4062 32H60.1562C59.8438 32 59.6562 31.8125 59.6562 31.5V7.5C59.6562 7.1875 59.8438 7 60.1562 7H68C70.9375 7 72.5 8.5625 72.5 11.5V19.125C72.5 21.2188 71.7188 22.5938 70.2188 23.25L72.375 31.4375C72.4688 31.8125 72.2812 32 71.9375 32H68.6875C68.375 32 68.2188 31.8438 68.1562 31.5625L66.0625 23.625H63.9062V31.5ZM67 19.5H63.9062V11.125H67C67.8125 11.125 68.25 11.5625 68.25 12.375V18.25C68.25 19.0625 67.8125 19.5 67 19.5ZM79.875 31.5C79.875 31.8125 79.6875 32 79.375 32H76.125C75.7812 32 75.625 31.8125 75.625 31.5V7.5C75.625 7.1875 75.7812 7 76.125 7H79.375C79.6875 7 79.875 7.1875 79.875 7.5V31.5ZM86.5 32C86.9062 32 87.125 31.7812 87.125 31.375V17.3125H87.3438L90.4375 31.4375C90.5312 31.8125 90.75 32 91.125 32H92.6562C93.0312 32 93.25 31.8125 93.3438 31.4375L96.4375 17.3125H96.6562V31.375C96.6562 31.7812 96.875 32 97.2812 32H100.188C100.594 32 100.812 31.7812 100.812 31.375V7.625C100.812 7.21875 100.594 7 100.188 7H96.0625C95.6875 7 95.4688 7.1875 95.375 7.5625L91.9062 23.125L88.4375 7.5625C88.3438 7.1875 88.125 7 87.75 7H83.625C83.2188 7 83 7.21875 83 7.625V31.375C83 31.7812 83.2188 32 83.625 32H86.5ZM116.406 31.5C116.406 31.8125 116.281 32 115.906 32H104.406C104.125 32 103.938 31.8125 103.938 31.5V7.5C103.938 7.1875 104.125 7 104.406 7H115.906C116.281 7 116.406 7.1875 116.406 7.5V10.625C116.406 10.9375 116.281 11.1562 115.906 11.1562H108.094V17.4062H114.062C114.375 17.4062 114.562 17.5938 114.562 17.9375V21.0312C114.562 21.375 114.375 21.5625 114.062 21.5625H108.094V27.875H115.906C116.281 27.875 116.406 28.0312 116.406 28.375V31.5Z"
                            class="fill-surface-900"
                        />
                        <path d="M25.5739 18.0458L22.8661 17.4443L24.9722 20.4519V29.7756L32.193 23.7603V13.5344L28.8835 14.7374L25.5739 18.0458Z" class="fill-primary-500" />
                        <path d="M8.72522 18.0458L11.433 17.4443L9.32696 20.4519V29.7756L2.10609 23.7603V13.5344L5.41565 14.7374L8.72522 18.0458Z" class="fill-primary-500" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.2296 21.0534L12.6365 17.4443L14.1409 18.3466H20.1582L21.6626 17.4443L24.0696 21.0534V34.5878L22.2643 37.2947L20.1582 39.4H14.1409L12.0348 37.2947L10.2296 34.5878V21.0534Z"
                            class="fill-primary-500"
                        />
                        <path d="M24.9722 35.4901L28.8835 31.5802V27.6702L24.9722 30.9786V35.4901Z" class="fill-primary-500" />
                        <path d="M9.32697 35.4901L5.41566 31.5802V27.6702L9.32697 30.9786V35.4901Z" class="fill-primary-500" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.0609 0H20.1583V5.7988L21.8141 1.78842L21.0609 0ZM19.5762 7.20849L18.9548 7.51908V0H17.7513V11.6281L19.5762 7.20849ZM17.7513 14.2483L22.3605 3.08549L23.4678 5.7145L19.8574 17.1435H17.7513V14.2483ZM16.5478 11.6718V0H15.3443V7.51908L14.8434 7.26869L16.5478 11.6718ZM14.1409 5.45385V0H13.2383L12.6085 1.49519L14.1409 5.45385ZM12.0497 2.82181L16.5478 14.4419V17.1435H14.7426L10.8313 5.7145L12.0497 2.82181Z"
                            class="fill-surface-900"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.80522 12.3313L14.7426 17.1435H15.0435L11.1322 5.71452L0 4.81223L1.80522 12.3313ZM32.7948 12.3313L19.8574 17.1435H19.5565L23.167 5.71452L34.6 4.81223L32.7948 12.3313Z"
                            class="fill-primary-500"
                        />
                        <path d="M24.0696 4.81221L30.3878 4.21069L26.1757 0H21.9635L24.0696 4.81221Z" class="fill-surface-900" />
                        <path d="M10.2295 4.81221L3.91129 4.21069L8.12346 0H12.3356L10.2295 4.81221Z" class="fill-surface-900" />
                        <path d="M4.70001 5.20001L11.2 5.70001L15.1 17.15H14.7L10.5 15.6L4.70001 5.20001Z" class="fill-surface-900" />
                        <path d="M29.8 5.20001L23.1 5.70001L19.4 17.15L19.9 17.14L23.8 15.7L29.8 5.20001Z" class="fill-surface-900" />
                        <path d="M12.1 18.2L12.6 17.4L14.3 18.2H20.3L21.6 17.4L22.2 18.2L17.15 26.8L12.1 18.2Z" class="fill-surface-900" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0297 0L17.1214 13.1536L22.5526 0H12.0297Z" class="fill-primary-500" />
                    </svg>
                </PrimeVueNuxtLink>
                <PrimeVueNuxtLink to="/" class="layout-topbar-icon" aria-label="PrimeVue logo">
                    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                            class="fill-primary-500"
                        />
                        <path
                            d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                            class="fill-surface-900"
                        />
                    </svg>
                </PrimeVueNuxtLink>
            </div>

            <ul class="flex list-none m-0 p-0 gap-2 items-center">
                <li>
                    <div id="docsearch"></div>
                </li>
                <li>
                    <a
                        href="https://github.com/primefaces/primevue"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex shrink-0 px-link border border-solid w-8 h-8 border border-surface-100 rounded-md bg-surface-0 items-center justify-center transition-all duration-300 hover:border-primary-500"
                    >
                        <i class="pi pi-github text-700"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://discord.gg/gzKFYnpmCY"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex shrink-0 px-link border border-solid w-8 h-8 border border-surface-100 rounded-md bg-surface-0 items-center justify-center transition-all duration-300 hover:border-primary-500"
                    >
                        <i class="pi pi-discord text-700"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/orgs/primefaces/discussions"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex shrink-0 px-link border border-solid w-8 h-8 border border-surface-100 rounded-md bg-surface-0 items-center justify-center transition-all duration-300 hover:border-primary-500"
                    >
                        <i class="pi pi-comments text-700"></i>
                    </a>
                </li>
                <li>
                    <button
                        type="button"
                        class="flex shrink-0 px-link border border-solid w-8 h-8 border border-surface-100 rounded-md bg-surface-0 items-center justify-center transition-all duration-300 hover:border-primary-500"
                        @click="toggleDarkMode"
                    >
                        <i :class="['pi text-700', { 'pi-moon': $appState.darkTheme, 'pi-sun': !$appState.darkTheme }]"></i>
                    </button>
                </li>
                <li class="relative">
                    <button
                        v-styleclass="{ selector: '.config',hideOnOutsideClick:'true', enterClass: 'hidden', enterActiveClass: 'my-fadein', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }"
                        type="button"
                        class="flex shrink-0 px-link border border-solid w-8 h-8 border border-surface-100 rounded-md bg-surface-0 items-center justify-center transition-all duration-300 hover:border-primary-500"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <div class="config absolute top-[2rem] right-0 hidden w-[15rem] p-3 bg-white rounded-md shadow border border-slate-200 flex-col justify-start items-start gap-3.5 inline-flex">
                        <div class="flex-col justify-start items-start gap-2 inline-flex">
                            <h2 class="text-black !text-xs !font-medium !m-0">Primary Colors</h2>
                            <div class="self-stretch justify-start items-start gap-2 inline-flex">
                                <a
                                    @click="updateColors('primary', ['243 252 249', '198 238 225', '152 225 201', '107 212 177', '61 198 153', '16 185 129', '14 157 110', '11 130 90', '9 102 71', '6 74 52'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(16 185 129)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(16 185 129)"
                                ></a>
                                <a
                                    @click="updateColors('primary', ['245 249 255', '208 225 253', '171 201 251', '133 178 249', '96 154 248', '59 130 246', '50 111 209', '41 91 172', '32 72 135', '24 52 98'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(59 130 246)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(59 130 246)"
                                ></a>
                                <a
                                    @click="updateColors('primary', ['253 242 248', '252 231 243', '251 207 232', '249 168 212', '244 114 182', '236 72 153', '219 39 119', '190 24 93', '157 23 77', '131 24 67'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(236 72 153)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(236 72 153)"
                                ></a>
                                <a
                                    @click="updateColors('primary', ['247 254 231', '236 252 203', '217 249 157', '190 242 100', '163 230 53', '132 204 22', '101 163 13', '77 124 15', '63 98 18', '26 46 5'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(16 185 129)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(132 204 22)"
                                ></a>
                                <a
                                    @click="updateColors('primary', ['240 253 250', '204 251 241', '153 246 228', '94 234 212', '45 212 191', '20 184 166', '13 148 136', '15 118 110', '17 94 89', '19 78 74'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(45 212 191)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(45 212 191)"
                                ></a>
                                <a
                                    @click="updateColors('primary', ['255 247 237', '255 237 213', '254 215 170', '253 186 116', '251 146 60', '249 115 22', '234 88 12', '194 65 12', '154 52 18', '124 45 18'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(251 146 60)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(251 146 60)"
                                ></a>
                            </div>
                        </div>
                        <div class="flex-col justify-start items-start gap-2 inline-flex">
                            <h2 class="text-black !text-xs !font-medium !m-0">Surface Colors</h2>
                            <div class="self-stretch justify-start items-start gap-2 inline-flex">
                                <a
                                    @click="updateColors('surface', ['255 255 255', '249 250 251', '243 244 246', '229 231 235', '209 213 219', '156 163 175', '107 114 128', '75 85 99', '55 65 81', '31 41 55', '17 24 39'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(107 114 128)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(107 114 128)"
                                ></a>
                                <a
                                    @click="updateColors('surface', ['255 255 255', '230 231 232', '205 207 209', '180 182 186', '155 158 163', '130 134 140', '104 110 117', '79 86 94', '54 61 71', '29 37 48', '4 13 25'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(130 134 140)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(130 134 140)"
                                ></a>
                                <a
                                    @click="updateColors('surface', ['255 255 255', '230 231 232', '205 207 209', '180 182 186', '155 158 163', '130 134 140', '104 110 117', '79 86 94', '54 61 71', '36 48 62', '29 37 48'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(104 110 117)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(104 110 117)"
                                ></a>
                                <a
                                    @click="updateColors('surface', ['255 255 255', '250 250 249', '245 245 244', '231 229 228', '214 211 209', '168 162 158', '120 113 108', '87 83 78', '68 64 60', '41 37 36', '28 25 23'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(120 113 108)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(120 113 108)"
                                ></a>
                                <a
                                    @click="updateColors('surface', ['255 255 255', '250 250 249', '245 245 244', '231 229 228', '214 211 209', '168 162 158', '120 113 108', '87 83 78', '68 64 60', '46 42 41', '41 37 36'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(120 113 108)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(120 113 108)"
                                ></a>
                                <a
                                    @click="updateColors('surface', ['255 255 255', '230 230 230', '204 204 204', '179 179 179', '153 153 153', '128 128 128', '102 102 102', '77 77 77', '51 51 51', '25 25 25', '0 0 0'])"
                                    class="w-3.5 h-3.5 rounded-full border border-[rgb(77 77 77)] border-opacity-20 cursor-pointer"
                                    style="background-color: rgb(77 77 77)"
                                ></a>
                            </div>
                        </div>
                    </div>
                </li>
                <li v-if="showMenuButton" class="menu-button">
                    <button
                        type="button"
                        class="flex shrink-0 px-link border border-solid w-8 h-8 border border-surface-100 rounded-md bg-surface-0 items-center justify-center transition-all duration-300 hover:border-primary-500 menu-button"
                        @click="onMenuButtonClick"
                        aria-haspopup
                        aria-label="Menu"
                    >
                        <i class="pi pi-bars text-700"></i>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import docsearch from '@docsearch/js';
import StyleClass from 'primevue/styleclass';
import { DomHandler } from 'primevue/utils';
export default {
    emits: ['menubutton-click', 'configbutton-click', 'darkswitch-click'],
    outsideClickListener: null,
    props: {
        showMenuButton: {
            type: Boolean,
            default: true
        }
    },
    scrollListener: null,
    container: null,
    mounted() {
        this.bindScrollListener();

        docsearch({
            container: '#docsearch',
            appId: '01CMUF4W4R',
            indexName: 'primevue',
            apiKey: '9bb5939e36897b26ff7de5b7b64d6c43',
            transformItems: (items) => {
                const isLocalhost = process.env.NODE_ENV !== 'production';

                return items.map((item) => {
                    if (isLocalhost) {
                        const url = new URL(item.url);

                        url.protocol = window.location.protocol;
                        url.hostname = window.location.hostname;
                        url.port = window.location.port;
                        item.url = url.toString();
                    }

                    return item;
                });
            }
        });
    },
    beforeUnmount() {
        if (this.scrollListener) {
            this.unbindScrollListener();
        }
    },
    methods: {
        updateColors(type, colors) {
            let increments;

            if (type === 'primary') {
                increments = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
            } else if (type === 'surface') {
                increments = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
            }

            colors.forEach((color, index) => {
                document.documentElement.style.setProperty(`--${type}-${increments[index]}`, color);
            });
        },
        onConfigButtonClick(event) {
            this.$emit('configbutton-click', event);
        },
        onMenuButtonClick(event) {
            this.$emit('menubutton-click', event);
        },
        toggleDarkMode(event) {
            const root = document.getElementsByTagName('html')[0];

            if (DomHandler.hasClass(root, 'dark')) {
                DomHandler.removeClass(root, 'dark');
            } else {
                DomHandler.addClass(root, 'dark');
            }
        },
        bindScrollListener() {
            if (!this.scrollListener) {
                if (this.container) {
                    this.scrollListener = () => {
                        if (window.scrollY > 0) this.container.classList.add('layout-topbar-sticky');
                        else this.container.classList.remove('layout-topbar-sticky');
                    };
                }
            }

            window.addEventListener('scroll', this.scrollListener);
        },
        unbindScrollListener() {
            if (this.scrollListener) {
                window.removeEventListener('scroll', this.scrollListener);
                this.scrollListener = null;
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.isOutsideTopbarMenuClicked(event)) {
                        this.unbindOutsideClickListener();
                    }
                };

                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        isOutsideTopbarMenuClicked(event) {
            return !(this.$refs.topbarMenu.isSameNode(event.target) || this.$refs.topbarMenu.contains(event.target));
        },
        containerRef(el) {
            this.container = el;
        }
    }
};
</script>
