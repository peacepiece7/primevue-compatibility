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
import SplitButton from '@peacepiece-compatibility/primevue/splitbutton';
`
            }
        };
    }
};
</script>
