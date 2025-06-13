<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Checkbox from '@peacepiece-compatibility/primevue/checkbox';
import CheckboxGroup from '@peacepiece-compatibility/primevue/checkboxgroup';
`
            }
        };
    }
};
</script>
