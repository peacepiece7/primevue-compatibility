<script>
import BaseInput from '@peacepiece-compatibility/core/baseinput';
import RadioButtonStyle from '@peacepiece-compatibility/primevue/radiobutton/style';

export default {
    name: 'BaseRadioButton',
    extends: BaseInput,
    props: {
        value: null,
        binary: Boolean,
        readonly: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: null
        },
        inputId: {
            type: String,
            default: null
        },
        inputClass: {
            type: [String, Object],
            default: null
        },
        inputStyle: {
            type: Object,
            default: null
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: RadioButtonStyle,
    provide() {
        return {
            $pcRadioButton: this,
            $parentInstance: this
        };
    }
};
</script>
