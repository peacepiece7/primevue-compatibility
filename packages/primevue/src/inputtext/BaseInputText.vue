<script>
import BaseInput from '@primevue/core/baseinput';
import InputTextStyle from '@peacepiece-compatibility/primevue/inputtext/style';

export default {
    name: 'BaseInputText',
    extends: BaseInput,
    style: InputTextStyle,
    provide() {
        return {
            $pcInputText: this,
            $parentInstance: this
        };
    }
};
</script>
