import BaseDirective from '@primevue/core/basedirective';
import RippleStyle from '@peacepiece-compatibility/primevue/ripple/style';

const BaseRipple = BaseDirective.extend({
    style: RippleStyle
});

export default BaseRipple;
