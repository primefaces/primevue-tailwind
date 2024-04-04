<template>
    <div class="absolute top-[2.5rem] right-0 hidden w-[14rem] p-3 bg-white dark:bg-surface-800 rounded-md shadow border border-surface-200 dark:border-surface-700 flex-col justify-start items-start gap-3.5 inline-flex origin-top">
        <div class="flex-col justify-start items-start gap-2 inline-flex w-full">
            <span class="text-black dark:text-surface-0 text-sm font-medium">Preset</span>
            <div class="custom-selectbutton inline-flex p-[0.28rem] items-start gap-[0.28rem] rounded-[0.71rem] border border-[#00000003] bg-surface-100 dark:bg-surface-900 w-full">
                <button
                    type="button"
                    class="px-[0.5rem] w-full tracking-tight py-[0.3rem] leading-none rounded-md text-surface-900 dark:text-surface-0 hover:bg-surface-50 dark:hover:bg-surface-800 focus:outline-none duration-200 transition-[backgroundColor]"
                    :class="{
                        'shadow bg-surface-0 dark:bg-surface-800 dark:shadow-[inset_0px_1px_0px_0px_var(--surface-800)]': isLara,
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
                        'shadow bg-surface-0 dark:bg-surface-800 dark:shadow-[inset_0px_1px_0px_0px_var(--primary-400)]': isAura,
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
                    @click="updateColors('primary', primaryColor.name)"
                    class="w-4 h-4 rounded-full cursor-pointer"
                    :class="{ 'ring-2 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-800 ring-primary-500': selectedPrimaryColor === primaryColor.name }"
                    :style="{ backgroundColor: `rgb(${primaryColor.palette[5]})` }"
                ></button>
            </div>
        </div>
        <div class="flex-col justify-start items-start gap-2 inline-flex pr-2">
            <span class="text-black dark:text-surface-0 text-sm font-medium">Surface Colors</span>
            <div class="self-stretch justify-start items-start gap-2 inline-flex">
                <button
                    v-for="surface of surfaces"
                    :key="surface.name"
                    type="button"
                    @click="updateColors('surface', surface.name)"
                    class="w-4 h-4 rounded-full cursor-pointer"
                    :class="{ 'ring-2 ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-800 ring-surface-500': selectedSurfaceColor === surface.name }"
                    :style="{ backgroundColor: `rgb(${surface.palette[6]})` }"
                ></button>
            </div>
        </div>
        <div class="flex justify-between items-center gap-2 w-full pt-4 pb-2 border-t border-surface-200 dark:border-surface-700">
            <span class="text-black dark:text-surface-0 text-sm font-medium m-0">Ripple Effect</span>
            <InputSwitch :modelValue="$primevue.config.ripple" @update:model-value="setRipple($event)" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedPrimaryColor: 'emerald',
            selectedSurfaceColor: 'zinc',
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
                { name: 'rose', palette: ['255 241 242', '255 228 230', '254 205 211', '253 164 175', '251 113 133', '244 63 94', '225 29 72', '190 18 60', '159 18 57', '136 19 55', '76 5 25'] },
                { name: 'noir', palette: ['250 250 250', '244 244 245', '228 228 231', '212 212 216', '161 161 170', '113 113 122', '82 82 91', '63 63 70', '39 39 42', '24 24 27', '9 9 11'] }
            ],
            surfaces: [
                {
                    name: 'slate',
                    palette: ['255 255 255', '248 250 252', '241 245 249', '226 232 240', '203 213 225', '148 163 184', '100 116 139', '71 85 105', '51 65 85', '30 41 59', '15 23 42', '2 6 23']
                },
                {
                    name: 'gray',
                    palette: ['255 255 255', '249 250 251', '243 244 246', '229 231 235', '209 213 219', '156 163 175', '107 114 128', '75 85 99', '55 65 81', '31 41 55', '17 24 39', '3 7 18']
                },
                {
                    name: 'zinc',
                    palette: ['255 255 255', '250 250 250', '244 244 245', '228 228 231', '212 212 216', '161 161 170', '113 113 122', '82 82 91', '63 63 70', '39 39 42', '24 24 27', '9 9 11']
                },
                {
                    name: 'neutral',
                    palette: ['255 255 255', '250 250 250', '245 245 245', '229 229 229', '212 212 212', '163 163 163', '115 115 115', '82 82 82', '64 64 64', '38 38 38', '23 23 23', '10 10 10']
                },
                {
                    name: 'stone',
                    palette: ['255 255 255', '250 250 249', '245 245 244', '231 229 228', '214 211 209', '168 162 158', '120 113 108', '87 83 78', '68 64 60', '41 37 36', '28 25 23', '12 10 9']
                },
                {
                    name: 'soho',
                    palette: ['255 255 255', '244 244 244', '232 233 233', '210 210 212', '187 188 190', '165 165 169', '142 143 147', '119 120 125', '97 98 104', '74 75 82', '52 52 61', '29 30 39']
                },
                {
                    name: 'viva',
                    palette: ['255 255 255', '243 243 243', '231 231 232', '207 208 208', '183 184 185', '159 161 161', '135 137 138', '10 113 115', '86 90 91', '62 66 68', '38 43 44', '14 19 21']
                },
                {
                    name: 'ocean',
                    palette: ['255 255 255', '251 252 252', '247 249 248', '239 243 242', '218 222 221', '177 183 182', '130 135 135', '95 114 116', '65 91 97', '41 68 78', '24 50 64', '12 25 32']
                }
            ]
        };
    },
    methods: {
        updateColors(type, colorName) {
            let selectedColor;
            const root = document.documentElement;

            if (type === 'primary') {
                selectedColor = this.primaryColors.find((color) => color.name === colorName);
                this.selectedPrimaryColor = colorName;

                if (colorName === 'noir') {
                    root.classList.add('customized-primary');
                } else {
                    root.classList.remove('customized-primary');
                }
            } else if (type === 'surface') {
                selectedColor = this.surfaces.find((color) => color.name === colorName);
                this.selectedSurfaceColor = colorName;
            }

            if (!document.startViewTransition) {
                this.applyTheme(type, selectedColor.palette);

                return;
            }

            document.startViewTransition(() => this.applyTheme(type, selectedColor.palette));
        },
        applyTheme(type, colors) {
            let increments;

            if (type === 'primary') {
                increments = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
            } else if (type === 'surface') {
                increments = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
            }

            colors.forEach((color, index) => {
                document.documentElement.style.setProperty(`--${type}-${increments[index]}`, color);
            });
        },
        setPreset(preset) {
            this.$appState.preset = preset;
        },
        setRipple(value) {
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
</script>
