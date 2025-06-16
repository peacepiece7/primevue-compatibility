<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import InputGroupAddonStyle from '@peacepiece-compatibility/primevue/inputgroupaddon/style';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $pcInputGroupAddon: this,
            $parentInstance: this
        };
    }
};
</script>
