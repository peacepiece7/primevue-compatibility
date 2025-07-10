<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import DynamicDialogStyle from 'peacepiece-primevue/dynamicdialog/style';

export default {
    name: 'BaseDynamicDialog',
    extends: BaseComponent,
    props: {},
    style: DynamicDialogStyle,
    provide() {
        return {
            $pcDynamicDialog: this,
            $parentInstance: this
        };
    }
};
</script>
