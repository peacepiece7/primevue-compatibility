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
import DataTable from 'peacepiece-primevue/datatable';
import Column from 'peacepiece-primevue/column';
import ColumnGroup from 'peacepiece-primevue/columngroup';   // optional
import Row from 'peacepiece-primevue/row';                   // optional
`
            }
        };
    }
};
</script>
