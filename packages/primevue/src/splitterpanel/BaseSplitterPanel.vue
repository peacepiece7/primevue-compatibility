<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import SplitterPanelStyle from '@peacepiece-compatibility/primevue/splitterpanel/style';

export default {
    name: 'BaseSplitterPanel',
    extends: BaseComponent,
    props: {
        size: {
            type: Number,
            default: null
        },
        minSize: {
            type: Number,
            default: null
        }
    },
    style: SplitterPanelStyle,
    provide() {
        return {
            $pcSplitterPanel: this,
            $parentInstance: this
        };
    }
};
</script>
