import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@peacepiece-compatibility/icons/baseicon';

declare class StarFillIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        StarFillIcon: DefineComponent<StarFillIcon>;
    }
}

export default StarFillIcon;
