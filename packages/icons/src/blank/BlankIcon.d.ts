import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@peacepiece-compatibility/icons/baseicon';

declare class BlankIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BlankIcon: DefineComponent<BlankIcon>;
    }
}

export default BlankIcon;
