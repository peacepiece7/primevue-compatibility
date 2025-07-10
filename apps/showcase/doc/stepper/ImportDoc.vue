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
import Stepper from 'peacepiece-primevue/stepper';
import StepList from 'peacepiece-primevue/steplist';
import StepPanels from 'peacepiece-primevue/steppanels';
import StepItem from 'peacepiece-primevue/stepitem';
import Step from 'peacepiece-primevue/step';
import StepPanel from 'peacepiece-primevue/steppanel';
`
            }
        };
    }
};
</script>
