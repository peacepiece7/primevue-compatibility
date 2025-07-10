<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const code = ref(`import DataTable from '@/volt/DataTable.vue';
import Column from 'peacepiece-primevue/column';
import ColumnGroup from 'peacepiece-primevue/columngroup';  // optional
import Row from 'peacepiece-primevue/row';          // optional
`);
</script>
