<template>
    <component 
        v-if="!asChild" 
        :is="as" 
        v-ripple 
        :class="cx('root')" 
        :data-p="dataP" 
        v-bind="attrs"
        @click="$emit('click', $event)"
    >
        <slot>
            <!-- Loading state with optimized rendering -->
            <template v-if="loading">
                <slot name="loadingicon" :class="loadingIconClasses" v-bind="ptm('loadingIcon')">
                    <span v-if="loadingIcon" :class="loadingIconClasses" v-bind="ptm('loadingIcon')" />
                    <SpinnerIcon v-else :class="loadingIconClasses" spin v-bind="ptm('loadingIcon')" />
                </slot>
            </template>
            
            <!-- Icon slot with memoized classes -->
            <template v-else>
                <slot name="icon" :class="iconClasses" v-bind="ptm('icon')">
                    <span 
                        v-if="icon" 
                        :class="iconClasses" 
                        :data-p="dataIconP" 
                        v-bind="ptm('icon')"
                    />
                </slot>
            </template>
            
            <!-- Label with optimized rendering -->
            <span 
                v-if="label" 
                :class="cx('label')" 
                :data-p="dataLabelP" 
                v-bind="ptm('label')"
            >
                {{ label }}
            </span>
            
            <!-- Badge with conditional rendering -->
            <Badge 
                v-if="badge" 
                :value="badge" 
                :class="badgeClass" 
                :severity="badgeSeverity" 
                :unstyled="unstyled" 
                :pt="ptm('pcBadge')"
            />
        </slot>
    </component>
    
    <!-- AsChild rendering -->
    <slot v-else :class="cx('root')" :a11yAttrs="a11yAttrs" />
</template>

<script setup>
import { cn } from '@primeuix/utils';
import { isEmpty } from '@primeuix/utils/object';
import SpinnerIcon from '@primevue/icons/spinner';
import Badge from 'primevue/badge';
import Ripple from 'primevue/ripple';
import { computed, inject, useAttrs } from 'vue';
import { mergeProps } from 'vue';

// Props with TypeScript and optimized defaults
interface ButtonProps {
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
}

const props = withDefaults(defineProps<ButtonProps>(), {
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

// Emits with TypeScript
defineEmits<{
    click: [event: Event];
}>();

// Injections
const $pcFluid = inject('$pcFluid', null);
const $attrs = useAttrs();

// Optimized computed properties
const disabled = computed(() => 
    $attrs.disabled || $attrs.disabled === '' || props.loading
);

const defaultAriaLabel = computed(() => {
    if (props.label) {
        return props.label + (props.badge ? ' ' + props.badge : '');
    }
    return $attrs.ariaLabel;
});

const hasIcon = computed(() => Boolean(props.icon));

const hasFluid = computed(() => 
    isEmpty(props.fluid) ? Boolean($pcFluid) : Boolean(props.fluid)
);

// Memoized class computations for better performance
const loadingIconClasses = computed(() => [
    cx('loadingIcon'), 
    cx('icon')
]);

const iconClasses = computed(() => [
    cx('icon'), 
    props.icon, 
    props.iconClass
].filter(Boolean));

// Optimized data attributes with minimal reactivity
const dataP = computed(() => {
    const classes = {};
    
    if (props.size) classes[props.size] = true;
    if (hasIcon.value && !props.label && !props.badge) classes['icon-only'] = true;
    if (props.loading) classes.loading = true;
    if (hasFluid.value) classes.fluid = true;
    if (props.rounded) classes.rounded = true;
    if (props.raised) classes.raised = true;
    if (props.outlined || props.variant === 'outlined') classes.outlined = true;
    if (props.text || props.variant === 'text') classes.text = true;
    if (props.link || props.variant === 'link') classes.link = true;
    if ((props.iconPos === 'top' || props.iconPos === 'bottom') && props.label) {
        classes.vertical = true;
    }
    
    return cn(classes);
});

const dataIconP = computed(() => cn({
    [props.iconPos]: props.iconPos,
    [props.size]: props.size
}));

const dataLabelP = computed(() => cn({
    [props.size]: props.size,
    'icon-only': hasIcon.value && !props.label && !props.badge
}));

const asAttrs = computed(() => {
    if (props.as === 'BUTTON') {
        return { 
            type: 'button', 
            disabled: disabled.value 
        };
    }
    return undefined;
});

const a11yAttrs = computed(() => ({
    'aria-label': defaultAriaLabel.value,
    'data-pc-name': 'button',
    'data-p-disabled': disabled.value,
    'data-p-severity': props.severity
}));

// Optimized attrs merging with minimal overhead
const attrs = computed(() => {
    const baseAttrs = asAttrs.value || {};
    const accessibilityAttrs = a11yAttrs.value;
    const ptAttrs = getPTOptions('root');
    
    return mergeProps(baseAttrs, accessibilityAttrs, ptAttrs);
});

// Simplified PT methods for better performance
function getPTOptions(key) {
    // Simplified PT implementation - integrate with actual PT system
    return props.pt?.[key] || {};
}

function ptm(key) {
    // Simplified PT method implementation
    return props.pt?.[key] || {};
}

function cx(key) {
    // Simplified class method - integrate with actual styling system
    return `p-button-${key}`;
}
</script>

<script>
// Component definition for compatibility
export default {
    name: 'ButtonOptimized',
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

<style scoped>
/* Scoped styles for better performance */
.p-button-root {
    /* Add optimized button styles */
}
</style>