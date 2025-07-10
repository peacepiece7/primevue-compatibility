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
import TreeTable from 'peacepiece-primevue/treetable';
import Column from 'peacepiece-primevue/column';
`
            }
        };
    }
};
</script>
