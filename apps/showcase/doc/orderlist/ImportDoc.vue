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
import OrderList from 'peacepiece-primevue/orderlist';
`
            }
        };
    }
};
</script>
