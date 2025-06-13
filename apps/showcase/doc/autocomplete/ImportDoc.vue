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
import AutoComplete from '@peacepiece-compatibility/primevue/autocomplete';
`
            }
        };
    }
};
</script>
