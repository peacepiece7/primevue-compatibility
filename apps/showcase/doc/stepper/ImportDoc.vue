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
import Stepper from '@peacepiece-compatibility/primevue/stepper';
import StepList from '@peacepiece-compatibility/primevue/steplist';
import StepPanels from '@peacepiece-compatibility/primevue/steppanels';
import StepItem from '@peacepiece-compatibility/primevue/stepitem';
import Step from '@peacepiece-compatibility/primevue/step';
import StepPanel from '@peacepiece-compatibility/primevue/steppanel';
`
            }
        };
    }
};
</script>
