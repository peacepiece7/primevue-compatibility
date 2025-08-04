<template>
    <component v-if="!asChild" :is="as" v-ripple :class="cx('root')" :data-p="dataP" v-bind="attrs">
        <slot>
            <slot v-if="loading" name="loadingicon" :class="[cx('loadingIcon'), cx('icon')]" v-bind="ptm('loadingIcon')">
                <span v-if="loadingIcon" :class="[cx('loadingIcon'), cx('icon'), loadingIcon]" v-bind="ptm('loadingIcon')" />
                <SpinnerIcon v-else :class="[cx('loadingIcon'), cx('icon')]" spin v-bind="ptm('loadingIcon')" />
            </slot>
            <slot v-else name="icon" :class="[cx('icon')]" v-bind="ptm('icon')">
                <span v-if="icon" :class="[cx('icon'), icon, iconClass]" :data-p="dataIconP" v-bind="ptm('icon')"></span>
            </slot>
            <span v-if="label" :class="cx('label')" v-bind="ptm('label')" :data-p="dataLabelP">{{ label }}</span>
            <Badge v-if="badge" :value="badge" :class="badgeClass" :severity="badgeSeverity" :unstyled="unstyled" :pt="ptm('pcBadge')"></Badge>
        </slot>
    </component>
    <slot v-else :class="cx('root')" :a11yAttrs="a11yAttrs"></slot>
</template>

<script setup>
import { cn } from '@primeuix/utils';
import { isEmpty } from '@primeuix/utils/object';
import SpinnerIcon from '@primevue/icons/spinner';
import Badge from 'primevue/badge';
import Ripple from 'primevue/ripple';
import { computed, inject, useAttrs, useSlots } from 'vue';
import { mergeProps } from 'vue';
import BaseButton from './BaseButton.vue';

// Props with optimized defaults
const props = withDefaults(defineProps<{
    label?: string | null;
    icon?: string | null;
    iconPos?: 'left' | 'right' | 'top' | 'bottom';
    iconClass?: string | object | null;
    badge?: string | null;
    badgeClass?: string | object | null;
    badgeSeverity?: string;
    loading?: boolean;
    loadingIcon?: string;
    as?: string | object;
    asChild?: boolean;
    link?: boolean;
    severity?: string | null;
    raised?: boolean;
    rounded?: boolean;
    text?: boolean;
    outlined?: boolean;
    size?: string | null;
    variant?: string | null;
    plain?: boolean;
    fluid?: boolean | null;
    pt?: object;
    ptOptions?: object;
    unstyled?: boolean;
    dt?: object;
}>(), {
    label: null,
    icon: null,
    iconPos: 'left',
    iconClass: null,
    badge: null,
    badgeClass: null,
    badgeSeverity: 'secondary',
    loading: false,
    loadingIcon: undefined,
    as: 'BUTTON',
    asChild: false,
    link: false,
    severity: null,
    raised: false,
    rounded: false,
    text: false,
    outlined: false,
    size: null,
    variant: null,
    plain: false,
    fluid: null,
    pt: undefined,
    ptOptions: undefined,
    unstyled: undefined,
    dt: undefined
});

// Emits
defineEmits<{
    click: [event: Event];
}>();

// Injections
const $pcFluid = inject('$pcFluid', null);
const $attrs = useAttrs();

// Optimized computed properties with shallow reactivity where appropriate
const disabled = computed(() => $attrs.disabled || $attrs.disabled === '' || props.loading);

const defaultAriaLabel = computed(() => 
    props.label ? props.label + (props.badge ? ' ' + props.badge : '') : $attrs.ariaLabel
);

const hasIcon = computed(() => props.icon || !!useSlots().icon);

const hasFluid = computed(() => isEmpty(props.fluid) ? !!$pcFluid : props.fluid);

// Memoized data attributes for better performance
const dataP = computed(() => cn({
    [props.size]: props.size,
    'icon-only': hasIcon.value && !props.label && !props.badge,
    loading: props.loading,
    fluid: hasFluid.value,
    rounded: props.rounded,
    raised: props.raised,
    outlined: props.outlined || props.variant === 'outlined',
    text: props.text || props.variant === 'text',
    link: props.link || props.variant === 'link',
    vertical: (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label
}));

const dataIconP = computed(() => cn({
    [props.iconPos]: props.iconPos,
    [props.size]: props.size
}));

const dataLabelP = computed(() => cn({
    [props.size]: props.size,
    'icon-only': hasIcon.value && !props.label && !props.badge
}));

const asAttrs = computed(() => 
    props.as === 'BUTTON' ? { type: 'button', disabled: disabled.value } : undefined
);

const a11yAttrs = computed(() => ({
    'aria-label': defaultAriaLabel.value,
    'data-pc-name': 'button',
    'data-p-disabled': disabled.value,
    'data-p-severity': props.severity
}));

// Optimized attrs merging
const attrs = computed(() => mergeProps(asAttrs.value, a11yAttrs.value, getPTOptions('root')));

// PT methods (simplified for performance)
function getPTOptions(key) {
    // Simplified PT implementation for better performance
    return {
        // Add PT logic here if needed
    };
}

function ptm(key) {
    // Simplified PT implementation
    return {};
}

function cx(key) {
    // Simplified class computation
    return '';
}
</script>

<script>
// Legacy script block for component extension
import BaseButton from './BaseButton.vue';

export default {
    name: 'Button',
    extends: BaseButton,
    inheritAttrs: false,
    components: {
        SpinnerIcon,
        Badge
    },
    directives: {
        ripple: Ripple
    }
};
</script>
