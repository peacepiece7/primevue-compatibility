<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import InplaceStyle from 'peacepiece-primevue/inplace/style';

export default {
    name: 'BaseInplace',
    extends: BaseComponent,
    props: {
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        displayProps: {
            type: null,
            default: null
        }
    },
    style: InplaceStyle,
    provide() {
        return {
            $pcInplace: this,
            $parentInstance: this
        };
    }
};
</script>
