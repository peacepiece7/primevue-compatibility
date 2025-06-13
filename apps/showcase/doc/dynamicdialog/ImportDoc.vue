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
import DynamicDialog from '@peacepiece-compatibility/primevue/dynamicdialog';
`
            }
        };
    }
};
</script>
