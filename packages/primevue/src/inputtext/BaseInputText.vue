<script>
import BaseInput from '@peacepiece-compatibility/core/baseinput';
import InputTextStyle from 'peacepiece-primevue/inputtext/style';

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
