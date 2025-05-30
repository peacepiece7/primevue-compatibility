import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@peacepiece-compatibility/icons/baseicon';

declare class SearchIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SearchIcon: DefineComponent<SearchIcon>;
    }
}

export default SearchIcon;
