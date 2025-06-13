import type { ConfirmationOptions } from '@peacepiece-compatibility/primevue/confirmationoptions';

export declare function useConfirm(): {
    require: (option: ConfirmationOptions) => void;
    close: () => void;
};
