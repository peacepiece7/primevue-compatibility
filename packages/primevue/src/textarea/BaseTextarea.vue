<script>
import BaseInput from '@peacepiece-compatibility/core/baseinput';
import TextareaStyle from '@peacepiece-compatibility/primevue/textarea/style';

export default {
    name: 'BaseTextarea',
    extends: BaseInput,
    props: {
        autoResize: Boolean
    },
    style: TextareaStyle,
    provide() {
        return {
            $pcTextarea: this,
            $parentInstance: this
        };
    }
};
</script>
