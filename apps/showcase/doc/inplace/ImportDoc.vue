<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Inplace from '@peacepiece-compatibility/primevue/inplace';
`
            }
        };
    }
};
</script>
