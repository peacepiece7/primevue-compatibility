import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@peacepiece-compatibility/icons/baseicon';

declare class FilterFillIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        FilterFillIcon: DefineComponent<FilterFillIcon>;
    }
}

export default FilterFillIcon;
