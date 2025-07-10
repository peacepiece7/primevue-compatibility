import type { ConfirmationOptions } from 'peacepiece-primevue/confirmationoptions';

export declare function useConfirm(): {
    require: (option: ConfirmationOptions) => void;
    close: () => void;
};
