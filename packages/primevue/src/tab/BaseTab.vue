<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import TabStyle from '@peacepiece-compatibility/primevue/tab/style';

export default {
    name: 'BaseTab',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        as: {
            type: [String, Object],
            default: 'BUTTON'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: TabStyle,
    provide() {
        return {
            $pcTab: this,
            $parentInstance: this
        };
    }
};
</script>
