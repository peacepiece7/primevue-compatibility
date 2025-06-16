<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
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
