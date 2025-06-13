import AnimateOnScroll from '@peacepiece-compatibility/primevue/animateonscroll';
import PrimeVue from '@peacepiece-compatibility/primevue/config';
import ConfirmationService from '@peacepiece-compatibility/primevue/confirmationservice';
import StyleClass from '@peacepiece-compatibility/primevue/styleclass';
import ToastService from '@peacepiece-compatibility/primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        unstyled: true
    });
    nuxtApp.vueApp.directive('styleclass', StyleClass);
    nuxtApp.vueApp.directive('animateonscroll', AnimateOnScroll);
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService);
});
