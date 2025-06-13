import BaseDirective from '@primevue/core/basedirective';
import BadgeDirectiveStyle from '@peacepiece-compatibility/primevue/badgedirective/style';

const BaseBadgeDirective = BaseDirective.extend({
    style: BadgeDirectiveStyle
});

export default BaseBadgeDirective;
