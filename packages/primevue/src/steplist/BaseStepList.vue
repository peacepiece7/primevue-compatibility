<script>
import BaseComponent from '@primevue/core/basecomponent';
import StepListStyle from '@peacepiece-compatibility/primevue/steplist/style';

export default {
    name: 'BaseStepList',
    extends: BaseComponent,
    style: StepListStyle,
    provide() {
        return {
            $pcStepList: this,
            $parentInstance: this
        };
    }
};
</script>
