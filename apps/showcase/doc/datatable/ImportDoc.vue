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
import DataTable from '@peacepiece-compatibility/primevue/datatable';
import Column from '@peacepiece-compatibility/primevue/column';
import ColumnGroup from '@peacepiece-compatibility/primevue/columngroup';   // optional
import Row from '@peacepiece-compatibility/primevue/row';                   // optional
`
            }
        };
    }
};
</script>
