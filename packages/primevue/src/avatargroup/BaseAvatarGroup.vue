<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import AvatarGroupStyle from '@peacepiece-compatibility/primevue/avatargroup/style';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $pcAvatarGroup: this,
            $parentInstance: this
        };
    }
};
</script>
