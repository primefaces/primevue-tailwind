<template>
    <div class="w-full relative flex flex-col justify-center items-center">
        <div class="w-full min-[1419px]:h-screen relative top-0 mx-auto max-w-[1728px] z-20 pb-[6rem]">
            <div class="w-full min-[1419px]:h-screen flex">
                <div class="w-full lg:w-[65%] min-[1100px]:w-[61%] xl:w-7/12 min-[1419px]:w-1/2 min-h-[1060px] relative pr-4 sm:pr-8 lg:pr-0 pl-4 sm:pl-8 xl:pl-20 min-[1419px]:pl-28 pr-15 flex-col justify-start items-center inline-flex">
                    <div class="self-stretch flex-col justify-start pt-28 sm:pt-36 pb-16 min-[1419px]:pt-[16rem] min-[1419px]:pb-44 items-start gap-6 inline-flex">
                        <div class="px-3 py-1 bg-primary-500/20 rounded-[7rem] border border-black border-opacity-10 justify-end items-start inline-flex">
                            <span class="text-primary-900 dark:text-primary-100 font-medium leading-6">Powered by PrimeVue Unstyled Core</span>
                        </div>
                        <div class="flex-col justify-start items-start gap-4 flex">
                            <div class="text-5xl font-bold">
                                <span class="text-neutral-800 dark:text-surface-50 leading-tight">Tailwind CSS Based <br />UI Component Library <br />for </span>
                                <span class="text-primary-400 font-bold leading-tight">Vue.js</span>
                            </div>
                            <div class="text-zinc-600 dark:text-surface-50 leading-relaxed max-w-[35rem] text-xl">Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeVue components.</div>
                        </div>
                        <div class="justify-start items-start gap-4 inline-flex flex-wrap">
                            <NuxtLink to="/overview">
                                <Button label="Get Started" icon="pi pi-arrow-right" iconPos="right" />
                            </NuxtLink>
                            <a href="https://github.com/primefaces/primevue" target="_blank" class="no-underline">
                                <Button
                                    label="Give a Star"
                                    icon="pi pi-star-fill text-yellow-500 dark:text-yellow-400"
                                    iconPos="right"
                                    class="!text-surface-700 dark:!text-surface-0 bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800 hover:border-surface-200 dark:hover:border-surface-700 hover:text-surface-700 dark:hover:text-surface-0"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="w-full min-[1419px]:w-screen min-[1419px]:max-w-[1728px] min-[1419px]:absolute top-[60rem] pb-[6rem] left-0 min-[1419px]:flex z-20">
                        <div class="inline-flex grow min-[1419px]:mx-auto items-start gap-6 shrink-0 min-[1419px]:px-[7rem] flex-wrap max-w-[58rem] min-[1419px]:max-w-none justify-start min-[1419px]:justify-center">
                            <div class="w-[20.5rem] flex p-[0.571rem] flex-col justify-end items-start rounded-[1.14rem] bg-white dark:bg-surface-900 dark:border dark:border-surface-700 shadow h-full self-stretch">
                                <div class="rounded-[0.571rem] bg-surface-50 dark:bg-surface-800 h-[9rem] w-full px-3 py-2">
                                    <div class="flex items-center">
                                        <div class="custom-selectbutton inline-flex p-[0.28rem] items-start gap-[0.28rem] rounded-[0.71rem] border border-[#00000003] bg-surface-0 dark:bg-surface-900">
                                            <button
                                                type="button"
                                                class="px-[0.85rem] tracking-tight py-[0.42rem] text-lg rounded-md bg-surface-0 text-surface-900 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 focus:outline-none duration-200 transition-[backgroundColor]"
                                                :class="{
                                                    'shadow shadow-inner bg-surface-50 dark:bg-surface-800 dark:shadow-[inset_0px_1px_0px_0px_var(--surface-800)]': isLara,
                                                    'dark:bg-surface-900': !isLara
                                                }"
                                                @click="setPreset('lara')"
                                            >
                                                Lara
                                            </button>
                                            <button
                                                type="button"
                                                class="px-[0.85rem] tracking-tight py-[0.42rem] text-lg rounded-md bg-surface-0 text-surface-900 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 focus:outline-none duration-200 transition-[backgroundColor]"
                                                :class="{
                                                    'shadow shadow-inner bg-surface-50 dark:bg-surface-800 dark:shadow-[inset_0px_1px_0px_0px_var(--primary-400)]': isAura,
                                                    'dark:bg-surface-900': !isAura
                                                }"
                                                @click="setPreset('aura')"
                                            >
                                                Aura
                                            </button>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="21" viewBox="0 0 41 21" fill="none" class="mt-5 ml-[-3px]">
                                            <circle cx="3.5" cy="3.5" r="3.5" class="fill-surface-100 dark:fill-surface-700" />
                                            <circle cx="3.5" cy="3.5" r="2.5" class="fill-surface-200 dark:fill-surface-600" />
                                            <circle cx="3.5" cy="3.5" r="1.5" class="fill-surface-300 dark:fill-surface-500" />
                                            <path
                                                d="M4.00049 3C3.72435 3 3.50049 3.22386 3.50049 3.5C3.50049 3.77614 3.72435 4 4.00049 4V3ZM36.6469 20.3536C36.8422 20.5488 37.1588 20.5488 37.354 20.3536L40.536 17.1716C40.7313 16.9763 40.7313 16.6597 40.536 16.4645C40.3408 16.2692 40.0242 16.2692 39.8289 16.4645L37.0005 19.2929L34.1721 16.4645C33.9768 16.2692 33.6602 16.2692 33.465 16.4645C33.2697 16.6597 33.2697 16.9763 33.465 17.1716L36.6469 20.3536ZM4.00049 4H33.0005V3H4.00049V4ZM36.5005 7.5V20H37.5005V7.5H36.5005ZM33.0005 4C34.9335 4 36.5005 5.567 36.5005 7.5H37.5005C37.5005 5.01472 35.4858 3 33.0005 3V4Z"
                                                class="fill-surface-300 dark:fill-surface-500"
                                            />
                                        </svg>
                                    </div>
                                    <div class="flex items-center px-[1.2rem] py-2 dropdown-bg mt-2 bg-white dark:bg-surface-900 rounded-md min-h-[4.3rem]">
                                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="!w-full" appendTo="self" :pt="{ panel: 'w-full' }" :ptOptions="{ mergeProps: true }" />
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1.5 items-start px-2 py-3">
                                    <span class="text-surface-900 dark:text-white text-lg font-medium">Multiple Preset</span>
                                    <span class="text-surface-900 dark:text-white text-sm font-light">Utilize multiple presets feature to quickly change and adapt your project's look & feel.</span>
                                </div>
                            </div>
                            <div class="w-[20.5rem] palette-card flex p-[0.571rem] flex-col justify-end items-start rounded-[1.14rem] bg-white dark:bg-surface-900 dark:border dark:border-surface-700 shadow h-full self-stretch">
                                <div class="palette rounded-[0.571rem] bg-surface-50 dark:bg-surface-800 h-[9rem] w-full overflow-hidden">
                                    <img src="assets/palette.png" alt="PrimeVue Logo" class="block dark:hidden w-full h-full" />
                                    <img src="assets/palette-dark.png" alt="PrimeVue Logo" class="hidden dark:block w-full h-full" />
                                </div>
                                <div class="flex flex-col gap-1.5 items-start px-2 py-3">
                                    <span class="text-surface-900 dark:text-white text-lg font-medium">Color Palette</span>
                                    <span class="text-surface-900 dark:text-white text-sm font-light">Leverage the full potential of Tailwind's robust color palette to enhance your design.</span>
                                </div>
                            </div>
                            <div class="w-[20.5rem] light-dark-card flex p-[0.571rem] flex-col justify-end items-start rounded-[1.14rem] bg-white dark:bg-surface-900 dark:border dark:border-surface-700 shadow h-full self-stretch">
                                <div class="clouds rounded-[0.571rem] bg-surface-50 dark:bg-surface-800 h-[9rem] w-full flex justify-center items-center overflow-hidden relative">
                                    <svg class="block dark:hidden absolute top-0 w-[150%] h-full" width="273" height="126" viewBox="0 0 273 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.35"
                                            d="M-31.436 67.2168H121.197C116.876 58.2729 103.715 47.845 93.456 44.3467C87.4596 42.3012 71.3254 43.7852 65.9623 47.1943C62.0096 36.9224 53.1294 28.7449 42.6727 25.7592C32.216 22.7734 20.4343 25.0417 11.7877 31.7129C0.985149 21.1959 -16.6314 15.2956 -31.436 18.8251V67.2168Z"
                                            fill="url(#paint0_linear_655_1959)"
                                        />
                                        <path
                                            d="M-31.436 42.5065C-17.2692 43.322 -4.43635 46.544 7.56551 54.0619C19.5629 61.5798 29.0224 73.7947 30.9898 87.7387C41.0108 84.3118 52.1503 83.572 62.2252 86.843C72.3001 90.114 81.1398 97.6586 84.814 107.525C94.9024 104.784 105.727 103.777 115.802 106.58C125.877 109.383 135.256 116.259 138.867 126.001H-31.436V42.5065Z"
                                            fill="url(#paint1_linear_655_1959)"
                                        />
                                        <path
                                            d="M305.042 68.0101C280.158 69.2223 256.145 78.9995 240.528 94.2715C226.895 91.981 212.684 91.3125 199.015 93.4694C185.351 95.6263 172.245 100.742 162.812 108.808C157.072 106.29 150.078 106.353 143.574 107.088C125.625 109.116 108.588 115.858 95.8496 126.001H305.446L305.047 68.0101H305.042Z"
                                            fill="url(#paint2_linear_655_1959)"
                                        />
                                        <path
                                            d="M-31.1935 -0.203735C-16.0834 0.571673 -1.49877 6.81505 7.98324 16.5745C16.2615 15.1084 24.8945 14.685 33.1907 16.062C41.4914 17.4435 49.4462 20.71 55.1777 25.8616C58.6632 24.2528 62.9124 24.2929 66.8606 24.7653C77.7575 26.0621 88.1064 30.367 95.8411 36.8465H-31.436L-31.1935 -0.203735Z"
                                            fill="url(#paint3_linear_655_1959)"
                                        />
                                        <path
                                            d="M-29.4103 104.73C-21.8462 92.1234 -4.9484 87.2704 7.44423 94.1466C11.2846 84.1866 18.97 76.0181 28.2723 72.0162C37.5746 68.0144 48.3727 68.2239 57.5313 72.5867C57.6391 72.6401 62.7417 66.4458 63.3032 65.8843C65.4053 63.7853 67.6646 61.8201 70.1665 60.3406C77.0837 56.2496 84.3109 54.7879 92.0995 56.2184C98.8551 57.4617 105.265 61.0848 109.945 66.4903C111.814 68.6472 113.404 71.0938 114.608 73.7453C121.049 70.5857 128.752 70.5679 135.207 73.6918C141.661 76.8158 146.759 83.0369 148.834 90.3186C162.377 88.7989 176.454 95.938 183.991 108.144C184.431 108.862 184.436 109.793 183.371 109.793H-31.436L-29.4103 104.726V104.73Z"
                                            fill="url(#paint4_linear_655_1959)"
                                        />
                                        <path
                                            d="M273.025 61.5082C268.295 59.6543 262.865 60.403 258.638 63.4913C255.521 54.1775 248.514 46.7665 240.267 44.057C232.02 41.3476 222.727 43.4064 215.909 49.4537C207.388 39.9215 194.515 34.5694 182.836 37.7691C177.37 39.2664 172.204 42.1898 167.766 46.1916C165.485 48.246 163.391 50.5901 161.55 53.1748C161.101 53.8031 157.278 60.657 157.242 60.6481C147.45 58.1258 136.549 63.1526 130.88 72.8051C126.303 69.8372 122.306 70.8799 117.711 72.7605C115.433 73.6919 113.273 74.9887 111.319 76.6376C110.546 77.2882 107.564 80.8266 106.782 81.6376H286.891C283.486 73.5315 281.124 64.6767 273.03 61.5037L273.025 61.5082Z"
                                            fill="url(#paint5_linear_655_1959)"
                                        />
                                        <path
                                            d="M305.443 -0.203608C295.363 0.126163 286.232 1.42742 277.693 4.46667C269.154 7.50591 262.426 12.4436 261.024 18.0809C253.891 16.6949 245.968 16.3964 238.799 17.7199C231.63 19.0435 225.342 22.0916 222.728 26.0801C215.55 24.9704 207.847 24.5649 200.682 25.6968C193.514 26.8287 186.843 29.6095 184.27 33.549H305.443V-0.208069V-0.203608Z"
                                            fill="url(#paint6_linear_655_1959)"
                                        />
                                        <path
                                            opacity="0.35"
                                            d="M305.442 23.2546C294.37 23.718 284.335 25.5496 274.957 29.8233C265.578 34.0969 258.185 41.0444 256.644 48.9723C248.81 47.0249 240.105 46.6015 232.227 48.4643C224.353 50.327 217.44 54.6141 214.57 60.2246C206.683 58.6649 198.225 58.0945 190.351 59.6854C182.477 61.2808 175.146 65.189 172.321 70.7283H305.442V23.2501V23.2546Z"
                                            fill="url(#paint7_linear_655_1959)"
                                        />
                                        <defs>
                                            <linearGradient id="paint0_linear_655_1959" x1="46.4682" y1="92.8588" x2="41.746" y2="15.3891" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.45" stop-color="white" stop-opacity="0" />
                                                <stop offset="1" stop-color="white" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_655_1959" x1="19.4955" y1="152.601" x2="64.3296" y2="61.6229" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.45" stop-color="white" stop-opacity="0" />
                                                <stop offset="1" stop-color="white" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_655_1959" x1="209.144" y1="144.366" x2="197.824" y2="81.7666" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.45" stop-color="white" stop-opacity="0" />
                                                <stop offset="1" stop-color="white" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_655_1959" x1="31.4659" y1="46.4055" x2="32.9382" y2="-2.49947" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.28" stop-color="white" stop-opacity="0" />
                                                <stop offset="0.92" stop-color="white" />
                                            </linearGradient>
                                            <linearGradient id="paint4_linear_655_1959" x1="74.236" y1="136.299" x2="80.9394" y2="52.4087" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.45" stop-color="white" stop-opacity="0" />
                                                <stop offset="1" stop-color="white" />
                                            </linearGradient>
                                            <linearGradient id="paint5_linear_655_1959" x1="198.306" y1="105.426" x2="194.189" y2="37.9077" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.45" stop-color="white" stop-opacity="0" />
                                                <stop offset="1" stop-color="white" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_655_1959" x1="245.685" y1="43.3574" x2="244.217" y2="-4.70972" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.24" stop-color="white" stop-opacity="0" />
                                                <stop offset="1" stop-color="white" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_655_1959" x1="262.034" y1="93.2419" x2="228.594" y2="25.3837" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.45" stop-color="white" stop-opacity="0" />
                                                <stop offset="1" stop-color="white" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="hidden dark:block h-[9rem] w-full absolute top-0 stars" style="background-size: cover; background-repeat: repeat"></div>
                                    <div class="z-20 inline-flex p-2 items-start gap-3 rounded-full border border-[#00000003] bg-surface-0 dark:bg-surface-900">
                                        <button
                                            type="button"
                                            class="rounded-full focus:outline-none h-[1.85rem] w-[1.85rem] flex justify-center items-center"
                                            :class="{
                                                'shadow-inner bg-surface-50 dark:bg-surface-800': !isDarkMode,
                                                'bg-surface-0 hover:bg-surface-50 dark:bg-surface-900 dark:hover:bg-surface-800 focus:outline-none h-[1.85rem] w-[1.85rem] flex justify-center items-center': isDarkMode
                                            }"
                                            @click="switchColorScheme('light')"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path
                                                    d="M8 12.3636C6.84269 12.3636 5.73278 11.9039 4.91444 11.0856C4.0961 10.2672 3.63636 9.15731 3.63636 8C3.63636 6.84269 4.0961 5.73278 4.91444 4.91444C5.73278 4.0961 6.84269 3.63636 8 3.63636C9.15731 3.63636 10.2672 4.0961 11.0856 4.91444C11.9039 5.73278 12.3636 6.84269 12.3636 8C12.3636 9.15731 11.9039 10.2672 11.0856 11.0856C10.2672 11.9039 9.15731 12.3636 8 12.3636ZM7.27273 0.727273C7.27273 0.325611 7.59834 0 8 0C8.40166 0 8.72727 0.325611 8.72727 0.727272V1.45455C8.72727 1.85621 8.40166 2.18182 8 2.18182C7.59834 2.18182 7.27273 1.85621 7.27273 1.45455V0.727273ZM7.27273 14.5455C7.27273 14.1438 7.59834 13.8182 8 13.8182C8.40166 13.8182 8.72727 14.1438 8.72727 14.5455V15.2727C8.72727 15.6744 8.40166 16 8 16C7.59834 16 7.27273 15.6744 7.27273 15.2727V14.5455ZM2.34327 3.37164C2.0593 3.08766 2.0593 2.62725 2.34327 2.34327C2.62725 2.0593 3.08766 2.0593 3.37164 2.34327L3.88582 2.85745C4.16979 3.14143 4.16979 3.60184 3.88582 3.88582C3.60184 4.16979 3.14143 4.16979 2.85745 3.88582L2.34327 3.37164ZM12.1142 13.1425C11.8302 12.8586 11.8302 12.3982 12.1142 12.1142C12.3982 11.8302 12.8586 11.8302 13.1425 12.1142L13.6567 12.6284C13.9407 12.9123 13.9407 13.3728 13.6567 13.6567C13.3728 13.9407 12.9123 13.9407 12.6284 13.6567L12.1142 13.1425ZM12.6281 2.34309C12.9122 2.05886 13.3729 2.05889 13.657 2.34315C13.9408 2.62722 13.9408 3.08761 13.6568 3.37158L13.1426 3.88576C12.8586 4.16977 12.3981 4.16977 12.1141 3.88576C11.8302 3.6018 11.8301 3.14142 12.114 2.85739L12.6281 2.34309ZM2.85745 12.1142C3.14143 11.8302 3.60184 11.8302 3.88582 12.1142C4.16979 12.3982 4.16979 12.8586 3.88582 13.1425L3.37164 13.6567C3.08766 13.9407 2.62725 13.9407 2.34327 13.6567C2.0593 13.3728 2.0593 12.9123 2.34327 12.6284L2.85745 12.1142ZM15.2727 7.27273C15.6744 7.27273 16 7.59834 16 8C16 8.40166 15.6744 8.72727 15.2727 8.72727H14.5455C14.1438 8.72727 13.8182 8.40166 13.8182 8C13.8182 7.59834 14.1438 7.27273 14.5455 7.27273H15.2727ZM1.45455 7.27273C1.85621 7.27273 2.18182 7.59834 2.18182 8C2.18182 8.40166 1.85621 8.72727 1.45455 8.72727H0.727273C0.325611 8.72727 0 8.40166 0 8C0 7.59834 0.325611 7.27273 0.727272 7.27273H1.45455Z"
                                                    fill="#EAB308"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            class="rounded-full focus:outline-none h-[1.85rem] w-[1.85rem] flex justify-center items-center"
                                            :class="{
                                                'shadow-inner bg-surface-50 dark:bg-surface-800': isDarkMode,
                                                'bg-surface-0 hover:bg-surface-50 dark:bg-surface-900 dark:hover:bg-surface-800 focus:outline-none h-[1.85rem] w-[1.85rem] flex justify-center items-center': !isDarkMode
                                            }"
                                            @click="switchColorScheme('dark')"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                <path
                                                    d="M5.22252 1.91426C5.60983 1.76924 5.9522 2.17467 5.83886 2.57241C5.56713 3.52593 5.51436 4.53321 5.69034 5.51786C5.92575 6.83507 6.5592 8.04848 7.50536 8.99464C8.45152 9.9408 9.66494 10.5742 10.9821 10.8097C11.9668 10.9856 12.9741 10.9329 13.9276 10.6611C14.3253 10.5478 14.7308 10.8902 14.5857 11.2775C13.5528 14.0364 10.8922 16 7.77273 16C3.756 16 0.5 12.744 0.5 8.72727C0.5 5.60781 2.46355 2.94724 5.22252 1.91426ZM12.2556 1.66618L12.5109 1.72999C12.7182 1.78182 12.8636 1.96811 12.8636 2.18182C12.8636 2.39553 12.7182 2.58182 12.5109 2.63365L12.2556 2.69745C11.9999 2.76141 11.7664 2.89364 11.58 3.08002C11.3936 3.2664 11.2614 3.49993 11.1975 3.75564L11.1336 4.01086C11.0818 4.21819 10.8955 4.36364 10.6818 4.36364C10.4681 4.36364 10.2818 4.21819 10.23 4.01086L10.1662 3.75564C10.1022 3.49993 9.97 3.2664 9.78362 3.08002C9.59723 2.89364 9.36371 2.76141 9.108 2.69745L8.85278 2.63365C8.64545 2.58182 8.5 2.39553 8.5 2.18182C8.5 1.96811 8.64545 1.78182 8.85278 1.72999L9.108 1.66618C9.36357 1.60211 9.59695 1.46983 9.78319 1.28346C9.96944 1.09708 10.1016 0.863619 10.1655 0.608L10.2296 0.352475C10.2817 0.145272 10.468 0 10.6816 0C10.8954 0 11.0818 0.145533 11.1337 0.352984L11.1975 0.608C11.2614 0.863708 11.3936 1.09723 11.58 1.28362C11.7664 1.47 11.9999 1.60223 12.2556 1.66618ZM15.892 5.30255L16.1472 5.36635C16.3546 5.41818 16.5 5.60447 16.5 5.81818C16.5 6.03189 16.3546 6.21818 16.1472 6.27001L15.892 6.33382C15.6363 6.39777 15.4028 6.53 15.2164 6.71638C15.03 6.90277 14.8978 7.13629 14.8338 7.392L14.77 7.64722C14.7182 7.85455 14.5319 8 14.3182 8C14.1045 8 13.9182 7.85455 13.8664 7.64722L13.8025 7.392C13.7386 7.13629 13.6064 6.90277 13.42 6.71638C13.2336 6.53 13.0001 6.39777 12.7444 6.33382L12.4891 6.27001C12.2818 6.21818 12.1364 6.03189 12.1364 5.81818C12.1364 5.60447 12.2818 5.41818 12.4891 5.36635L12.7444 5.30255C13.0001 5.23859 13.2336 5.10636 13.42 4.91998C13.6064 4.7336 13.7386 4.50007 13.8025 4.24436L13.8664 3.98914C13.9182 3.78181 14.1045 3.63636 14.3182 3.63636C14.5319 3.63636 14.7182 3.78181 14.77 3.98914L14.8338 4.24436C14.8978 4.50007 15.03 4.7336 15.2164 4.91998C15.4028 5.10636 15.6363 5.23859 15.892 5.30255Z"
                                                    fill="#BDBDBD"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1.5 items-start px-2 py-3">
                                    <span class="text-surface-900 dark:text-white text-lg font-medium">Light / Dark</span>
                                    <span class="text-surface-900 dark:text-white text-sm font-light">Transition seamlessly between light and dark modes.</span>
                                </div>
                            </div>
                            <div class="w-[20.5rem] flex p-[0.571rem] flex-col justify-end items-start rounded-[1.14rem] bg-white dark:bg-surface-900 dark:border dark:border-surface-700 shadow h-full self-stretch prime-card">
                                <div class="rounded-[0.571rem] bg-surface-50 dark:bg-surface-800 h-[9rem] w-full flex items-center justify-center overflow-hidden">
                                    <img src="assets/emeraldlogo.png" alt="PrimeVue Logo" class="emerald-logo" />
                                </div>
                                <div class="flex flex-col gap-1.5 items-start px-2 py-3">
                                    <span class="text-surface-900 dark:text-white text-lg font-medium">Built-on PrimeVue</span>
                                    <span class="text-surface-900 dark:text-white text-sm font-light">All the features of PrimeVue is included. Accessibility is out of the box!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:inline-flex w-[35%] min-[1100px]:w-[39%] xl:w-5/12 min-[1419px]:w-1/2 overflow-hidden justify-around items-start p-5">
                    <div class="component-suite">
                        <svg class="w-[49rem] relative top-[-5rem] z-0" viewBox="0 0 781 1050" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="223.5" y1="0.523437" x2="223.5" y2="1049.48" stroke="url(#paint0_linear_612_64534)" />
                            <line x1="0.640625" y1="278.5" x2="780.363" y2="278.5" stroke="url(#paint1_linear_612_64534)" />
                            <line x1="0.640625" y1="347.5" x2="780.363" y2="347.5" stroke="url(#paint2_linear_612_64534)" />
                            <line x1="351.5" y1="348" x2="351.5" y2="416" class="stroke-primary-200" />
                            <line x1="0.640625" y1="416.5" x2="780.363" y2="416.5" stroke="url(#paint3_linear_612_64534)" />
                            <line x1="478.5" y1="417" x2="478.5" y2="485" class="stroke-primary-200" />
                            <line x1="0.640625" y1="485.5" x2="780.363" y2="485.5" stroke="url(#paint4_linear_612_64534)" />
                            <mask id="mask0_612_64534" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="41" y="492" width="182" height="66">
                                <g clip-path="url(#clip0_612_64534)">
                                    <g>
                                        <path d="M-192 492H-193V493H-192V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 492H-188V493H-187V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 492H-183V493H-182V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 492H-178V493H-177V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 492H-173V493H-172V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 492H-168V493H-167V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 492H-163V493H-162V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 492H-158V493H-157V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 492H-153V493H-152V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 492H-148V493H-147V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 492H-143V493H-142V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 492H-138V493H-137V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 492H-133V493H-132V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 492H-128V493H-127V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 492H-123V493H-122V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 492H-118V493H-117V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 492H-113V493H-112V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 492H-108V493H-107V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 492H-103V493H-102V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 492H-98V493H-97V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 492H-93V493H-92V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 492H-88V493H-87V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 492H-83V493H-82V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 492H-78V493H-77V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 492H-73V493H-72V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 492H-68V493H-67V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 492H-63V493H-62V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 492H-58V493H-57V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 492H-53V493H-52V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 492H-48V493H-47V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 492H-43V493H-42V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 492H-38V493H-37V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 492H-33V493H-32V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 492H-28V493H-27V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 492H-23V493H-22V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 492H-18V493H-17V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 492H-13V493H-12V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 492H-8V493H-7V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 492H-3V493H-2V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 492H2V493H3V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 492H7V493H8V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 492H12V493H13V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 492H17V493H18V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 492H22V493H23V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 492H27V493H28V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 492H32V493H33V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 492H37V493H38V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 492H42V493H43V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 492H47V493H48V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 492H52V493H53V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 492H57V493H58V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 492H62V493H63V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 492H67V493H68V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 492H72V493H73V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 492H77V493H78V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 492H82V493H83V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 492H87V493H88V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 492H92V493H93V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 492H97V493H98V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 492H102V493H103V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 492H107V493H108V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 492H112V493H113V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 492H117V493H118V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 492H122V493H123V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 492H127V493H128V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 492H132V493H133V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 492H137V493H138V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 492H142V493H143V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 492H147V493H148V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 492H152V493H153V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 492H157V493H158V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 492H162V493H163V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 492H167V493H168V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 492H172V493H173V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 492H177V493H178V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 492H182V493H183V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 492H187V493H188V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 492H192V493H193V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 492H197V493H198V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 492H202V493H203V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 492H207V493H208V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 492H212V493H213V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 492H217V493H218V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 492H222V493H223V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 497H-193V498H-192V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 497H-188V498H-187V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 497H-183V498H-182V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 497H-178V498H-177V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 497H-173V498H-172V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 497H-168V498H-167V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 497H-163V498H-162V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 497H-158V498H-157V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 497H-153V498H-152V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 497H-148V498H-147V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 497H-143V498H-142V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 497H-138V498H-137V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 497H-133V498H-132V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 497H-128V498H-127V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 497H-123V498H-122V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 497H-118V498H-117V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 497H-113V498H-112V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 497H-108V498H-107V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 497H-103V498H-102V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 497H-98V498H-97V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 497H-93V498H-92V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 497H-88V498H-87V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 497H-83V498H-82V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 497H-78V498H-77V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 497H-73V498H-72V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 497H-68V498H-67V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 497H-63V498H-62V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 497H-58V498H-57V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 497H-53V498H-52V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 497H-48V498H-47V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 497H-43V498H-42V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 497H-38V498H-37V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 497H-33V498H-32V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 497H-28V498H-27V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 497H-23V498H-22V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 497H-18V498H-17V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 497H-13V498H-12V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 497H-8V498H-7V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 497H-3V498H-2V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 497H2V498H3V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 497H7V498H8V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 497H12V498H13V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 497H17V498H18V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 497H22V498H23V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 497H27V498H28V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 497H32V498H33V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 497H37V498H38V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 497H42V498H43V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 497H47V498H48V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 497H52V498H53V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 497H57V498H58V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 497H62V498H63V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 497H67V498H68V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 497H72V498H73V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 497H77V498H78V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 497H82V498H83V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 497H87V498H88V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 497H92V498H93V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 497H97V498H98V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 497H102V498H103V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 497H107V498H108V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 497H112V498H113V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 497H117V498H118V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 497H122V498H123V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 497H127V498H128V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 497H132V498H133V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 497H137V498H138V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 497H142V498H143V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 497H147V498H148V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 497H152V498H153V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 497H157V498H158V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 497H162V498H163V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 497H167V498H168V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 497H172V498H173V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 497H177V498H178V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 497H182V498H183V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 497H187V498H188V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 497H192V498H193V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 497H197V498H198V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 497H202V498H203V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 497H207V498H208V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 497H212V498H213V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 497H217V498H218V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 497H222V498H223V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 502H-193V503H-192V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 502H-188V503H-187V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 502H-183V503H-182V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 502H-178V503H-177V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 502H-173V503H-172V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 502H-168V503H-167V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 502H-163V503H-162V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 502H-158V503H-157V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 502H-153V503H-152V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 502H-148V503H-147V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 502H-143V503H-142V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 502H-138V503H-137V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 502H-133V503H-132V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 502H-128V503H-127V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 502H-123V503H-122V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 502H-118V503H-117V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 502H-113V503H-112V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 502H-108V503H-107V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 502H-103V503H-102V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 502H-98V503H-97V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 502H-93V503H-92V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 502H-88V503H-87V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 502H-83V503H-82V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 502H-78V503H-77V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 502H-73V503H-72V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 502H-68V503H-67V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 502H-63V503H-62V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 502H-58V503H-57V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 502H-53V503H-52V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 502H-48V503H-47V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 502H-43V503H-42V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 502H-38V503H-37V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 502H-33V503H-32V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 502H-28V503H-27V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 502H-23V503H-22V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 502H-18V503H-17V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 502H-13V503H-12V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 502H-8V503H-7V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 502H-3V503H-2V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 502H2V503H3V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 502H7V503H8V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 502H12V503H13V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 502H17V503H18V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 502H22V503H23V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 502H27V503H28V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 502H32V503H33V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 502H37V503H38V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 502H42V503H43V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 502H47V503H48V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 502H52V503H53V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 502H57V503H58V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 502H62V503H63V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 502H67V503H68V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 502H72V503H73V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 502H77V503H78V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 502H82V503H83V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 502H87V503H88V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 502H92V503H93V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 502H97V503H98V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 502H102V503H103V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 502H107V503H108V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 502H112V503H113V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 502H117V503H118V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 502H122V503H123V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 502H127V503H128V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 502H132V503H133V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 502H137V503H138V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 502H142V503H143V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 502H147V503H148V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 502H152V503H153V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 502H157V503H158V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 502H162V503H163V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 502H167V503H168V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 502H172V503H173V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 502H177V503H178V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 502H182V503H183V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 502H187V503H188V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 502H192V503H193V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 502H197V503H198V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 502H202V503H203V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 502H207V503H208V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 502H212V503H213V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 502H217V503H218V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 502H222V503H223V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 507H-193V508H-192V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 507H-188V508H-187V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 507H-183V508H-182V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 507H-178V508H-177V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 507H-173V508H-172V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 507H-168V508H-167V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 507H-163V508H-162V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 507H-158V508H-157V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 507H-153V508H-152V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 507H-148V508H-147V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 507H-143V508H-142V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 507H-138V508H-137V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 507H-133V508H-132V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 507H-128V508H-127V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 507H-123V508H-122V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 507H-118V508H-117V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 507H-113V508H-112V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 507H-108V508H-107V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 507H-103V508H-102V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 507H-98V508H-97V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 507H-93V508H-92V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 507H-88V508H-87V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 507H-83V508H-82V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 507H-78V508H-77V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 507H-73V508H-72V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 507H-68V508H-67V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 507H-63V508H-62V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 507H-58V508H-57V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 507H-53V508H-52V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 507H-48V508H-47V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 507H-43V508H-42V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 507H-38V508H-37V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 507H-33V508H-32V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 507H-28V508H-27V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 507H-23V508H-22V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 507H-18V508H-17V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 507H-13V508H-12V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 507H-8V508H-7V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 507H-3V508H-2V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 507H2V508H3V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 507H7V508H8V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 507H12V508H13V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 507H17V508H18V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 507H22V508H23V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 507H27V508H28V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 507H32V508H33V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 507H37V508H38V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 507H42V508H43V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 507H47V508H48V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 507H52V508H53V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 507H57V508H58V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 507H62V508H63V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 507H67V508H68V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 507H72V508H73V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 507H77V508H78V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 507H82V508H83V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 507H87V508H88V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 507H92V508H93V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 507H97V508H98V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 507H102V508H103V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 507H107V508H108V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 507H112V508H113V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 507H117V508H118V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 507H122V508H123V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 507H127V508H128V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 507H132V508H133V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 507H137V508H138V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 507H142V508H143V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 507H147V508H148V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 507H152V508H153V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 507H157V508H158V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 507H162V508H163V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 507H167V508H168V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 507H172V508H173V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 507H177V508H178V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 507H182V508H183V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 507H187V508H188V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 507H192V508H193V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 507H197V508H198V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 507H202V508H203V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 507H207V508H208V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 507H212V508H213V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 507H217V508H218V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 507H222V508H223V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 512H-193V513H-192V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 512H-188V513H-187V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 512H-183V513H-182V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 512H-178V513H-177V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 512H-173V513H-172V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 512H-168V513H-167V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 512H-163V513H-162V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 512H-158V513H-157V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 512H-153V513H-152V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 512H-148V513H-147V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 512H-143V513H-142V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 512H-138V513H-137V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 512H-133V513H-132V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 512H-128V513H-127V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 512H-123V513H-122V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 512H-118V513H-117V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 512H-113V513H-112V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 512H-108V513H-107V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 512H-103V513H-102V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 512H-98V513H-97V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 512H-93V513H-92V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 512H-88V513H-87V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 512H-83V513H-82V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 512H-78V513H-77V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 512H-73V513H-72V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 512H-68V513H-67V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 512H-63V513H-62V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 512H-58V513H-57V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 512H-53V513H-52V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 512H-48V513H-47V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 512H-43V513H-42V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 512H-38V513H-37V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 512H-33V513H-32V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 512H-28V513H-27V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 512H-23V513H-22V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 512H-18V513H-17V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 512H-13V513H-12V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 512H-8V513H-7V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 512H-3V513H-2V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 512H2V513H3V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 512H7V513H8V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 512H12V513H13V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 512H17V513H18V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 512H22V513H23V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 512H27V513H28V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 512H32V513H33V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 512H37V513H38V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 512H42V513H43V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 512H47V513H48V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 512H52V513H53V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 512H57V513H58V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 512H62V513H63V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 512H67V513H68V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 512H72V513H73V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 512H77V513H78V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 512H82V513H83V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 512H87V513H88V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 512H92V513H93V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 512H97V513H98V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 512H102V513H103V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 512H107V513H108V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 512H112V513H113V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 512H117V513H118V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 512H122V513H123V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 512H127V513H128V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 512H132V513H133V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 512H137V513H138V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 512H142V513H143V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 512H147V513H148V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 512H152V513H153V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 512H157V513H158V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 512H162V513H163V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 512H167V513H168V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 512H172V513H173V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 512H177V513H178V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 512H182V513H183V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 512H187V513H188V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 512H192V513H193V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 512H197V513H198V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 512H202V513H203V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 512H207V513H208V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 512H212V513H213V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 512H217V513H218V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 512H222V513H223V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 517H-193V518H-192V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 517H-188V518H-187V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 517H-183V518H-182V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 517H-178V518H-177V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 517H-173V518H-172V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 517H-168V518H-167V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 517H-163V518H-162V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 517H-158V518H-157V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 517H-153V518H-152V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 517H-148V518H-147V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 517H-143V518H-142V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 517H-138V518H-137V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 517H-133V518H-132V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 517H-128V518H-127V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 517H-123V518H-122V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 517H-118V518H-117V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 517H-113V518H-112V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 517H-108V518H-107V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 517H-103V518H-102V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 517H-98V518H-97V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 517H-93V518H-92V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 517H-88V518H-87V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 517H-83V518H-82V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 517H-78V518H-77V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 517H-73V518H-72V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 517H-68V518H-67V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 517H-63V518H-62V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 517H-58V518H-57V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 517H-53V518H-52V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 517H-48V518H-47V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 517H-43V518H-42V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 517H-38V518H-37V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 517H-33V518H-32V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 517H-28V518H-27V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 517H-23V518H-22V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 517H-18V518H-17V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 517H-13V518H-12V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 517H-8V518H-7V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 517H-3V518H-2V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 517H2V518H3V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 517H7V518H8V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 517H12V518H13V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 517H17V518H18V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 517H22V518H23V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 517H27V518H28V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 517H32V518H33V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 517H37V518H38V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 517H42V518H43V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 517H47V518H48V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 517H52V518H53V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 517H57V518H58V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 517H62V518H63V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 517H67V518H68V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 517H72V518H73V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 517H77V518H78V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 517H82V518H83V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 517H87V518H88V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 517H92V518H93V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 517H97V518H98V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 517H102V518H103V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 517H107V518H108V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 517H112V518H113V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 517H117V518H118V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 517H122V518H123V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 517H127V518H128V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 517H132V518H133V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 517H137V518H138V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 517H142V518H143V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 517H147V518H148V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 517H152V518H153V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 517H157V518H158V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 517H162V518H163V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 517H167V518H168V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 517H172V518H173V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 517H177V518H178V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 517H182V518H183V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 517H187V518H188V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 517H192V518H193V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 517H197V518H198V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 517H202V518H203V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 517H207V518H208V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 517H212V518H213V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 517H217V518H218V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 517H222V518H223V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 522H-193V523H-192V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 522H-188V523H-187V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 522H-183V523H-182V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 522H-178V523H-177V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 522H-173V523H-172V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 522H-168V523H-167V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 522H-163V523H-162V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 522H-158V523H-157V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 522H-153V523H-152V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 522H-148V523H-147V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 522H-143V523H-142V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 522H-138V523H-137V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 522H-133V523H-132V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 522H-128V523H-127V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 522H-123V523H-122V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 522H-118V523H-117V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 522H-113V523H-112V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 522H-108V523H-107V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 522H-103V523H-102V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 522H-98V523H-97V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 522H-93V523H-92V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 522H-88V523H-87V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 522H-83V523H-82V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 522H-78V523H-77V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 522H-73V523H-72V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 522H-68V523H-67V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 522H-63V523H-62V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 522H-58V523H-57V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 522H-53V523H-52V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 522H-48V523H-47V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 522H-43V523H-42V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 522H-38V523H-37V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 522H-33V523H-32V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 522H-28V523H-27V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 522H-23V523H-22V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 522H-18V523H-17V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 522H-13V523H-12V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 522H-8V523H-7V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 522H-3V523H-2V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 522H2V523H3V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 522H7V523H8V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 522H12V523H13V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 522H17V523H18V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 522H22V523H23V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 522H27V523H28V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 522H32V523H33V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 522H37V523H38V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 522H42V523H43V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 522H47V523H48V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 522H52V523H53V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 522H57V523H58V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 522H62V523H63V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 522H67V523H68V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 522H72V523H73V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 522H77V523H78V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 522H82V523H83V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 522H87V523H88V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 522H92V523H93V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 522H97V523H98V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 522H102V523H103V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 522H107V523H108V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 522H112V523H113V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 522H117V523H118V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 522H122V523H123V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 522H127V523H128V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 522H132V523H133V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 522H137V523H138V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 522H142V523H143V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 522H147V523H148V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 522H152V523H153V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 522H157V523H158V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 522H162V523H163V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 522H167V523H168V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 522H172V523H173V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 522H177V523H178V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 522H182V523H183V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 522H187V523H188V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 522H192V523H193V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 522H197V523H198V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 522H202V523H203V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 522H207V523H208V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 522H212V523H213V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 522H217V523H218V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 522H222V523H223V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 527H-193V528H-192V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 527H-188V528H-187V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 527H-183V528H-182V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 527H-178V528H-177V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 527H-173V528H-172V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 527H-168V528H-167V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 527H-163V528H-162V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 527H-158V528H-157V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 527H-153V528H-152V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 527H-148V528H-147V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 527H-143V528H-142V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 527H-138V528H-137V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 527H-133V528H-132V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 527H-128V528H-127V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 527H-123V528H-122V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 527H-118V528H-117V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 527H-113V528H-112V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 527H-108V528H-107V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 527H-103V528H-102V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 527H-98V528H-97V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 527H-93V528H-92V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 527H-88V528H-87V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 527H-83V528H-82V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 527H-78V528H-77V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 527H-73V528H-72V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 527H-68V528H-67V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 527H-63V528H-62V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 527H-58V528H-57V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 527H-53V528H-52V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 527H-48V528H-47V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 527H-43V528H-42V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 527H-38V528H-37V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 527H-33V528H-32V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 527H-28V528H-27V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 527H-23V528H-22V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 527H-18V528H-17V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 527H-13V528H-12V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 527H-8V528H-7V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 527H-3V528H-2V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 527H2V528H3V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 527H7V528H8V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 527H12V528H13V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 527H17V528H18V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 527H22V528H23V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 527H27V528H28V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 527H32V528H33V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 527H37V528H38V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 527H42V528H43V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 527H47V528H48V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 527H52V528H53V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 527H57V528H58V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 527H62V528H63V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 527H67V528H68V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 527H72V528H73V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 527H77V528H78V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 527H82V528H83V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 527H87V528H88V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 527H92V528H93V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 527H97V528H98V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 527H102V528H103V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 527H107V528H108V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 527H112V528H113V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 527H117V528H118V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 527H122V528H123V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 527H127V528H128V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 527H132V528H133V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 527H137V528H138V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 527H142V528H143V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 527H147V528H148V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 527H152V528H153V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 527H157V528H158V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 527H162V528H163V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 527H167V528H168V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 527H172V528H173V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 527H177V528H178V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 527H182V528H183V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 527H187V528H188V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 527H192V528H193V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 527H197V528H198V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 527H202V528H203V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 527H207V528H208V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 527H212V528H213V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 527H217V528H218V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 527H222V528H223V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 532H-193V533H-192V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 532H-188V533H-187V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 532H-183V533H-182V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 532H-178V533H-177V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 532H-173V533H-172V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 532H-168V533H-167V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 532H-163V533H-162V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 532H-158V533H-157V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 532H-153V533H-152V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 532H-148V533H-147V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 532H-143V533H-142V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 532H-138V533H-137V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 532H-133V533H-132V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 532H-128V533H-127V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 532H-123V533H-122V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 532H-118V533H-117V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 532H-113V533H-112V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 532H-108V533H-107V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 532H-103V533H-102V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 532H-98V533H-97V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 532H-93V533H-92V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 532H-88V533H-87V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 532H-83V533H-82V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 532H-78V533H-77V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 532H-73V533H-72V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 532H-68V533H-67V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 532H-63V533H-62V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 532H-58V533H-57V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 532H-53V533H-52V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 532H-48V533H-47V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 532H-43V533H-42V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 532H-38V533H-37V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 532H-33V533H-32V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 532H-28V533H-27V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 532H-23V533H-22V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 532H-18V533H-17V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 532H-13V533H-12V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 532H-8V533H-7V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 532H-3V533H-2V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 532H2V533H3V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 532H7V533H8V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 532H12V533H13V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 532H17V533H18V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 532H22V533H23V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 532H27V533H28V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 532H32V533H33V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 532H37V533H38V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 532H42V533H43V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 532H47V533H48V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 532H52V533H53V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 532H57V533H58V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 532H62V533H63V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 532H67V533H68V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 532H72V533H73V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 532H77V533H78V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 532H82V533H83V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 532H87V533H88V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 532H92V533H93V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 532H97V533H98V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 532H102V533H103V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 532H107V533H108V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 532H112V533H113V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 532H117V533H118V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 532H122V533H123V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 532H127V533H128V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 532H132V533H133V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 532H137V533H138V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 532H142V533H143V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 532H147V533H148V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 532H152V533H153V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 532H157V533H158V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 532H162V533H163V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 532H167V533H168V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 532H172V533H173V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 532H177V533H178V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 532H182V533H183V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 532H187V533H188V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 532H192V533H193V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 532H197V533H198V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 532H202V533H203V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 532H207V533H208V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 532H212V533H213V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 532H217V533H218V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 532H222V533H223V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 537H-193V538H-192V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 537H-188V538H-187V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 537H-183V538H-182V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 537H-178V538H-177V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 537H-173V538H-172V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 537H-168V538H-167V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 537H-163V538H-162V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 537H-158V538H-157V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 537H-153V538H-152V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 537H-148V538H-147V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 537H-143V538H-142V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 537H-138V538H-137V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 537H-133V538H-132V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 537H-128V538H-127V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 537H-123V538H-122V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 537H-118V538H-117V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 537H-113V538H-112V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 537H-108V538H-107V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 537H-103V538H-102V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 537H-98V538H-97V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 537H-93V538H-92V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 537H-88V538H-87V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 537H-83V538H-82V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 537H-78V538H-77V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 537H-73V538H-72V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 537H-68V538H-67V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 537H-63V538H-62V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 537H-58V538H-57V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 537H-53V538H-52V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 537H-48V538H-47V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 537H-43V538H-42V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 537H-38V538H-37V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 537H-33V538H-32V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 537H-28V538H-27V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 537H-23V538H-22V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 537H-18V538H-17V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 537H-13V538H-12V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 537H-8V538H-7V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 537H-3V538H-2V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 537H2V538H3V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 537H7V538H8V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 537H12V538H13V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 537H17V538H18V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 537H22V538H23V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 537H27V538H28V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 537H32V538H33V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 537H37V538H38V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 537H42V538H43V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 537H47V538H48V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 537H52V538H53V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 537H57V538H58V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 537H62V538H63V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 537H67V538H68V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 537H72V538H73V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 537H77V538H78V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 537H82V538H83V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 537H87V538H88V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 537H92V538H93V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 537H97V538H98V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 537H102V538H103V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 537H107V538H108V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 537H112V538H113V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 537H117V538H118V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 537H122V538H123V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 537H127V538H128V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 537H132V538H133V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 537H137V538H138V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 537H142V538H143V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 537H147V538H148V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 537H152V538H153V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 537H157V538H158V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 537H162V538H163V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 537H167V538H168V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 537H172V538H173V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 537H177V538H178V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 537H182V538H183V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 537H187V538H188V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 537H192V538H193V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 537H197V538H198V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 537H202V538H203V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 537H207V538H208V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 537H212V538H213V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 537H217V538H218V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 537H222V538H223V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 542H-193V543H-192V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 542H-188V543H-187V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 542H-183V543H-182V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 542H-178V543H-177V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 542H-173V543H-172V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 542H-168V543H-167V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 542H-163V543H-162V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 542H-158V543H-157V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 542H-153V543H-152V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 542H-148V543H-147V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 542H-143V543H-142V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 542H-138V543H-137V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 542H-133V543H-132V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 542H-128V543H-127V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 542H-123V543H-122V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 542H-118V543H-117V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 542H-113V543H-112V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 542H-108V543H-107V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 542H-103V543H-102V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 542H-98V543H-97V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 542H-93V543H-92V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 542H-88V543H-87V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 542H-83V543H-82V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 542H-78V543H-77V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 542H-73V543H-72V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 542H-68V543H-67V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 542H-63V543H-62V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 542H-58V543H-57V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 542H-53V543H-52V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 542H-48V543H-47V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 542H-43V543H-42V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 542H-38V543H-37V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 542H-33V543H-32V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 542H-28V543H-27V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 542H-23V543H-22V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 542H-18V543H-17V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 542H-13V543H-12V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 542H-8V543H-7V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 542H-3V543H-2V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 542H2V543H3V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 542H7V543H8V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 542H12V543H13V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 542H17V543H18V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 542H22V543H23V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 542H27V543H28V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 542H32V543H33V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 542H37V543H38V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 542H42V543H43V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 542H47V543H48V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 542H52V543H53V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 542H57V543H58V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 542H62V543H63V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 542H67V543H68V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 542H72V543H73V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 542H77V543H78V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 542H82V543H83V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 542H87V543H88V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 542H92V543H93V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 542H97V543H98V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 542H102V543H103V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 542H107V543H108V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 542H112V543H113V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 542H117V543H118V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 542H122V543H123V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 542H127V543H128V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 542H132V543H133V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 542H137V543H138V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 542H142V543H143V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 542H147V543H148V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 542H152V543H153V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 542H157V543H158V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 542H162V543H163V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 542H167V543H168V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 542H172V543H173V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 542H177V543H178V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 542H182V543H183V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 542H187V543H188V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 542H192V543H193V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 542H197V543H198V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 542H202V543H203V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 542H207V543H208V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 542H212V543H213V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 542H217V543H218V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 542H222V543H223V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 547H-193V548H-192V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 547H-188V548H-187V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 547H-183V548H-182V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 547H-178V548H-177V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 547H-173V548H-172V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 547H-168V548H-167V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 547H-163V548H-162V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 547H-158V548H-157V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 547H-153V548H-152V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 547H-148V548H-147V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 547H-143V548H-142V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 547H-138V548H-137V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 547H-133V548H-132V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 547H-128V548H-127V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 547H-123V548H-122V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 547H-118V548H-117V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 547H-113V548H-112V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 547H-108V548H-107V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 547H-103V548H-102V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 547H-98V548H-97V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 547H-93V548H-92V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 547H-88V548H-87V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 547H-83V548H-82V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 547H-78V548H-77V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 547H-73V548H-72V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 547H-68V548H-67V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 547H-63V548H-62V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 547H-58V548H-57V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 547H-53V548H-52V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 547H-48V548H-47V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 547H-43V548H-42V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 547H-38V548H-37V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 547H-33V548H-32V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 547H-28V548H-27V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 547H-23V548H-22V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 547H-18V548H-17V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 547H-13V548H-12V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 547H-8V548H-7V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 547H-3V548H-2V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 547H2V548H3V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 547H7V548H8V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 547H12V548H13V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 547H17V548H18V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 547H22V548H23V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 547H27V548H28V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 547H32V548H33V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 547H37V548H38V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 547H42V548H43V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 547H47V548H48V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 547H52V548H53V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 547H57V548H58V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 547H62V548H63V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 547H67V548H68V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 547H72V548H73V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 547H77V548H78V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 547H82V548H83V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 547H87V548H88V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 547H92V548H93V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 547H97V548H98V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 547H102V548H103V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 547H107V548H108V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 547H112V548H113V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 547H117V548H118V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 547H122V548H123V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 547H127V548H128V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 547H132V548H133V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 547H137V548H138V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 547H142V548H143V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 547H147V548H148V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 547H152V548H153V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 547H157V548H158V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 547H162V548H163V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 547H167V548H168V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 547H172V548H173V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 547H177V548H178V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 547H182V548H183V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 547H187V548H188V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 547H192V548H193V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 547H197V548H198V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 547H202V548H203V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 547H207V548H208V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 547H212V548H213V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 547H217V548H218V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 547H222V548H223V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 552H-193V553H-192V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 552H-188V553H-187V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 552H-183V553H-182V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 552H-178V553H-177V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 552H-173V553H-172V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 552H-168V553H-167V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 552H-163V553H-162V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 552H-158V553H-157V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 552H-153V553H-152V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 552H-148V553H-147V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 552H-143V553H-142V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 552H-138V553H-137V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 552H-133V553H-132V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 552H-128V553H-127V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 552H-123V553H-122V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 552H-118V553H-117V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 552H-113V553H-112V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 552H-108V553H-107V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 552H-103V553H-102V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 552H-98V553H-97V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 552H-93V553H-92V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 552H-88V553H-87V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 552H-83V553H-82V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 552H-78V553H-77V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 552H-73V553H-72V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 552H-68V553H-67V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 552H-63V553H-62V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 552H-58V553H-57V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 552H-53V553H-52V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 552H-48V553H-47V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 552H-43V553H-42V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 552H-38V553H-37V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 552H-33V553H-32V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 552H-28V553H-27V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 552H-23V553H-22V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 552H-18V553H-17V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 552H-13V553H-12V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 552H-8V553H-7V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 552H-3V553H-2V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 552H2V553H3V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 552H7V553H8V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 552H12V553H13V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 552H17V553H18V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 552H22V553H23V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 552H27V553H28V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 552H32V553H33V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 552H37V553H38V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 552H42V553H43V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 552H47V553H48V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 552H52V553H53V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 552H57V553H58V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 552H62V553H63V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 552H67V553H68V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 552H72V553H73V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 552H77V553H78V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 552H82V553H83V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 552H87V553H88V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 552H92V553H93V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 552H97V553H98V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 552H102V553H103V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 552H107V553H108V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 552H112V553H113V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 552H117V553H118V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 552H122V553H123V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 552H127V553H128V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 552H132V553H133V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 552H137V553H138V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 552H142V553H143V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 552H147V553H148V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 552H152V553H153V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 552H157V553H158V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 552H162V553H163V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 552H167V553H168V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 552H172V553H173V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 552H177V553H178V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 552H182V553H183V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 552H187V553H188V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 552H192V553H193V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 552H197V553H198V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 552H202V553H203V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 552H207V553H208V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 552H212V553H213V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 552H217V553H218V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 552H222V553H223V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-192 557H-193V558H-192V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-187 557H-188V558H-187V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-182 557H-183V558H-182V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-177 557H-178V558H-177V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-172 557H-173V558H-172V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-167 557H-168V558H-167V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-162 557H-163V558H-162V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-157 557H-158V558H-157V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-152 557H-153V558H-152V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-147 557H-148V558H-147V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-142 557H-143V558H-142V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-137 557H-138V558H-137V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-132 557H-133V558H-132V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-127 557H-128V558H-127V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-122 557H-123V558H-122V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-117 557H-118V558H-117V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-112 557H-113V558H-112V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-107 557H-108V558H-107V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-102 557H-103V558H-102V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-97 557H-98V558H-97V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-92 557H-93V558H-92V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-87 557H-88V558H-87V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-82 557H-83V558H-82V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-77 557H-78V558H-77V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-72 557H-73V558H-72V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-67 557H-68V558H-67V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-62 557H-63V558H-62V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-57 557H-58V558H-57V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-52 557H-53V558H-52V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-47 557H-48V558H-47V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-42 557H-43V558H-42V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-37 557H-38V558H-37V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-32 557H-33V558H-32V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-27 557H-28V558H-27V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-22 557H-23V558H-22V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-17 557H-18V558H-17V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-12 557H-13V558H-12V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-7 557H-8V558H-7V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M-2 557H-3V558H-2V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M3 557H2V558H3V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M8 557H7V558H8V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M13 557H12V558H13V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M18 557H17V558H18V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M23 557H22V558H23V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M28 557H27V558H28V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M33 557H32V558H33V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M38 557H37V558H38V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M43 557H42V558H43V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M48 557H47V558H48V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M53 557H52V558H53V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M58 557H57V558H58V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M63 557H62V558H63V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M68 557H67V558H68V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M73 557H72V558H73V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M78 557H77V558H78V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M83 557H82V558H83V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M88 557H87V558H88V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M93 557H92V558H93V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M98 557H97V558H98V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M103 557H102V558H103V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M108 557H107V558H108V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M113 557H112V558H113V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M118 557H117V558H118V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M123 557H122V558H123V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M128 557H127V558H128V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M133 557H132V558H133V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M138 557H137V558H138V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M143 557H142V558H143V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M148 557H147V558H148V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M153 557H152V558H153V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M158 557H157V558H158V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M163 557H162V558H163V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M168 557H167V558H168V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M173 557H172V558H173V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M178 557H177V558H178V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M183 557H182V558H183V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M188 557H187V558H188V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M193 557H192V558H193V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M198 557H197V558H198V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M203 557H202V558H203V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M208 557H207V558H208V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M213 557H212V558H213V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M218 557H217V558H218V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M223 557H222V558H223V557Z" class="fill-black dark:fill-primary-300" />
                                    </g>
                                </g>
                            </mask>
                            <g mask="url(#mask0_612_64534)">
                                <path d="M183 492H200L213 525H196L183 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M183 492H200L213 525H196L183 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M183 492H200L213 525H196L183 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M183 492H200L213 525H196L183 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M183 492H200L213 525H196L183 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M213 525H196L183 558H200L213 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M213 525H196L183 558H200L213 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M213 525H196L183 558H200L213 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M213 525H196L183 558H200L213 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M213 525H196L183 558H200L213 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <g opacity="0.8">
                                    <path d="M149 492H166L179 525H162L149 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M149 492H166L179 525H162L149 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M149 492H166L179 525H162L149 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M149 492H166L179 525H162L149 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M149 492H166L179 525H162L149 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M179 525H162L149 558H166L179 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M179 525H162L149 558H166L179 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M179 525H162L149 558H166L179 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M179 525H162L149 558H166L179 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M179 525H162L149 558H166L179 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                </g>
                                <g opacity="0.6">
                                    <path d="M115 492H132L145 525H128L115 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M115 492H132L145 525H128L115 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M115 492H132L145 525H128L115 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M115 492H132L145 525H128L115 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M115 492H132L145 525H128L115 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M145 525H128L115 558H132L145 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M145 525H128L115 558H132L145 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M145 525H128L115 558H132L145 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M145 525H128L115 558H132L145 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M145 525H128L115 558H132L145 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                </g>
                                <g opacity="0.4">
                                    <path d="M81 492H98L111 525H94L81 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M81 492H98L111 525H94L81 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M81 492H98L111 525H94L81 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M81 492H98L111 525H94L81 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M81 492H98L111 525H94L81 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M111 525H94L81 558H98L111 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M111 525H94L81 558H98L111 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M111 525H94L81 558H98L111 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M111 525H94L81 558H98L111 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M111 525H94L81 558H98L111 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                </g>
                            </g>
                            <mask id="mask1_612_64534" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="558" y="492" width="182" height="66">
                                <g clip-path="url(#clip1_612_64534)">
                                    <g style="mix-blend-mode: overlay">
                                        <path d="M973 492H974V493H973V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 492H969V493H968V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 492H964V493H963V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 492H959V493H958V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 492H954V493H953V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 492H949V493H948V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 492H944V493H943V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 492H939V493H938V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 492H934V493H933V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 492H929V493H928V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 492H924V493H923V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 492H919V493H918V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 492H914V493H913V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 492H909V493H908V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 492H904V493H903V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 492H899V493H898V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 492H894V493H893V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 492H889V493H888V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 492H884V493H883V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 492H879V493H878V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 492H874V493H873V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 492H869V493H868V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 492H864V493H863V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 492H859V493H858V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 492H854V493H853V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 492H849V493H848V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 492H844V493H843V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 492H839V493H838V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 492H834V493H833V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 492H829V493H828V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 492H824V493H823V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 492H819V493H818V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 492H814V493H813V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 492H809V493H808V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 492H804V493H803V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 492H799V493H798V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 492H794V493H793V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 492H789V493H788V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 492H784V493H783V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 492H779V493H778V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 492H774V493H773V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 492H769V493H768V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 492H764V493H763V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 492H759V493H758V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 492H754V493H753V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 492H749V493H748V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 492H744V493H743V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 492H739V493H738V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 492H734V493H733V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 492H729V493H728V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 492H724V493H723V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 492H719V493H718V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 492H714V493H713V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 492H709V493H708V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 492H704V493H703V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 492H699V493H698V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 492H694V493H693V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 492H689V493H688V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 492H684V493H683V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 492H679V493H678V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 492H674V493H673V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 492H669V493H668V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 492H664V493H663V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 492H659V493H658V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 492H654V493H653V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 492H649V493H648V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 492H644V493H643V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 492H639V493H638V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 492H634V493H633V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 492H629V493H628V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 492H624V493H623V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 492H619V493H618V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 492H614V493H613V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 492H609V493H608V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 492H604V493H603V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 492H599V493H598V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 492H594V493H593V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 492H589V493H588V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 492H584V493H583V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 492H579V493H578V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 492H574V493H573V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 492H569V493H568V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 492H564V493H563V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 492H559V493H558V492Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 497H974V498H973V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 497H969V498H968V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 497H964V498H963V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 497H959V498H958V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 497H954V498H953V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 497H949V498H948V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 497H944V498H943V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 497H939V498H938V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 497H934V498H933V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 497H929V498H928V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 497H924V498H923V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 497H919V498H918V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 497H914V498H913V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 497H909V498H908V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 497H904V498H903V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 497H899V498H898V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 497H894V498H893V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 497H889V498H888V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 497H884V498H883V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 497H879V498H878V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 497H874V498H873V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 497H869V498H868V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 497H864V498H863V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 497H859V498H858V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 497H854V498H853V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 497H849V498H848V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 497H844V498H843V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 497H839V498H838V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 497H834V498H833V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 497H829V498H828V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 497H824V498H823V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 497H819V498H818V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 497H814V498H813V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 497H809V498H808V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 497H804V498H803V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 497H799V498H798V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 497H794V498H793V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 497H789V498H788V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 497H784V498H783V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 497H779V498H778V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 497H774V498H773V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 497H769V498H768V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 497H764V498H763V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 497H759V498H758V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 497H754V498H753V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 497H749V498H748V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 497H744V498H743V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 497H739V498H738V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 497H734V498H733V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 497H729V498H728V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 497H724V498H723V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 497H719V498H718V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 497H714V498H713V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 497H709V498H708V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 497H704V498H703V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 497H699V498H698V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 497H694V498H693V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 497H689V498H688V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 497H684V498H683V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 497H679V498H678V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 497H674V498H673V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 497H669V498H668V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 497H664V498H663V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 497H659V498H658V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 497H654V498H653V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 497H649V498H648V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 497H644V498H643V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 497H639V498H638V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 497H634V498H633V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 497H629V498H628V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 497H624V498H623V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 497H619V498H618V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 497H614V498H613V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 497H609V498H608V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 497H604V498H603V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 497H599V498H598V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 497H594V498H593V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 497H589V498H588V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 497H584V498H583V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 497H579V498H578V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 497H574V498H573V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 497H569V498H568V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 497H564V498H563V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 497H559V498H558V497Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 502H974V503H973V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 502H969V503H968V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 502H964V503H963V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 502H959V503H958V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 502H954V503H953V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 502H949V503H948V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 502H944V503H943V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 502H939V503H938V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 502H934V503H933V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 502H929V503H928V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 502H924V503H923V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 502H919V503H918V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 502H914V503H913V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 502H909V503H908V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 502H904V503H903V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 502H899V503H898V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 502H894V503H893V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 502H889V503H888V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 502H884V503H883V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 502H879V503H878V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 502H874V503H873V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 502H869V503H868V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 502H864V503H863V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 502H859V503H858V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 502H854V503H853V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 502H849V503H848V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 502H844V503H843V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 502H839V503H838V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 502H834V503H833V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 502H829V503H828V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 502H824V503H823V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 502H819V503H818V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 502H814V503H813V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 502H809V503H808V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 502H804V503H803V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 502H799V503H798V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 502H794V503H793V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 502H789V503H788V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 502H784V503H783V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 502H779V503H778V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 502H774V503H773V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 502H769V503H768V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 502H764V503H763V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 502H759V503H758V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 502H754V503H753V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 502H749V503H748V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 502H744V503H743V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 502H739V503H738V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 502H734V503H733V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 502H729V503H728V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 502H724V503H723V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 502H719V503H718V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 502H714V503H713V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 502H709V503H708V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 502H704V503H703V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 502H699V503H698V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 502H694V503H693V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 502H689V503H688V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 502H684V503H683V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 502H679V503H678V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 502H674V503H673V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 502H669V503H668V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 502H664V503H663V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 502H659V503H658V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 502H654V503H653V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 502H649V503H648V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 502H644V503H643V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 502H639V503H638V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 502H634V503H633V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 502H629V503H628V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 502H624V503H623V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 502H619V503H618V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 502H614V503H613V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 502H609V503H608V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 502H604V503H603V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 502H599V503H598V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 502H594V503H593V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 502H589V503H588V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 502H584V503H583V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 502H579V503H578V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 502H574V503H573V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 502H569V503H568V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 502H564V503H563V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 502H559V503H558V502Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 507H974V508H973V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 507H969V508H968V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 507H964V508H963V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 507H959V508H958V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 507H954V508H953V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 507H949V508H948V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 507H944V508H943V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 507H939V508H938V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 507H934V508H933V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 507H929V508H928V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 507H924V508H923V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 507H919V508H918V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 507H914V508H913V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 507H909V508H908V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 507H904V508H903V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 507H899V508H898V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 507H894V508H893V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 507H889V508H888V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 507H884V508H883V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 507H879V508H878V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 507H874V508H873V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 507H869V508H868V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 507H864V508H863V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 507H859V508H858V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 507H854V508H853V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 507H849V508H848V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 507H844V508H843V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 507H839V508H838V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 507H834V508H833V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 507H829V508H828V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 507H824V508H823V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 507H819V508H818V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 507H814V508H813V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 507H809V508H808V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 507H804V508H803V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 507H799V508H798V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 507H794V508H793V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 507H789V508H788V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 507H784V508H783V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 507H779V508H778V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 507H774V508H773V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 507H769V508H768V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 507H764V508H763V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 507H759V508H758V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 507H754V508H753V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 507H749V508H748V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 507H744V508H743V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 507H739V508H738V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 507H734V508H733V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 507H729V508H728V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 507H724V508H723V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 507H719V508H718V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 507H714V508H713V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 507H709V508H708V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 507H704V508H703V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 507H699V508H698V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 507H694V508H693V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 507H689V508H688V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 507H684V508H683V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 507H679V508H678V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 507H674V508H673V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 507H669V508H668V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 507H664V508H663V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 507H659V508H658V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 507H654V508H653V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 507H649V508H648V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 507H644V508H643V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 507H639V508H638V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 507H634V508H633V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 507H629V508H628V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 507H624V508H623V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 507H619V508H618V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 507H614V508H613V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 507H609V508H608V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 507H604V508H603V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 507H599V508H598V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 507H594V508H593V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 507H589V508H588V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 507H584V508H583V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 507H579V508H578V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 507H574V508H573V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 507H569V508H568V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 507H564V508H563V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 507H559V508H558V507Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 512H974V513H973V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 512H969V513H968V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 512H964V513H963V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 512H959V513H958V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 512H954V513H953V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 512H949V513H948V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 512H944V513H943V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 512H939V513H938V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 512H934V513H933V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 512H929V513H928V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 512H924V513H923V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 512H919V513H918V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 512H914V513H913V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 512H909V513H908V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 512H904V513H903V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 512H899V513H898V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 512H894V513H893V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 512H889V513H888V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 512H884V513H883V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 512H879V513H878V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 512H874V513H873V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 512H869V513H868V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 512H864V513H863V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 512H859V513H858V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 512H854V513H853V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 512H849V513H848V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 512H844V513H843V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 512H839V513H838V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 512H834V513H833V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 512H829V513H828V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 512H824V513H823V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 512H819V513H818V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 512H814V513H813V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 512H809V513H808V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 512H804V513H803V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 512H799V513H798V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 512H794V513H793V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 512H789V513H788V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 512H784V513H783V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 512H779V513H778V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 512H774V513H773V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 512H769V513H768V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 512H764V513H763V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 512H759V513H758V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 512H754V513H753V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 512H749V513H748V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 512H744V513H743V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 512H739V513H738V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 512H734V513H733V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 512H729V513H728V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 512H724V513H723V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 512H719V513H718V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 512H714V513H713V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 512H709V513H708V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 512H704V513H703V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 512H699V513H698V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 512H694V513H693V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 512H689V513H688V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 512H684V513H683V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 512H679V513H678V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 512H674V513H673V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 512H669V513H668V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 512H664V513H663V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 512H659V513H658V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 512H654V513H653V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 512H649V513H648V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 512H644V513H643V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 512H639V513H638V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 512H634V513H633V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 512H629V513H628V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 512H624V513H623V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 512H619V513H618V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 512H614V513H613V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 512H609V513H608V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 512H604V513H603V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 512H599V513H598V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 512H594V513H593V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 512H589V513H588V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 512H584V513H583V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 512H579V513H578V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 512H574V513H573V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 512H569V513H568V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 512H564V513H563V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 512H559V513H558V512Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 517H974V518H973V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 517H969V518H968V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 517H964V518H963V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 517H959V518H958V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 517H954V518H953V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 517H949V518H948V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 517H944V518H943V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 517H939V518H938V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 517H934V518H933V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 517H929V518H928V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 517H924V518H923V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 517H919V518H918V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 517H914V518H913V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 517H909V518H908V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 517H904V518H903V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 517H899V518H898V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 517H894V518H893V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 517H889V518H888V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 517H884V518H883V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 517H879V518H878V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 517H874V518H873V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 517H869V518H868V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 517H864V518H863V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 517H859V518H858V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 517H854V518H853V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 517H849V518H848V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 517H844V518H843V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 517H839V518H838V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 517H834V518H833V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 517H829V518H828V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 517H824V518H823V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 517H819V518H818V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 517H814V518H813V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 517H809V518H808V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 517H804V518H803V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 517H799V518H798V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 517H794V518H793V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 517H789V518H788V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 517H784V518H783V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 517H779V518H778V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 517H774V518H773V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 517H769V518H768V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 517H764V518H763V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 517H759V518H758V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 517H754V518H753V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 517H749V518H748V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 517H744V518H743V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 517H739V518H738V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 517H734V518H733V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 517H729V518H728V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 517H724V518H723V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 517H719V518H718V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 517H714V518H713V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 517H709V518H708V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 517H704V518H703V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 517H699V518H698V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 517H694V518H693V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 517H689V518H688V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 517H684V518H683V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 517H679V518H678V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 517H674V518H673V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 517H669V518H668V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 517H664V518H663V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 517H659V518H658V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 517H654V518H653V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 517H649V518H648V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 517H644V518H643V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 517H639V518H638V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 517H634V518H633V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 517H629V518H628V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 517H624V518H623V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 517H619V518H618V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 517H614V518H613V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 517H609V518H608V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 517H604V518H603V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 517H599V518H598V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 517H594V518H593V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 517H589V518H588V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 517H584V518H583V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 517H579V518H578V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 517H574V518H573V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 517H569V518H568V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 517H564V518H563V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 517H559V518H558V517Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 522H974V523H973V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 522H969V523H968V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 522H964V523H963V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 522H959V523H958V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 522H954V523H953V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 522H949V523H948V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 522H944V523H943V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 522H939V523H938V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 522H934V523H933V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 522H929V523H928V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 522H924V523H923V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 522H919V523H918V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 522H914V523H913V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 522H909V523H908V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 522H904V523H903V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 522H899V523H898V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 522H894V523H893V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 522H889V523H888V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 522H884V523H883V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 522H879V523H878V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 522H874V523H873V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 522H869V523H868V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 522H864V523H863V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 522H859V523H858V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 522H854V523H853V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 522H849V523H848V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 522H844V523H843V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 522H839V523H838V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 522H834V523H833V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 522H829V523H828V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 522H824V523H823V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 522H819V523H818V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 522H814V523H813V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 522H809V523H808V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 522H804V523H803V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 522H799V523H798V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 522H794V523H793V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 522H789V523H788V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 522H784V523H783V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 522H779V523H778V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 522H774V523H773V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 522H769V523H768V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 522H764V523H763V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 522H759V523H758V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 522H754V523H753V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 522H749V523H748V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 522H744V523H743V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 522H739V523H738V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 522H734V523H733V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 522H729V523H728V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 522H724V523H723V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 522H719V523H718V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 522H714V523H713V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 522H709V523H708V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 522H704V523H703V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 522H699V523H698V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 522H694V523H693V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 522H689V523H688V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 522H684V523H683V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 522H679V523H678V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 522H674V523H673V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 522H669V523H668V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 522H664V523H663V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 522H659V523H658V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 522H654V523H653V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 522H649V523H648V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 522H644V523H643V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 522H639V523H638V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 522H634V523H633V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 522H629V523H628V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 522H624V523H623V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 522H619V523H618V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 522H614V523H613V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 522H609V523H608V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 522H604V523H603V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 522H599V523H598V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 522H594V523H593V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 522H589V523H588V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 522H584V523H583V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 522H579V523H578V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 522H574V523H573V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 522H569V523H568V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 522H564V523H563V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 522H559V523H558V522Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 527H974V528H973V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 527H969V528H968V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 527H964V528H963V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 527H959V528H958V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 527H954V528H953V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 527H949V528H948V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 527H944V528H943V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 527H939V528H938V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 527H934V528H933V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 527H929V528H928V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 527H924V528H923V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 527H919V528H918V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 527H914V528H913V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 527H909V528H908V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 527H904V528H903V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 527H899V528H898V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 527H894V528H893V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 527H889V528H888V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 527H884V528H883V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 527H879V528H878V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 527H874V528H873V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 527H869V528H868V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 527H864V528H863V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 527H859V528H858V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 527H854V528H853V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 527H849V528H848V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 527H844V528H843V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 527H839V528H838V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 527H834V528H833V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 527H829V528H828V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 527H824V528H823V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 527H819V528H818V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 527H814V528H813V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 527H809V528H808V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 527H804V528H803V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 527H799V528H798V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 527H794V528H793V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 527H789V528H788V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 527H784V528H783V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 527H779V528H778V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 527H774V528H773V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 527H769V528H768V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 527H764V528H763V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 527H759V528H758V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 527H754V528H753V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 527H749V528H748V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 527H744V528H743V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 527H739V528H738V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 527H734V528H733V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 527H729V528H728V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 527H724V528H723V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 527H719V528H718V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 527H714V528H713V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 527H709V528H708V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 527H704V528H703V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 527H699V528H698V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 527H694V528H693V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 527H689V528H688V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 527H684V528H683V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 527H679V528H678V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 527H674V528H673V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 527H669V528H668V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 527H664V528H663V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 527H659V528H658V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 527H654V528H653V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 527H649V528H648V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 527H644V528H643V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 527H639V528H638V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 527H634V528H633V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 527H629V528H628V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 527H624V528H623V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 527H619V528H618V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 527H614V528H613V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 527H609V528H608V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 527H604V528H603V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 527H599V528H598V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 527H594V528H593V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 527H589V528H588V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 527H584V528H583V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 527H579V528H578V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 527H574V528H573V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 527H569V528H568V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 527H564V528H563V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 527H559V528H558V527Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 532H974V533H973V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 532H969V533H968V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 532H964V533H963V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 532H959V533H958V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 532H954V533H953V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 532H949V533H948V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 532H944V533H943V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 532H939V533H938V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 532H934V533H933V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 532H929V533H928V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 532H924V533H923V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 532H919V533H918V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 532H914V533H913V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 532H909V533H908V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 532H904V533H903V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 532H899V533H898V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 532H894V533H893V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 532H889V533H888V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 532H884V533H883V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 532H879V533H878V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 532H874V533H873V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 532H869V533H868V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 532H864V533H863V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 532H859V533H858V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 532H854V533H853V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 532H849V533H848V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 532H844V533H843V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 532H839V533H838V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 532H834V533H833V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 532H829V533H828V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 532H824V533H823V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 532H819V533H818V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 532H814V533H813V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 532H809V533H808V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 532H804V533H803V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 532H799V533H798V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 532H794V533H793V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 532H789V533H788V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 532H784V533H783V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 532H779V533H778V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 532H774V533H773V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 532H769V533H768V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 532H764V533H763V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 532H759V533H758V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 532H754V533H753V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 532H749V533H748V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 532H744V533H743V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 532H739V533H738V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 532H734V533H733V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 532H729V533H728V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 532H724V533H723V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 532H719V533H718V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 532H714V533H713V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 532H709V533H708V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 532H704V533H703V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 532H699V533H698V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 532H694V533H693V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 532H689V533H688V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 532H684V533H683V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 532H679V533H678V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 532H674V533H673V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 532H669V533H668V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 532H664V533H663V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 532H659V533H658V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 532H654V533H653V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 532H649V533H648V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 532H644V533H643V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 532H639V533H638V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 532H634V533H633V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 532H629V533H628V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 532H624V533H623V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 532H619V533H618V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 532H614V533H613V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 532H609V533H608V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 532H604V533H603V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 532H599V533H598V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 532H594V533H593V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 532H589V533H588V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 532H584V533H583V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 532H579V533H578V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 532H574V533H573V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 532H569V533H568V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 532H564V533H563V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 532H559V533H558V532Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 537H974V538H973V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 537H969V538H968V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 537H964V538H963V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 537H959V538H958V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 537H954V538H953V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 537H949V538H948V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 537H944V538H943V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 537H939V538H938V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 537H934V538H933V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 537H929V538H928V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 537H924V538H923V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 537H919V538H918V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 537H914V538H913V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 537H909V538H908V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 537H904V538H903V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 537H899V538H898V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 537H894V538H893V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 537H889V538H888V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 537H884V538H883V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 537H879V538H878V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 537H874V538H873V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 537H869V538H868V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 537H864V538H863V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 537H859V538H858V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 537H854V538H853V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 537H849V538H848V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 537H844V538H843V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 537H839V538H838V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 537H834V538H833V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 537H829V538H828V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 537H824V538H823V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 537H819V538H818V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 537H814V538H813V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 537H809V538H808V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 537H804V538H803V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 537H799V538H798V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 537H794V538H793V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 537H789V538H788V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 537H784V538H783V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 537H779V538H778V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 537H774V538H773V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 537H769V538H768V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 537H764V538H763V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 537H759V538H758V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 537H754V538H753V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 537H749V538H748V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 537H744V538H743V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 537H739V538H738V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 537H734V538H733V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 537H729V538H728V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 537H724V538H723V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 537H719V538H718V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 537H714V538H713V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 537H709V538H708V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 537H704V538H703V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 537H699V538H698V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 537H694V538H693V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 537H689V538H688V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 537H684V538H683V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 537H679V538H678V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 537H674V538H673V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 537H669V538H668V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 537H664V538H663V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 537H659V538H658V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 537H654V538H653V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 537H649V538H648V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 537H644V538H643V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 537H639V538H638V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 537H634V538H633V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 537H629V538H628V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 537H624V538H623V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 537H619V538H618V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 537H614V538H613V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 537H609V538H608V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 537H604V538H603V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 537H599V538H598V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 537H594V538H593V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 537H589V538H588V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 537H584V538H583V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 537H579V538H578V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 537H574V538H573V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 537H569V538H568V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 537H564V538H563V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 537H559V538H558V537Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 542H974V543H973V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 542H969V543H968V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 542H964V543H963V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 542H959V543H958V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 542H954V543H953V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 542H949V543H948V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 542H944V543H943V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 542H939V543H938V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 542H934V543H933V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 542H929V543H928V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 542H924V543H923V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 542H919V543H918V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 542H914V543H913V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 542H909V543H908V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 542H904V543H903V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 542H899V543H898V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 542H894V543H893V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 542H889V543H888V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 542H884V543H883V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 542H879V543H878V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 542H874V543H873V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 542H869V543H868V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 542H864V543H863V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 542H859V543H858V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 542H854V543H853V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 542H849V543H848V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 542H844V543H843V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 542H839V543H838V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 542H834V543H833V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 542H829V543H828V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 542H824V543H823V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 542H819V543H818V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 542H814V543H813V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 542H809V543H808V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 542H804V543H803V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 542H799V543H798V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 542H794V543H793V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 542H789V543H788V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 542H784V543H783V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 542H779V543H778V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 542H774V543H773V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 542H769V543H768V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 542H764V543H763V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 542H759V543H758V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 542H754V543H753V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 542H749V543H748V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 542H744V543H743V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 542H739V543H738V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 542H734V543H733V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 542H729V543H728V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 542H724V543H723V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 542H719V543H718V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 542H714V543H713V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 542H709V543H708V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 542H704V543H703V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 542H699V543H698V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 542H694V543H693V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 542H689V543H688V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 542H684V543H683V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 542H679V543H678V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 542H674V543H673V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 542H669V543H668V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 542H664V543H663V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 542H659V543H658V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 542H654V543H653V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 542H649V543H648V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 542H644V543H643V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 542H639V543H638V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 542H634V543H633V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 542H629V543H628V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 542H624V543H623V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 542H619V543H618V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 542H614V543H613V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 542H609V543H608V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 542H604V543H603V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 542H599V543H598V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 542H594V543H593V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 542H589V543H588V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 542H584V543H583V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 542H579V543H578V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 542H574V543H573V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 542H569V543H568V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 542H564V543H563V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 542H559V543H558V542Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 547H974V548H973V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 547H969V548H968V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 547H964V548H963V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 547H959V548H958V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 547H954V548H953V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 547H949V548H948V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 547H944V548H943V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 547H939V548H938V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 547H934V548H933V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 547H929V548H928V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 547H924V548H923V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 547H919V548H918V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 547H914V548H913V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 547H909V548H908V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 547H904V548H903V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 547H899V548H898V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 547H894V548H893V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 547H889V548H888V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 547H884V548H883V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 547H879V548H878V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 547H874V548H873V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 547H869V548H868V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 547H864V548H863V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 547H859V548H858V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 547H854V548H853V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 547H849V548H848V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 547H844V548H843V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 547H839V548H838V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 547H834V548H833V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 547H829V548H828V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 547H824V548H823V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 547H819V548H818V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 547H814V548H813V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 547H809V548H808V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 547H804V548H803V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 547H799V548H798V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 547H794V548H793V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 547H789V548H788V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 547H784V548H783V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 547H779V548H778V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 547H774V548H773V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 547H769V548H768V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 547H764V548H763V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 547H759V548H758V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 547H754V548H753V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 547H749V548H748V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 547H744V548H743V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 547H739V548H738V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 547H734V548H733V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 547H729V548H728V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 547H724V548H723V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 547H719V548H718V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 547H714V548H713V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 547H709V548H708V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 547H704V548H703V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 547H699V548H698V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 547H694V548H693V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 547H689V548H688V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 547H684V548H683V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 547H679V548H678V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 547H674V548H673V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 547H669V548H668V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 547H664V548H663V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 547H659V548H658V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 547H654V548H653V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 547H649V548H648V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 547H644V548H643V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 547H639V548H638V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 547H634V548H633V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 547H629V548H628V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 547H624V548H623V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 547H619V548H618V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 547H614V548H613V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 547H609V548H608V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 547H604V548H603V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 547H599V548H598V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 547H594V548H593V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 547H589V548H588V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 547H584V548H583V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 547H579V548H578V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 547H574V548H573V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 547H569V548H568V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 547H564V548H563V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 547H559V548H558V547Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 552H974V553H973V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 552H969V553H968V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 552H964V553H963V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 552H959V553H958V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 552H954V553H953V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 552H949V553H948V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 552H944V553H943V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 552H939V553H938V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 552H934V553H933V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 552H929V553H928V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 552H924V553H923V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 552H919V553H918V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 552H914V553H913V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 552H909V553H908V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 552H904V553H903V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 552H899V553H898V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 552H894V553H893V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 552H889V553H888V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 552H884V553H883V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 552H879V553H878V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 552H874V553H873V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 552H869V553H868V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 552H864V553H863V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 552H859V553H858V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 552H854V553H853V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 552H849V553H848V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 552H844V553H843V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 552H839V553H838V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 552H834V553H833V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 552H829V553H828V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 552H824V553H823V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 552H819V553H818V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 552H814V553H813V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 552H809V553H808V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 552H804V553H803V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 552H799V553H798V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 552H794V553H793V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 552H789V553H788V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 552H784V553H783V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 552H779V553H778V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 552H774V553H773V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 552H769V553H768V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 552H764V553H763V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 552H759V553H758V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 552H754V553H753V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 552H749V553H748V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 552H744V553H743V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 552H739V553H738V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 552H734V553H733V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 552H729V553H728V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 552H724V553H723V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 552H719V553H718V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 552H714V553H713V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 552H709V553H708V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 552H704V553H703V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 552H699V553H698V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 552H694V553H693V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 552H689V553H688V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 552H684V553H683V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 552H679V553H678V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 552H674V553H673V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 552H669V553H668V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 552H664V553H663V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 552H659V553H658V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 552H654V553H653V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 552H649V553H648V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 552H644V553H643V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 552H639V553H638V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 552H634V553H633V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 552H629V553H628V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 552H624V553H623V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 552H619V553H618V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 552H614V553H613V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 552H609V553H608V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 552H604V553H603V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 552H599V553H598V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 552H594V553H593V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 552H589V553H588V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 552H584V553H583V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 552H579V553H578V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 552H574V553H573V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 552H569V553H568V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 552H564V553H563V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 552H559V553H558V552Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M973 557H974V558H973V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M968 557H969V558H968V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M963 557H964V558H963V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M958 557H959V558H958V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M953 557H954V558H953V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M948 557H949V558H948V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M943 557H944V558H943V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M938 557H939V558H938V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M933 557H934V558H933V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M928 557H929V558H928V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M923 557H924V558H923V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M918 557H919V558H918V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M913 557H914V558H913V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M908 557H909V558H908V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M903 557H904V558H903V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M898 557H899V558H898V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M893 557H894V558H893V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M888 557H889V558H888V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M883 557H884V558H883V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M878 557H879V558H878V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M873 557H874V558H873V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M868 557H869V558H868V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M863 557H864V558H863V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M858 557H859V558H858V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M853 557H854V558H853V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M848 557H849V558H848V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M843 557H844V558H843V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M838 557H839V558H838V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M833 557H834V558H833V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M828 557H829V558H828V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M823 557H824V558H823V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M818 557H819V558H818V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M813 557H814V558H813V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M808 557H809V558H808V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M803 557H804V558H803V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M798 557H799V558H798V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M793 557H794V558H793V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M788 557H789V558H788V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M783 557H784V558H783V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M778 557H779V558H778V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M773 557H774V558H773V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M768 557H769V558H768V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M763 557H764V558H763V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M758 557H759V558H758V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M753 557H754V558H753V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M748 557H749V558H748V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M743 557H744V558H743V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M738 557H739V558H738V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M733 557H734V558H733V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M728 557H729V558H728V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M723 557H724V558H723V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M718 557H719V558H718V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M713 557H714V558H713V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M708 557H709V558H708V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M703 557H704V558H703V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M698 557H699V558H698V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M693 557H694V558H693V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M688 557H689V558H688V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M683 557H684V558H683V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M678 557H679V558H678V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M673 557H674V558H673V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M668 557H669V558H668V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M663 557H664V558H663V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M658 557H659V558H658V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M653 557H654V558H653V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M648 557H649V558H648V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M643 557H644V558H643V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M638 557H639V558H638V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M633 557H634V558H633V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M628 557H629V558H628V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M623 557H624V558H623V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M618 557H619V558H618V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M613 557H614V558H613V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M608 557H609V558H608V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M603 557H604V558H603V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M598 557H599V558H598V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M593 557H594V558H593V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M588 557H589V558H588V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M583 557H584V558H583V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M578 557H579V558H578V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M573 557H574V558H573V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M568 557H569V558H568V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M563 557H564V558H563V557Z" class="fill-black dark:fill-primary-300" />
                                        <path d="M558 557H559V558H558V557Z" class="fill-black dark:fill-primary-300" />
                                    </g>
                                </g>
                            </mask>
                            <g mask="url(#mask1_612_64534)">
                                <path d="M598 492H581L568 525H585L598 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M598 492H581L568 525H585L598 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M598 492H581L568 525H585L598 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M598 492H581L568 525H585L598 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M598 492H581L568 525H585L598 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M568 525H585L598 558H581L568 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M568 525H585L598 558H581L568 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M568 525H585L598 558H581L568 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M568 525H585L598 558H581L568 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <path d="M568 525H585L598 558H581L568 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                <g opacity="0.8">
                                    <path d="M632 492H615L602 525H619L632 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M632 492H615L602 525H619L632 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M632 492H615L602 525H619L632 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M632 492H615L602 525H619L632 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M632 492H615L602 525H619L632 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M602 525H619L632 558H615L602 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M602 525H619L632 558H615L602 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M602 525H619L632 558H615L602 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M602 525H619L632 558H615L602 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M602 525H619L632 558H615L602 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                </g>
                                <g opacity="0.6">
                                    <path d="M666 492H649L636 525H653L666 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M666 492H649L636 525H653L666 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M666 492H649L636 525H653L666 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M666 492H649L636 525H653L666 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M666 492H649L636 525H653L666 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M636 525H653L666 558H649L636 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M636 525H653L666 558H649L636 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M636 525H653L666 558H649L636 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M636 525H653L666 558H649L636 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M636 525H653L666 558H649L636 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                </g>
                                <g opacity="0.4">
                                    <path d="M700 492H683L670 525H687L700 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M700 492H683L670 525H687L700 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M700 492H683L670 525H687L700 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M700 492H683L670 525H687L700 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M700 492H683L670 525H687L700 492Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M670 525H687L700 558H683L670 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M670 525H687L700 558H683L670 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M670 525H687L700 558H683L670 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M670 525H687L700 558H683L670 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                    <path d="M670 525H687L700 558H683L670 525Z" class="fill-black dark:fill-primary-300" style="mix-blend-mode: overlay" />
                                </g>
                            </g>
                            <line x1="0.640625" y1="564.5" x2="780.363" y2="564.5" stroke="url(#paint5_linear_612_64534)" />
                            <line x1="0.640625" y1="633.5" x2="780.363" y2="633.5" stroke="url(#paint6_linear_612_64534)" />
                            <line x1="0.640625" y1="702.5" x2="780.363" y2="702.5" stroke="url(#paint7_linear_612_64534)" />
                            <line x1="0.640625" y1="771.5" x2="780.363" y2="771.5" stroke="url(#paint8_linear_612_64534)" />
                            <line x1="557.5" y1="0.523437" x2="557.5" y2="1049.48" stroke="url(#paint9_linear_612_64534)" />
                            <rect x="222" y="771" width="3" height="1" class="fill-primary-400" />
                            <rect x="224" y="770" width="3" height="1" transform="rotate(90 224 770)" class="fill-primary-400" />
                            <rect x="556" y="771" width="3" height="1" class="fill-primary-400" />
                            <rect x="558" y="770" width="3" height="1" transform="rotate(90 558 770)" class="fill-primary-400" />
                            <rect x="222" y="702" width="3" height="1" class="fill-primary-400" />
                            <rect x="224" y="701" width="3" height="1" transform="rotate(90 224 701)" class="fill-primary-400" />
                            <rect x="556" y="702" width="3" height="1" class="fill-primary-400" />
                            <rect x="558" y="701" width="3" height="1" transform="rotate(90 558 701)" class="fill-primary-400" />
                            <rect x="222" y="633" width="3" height="1" class="fill-primary-400" />
                            <rect x="224" y="632" width="3" height="1" transform="rotate(90 224 632)" class="fill-primary-400" />
                            <rect x="556" y="633" width="3" height="1" class="fill-primary-400" />
                            <rect x="558" y="632" width="3" height="1" transform="rotate(90 558 632)" class="fill-primary-400" />
                            <rect x="222" y="564" width="3" height="1" class="fill-primary-400" />
                            <rect x="224" y="563" width="3" height="1" transform="rotate(90 224 563)" class="fill-primary-400" />
                            <rect x="556" y="564" width="3" height="1" class="fill-primary-400" />
                            <rect x="558" y="563" width="3" height="1" transform="rotate(90 558 563)" class="fill-primary-400" />
                            <rect x="222" y="485" width="3" height="1" class="fill-primary-400" />
                            <rect x="224" y="484" width="3" height="1" transform="rotate(90 224 484)" class="fill-primary-400" />
                            <rect x="556" y="485" width="3" height="1" class="fill-primary-400" />
                            <rect x="558" y="484" width="3" height="1" transform="rotate(90 558 484)" class="fill-primary-400" />
                            <rect x="222" y="416" width="3" height="1" class="fill-primary-400" />
                            <rect x="224" y="415" width="3" height="1" transform="rotate(90 224 415)" class="fill-primary-400" />
                            <rect x="556" y="416" width="3" height="1" class="fill-primary-400" />
                            <rect x="558" y="415" width="3" height="1" transform="rotate(90 558 415)" class="fill-primary-400" />
                            <rect x="556" y="347" width="3" height="1" class="fill-primary-400" />
                            <rect x="558" y="346" width="3" height="1" transform="rotate(90 558 346)" class="fill-primary-400" />
                            <rect x="222" y="347" width="3" height="1" class="fill-primary-400" />
                            <rect x="224" y="346" width="3" height="1" transform="rotate(90 224 346)" class="fill-primary-400" />
                            <rect x="556" y="278" width="3" height="1" class="fill-primary-400" />
                            <rect x="558" y="277" width="3" height="1" transform="rotate(90 558 277)" class="fill-primary-400" />
                            <rect x="222" y="278" width="3" height="1" class="fill-primary-400" />
                            <rect x="224" y="277" width="3" height="1" transform="rotate(90 224 277)" class="fill-primary-400" />
                            <rect x="350" y="416" width="3" height="1" class="fill-primary-400" />
                            <rect x="352" y="415" width="2" height="1" transform="rotate(90 352 415)" class="fill-primary-400" />
                            <rect x="350" y="347" width="3" height="1" class="fill-primary-400" />
                            <rect x="352" y="347" width="2" height="1" transform="rotate(90 352 347)" class="fill-primary-400" />
                            <rect x="477" y="485" width="3" height="1" class="fill-primary-400" />
                            <rect x="479" y="484" width="2" height="1" transform="rotate(90 479 484)" class="fill-primary-400" />
                            <rect x="477" y="416" width="3" height="1" class="fill-primary-400" />
                            <rect x="479" y="416" width="2" height="1" transform="rotate(90 479 416)" class="fill-primary-400" />
                            <defs>
                                <linearGradient id="paint0_linear_612_64534" x1="223" y1="0.523438" x2="223" y2="1049.48" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="rgb(var(--primary-200))" />
                                    <stop offset="1" stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_612_64534" x1="0.640625" y1="279" x2="780.363" y2="279" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="rgb(var(--primary-200))" />
                                    <stop offset="1" stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_612_64534" x1="0.640625" y1="348" x2="780.363" y2="348" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="rgb(var(--primary-200))" />
                                    <stop offset="1" stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_612_64534" x1="0.640625" y1="417" x2="780.363" y2="417" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="rgb(var(--primary-200))" />
                                    <stop offset="1" stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_612_64534" x1="0.640625" y1="486" x2="780.363" y2="486" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="rgb(var(--primary-200))" />
                                    <stop offset="1" stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint5_linear_612_64534" x1="0.640625" y1="565" x2="780.363" y2="565" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="rgb(var(--primary-200))" />
                                    <stop offset="1" stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint6_linear_612_64534" x1="0.640625" y1="634" x2="780.363" y2="634" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="rgb(var(--primary-200))" />
                                    <stop offset="1" stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint7_linear_612_64534" x1="0.640625" y1="703" x2="780.363" y2="703" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="rgb(var(--primary-200))" />
                                    <stop offset="1" stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint8_linear_612_64534" x1="0.640625" y1="772" x2="780.363" y2="772" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="rgb(var(--primary-200))" />
                                    <stop offset="1" stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint9_linear_612_64534" x1="557" y1="0.523438" x2="557" y2="1049.48" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="rgb(var(--primary-200))" />
                                    <stop offset="1" stop-color="rgb(var(--primary-200))" stop-opacity="0" />
                                </linearGradient>
                                <clipPath id="clip0_612_64534">
                                    <rect width="182" height="66" fill="white" transform="translate(41 492)" />
                                </clipPath>
                                <clipPath id="clip1_612_64534">
                                    <rect width="182" height="66" fill="white" transform="matrix(-1 0 0 1 740 492)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="absolute top-[12.4rem] left-[14rem] z-40">
                            <div class="flex w-[21rem] h-[4.4rem] p-3 justify-center items-center">
                                <Chips v-model="chipsValue" class="!w-full" :pt="{ container: 'flex-nowrap' }" :ptOptions="{ mergeProps: true }" />
                            </div>
                            <div class="flex w-[21rem] h-[4.4rem] p-3 items-center">
                                <div class="flex items-center w-[6.5rem]">
                                    <Checkbox id="unstyled" v-model="checked" :binary="true" />
                                    <label for="unstyled" class="ml-2 text-surface-900 dark:text-white">Unstyled</label>
                                </div>
                                <div class="flex items-center justify-center w-[11.5rem] ml-6">
                                    <SelectButton v-model="selectbutton_value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom" class="mx-auto">
                                        <template #option="slotProps">
                                            <div class="flex items-center">
                                                <i :class="slotProps.option.icon"></i>
                                                <span class="ml-2">{{ slotProps.option.value }}</span>
                                            </div>
                                        </template>
                                    </SelectButton>
                                </div>
                            </div>
                            <div class="flex w-[21rem] h-[4.2rem] p-3 items-center">
                                <div class="flex items-center max-w-[14.5rem]">
                                    <InputNumber v-model="value1" inputId="stacked-buttons" showButtons mode="currency" currency="USD" inputClass="w-full" />
                                </div>
                                <div class="flex items-center justify-center w-[3.4rem] ml-[1.5rem]">
                                    <InputSwitch v-model="switched" class="mx-auto" />
                                </div>
                            </div>
                            <div class="flex w-[21rem] h-[4.95rem] p-3 justify-center items-center">
                                <div class="flex items-center">
                                    <div class="custom-selectbutton inline-flex p-[0.28rem] items-start gap-[0.28rem] rounded-[0.71rem] border border-[#00000003] bg-surface-0 dark:bg-surface-900">
                                        <button
                                            type="button"
                                            class="px-[0.85rem] tracking-tight py-[0.42rem] text-lg rounded-md bg-surface-0 text-surface-900 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 focus:outline-none duration-200 transition-[backgroundColor]"
                                            :class="{
                                                'shadow shadow-inner bg-surface-50 dark:bg-surface-800 dark:shadow-[inset_0px_1px_0px_0px_var(--surface-800)]': isLara,
                                                'dark:bg-surface-900': !isLara
                                            }"
                                            @click="setPreset('lara')"
                                        >
                                            Lara
                                        </button>
                                        <button
                                            type="button"
                                            class="px-[0.85rem] tracking-tight py-[0.42rem] text-lg rounded-md bg-surface-0 text-surface-900 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 focus:outline-none duration-200 transition-[backgroundColor]"
                                            :class="{
                                                'shadow shadow-inner bg-surface-50 dark:bg-surface-800 dark:shadow-[inset_0px_1px_0px_0px_var(--primary-400)]': isAura,
                                                'dark:bg-surface-900': !isAura
                                            }"
                                            @click="setPreset('aura')"
                                        >
                                            Aura
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex w-[21rem] h-[4.4rem] p-3 justify-center items-center">
                                <div class="flex items-center">
                                    <Slider v-model="slider_value" range class="w-[18.5rem]" />
                                </div>
                            </div>
                            <div class="flex w-[21rem] h-[4.4rem] p-3 justify-center items-center">
                                <Calendar v-model="date" showIcon appendTo="self" iconDisplay="input" class="w-full" :pt="{ panel: 'z-40' }" :ptOptions="{ mergeProps: true }" />
                            </div>
                            <div class="flex w-[21rem] h-[4.4rem] p-3 items-center justify-center gap-5">
                                <Tag value="Lightful"></Tag>

                                <Avatar icon="pi pi-user" class="bg-white dark:bg-surface-900 text-primary" shape="circle" />

                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />

                                <Avatar label="P" class="bg-white dark:bg-surface-900 text-primary" shape="circle" />

                                <Tag value="Easy"></Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex fixed top-0 h-screen z-0">
            <div class="w-full lg:w-[65%] min-[1100px]:w-[61%] xl:w-7/12 min-[1419px]:w-1/2 h-screen bg-surface-0 dark:bg-surface-950"></div>
            <div class="hidden lg:block w-[35%] min-[1100px]:w-[39%] xl:w-5/12 min-[1419px]:w-1/2 h-screen bg-primary-50 dark:bg-surface-900"></div>
        </div>
    </div>
