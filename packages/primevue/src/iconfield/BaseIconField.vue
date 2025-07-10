<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import IconFieldStyle from 'peacepiece-primevue/iconfield/style';

export default {
    name: 'BaseIconField',
    extends: BaseComponent,
    style: IconFieldStyle,
    provide() {
        return {
            $pcIconField: this,
            $parentInstance: this
        };
    }
};
</script>
