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
import InputGroup from 'peacepiece-primevue/inputgroup';
import InputGroupAddon from 'peacepiece-primevue/inputgroupaddon';
`
            }
        };
    }
};
</script>
