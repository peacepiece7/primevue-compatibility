<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import ConfirmPopupStyle from '@peacepiece-compatibility/primevue/confirmpopup/style';

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String
    },
    style: ConfirmPopupStyle,
    provide() {
        return {
            $pcConfirmPopup: this,
            $parentInstance: this
        };
    }
};
</script>
