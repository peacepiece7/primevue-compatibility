import BaseStyle from '@peacepiece-compatibility/core/base/style';

const classes = {
    root: ({ instance }) => ['p-splitterpanel', { 'p-splitterpanel-nested': instance.isNested }]
};

export default BaseStyle.extend({
    name: 'splitterpanel',
    classes
});
