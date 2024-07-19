import accordion from './accordion';
import accordioncontent from './accordioncontent';
import accordionheader from './accordionheader';
import accordionpanel from './accordionpanel';
import autocomplete from './autocomplete';
import avatar from './avatar';
import avatargroup from './avatargroup';
import badge from './badge';
import badgedirective from './badgedirective';
import blockui from './blockui';
import breadcrumb from './breadcrumb';
import button from './button';
import buttongroup from './buttongroup';
import card from './card';
import carousel from './carousel';
import cascadeselect from './cascadeselect';
import checkbox from './checkbox';
import chip from './chip';
import colorpicker from './colorpicker';
import confirmdialog from './confirmdialog';
import confirmpopup from './confirmpopup';
import contextmenu from './contextmenu';
import datatable from './datatable';
import dataview from './dataview';
import datepicker from './datepicker';
import deferred from './deferred';
import dialog from './dialog';
import divider from './divider';
import dock from './dock';
import drawer from './drawer';
import fieldset from './fieldset';
import fileupload from './fileupload';
import floatlabel from './floatlabel';
import galleria from './galleria';
import global from './global';
import iconfield from './iconfield';
import image from './image';
import inplace from './inplace';
import inputgroup from './inputgroup';
import inputgroupaddon from './inputgroupaddon';
import inputmask from './inputmask';
import inputnumber from './inputnumber';
import inputotp from './inputotp';
import inputtext from './inputtext';
import knob from './knob';
import listbox from './listbox';
import megamenu from './megamenu';
import menu from './menu';
import menubar from './menubar';
import message from './message';
import metergroup from './metergroup';
import multiselect from './multiselect';
import orderlist from './orderlist';
import organizationchart from './organizationchart';
import overlaybadge from './overlaybadge';
import paginator from './paginator';
import panel from './panel';
import panelmenu from './panelmenu';
import password from './password';
import picklist from './picklist';
import popover from './popover';
import progressbar from './progressbar';
import progressspinner from './progressspinner';
import radiobutton from './radiobutton';
import rating from './rating';
import ripple from './ripple';
import scrollpanel from './scrollpanel';
import scrolltop from './scrolltop';
import select from './select';
import selectbutton from './selectbutton';
import skeleton from './skeleton';
import slider from './slider';
import speeddial from './speeddial';
import splitbutton from './splitbutton';
import splitter from './splitter';
import splitterpanel from './splitterpanel';
import step from './step';
import stepitem from './stepitem';
import steplist from './steplist';
import steppanels from './steppanels';
import stepper from './stepper';
import steps from './steps';
import tab from './tab';
import tablist from './tablist';
import tabmenu from './tabmenu';
import tabpanel from './tabpanel';
import tabpanels from './tabpanels';
import tabs from './tabs';
import tabview from './tabview';
import tag from './tag';
import terminal from './terminal';
import textarea from './textarea';
import tieredmenu from './tieredmenu';
import timeline from './timeline';
import toast from './toast';
import togglebutton from './togglebutton';
import toggleswitch from './toggleswitch';
import toolbar from './toolbar';
import tooltip from './tooltip';
import tree from './tree';
import treeselect from './treeselect';
import treetable from './treetable';

export default {
    global,
    directives: {
        badge: badgedirective,
        ripple,
        tooltip
    },

    //forms
    autocomplete,
    select,
    dropdown: select,
    inputnumber,
    inputtext,
    datepicker,
    calendar: datepicker,
    checkbox,
    radiobutton,
    toggleswitch,
    inputswitch: toggleswitch,
    selectbutton,
    slider,
    rating,
    multiselect,
    togglebutton,
    cascadeselect,
    listbox,
    colorpicker,
    inputgroup,
    inputgroupaddon,
    inputmask,
    knob,
    treeselect,
    textarea,
    password,
    iconfield,
    floatlabel,
    inputotp,

    //buttons
    button,
    buttongroup,
    splitbutton,
    speeddial,

    //data
    paginator,
    datatable,
    tree,
    dataview,
    organizationchart,
    orderlist,
    picklist,
    treetable,
    timeline,

    //panels
    accordion,
    accordionpanel,
    accordionheader,
    accordioncontent,
    panel,
    fieldset,
    card,
    tabview,
    divider,
    toolbar,
    scrollpanel,
    splitter,
    splitterpanel,
    stepper,
    steplist,
    step,
    stepitem,
    steppanels,
    deferred,
    tab,
    tabs,
    tablist,
    tabpanels,
    tabpanel,

    //file
    fileupload,

    //menu
    contextmenu,
    menu,
    menubar,
    steps,
    tieredmenu,
    breadcrumb,
    panelmenu,
    megamenu,
    dock,
    tabmenu,

    //overlays
    dialog,
    popover,
    sidebar: popover,
    drawer,
    overlaypanel: drawer,
    confirmpopup,
    confirmdialog,

    //messages
    message,
    toast,

    //media
    carousel,
    galleria,
    image,

    //misc
    badge,
    overlaybadge,
    avatar,
    avatargroup,
    tag,
    chip,
    progressbar,
    skeleton,
    scrolltop,
    terminal,
    blockui,
    metergroup,
    inplace,
    progressspinner
};
