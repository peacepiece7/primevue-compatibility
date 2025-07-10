<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import StepPanelsStyle from 'peacepiece-primevue/steppanels/style';

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
