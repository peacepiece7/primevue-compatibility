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
// import as component
import Badge from '@peacepiece-compatibility/primevue/badge';
import OverlayBadge from '@peacepiece-compatibility/primevue/overlaybadge';
`
            }
        };
    }
};
</script>
