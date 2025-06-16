<template>
    <button v-ripple :class="cx('first')" type="button" v-bind="getPTOptions('first')" data-pc-group-section="pagebutton">
        <component :is="template || 'AngleDoubleLeftIcon'" :class="cx('firstIcon')" v-bind="getPTOptions('firstIcon')" />
    </button>
</template>

<script>
import BaseComponent from '@peacepiece-compatibility/core/basecomponent';
import AngleDoubleLeftIcon from '@peacepiece-compatibility/icons/angledoubleleft';
import Ripple from '@peacepiece-compatibility/primevue/ripple';

export default {
    name: 'FirstPageLink',
    hostName: 'Paginator',
    extends: BaseComponent,
    props: {
        template: {
            type: Function,
            default: null
        }
    },
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    disabled: this.$attrs.disabled
                }
            });
        }
    },
    components: {
        AngleDoubleLeftIcon: AngleDoubleLeftIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
