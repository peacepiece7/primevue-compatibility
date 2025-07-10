<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import ButtonGroupStyle from 'peacepiece-primevue/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $pcButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
