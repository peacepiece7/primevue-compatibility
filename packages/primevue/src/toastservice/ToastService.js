import ToastEventBus from '@peacepiece-compatibility/primevue/toasteventbus';
import { PrimeVueToastSymbol } from '@peacepiece-compatibility/primevue/usetoast';

export default {
    install: (app) => {
        const ToastService = {
            add: (message) => {
                ToastEventBus.emit('add', message);
            },
            remove: (message) => {
                ToastEventBus.emit('remove', message);
            },
            removeGroup: (group) => {
                ToastEventBus.emit('remove-group', group);
            },
            removeAllGroups: () => {
                ToastEventBus.emit('remove-all-groups');
            }
        };

        app.config.globalProperties.$toast = ToastService;
        app.provide(PrimeVueToastSymbol, ToastService);
    }
};
