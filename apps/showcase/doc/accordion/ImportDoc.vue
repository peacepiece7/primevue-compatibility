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
import Accordion from 'peacepiece-primevue/accordion';
import AccordionPanel from 'peacepiece-primevue/accordionpanel';
import AccordionHeader from 'peacepiece-primevue/accordionheader';
import AccordionContent from 'peacepiece-primevue/accordioncontent';
`
            }
        };
    }
};
</script>
