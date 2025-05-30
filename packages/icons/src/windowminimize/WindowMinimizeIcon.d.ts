import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@peacepiece-compatibility/icons/baseicon';

declare class WindowMinimizeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        WindowMinimizeIcon: DefineComponent<WindowMinimizeIcon>;
    }
}

export default WindowMinimizeIcon;
