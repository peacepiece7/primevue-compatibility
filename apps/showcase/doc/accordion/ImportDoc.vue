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
import Accordion from '@peacepiece-compatibility/primevue/accordion';
import AccordionPanel from '@peacepiece-compatibility/primevue/accordionpanel';
import AccordionHeader from '@peacepiece-compatibility/primevue/accordionheader';
import AccordionContent from '@peacepiece-compatibility/primevue/accordioncontent';
`
            }
        };
    }
};
</script>
