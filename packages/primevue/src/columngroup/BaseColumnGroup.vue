<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import ColumnGroupStyle from '@peacepiece-compatibility/primevue/columngroup/style';

export default {
    name: 'BaseColumnGroup',
    extends: BaseComponent,
    props: {
        type: {
            type: String,
            default: null
        }
    },
    style: ColumnGroupStyle,
    provide() {
        return {
            $pcColumnGroup: this,
            $parentInstance: this
        };
    }
};
</script>