</template>

<script>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import SelectButton from 'primevue/selectbutton';
import Slider from 'primevue/slider';
import Tag from 'primevue/tag';

export default {
    data() {
        return {
            selectedCity: null,
            checked: true,
            switched: true,
            chipsValue: ['Vue.js'],
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            options: [
                { icon: 'pi pi-list', value: 'List' },
                { icon: 'pi pi-th-large', value: 'Grid' }
            ],
            selectbutton_value: { icon: 'pi pi-th-large', value: 'Grid' },
            lightdark_value: 'light',
            value1: 20,
            presetoptions: [{ value: 'TailwindUI' }, { value: 'Lara' }],
            slider_value: [20, 80],
            date: '12/12/2024',
            components: {
                Button,
                Dropdown,
                Checkbox,
                SelectButton,
                InputNumber,
                InputSwitch,
                Slider,
                Calendar,
                Tag,
                Avatar
            },
            componentSuiteHovered: false
        };
    },
    methods: {
        setPreset(preset) {
            this.$appState.preset = preset;
        },
        switchColorScheme(colorScheme) {
            if (!document.startViewTransition) {
                toggleColorScheme(colorScheme);

                return;
            }

            document.startViewTransition(() => this.toggleColorScheme(colorScheme));
        },
        toggleColorScheme(colorScheme) {
            const root = document.documentElement;

            if (colorScheme === 'light') root.classList.remove('dark');
            else if (colorScheme === 'dark') root.classList.add('dark');

            this.$appState.darkMode = !this.$appState.darkMode;
        }
    },
    computed: {
        isDarkMode() {
            return this.$appState.darkMode;
        },
        isLara() {
            return this.$appState.preset === 'lara';
        },
        isAura() {
            return this.$appState.preset === 'aura';
        }
    }
};
</script>
<style lang="scss" scoped>
.component-suite {
    transition: all 0.4s ease-in-out;
    transform: skew(-26.918deg, 10deg);

    &:hover {
        transform: skew(0deg, 0deg);
        z-index: 100;
    }
}

