<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import IftaLabelStyle from 'peacepiece-primevue/iftalabel/style';

export default {
    name: 'BaseIftaLabel',
    extends: BaseComponent,
    style: IftaLabelStyle,
    provide() {
        return {
            $pcIftaLabel: this,
            $parentInstance: this
        };
    }
};
</script>
