import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@peacepiece-compatibility/icons/baseicon';

declare class StarIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        StarIcon: DefineComponent<StarIcon>;
    }
}

export default StarIcon;
