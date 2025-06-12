import { useId } from 'vue';

export function useAttrSelector(prefix = 'data-pc') {
    const idx = useId();

    return `${prefix}${idx.replace('v-', '').replaceAll('-', '_')}`;
}
