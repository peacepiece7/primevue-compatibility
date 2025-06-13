<script>
import BaseComponent from '@primevue/core/basecomponent';
import IconFieldStyle from '@peacepiece-compatibility/primevue/iconfield/style';

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
