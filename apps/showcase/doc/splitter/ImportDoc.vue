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
import Splitter from 'peacepiece-primevue/splitter';
import SplitterPanel from 'peacepiece-primevue/splitterpanel';
`
            }
        };
    }
};
</script>
