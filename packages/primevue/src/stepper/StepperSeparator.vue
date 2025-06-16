<template>
    <span :class="cx('separator')" v-bind="ptmo($pcStepper.pt, 'separator')" />
</template>

<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';

export default {
    name: 'StepperSeparator',
    hostName: 'Stepper',
    extends: BaseComponent,
    inject: {
        $pcStepper: { default: null }
    }
};
</script>
