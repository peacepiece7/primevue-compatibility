import BaseDirective from '@primevue/core/basedirective';
import FocusTrapStyle from '@peacepiece-compatibility/primevue/focustrap/style';

const BaseFocusTrap = BaseDirective.extend({
    style: FocusTrapStyle
});

export default BaseFocusTrap;
