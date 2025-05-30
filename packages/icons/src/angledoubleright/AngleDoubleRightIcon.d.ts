import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@peacepiece-compatibility/icons/baseicon';

declare class AngleDoubleRightIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleRightIcon: DefineComponent<AngleDoubleRightIcon>;
    }
}

export default AngleDoubleRightIcon;
