import type { DefaultPassThrough, PassThrough } from '@primevue/core';
import type { PrimeVueCSPOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions } from '@peacepiece-compatibility/core/config';
import type { AccordionPassThroughOptions } from 'peacepiece-primevue/accordion';
import type { AccordionContentPassThroughOptions } from 'peacepiece-primevue/accordioncontent';
import type { AccordionHeaderPassThroughOptions } from 'peacepiece-primevue/accordionheader';
import type { AccordionPanelPassThroughOptions } from 'peacepiece-primevue/accordionpanel';
import type { AccordionTabPassThroughOptions } from 'peacepiece-primevue/accordiontab';
import type { AnimateOnScrollDirectivePassThroughOptions } from 'peacepiece-primevue/animateonscroll';
import type { AutoCompletePassThroughOptions } from 'peacepiece-primevue/autocomplete';
import type { AvatarPassThroughOptions } from 'peacepiece-primevue/avatar';
import type { AvatarGroupPassThroughOptions } from 'peacepiece-primevue/avatargroup';
import type { BadgePassThroughOptions } from 'peacepiece-primevue/badge';
import type { BadgeDirectivePassThroughOptions } from 'peacepiece-primevue/badgedirective';
import type { BlockUIPassThroughOptions } from 'peacepiece-primevue/blockui';
import type { BreadcrumbPassThroughOptions } from 'peacepiece-primevue/breadcrumb';
import type { ButtonPassThroughOptions } from 'peacepiece-primevue/button';
import type { ButtonGroupPassThroughOptions } from 'peacepiece-primevue/buttongroup';
import type { CalendarPassThroughOptions } from 'peacepiece-primevue/calendar';
import type { CardPassThroughOptions } from 'peacepiece-primevue/card';
import type { CarouselPassThroughOptions } from 'peacepiece-primevue/carousel';
import type { CascadeSelectPassThroughOptions } from 'peacepiece-primevue/cascadeselect';
import type { ChartPassThroughOptions } from 'peacepiece-primevue/chart';
import type { CheckboxPassThroughOptions } from 'peacepiece-primevue/checkbox';
import type { CheckboxGroupPassThroughOptions } from 'peacepiece-primevue/checkboxgroup';
import type { ChipPassThroughOptions } from 'peacepiece-primevue/chip';
import type { ChipsPassThroughOptions } from 'peacepiece-primevue/chips';
import type { ColorPickerPassThroughOptions } from 'peacepiece-primevue/colorpicker';
import type { ColumnPassThroughOptions } from 'peacepiece-primevue/column';
import type { ColumnGroupPassThroughOptions } from 'peacepiece-primevue/columngroup';
import type { ConfirmDialogPassThroughOptions } from 'peacepiece-primevue/confirmdialog';
import type { ConfirmPopupPassThroughOptions } from 'peacepiece-primevue/confirmpopup';
import type { ContextMenuPassThroughOptions } from 'peacepiece-primevue/contextmenu';
import type { DataTablePassThroughOptions } from 'peacepiece-primevue/datatable';
import type { DataViewPassThroughOptions } from 'peacepiece-primevue/dataview';
import type { DatePickerPassThroughOptions } from 'peacepiece-primevue/datepicker';
import type { DeferredContentPassThroughOptions } from 'peacepiece-primevue/deferredcontent';
import type { DialogPassThroughOptions } from 'peacepiece-primevue/dialog';
import type { DividerPassThroughOptions } from 'peacepiece-primevue/divider';
import type { DockPassThroughOptions } from 'peacepiece-primevue/dock';
import type { DrawerPassThroughOptions } from 'peacepiece-primevue/drawer';
import type { DropdownPassThroughOptions } from 'peacepiece-primevue/dropdown';
import type { EditorPassThroughOptions } from 'peacepiece-primevue/editor';
import type { FieldsetPassThroughOptions } from 'peacepiece-primevue/fieldset';
import type { FileUploadPassThroughOptions } from 'peacepiece-primevue/fileupload';
import type { FloatLabelPassThroughOptions } from 'peacepiece-primevue/floatlabel';
import type { FluidPassThroughOptions } from 'peacepiece-primevue/fluid';
import type { FocusTrapDirectivePassThroughOptions } from 'peacepiece-primevue/focustrap';
import type { GalleriaPassThroughOptions } from 'peacepiece-primevue/galleria';
import type { IconFieldPassThroughOptions } from 'peacepiece-primevue/iconfield';
import type { IftaLabelPassThroughOptions } from 'peacepiece-primevue/iftalabel';
import type { ImagePassThroughOptions } from 'peacepiece-primevue/image';
import type { ImageComparePassThroughOptions } from 'peacepiece-primevue/imagecompare';
import type { InlineMessagePassThroughOptions } from 'peacepiece-primevue/inlinemessage';
import type { InplacePassThroughOptions } from 'peacepiece-primevue/inplace';
import type { InputChipsPassThroughOptions } from 'peacepiece-primevue/inputchips';
import type { InputGroupPassThroughOptions } from 'peacepiece-primevue/inputgroup';
import type { InputGroupAddonPassThroughOptions } from 'peacepiece-primevue/inputgroupaddon';
import type { InputIconPassThroughOptions } from 'peacepiece-primevue/inputicon';
import type { InputMaskPassThroughOptions } from 'peacepiece-primevue/inputmask';
import type { InputNumberPassThroughOptions } from 'peacepiece-primevue/inputnumber';
import type { InputOtpPassThroughOptions } from 'peacepiece-primevue/inputotp';
import type { InputSwitchPassThroughOptions } from 'peacepiece-primevue/inputswitch';
import type { InputTextPassThroughOptions } from 'peacepiece-primevue/inputtext';
import type { KeyFilterDirectivePassThroughOptions } from 'peacepiece-primevue/keyfilter';
import type { KnobPassThroughOptions } from 'peacepiece-primevue/knob';
import type { ListboxPassThroughOptions } from 'peacepiece-primevue/listbox';
import type { MegaMenuPassThroughOptions } from 'peacepiece-primevue/megamenu';
import type { MenuPassThroughOptions } from 'peacepiece-primevue/menu';
import type { MenubarPassThroughOptions } from 'peacepiece-primevue/menubar';
import type { MessagePassThroughOptions } from 'peacepiece-primevue/message';
import type { MeterGroupPassThroughOptions } from 'peacepiece-primevue/metergroup';
import type { MultiSelectPassThroughOptions } from 'peacepiece-primevue/multiselect';
import type { OrderListPassThroughOptions } from 'peacepiece-primevue/orderlist';
import type { OrganizationChartPassThroughOptions } from 'peacepiece-primevue/organizationchart';
import type { OverlayBadgePassThroughOptions } from 'peacepiece-primevue/overlaybadge';
import type { OverlayPanelPassThroughOptions } from 'peacepiece-primevue/overlaypanel';
import type { PaginatorPassThroughOptions } from 'peacepiece-primevue/paginator';
import type { PanelPassThroughOptions } from 'peacepiece-primevue/panel';
import type { PanelMenuPassThroughOptions } from 'peacepiece-primevue/panelmenu';
import type { PassThroughOptions } from 'peacepiece-primevue/passthrough';
import type { PasswordPassThroughOptions } from 'peacepiece-primevue/password';
import type { PickListPassThroughOptions } from 'peacepiece-primevue/picklist';
import type { PopoverPassThroughOptions } from 'peacepiece-primevue/popover';
import type { ProgressBarPassThroughOptions } from 'peacepiece-primevue/progressbar';
import type { ProgressSpinnerPassThroughOptions } from 'peacepiece-primevue/progressspinner';
import type { RadioButtonPassThroughOptions } from 'peacepiece-primevue/radiobutton';
import type { RadioButtonGroupPassThroughOptions } from 'peacepiece-primevue/radiobuttongroup';
import type { RatingPassThroughOptions } from 'peacepiece-primevue/rating';
import type { RippleDirectivePassThroughOptions } from 'peacepiece-primevue/ripple';
import type { RowPassThroughOptions } from 'peacepiece-primevue/row';
import type { ScrollPanelPassThroughOptions } from 'peacepiece-primevue/scrollpanel';
import type { ScrollTopPassThroughOptions } from 'peacepiece-primevue/scrolltop';
import type { SelectPassThroughOptions } from 'peacepiece-primevue/select';
import type { SelectButtonPassThroughOptions } from 'peacepiece-primevue/selectbutton';
import type { SidebarPassThroughOptions } from 'peacepiece-primevue/sidebar';
import type { SkeletonPassThroughOptions } from 'peacepiece-primevue/skeleton';
import type { SliderPassThroughOptions } from 'peacepiece-primevue/slider';
import type { SpeedDialPassThroughOptions } from 'peacepiece-primevue/speeddial';
import type { SplitButtonPassThroughOptions } from 'peacepiece-primevue/splitbutton';
import type { SplitterPassThroughOptions } from 'peacepiece-primevue/splitter';
import type { SplitterPanelPassThroughOptions } from 'peacepiece-primevue/splitterpanel';
import type { StepPassThroughOptions } from 'peacepiece-primevue/step';
import type { StepItemPassThroughOptions } from 'peacepiece-primevue/stepitem';
import type { StepListPassThroughOptions } from 'peacepiece-primevue/steplist';
import type { StepPanelPassThroughOptions } from 'peacepiece-primevue/steppanel';
import type { StepPanelsPassThroughOptions } from 'peacepiece-primevue/steppanels';
import type { StepperPassThroughOptions } from 'peacepiece-primevue/stepper';
import type { StepsPassThroughOptions } from 'peacepiece-primevue/steps';
import type { StyleClassDirectivePassThroughOptions } from 'peacepiece-primevue/styleclass';
import type { TabPassThroughOptions } from 'peacepiece-primevue/tab';
import type { TabListPassThroughOptions } from 'peacepiece-primevue/tablist';
import type { TabMenuPassThroughOptions } from 'peacepiece-primevue/tabmenu';
import type { TabPanelPassThroughOptions } from 'peacepiece-primevue/tabpanel';
import type { TabPanelsPassThroughOptions } from 'peacepiece-primevue/tabpanels';
import type { TabsPassThroughOptions } from 'peacepiece-primevue/tabs';
import type { TabViewPassThroughOptions } from 'peacepiece-primevue/tabview';
import type { TagPassThroughOptions } from 'peacepiece-primevue/tag';
import type { TerminalPassThroughOptions } from 'peacepiece-primevue/terminal';
import type { TextareaPassThroughOptions } from 'peacepiece-primevue/textarea';
import type { TieredMenuPassThroughOptions } from 'peacepiece-primevue/tieredmenu';
import type { TimelinePassThroughOptions } from 'peacepiece-primevue/timeline';
import type { ToastPassThroughOptions } from 'peacepiece-primevue/toast';
import type { ToggleButtonPassThroughOptions } from 'peacepiece-primevue/togglebutton';
import type { ToggleSwitchPassThroughOptions } from 'peacepiece-primevue/toggleswitch';
import type { ToolbarPassThroughOptions } from 'peacepiece-primevue/toolbar';
import type { TooltipDirectivePassThroughOptions } from 'peacepiece-primevue/tooltip';
import type { TreePassThroughOptions } from 'peacepiece-primevue/tree';
import type { TreeSelectPassThroughOptions } from 'peacepiece-primevue/treeselect';
import type { TreeTablePassThroughOptions } from 'peacepiece-primevue/treetable';
import type { VirtualScrollerPassThroughOptions } from 'peacepiece-primevue/virtualscroller';

export * from '@peacepiece-compatibility/core/config';
export { default } from '@peacepiece-compatibility/core/config';

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
