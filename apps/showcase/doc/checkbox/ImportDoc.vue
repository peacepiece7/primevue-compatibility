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
import Checkbox from 'peacepiece-primevue/checkbox';
import CheckboxGroup from 'peacepiece-primevue/checkboxgroup';
`
            }
        };
    }
};
</script>
