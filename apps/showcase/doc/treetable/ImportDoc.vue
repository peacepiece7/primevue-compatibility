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
import TreeTable from '@peacepiece-compatibility/primevue/treetable';
import Column from '@peacepiece-compatibility/primevue/column';
`
            }
        };
    }
};
</script>
