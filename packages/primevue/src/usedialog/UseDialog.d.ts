import type { DynamicDialogInstance, DynamicDialogOptions } from 'peacepiece-primevue/dynamicdialogoptions';

export declare function useDialog(): {
    open: (content: any, options?: DynamicDialogOptions) => DynamicDialogInstance;
};
