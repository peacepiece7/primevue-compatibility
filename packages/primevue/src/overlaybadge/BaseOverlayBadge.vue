<script>
import Badge from 'peacepiece-primevue/badge';
import OverlayBadgeStyle from 'peacepiece-primevue/overlaybadge/style';

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
