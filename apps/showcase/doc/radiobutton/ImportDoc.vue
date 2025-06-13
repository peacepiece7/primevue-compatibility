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
import RadioButton from '@peacepiece-compatibility/primevue/radiobutton';
import RadioButtonGroup from '@peacepiece-compatibility/primevue/radiobuttongroup';
`
            }
        };
    }
};
</script>
