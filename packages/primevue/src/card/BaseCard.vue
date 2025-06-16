<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import CardStyle from '@peacepiece-compatibility/primevue/card/style';

export default {
    name: 'BaseCard',
    extends: BaseComponent,
    style: CardStyle,
    provide() {
        return {
            $pcCard: this,
            $parentInstance: this
        };
    }
};
</script>
