<script>
import Badge from '@peacepiece-compatibility/primevue/badge';
import OverlayBadgeStyle from '@peacepiece-compatibility/primevue/overlaybadge/style';

export default {
    name: 'OverlayBadge',
    extends: Badge,
    style: OverlayBadgeStyle,
    provide() {
        return {
            $pcOverlayBadge: this,
            $parentInstance: this
        };
    }
};
</script>
