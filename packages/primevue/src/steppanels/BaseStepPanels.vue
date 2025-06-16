<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import StepPanelsStyle from '@peacepiece-compatibility/primevue/steppanels/style';

export default {
    name: 'BaseStepPanels',
    extends: BaseComponent,
    style: StepPanelsStyle,
    provide() {
        return {
            $pcStepPanels: this,
            $parentInstance: this
        };
    }
};
</script>
