import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@peacepiece-compatibility/icons/baseicon';

declare class PlusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        PlusIcon: DefineComponent<PlusIcon>;
    }
}

export default PlusIcon;
