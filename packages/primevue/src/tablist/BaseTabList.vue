<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import TabListStyle from '@peacepiece-compatibility/primevue/tablist/style';

export default {
    name: 'BaseTabList',
    extends: BaseComponent,
    props: {},
    style: TabListStyle,
    provide() {
        return {
            $pcTabList: this,
            $parentInstance: this
        };
    }
};
</script>
