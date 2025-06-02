import { uuid } from '@peacepieceuix-compatibility/utils/uuid';

/**
 * @deprecated since v4.3.0. Use `uuid` from @peacepieceuix-compatibility/utils instead.
 * @param {string} prefix
 * @return {string}
 */
export default function (prefix = 'pv_id_') {
    return uuid(prefix);
}
