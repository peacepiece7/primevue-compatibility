<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import TagStyle from '@peacepiece-compatibility/primevue/tag/style';

export default {
    name: 'BaseTag',
    extends: BaseComponent,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    style: TagStyle,
    provide() {
        return {
            $pcTag: this,
            $parentInstance: this
        };
    }
};
</script>
