import BaseDirective from '@peacepiece-compatibility/core/basedirective';
import AnimateOnScrollStyle from '@peacepiece-compatibility/primevue/animateonscroll/style';

const BaseAnimateOnScroll = BaseDirective.extend({
    style: AnimateOnScrollStyle
});

export default BaseAnimateOnScroll;
