<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const code = ref(`import DataTable from '@/volt/DataTable.vue';
import Column from '@peacepiece-compatibility/primevue/column';
import ColumnGroup from '@peacepiece-compatibility/primevue/columngroup';  // optional
import Row from '@peacepiece-compatibility/primevue/row';          // optional
`);
</script>
