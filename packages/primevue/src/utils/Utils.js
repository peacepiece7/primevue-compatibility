import { $dt } from '@peacepieceuix-compatibility/styled';
import * as utils from '@peacepieceuix-compatibility/utils';

export function blockBodyScroll() {
    utils.blockBodyScroll({ variableName: $dt('scrollbar.width').name });
}

export function unblockBodyScroll() {
    utils.unblockBodyScroll({ variableName: $dt('scrollbar.width').name });
}