.stars {
    background-image: url('assets/Noise-Texture.png');
}

@media screen and (max-width: 1420px) {
    .component-suite {
        transform: skew(0deg, 0deg) !important;
    }
}
.prime-card {
    .emerald-logo {
        transition: all 0.35s ease-in;
    }
    &:hover {
        .emerald-logo {
            transform: skew(-8deg, 10deg) scale(1.1);
            transition: all 0.4s ease-in-out;
        }
    }
}
.light-dark-card {
    --surface-alpha: color-mix(in srgb, rgb(var(--surface-800)) 20%, transparent);
    --surface-alpha-light: color-mix(in srgb, rgb(var(--surface-600)) 10%, transparent);
    .clouds {
        position: relative;
        overflow: hidden;
        svg {
            z-index: 1;
        }
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            z-index: 0;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            background: linear-gradient(90deg, var(--surface-alpha) 0%, var(--surface-alpha-light) 100%);
        }
    }

    // &:hover .clouds::after {
    //     transform: translateX(100%);
    // }
}
.palette-card {
    --primary-alpha: color-mix(in srgb, rgb(var(--primary-500)) 5%, transparent);
    --surface-alpha: color-mix(in srgb, rgb(var(--surface-100)) 10%, transparent);

    .palette {
        position: relative;
        overflow: hidden;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 200%;
            height: 100%;
            z-index: 1;
        }
    }

    &:hover .palette::after {
        animation: pulseGradient 1s infinite linear;
        background: linear-gradient(90deg, var(--surface-alpha) 0%, var(--primary-alpha) 60%, var(--surface-alpha) 100%);
    }
}

@keyframes pulseGradient {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

.dropdown-bg {
}
.dark .palette-card {
    --primary-alpha: color-mix(in srgb, rgb(var(--primary-400)) 8%, transparent);
    --surface-alpha: color-mix(in srgb, rgb(var(--surface-700)) 10%, transparent);
}
.dark .light-dark-card {
    --surface-alpha: color-mix(in srgb, rgb(var(--surface-0)) 30%, transparent);
    --surface-alpha-light: color-mix(in srgb, rgb(var(--surface-50)) 30%, transparent);
}
</style>
