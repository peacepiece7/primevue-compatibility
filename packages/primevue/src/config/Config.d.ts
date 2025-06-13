import type { DefaultPassThrough, PassThrough } from '@primevue/core';
import type { PrimeVueCSPOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions } from '@primevue/core/config';
import type { AccordionPassThroughOptions } from '@peacepiece-compatibility/primevue/accordion';
import type { AccordionContentPassThroughOptions } from '@peacepiece-compatibility/primevue/accordioncontent';
import type { AccordionHeaderPassThroughOptions } from '@peacepiece-compatibility/primevue/accordionheader';
import type { AccordionPanelPassThroughOptions } from '@peacepiece-compatibility/primevue/accordionpanel';
import type { AccordionTabPassThroughOptions } from '@peacepiece-compatibility/primevue/accordiontab';
import type { AnimateOnScrollDirectivePassThroughOptions } from '@peacepiece-compatibility/primevue/animateonscroll';
import type { AutoCompletePassThroughOptions } from '@peacepiece-compatibility/primevue/autocomplete';
import type { AvatarPassThroughOptions } from '@peacepiece-compatibility/primevue/avatar';
import type { AvatarGroupPassThroughOptions } from '@peacepiece-compatibility/primevue/avatargroup';
import type { BadgePassThroughOptions } from '@peacepiece-compatibility/primevue/badge';
import type { BadgeDirectivePassThroughOptions } from '@peacepiece-compatibility/primevue/badgedirective';
import type { BlockUIPassThroughOptions } from '@peacepiece-compatibility/primevue/blockui';
import type { BreadcrumbPassThroughOptions } from '@peacepiece-compatibility/primevue/breadcrumb';
import type { ButtonPassThroughOptions } from '@peacepiece-compatibility/primevue/button';
import type { ButtonGroupPassThroughOptions } from '@peacepiece-compatibility/primevue/buttongroup';
import type { CalendarPassThroughOptions } from '@peacepiece-compatibility/primevue/calendar';
import type { CardPassThroughOptions } from '@peacepiece-compatibility/primevue/card';
import type { CarouselPassThroughOptions } from '@peacepiece-compatibility/primevue/carousel';
import type { CascadeSelectPassThroughOptions } from '@peacepiece-compatibility/primevue/cascadeselect';
import type { ChartPassThroughOptions } from '@peacepiece-compatibility/primevue/chart';
import type { CheckboxPassThroughOptions } from '@peacepiece-compatibility/primevue/checkbox';
import type { CheckboxGroupPassThroughOptions } from '@peacepiece-compatibility/primevue/checkboxgroup';
import type { ChipPassThroughOptions } from '@peacepiece-compatibility/primevue/chip';
import type { ChipsPassThroughOptions } from '@peacepiece-compatibility/primevue/chips';
import type { ColorPickerPassThroughOptions } from '@peacepiece-compatibility/primevue/colorpicker';
import type { ColumnPassThroughOptions } from '@peacepiece-compatibility/primevue/column';
import type { ColumnGroupPassThroughOptions } from '@peacepiece-compatibility/primevue/columngroup';
import type { ConfirmDialogPassThroughOptions } from '@peacepiece-compatibility/primevue/confirmdialog';
import type { ConfirmPopupPassThroughOptions } from '@peacepiece-compatibility/primevue/confirmpopup';
import type { ContextMenuPassThroughOptions } from '@peacepiece-compatibility/primevue/contextmenu';
import type { DataTablePassThroughOptions } from '@peacepiece-compatibility/primevue/datatable';
import type { DataViewPassThroughOptions } from '@peacepiece-compatibility/primevue/dataview';
import type { DatePickerPassThroughOptions } from '@peacepiece-compatibility/primevue/datepicker';
import type { DeferredContentPassThroughOptions } from '@peacepiece-compatibility/primevue/deferredcontent';
import type { DialogPassThroughOptions } from '@peacepiece-compatibility/primevue/dialog';
import type { DividerPassThroughOptions } from '@peacepiece-compatibility/primevue/divider';
import type { DockPassThroughOptions } from '@peacepiece-compatibility/primevue/dock';
import type { DrawerPassThroughOptions } from '@peacepiece-compatibility/primevue/drawer';
import type { DropdownPassThroughOptions } from '@peacepiece-compatibility/primevue/dropdown';
import type { EditorPassThroughOptions } from '@peacepiece-compatibility/primevue/editor';
import type { FieldsetPassThroughOptions } from '@peacepiece-compatibility/primevue/fieldset';
import type { FileUploadPassThroughOptions } from '@peacepiece-compatibility/primevue/fileupload';
import type { FloatLabelPassThroughOptions } from '@peacepiece-compatibility/primevue/floatlabel';
import type { FluidPassThroughOptions } from '@peacepiece-compatibility/primevue/fluid';
import type { FocusTrapDirectivePassThroughOptions } from '@peacepiece-compatibility/primevue/focustrap';
import type { GalleriaPassThroughOptions } from '@peacepiece-compatibility/primevue/galleria';
import type { IconFieldPassThroughOptions } from '@peacepiece-compatibility/primevue/iconfield';
import type { IftaLabelPassThroughOptions } from '@peacepiece-compatibility/primevue/iftalabel';
import type { ImagePassThroughOptions } from '@peacepiece-compatibility/primevue/image';
import type { ImageComparePassThroughOptions } from '@peacepiece-compatibility/primevue/imagecompare';
import type { InlineMessagePassThroughOptions } from '@peacepiece-compatibility/primevue/inlinemessage';
import type { InplacePassThroughOptions } from '@peacepiece-compatibility/primevue/inplace';
import type { InputChipsPassThroughOptions } from '@peacepiece-compatibility/primevue/inputchips';
import type { InputGroupPassThroughOptions } from '@peacepiece-compatibility/primevue/inputgroup';
import type { InputGroupAddonPassThroughOptions } from '@peacepiece-compatibility/primevue/inputgroupaddon';
import type { InputIconPassThroughOptions } from '@peacepiece-compatibility/primevue/inputicon';
import type { InputMaskPassThroughOptions } from '@peacepiece-compatibility/primevue/inputmask';
import type { InputNumberPassThroughOptions } from '@peacepiece-compatibility/primevue/inputnumber';
import type { InputOtpPassThroughOptions } from '@peacepiece-compatibility/primevue/inputotp';
import type { InputSwitchPassThroughOptions } from '@peacepiece-compatibility/primevue/inputswitch';
import type { InputTextPassThroughOptions } from '@peacepiece-compatibility/primevue/inputtext';
import type { KeyFilterDirectivePassThroughOptions } from '@peacepiece-compatibility/primevue/keyfilter';
import type { KnobPassThroughOptions } from '@peacepiece-compatibility/primevue/knob';
import type { ListboxPassThroughOptions } from '@peacepiece-compatibility/primevue/listbox';
import type { MegaMenuPassThroughOptions } from '@peacepiece-compatibility/primevue/megamenu';
import type { MenuPassThroughOptions } from '@peacepiece-compatibility/primevue/menu';
import type { MenubarPassThroughOptions } from '@peacepiece-compatibility/primevue/menubar';
import type { MessagePassThroughOptions } from '@peacepiece-compatibility/primevue/message';
import type { MeterGroupPassThroughOptions } from '@peacepiece-compatibility/primevue/metergroup';
import type { MultiSelectPassThroughOptions } from '@peacepiece-compatibility/primevue/multiselect';
import type { OrderListPassThroughOptions } from '@peacepiece-compatibility/primevue/orderlist';
import type { OrganizationChartPassThroughOptions } from '@peacepiece-compatibility/primevue/organizationchart';
import type { OverlayBadgePassThroughOptions } from '@peacepiece-compatibility/primevue/overlaybadge';
import type { OverlayPanelPassThroughOptions } from '@peacepiece-compatibility/primevue/overlaypanel';
import type { PaginatorPassThroughOptions } from '@peacepiece-compatibility/primevue/paginator';
import type { PanelPassThroughOptions } from '@peacepiece-compatibility/primevue/panel';
import type { PanelMenuPassThroughOptions } from '@peacepiece-compatibility/primevue/panelmenu';
import type { PassThroughOptions } from '@peacepiece-compatibility/primevue/passthrough';
import type { PasswordPassThroughOptions } from '@peacepiece-compatibility/primevue/password';
import type { PickListPassThroughOptions } from '@peacepiece-compatibility/primevue/picklist';
import type { PopoverPassThroughOptions } from '@peacepiece-compatibility/primevue/popover';
import type { ProgressBarPassThroughOptions } from '@peacepiece-compatibility/primevue/progressbar';
import type { ProgressSpinnerPassThroughOptions } from '@peacepiece-compatibility/primevue/progressspinner';
import type { RadioButtonPassThroughOptions } from '@peacepiece-compatibility/primevue/radiobutton';
import type { RadioButtonGroupPassThroughOptions } from '@peacepiece-compatibility/primevue/radiobuttongroup';
import type { RatingPassThroughOptions } from '@peacepiece-compatibility/primevue/rating';
import type { RippleDirectivePassThroughOptions } from '@peacepiece-compatibility/primevue/ripple';
import type { RowPassThroughOptions } from '@peacepiece-compatibility/primevue/row';
import type { ScrollPanelPassThroughOptions } from '@peacepiece-compatibility/primevue/scrollpanel';
import type { ScrollTopPassThroughOptions } from '@peacepiece-compatibility/primevue/scrolltop';
import type { SelectPassThroughOptions } from '@peacepiece-compatibility/primevue/select';
import type { SelectButtonPassThroughOptions } from '@peacepiece-compatibility/primevue/selectbutton';
import type { SidebarPassThroughOptions } from '@peacepiece-compatibility/primevue/sidebar';
import type { SkeletonPassThroughOptions } from '@peacepiece-compatibility/primevue/skeleton';
import type { SliderPassThroughOptions } from '@peacepiece-compatibility/primevue/slider';
import type { SpeedDialPassThroughOptions } from '@peacepiece-compatibility/primevue/speeddial';
import type { SplitButtonPassThroughOptions } from '@peacepiece-compatibility/primevue/splitbutton';
import type { SplitterPassThroughOptions } from '@peacepiece-compatibility/primevue/splitter';
import type { SplitterPanelPassThroughOptions } from '@peacepiece-compatibility/primevue/splitterpanel';
import type { StepPassThroughOptions } from '@peacepiece-compatibility/primevue/step';
import type { StepItemPassThroughOptions } from '@peacepiece-compatibility/primevue/stepitem';
import type { StepListPassThroughOptions } from '@peacepiece-compatibility/primevue/steplist';
import type { StepPanelPassThroughOptions } from '@peacepiece-compatibility/primevue/steppanel';
import type { StepPanelsPassThroughOptions } from '@peacepiece-compatibility/primevue/steppanels';
import type { StepperPassThroughOptions } from '@peacepiece-compatibility/primevue/stepper';
import type { StepsPassThroughOptions } from '@peacepiece-compatibility/primevue/steps';
import type { StyleClassDirectivePassThroughOptions } from '@peacepiece-compatibility/primevue/styleclass';
import type { TabPassThroughOptions } from '@peacepiece-compatibility/primevue/tab';
import type { TabListPassThroughOptions } from '@peacepiece-compatibility/primevue/tablist';
import type { TabMenuPassThroughOptions } from '@peacepiece-compatibility/primevue/tabmenu';
import type { TabPanelPassThroughOptions } from '@peacepiece-compatibility/primevue/tabpanel';
import type { TabPanelsPassThroughOptions } from '@peacepiece-compatibility/primevue/tabpanels';
import type { TabsPassThroughOptions } from '@peacepiece-compatibility/primevue/tabs';
import type { TabViewPassThroughOptions } from '@peacepiece-compatibility/primevue/tabview';
import type { TagPassThroughOptions } from '@peacepiece-compatibility/primevue/tag';
import type { TerminalPassThroughOptions } from '@peacepiece-compatibility/primevue/terminal';
import type { TextareaPassThroughOptions } from '@peacepiece-compatibility/primevue/textarea';
import type { TieredMenuPassThroughOptions } from '@peacepiece-compatibility/primevue/tieredmenu';
import type { TimelinePassThroughOptions } from '@peacepiece-compatibility/primevue/timeline';
import type { ToastPassThroughOptions } from '@peacepiece-compatibility/primevue/toast';
import type { ToggleButtonPassThroughOptions } from '@peacepiece-compatibility/primevue/togglebutton';
import type { ToggleSwitchPassThroughOptions } from '@peacepiece-compatibility/primevue/toggleswitch';
import type { ToolbarPassThroughOptions } from '@peacepiece-compatibility/primevue/toolbar';
import type { TooltipDirectivePassThroughOptions } from '@peacepiece-compatibility/primevue/tooltip';
import type { TreePassThroughOptions } from '@peacepiece-compatibility/primevue/tree';
import type { TreeSelectPassThroughOptions } from '@peacepiece-compatibility/primevue/treeselect';
import type { TreeTablePassThroughOptions } from '@peacepiece-compatibility/primevue/treetable';
import type { VirtualScrollerPassThroughOptions } from '@peacepiece-compatibility/primevue/virtualscroller';

