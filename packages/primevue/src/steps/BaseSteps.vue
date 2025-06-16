<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import StepsStyle from '@peacepiece-compatibility/primevue/steps/style';

export default {
    name: 'BaseSteps',
    extends: BaseComponent,
    props: {
        id: {
            type: String
        },
        model: {
            type: Array,
            default: null
        },
        readonly: {
            type: Boolean,
            default: true
        },
        activeStep: {
            type: Number,
            default: 0
        }
    },
    style: StepsStyle,
    provide() {
        return {
            $pcSteps: this,
            $parentInstance: this
        };
    }
};
</script>
