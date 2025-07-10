<template>
    <Accordion
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </Accordion>
</template>

<script setup lang="ts">
import Accordion, { type AccordionPassThroughOptions, type AccordionProps } from 'peacepiece-primevue/accordion';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AccordionProps {}
defineProps<Props>();

const theme = ref<AccordionPassThroughOptions>({
    root: ``
});
</script>
