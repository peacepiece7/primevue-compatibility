<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import InputIconStyle from '@peacepiece-compatibility/primevue/inputicon/style';

export default {
    name: 'BaseInputIcon',
    extends: BaseComponent,
    style: InputIconStyle,
    props: {
        class: null
    },
    provide() {
        return {
            $pcInputIcon: this,
            $parentInstance: this
        };
    }
};
</script>
