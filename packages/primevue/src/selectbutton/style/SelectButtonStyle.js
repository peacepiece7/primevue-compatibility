import { style } from '@peacepieceuix-compatibility/styles/selectbutton';
import BaseStyle from '@peacepiece-compatibility/core/base/style';

const classes = {
    root: ({ props, instance }) => [
        'p-selectbutton p-component',
        {
            'p-invalid': instance.$invalid, // @todo: check
            'p-selectbutton-fluid': props.fluid
        }
    ]
};

export default BaseStyle.extend({
    name: 'selectbutton',
    style,
    classes
});
