import ConfirmationEventBus from '@peacepiece-compatibility/primevue/confirmationeventbus';
import { PrimeVueConfirmSymbol } from '@peacepiece-compatibility/primevue/useconfirm';

export default {
    install: (app) => {
        const ConfirmationService = {
            require: (options) => {
                ConfirmationEventBus.emit('confirm', options);
            },
            close: () => {
                ConfirmationEventBus.emit('close');
            }
        };

        app.config.globalProperties.$confirm = ConfirmationService;
        app.provide(PrimeVueConfirmSymbol, ConfirmationService);
    }
};
