import { style } from '@peacepieceuix-compatibility/styles/popover';
import BaseStyle from '@peacepiece-compatibility/core/base/style';

const classes = {
    root: 'p-popover p-component',
    content: 'p-popover-content'
};

export default BaseStyle.extend({
    name: 'popover',
    style,
    classes
});
