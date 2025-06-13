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
import CascadeSelect from '@peacepiece-compatibility/primevue/cascadeselect';
`
            }
        };
    }
};
</script>
