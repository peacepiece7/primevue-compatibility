<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import TabPanelsStyle from 'peacepiece-primevue/tabpanels/style';

export default {
    name: 'BaseTabPanels',
    extends: BaseComponent,
    props: {},
    style: TabPanelsStyle,
    provide() {
        return {
            $pcTabPanels: this,
            $parentInstance: this
        };
    }
};
</script>
