<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import InputGroupStyle from '@peacepiece-compatibility/primevue/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $pcInputGroup: this,
            $parentInstance: this
        };
    }
};
</script>
