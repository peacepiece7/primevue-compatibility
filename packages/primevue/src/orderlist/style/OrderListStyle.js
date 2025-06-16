import { style } from '@peacepieceuix-compatibility/styles/orderlist';
import BaseStyle from '@peacepiece-compatibility/core/base/style';

const classes = {
    root: 'p-orderlist p-component',
    controls: 'p-orderlist-controls'
};

export default BaseStyle.extend({
    name: 'orderlist',
    style,
    classes
});
