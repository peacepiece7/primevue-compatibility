<script>
import BaseEditableHolder from '@peacepiece-compatibility/core/baseeditableholder';
import RadioButtonGroupStyle from '@peacepiece-compatibility/primevue/radiobuttongroup/style';

export default {
    name: 'BaseRadioButtonGroup',
    extends: BaseEditableHolder,
    style: RadioButtonGroupStyle,
    provide() {
        return {
            $pcRadioButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
