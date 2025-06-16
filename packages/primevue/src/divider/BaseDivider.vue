<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import DividerStyle from '@peacepiece-compatibility/primevue/divider/style';

export default {
    name: 'BaseDivider',
    extends: BaseComponent,
    props: {
        align: {
            type: String,
            default: null
        },
        layout: {
            type: String,
            default: 'horizontal'
        },
        type: {
            type: String,
            default: 'solid'
        }
    },
    style: DividerStyle,
    provide() {
        return {
            $pcDivider: this,
            $parentInstance: this
        };
    }
};
</script>
