import { style } from '@peacepieceuix-compatibility/styles/inputtext';
import BaseStyle from '@peacepiece-compatibility/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-inputtext p-component',
        {
            'p-filled': instance.$filled,
            'p-inputtext-sm p-inputfield-sm': props.size === 'small',
            'p-inputtext-lg p-inputfield-lg': props.size === 'large',
            'p-invalid': instance.$invalid,
            'p-variant-filled': instance.$variant === 'filled',
            'p-inputtext-fluid': instance.$fluid
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputtext',
    style,
    classes
});