export * from '@primevue/core/config';
export { default } from '@primevue/core/config';

export interface PrimeVueConfiguration {
    ripple?: boolean;
    /**
     * @deprecated since v4.0. Use 'inputVariant' instead.
     */
    inputStyle?: 'filled' | 'outlined' | undefined;
    inputVariant?: 'filled' | 'outlined' | undefined;
    locale?: PrimeVueLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: PrimeVueZIndexOptions;
    theme?: any;
    unstyled?: boolean;
    pt?: PassThrough<PrimeVuePTOptions>;
    ptOptions?: PassThroughOptions;
    csp?: PrimeVueCSPOptions;
}

export interface PrimeVuePTOptions {
    accordion?: DefaultPassThrough<AccordionPassThroughOptions>;
    accordionpanel?: DefaultPassThrough<AccordionPanelPassThroughOptions>;
    accordionheader?: DefaultPassThrough<AccordionHeaderPassThroughOptions>;
    accordioncontent?: DefaultPassThrough<AccordionContentPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Accordion instead.
     */
    accordiontab?: DefaultPassThrough<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPassThrough<AutoCompletePassThroughOptions>;
    avatar?: DefaultPassThrough<AvatarPassThroughOptions>;
    avatargroup?: DefaultPassThrough<AvatarGroupPassThroughOptions>;
    badge?: DefaultPassThrough<BadgePassThroughOptions>;
    blockui?: DefaultPassThrough<BlockUIPassThroughOptions>;
    breadcrumb?: DefaultPassThrough<BreadcrumbPassThroughOptions>;
    button?: DefaultPassThrough<ButtonPassThroughOptions>;
    buttongroup?: DefaultPassThrough<ButtonGroupPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of DatePicker instead.
     */
    calendar?: DefaultPassThrough<CalendarPassThroughOptions>;
    card?: DefaultPassThrough<CardPassThroughOptions>;
    carousel?: DefaultPassThrough<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPassThrough<CascadeSelectPassThroughOptions>;
    chart?: DefaultPassThrough<ChartPassThroughOptions>;
    checkbox?: DefaultPassThrough<CheckboxPassThroughOptions>;
    checkboxgroup?: DefaultPassThrough<CheckboxGroupPassThroughOptions>;
    chip?: DefaultPassThrough<ChipPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of InputChips instead.
     */
    chips?: DefaultPassThrough<ChipsPassThroughOptions>;
    colorpicker?: DefaultPassThrough<ColorPickerPassThroughOptions>;
    column?: DefaultPassThrough<ColumnPassThroughOptions>;
    columngroup?: DefaultPassThrough<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPassThrough<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPassThrough<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPassThrough<ContextMenuPassThroughOptions>;
    datatable?: DefaultPassThrough<DataTablePassThroughOptions>;
    dataview?: DefaultPassThrough<DataViewPassThroughOptions>;
    datepicker?: DefaultPassThrough<DatePickerPassThroughOptions>;
    deferredcontent?: DefaultPassThrough<DeferredContentPassThroughOptions>;
    divider?: DefaultPassThrough<DividerPassThroughOptions>;
    dialog?: DefaultPassThrough<DialogPassThroughOptions>;
    dock?: DefaultPassThrough<DockPassThroughOptions>;
    drawer?: DefaultPassThrough<DrawerPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Select instead.
     */
    dropdown?: DefaultPassThrough<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPassThrough<DialogPassThroughOptions>;
    editor?: DefaultPassThrough<EditorPassThroughOptions>;
    fieldset?: DefaultPassThrough<FieldsetPassThroughOptions>;
    fileupload?: DefaultPassThrough<FileUploadPassThroughOptions>;
    floatlabel?: DefaultPassThrough<FloatLabelPassThroughOptions>;
    fluid?: DefaultPassThrough<FluidPassThroughOptions>;
    galleria?: DefaultPassThrough<GalleriaPassThroughOptions>;
    iconfield?: DefaultPassThrough<IconFieldPassThroughOptions>;
    iftalabel?: DefaultPassThrough<IftaLabelPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    imagecompare?: DefaultPassThrough<ImageComparePassThroughOptions>;
    inlinemessage?: DefaultPassThrough<InlineMessagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputchips?: DefaultPassThrough<InputChipsPassThroughOptions>;
    inputgroup?: DefaultPassThrough<InputGroupPassThroughOptions>;
    inputgroupaddon?: DefaultPassThrough<InputGroupAddonPassThroughOptions>;
    inputicon?: DefaultPassThrough<InputIconPassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of ToggleSwitch instead.
     */
    inputotp?: DefaultPassThrough<InputOtpPassThroughOptions>;
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    listbox?: DefaultPassThrough<ListboxPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    metergroup?: DefaultPassThrough<MeterGroupPassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    organizationchart?: DefaultPassThrough<OrganizationChartPassThroughOptions>;
    overlaybadge?: DefaultPassThrough<OverlayBadgePassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Popover instead.
     */
    overlaypanel?: DefaultPassThrough<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPassThrough<PaginatorPassThroughOptions>;
    panel?: DefaultPassThrough<PanelPassThroughOptions>;
    panelmenu?: DefaultPassThrough<PanelMenuPassThroughOptions>;
    password?: DefaultPassThrough<PasswordPassThroughOptions>;
    picklist?: DefaultPassThrough<PickListPassThroughOptions>;
    popover?: DefaultPassThrough<PopoverPassThroughOptions>;
    progressbar?: DefaultPassThrough<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPassThrough<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPassThrough<RadioButtonPassThroughOptions>;
    radiobuttongroup?: DefaultPassThrough<RadioButtonGroupPassThroughOptions>;
    rating?: DefaultPassThrough<RatingPassThroughOptions>;
    row?: DefaultPassThrough<RowPassThroughOptions>;
    scrollpanel?: DefaultPassThrough<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPassThrough<ScrollTopPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Drawer instead.
     */
    sidebar?: DefaultPassThrough<SidebarPassThroughOptions>;
    skeleton?: DefaultPassThrough<SkeletonPassThroughOptions>;
    slider?: DefaultPassThrough<SliderPassThroughOptions>;
    speeddial?: DefaultPassThrough<SpeedDialPassThroughOptions>;
    selectbutton?: DefaultPassThrough<SelectButtonPassThroughOptions>;
    select?: DefaultPassThrough<SelectPassThroughOptions>;
    splitbutton?: DefaultPassThrough<SplitButtonPassThroughOptions>;
    splitter?: DefaultPassThrough<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPassThrough<SplitterPanelPassThroughOptions>;
    step?: DefaultPassThrough<StepPassThroughOptions>;
    stepitem?: DefaultPassThrough<StepItemPassThroughOptions>;
    steplist?: DefaultPassThrough<StepListPassThroughOptions>;
    steppanel?: DefaultPassThrough<StepPanelPassThroughOptions>;
    steppanels?: DefaultPassThrough<StepPanelsPassThroughOptions>;
    stepper?: DefaultPassThrough<StepperPassThroughOptions>;
    steps?: DefaultPassThrough<StepsPassThroughOptions>;
    tabmenu?: DefaultPassThrough<TabMenuPassThroughOptions>;
    tabs?: DefaultPassThrough<TabsPassThroughOptions>;
    tablist?: DefaultPassThrough<TabListPassThroughOptions>;
    tab?: DefaultPassThrough<TabPassThroughOptions>;
    tabpanels?: DefaultPassThrough<TabPanelsPassThroughOptions>;
    tabpanel?: DefaultPassThrough<TabPanelPassThroughOptions>;
    /**
     * @deprecated since v4. Use tabs instead.
     */
    tabview?: DefaultPassThrough<TabViewPassThroughOptions>;
    tag?: DefaultPassThrough<TagPassThroughOptions>;
    terminal?: DefaultPassThrough<TerminalPassThroughOptions>;
    textarea?: DefaultPassThrough<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPassThrough<TieredMenuPassThroughOptions>;
    timeline?: DefaultPassThrough<TimelinePassThroughOptions>;
    toast?: DefaultPassThrough<ToastPassThroughOptions>;
    togglebutton?: DefaultPassThrough<ToggleButtonPassThroughOptions>;
    toggleswitch?: DefaultPassThrough<ToggleSwitchPassThroughOptions>;
    toolbar?: DefaultPassThrough<ToolbarPassThroughOptions>;
    tree?: DefaultPassThrough<TreePassThroughOptions>;
    treeselect?: DefaultPassThrough<TreeSelectPassThroughOptions>;
    treetable?: DefaultPassThrough<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPassThrough<VirtualScrollerPassThroughOptions>;
    directives?: {
        animate?: AnimateOnScrollDirectivePassThroughOptions;
        badge?: BadgeDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        keyfilter?: KeyFilterDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}
