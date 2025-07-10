<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import BreadcrumbStyle from 'peacepiece-primevue/breadcrumb/style';

export default {
    name: 'BaseBreadcrumb',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        home: {
            type: null,
            default: null
        }
    },
    style: BreadcrumbStyle,
    provide() {
        return {
            $pcBreadcrumb: this,
            $parentInstance: this
        };
    }
};
</script>
