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
import Tabs from '@peacepiece-compatibility/primevue/tabs';
import TabList from '@peacepiece-compatibility/primevue/tablist';
import Tab from '@peacepiece-compatibility/primevue/tab';
import TabPanels from '@peacepiece-compatibility/primevue/tabpanels';
import TabPanel from '@peacepiece-compatibility/primevue/tabpanel';
`
            }
        };
    }
};
</script>
