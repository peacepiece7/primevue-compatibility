<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import BadgeStyle from '@peacepiece-compatibility/primevue/badge/style';

export default {
    name: 'BaseBadge',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: null
        },
        severity: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
        }
    },
    style: BadgeStyle,
    provide() {
        return {
            $pcBadge: this,
            $parentInstance: this
        };
    }
};
</script>
