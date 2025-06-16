<script>
import BaseEditableHolder from '@peacepiece-compatibility/core/baseeditableholder';
import CheckboxGroupStyle from '@peacepiece-compatibility/primevue/checkboxgroup/style';

export default {
    name: 'BaseCheckboxGroup',
    extends: BaseEditableHolder,
    style: CheckboxGroupStyle,
    provide() {
        return {
            $pcCheckboxGroup: this,
            $parentInstance: this
        };
    }
};
</script>
