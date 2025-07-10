import AnimateOnScroll from 'peacepiece-primevue/animateonscroll';
import PrimeVue from 'peacepiece-primevue/config';
import ConfirmationService from 'peacepiece-primevue/confirmationservice';
import StyleClass from 'peacepiece-primevue/styleclass';
import ToastService from 'peacepiece-primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        unstyled: true
    });
    nuxtApp.vueApp.directive('styleclass', StyleClass);
    nuxtApp.vueApp.directive('animateonscroll', AnimateOnScroll);
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService);
});
