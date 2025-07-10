<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import FluidStyle from 'peacepiece-primevue/fluid/style';

export default {
    name: 'BaseFluid',
    extends: BaseComponent,
    style: FluidStyle,
    provide() {
        return {
            $pcFluid: this,
            $parentInstance: this
        };
    }
};
</script>
