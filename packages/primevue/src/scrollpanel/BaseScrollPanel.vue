<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import ScrollPanelStyle from '@peacepiece-compatibility/primevue/scrollpanel/style';

export default {
    name: 'BaseScrollPanel',
    extends: BaseComponent,
    props: {
        step: {
            type: Number,
            default: 5
        }
    },
    style: ScrollPanelStyle,
    provide() {
        return {
            $pcScrollPanel: this,
            $parentInstance: this
        };
    }
};
</script>
