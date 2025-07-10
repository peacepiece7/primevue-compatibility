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
import Tabs from 'peacepiece-primevue/tabs';
import TabList from 'peacepiece-primevue/tablist';
import Tab from 'peacepiece-primevue/tab';
import TabPanels from 'peacepiece-primevue/tabpanels';
import TabPanel from 'peacepiece-primevue/tabpanel';
`
            }
        };
    }
};
</script>
