<script>
import BaseComponent from '@primevue/core/basecomponent';
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
