import accordion from './accordion';
import autocomplete from './autocomplete';
import avatar from './avatar';
import avatargroup from './avatargroup';
import badge from './badge';
import badgedirective from './badgedirective';
import button from './button';
import calendar from './calendar';
import card from './card';
import cascadeselect from './cascadeselect';
import checkbox from './checkbox';
import chip from './chip';
import chips from './chips';
import colorpicker from './colorpicker';
import contextmenu from './contextmenu';
import datatable from './datatable';
import dialog from './dialog';
import dropdown from './dropdown';
import fieldset from './fieldset';
import global from './global';
import inlinemessage from './inlinemessage';
import inputgroup from './inputgroup';
import inputmask from './inputmask';
import inputnumber from './inputnumber';
import inputswitch from './inputswitch';
import inputtext from './inputtext';
import knob from './knob';
import listbox from './listbox';
import menu from './menu';
import menubar from './menubar';
import message from './message';
import multiselect from './multiselect';
import overlaypanel from './overlaypanel';
import paginator from './paginator';
import panel from './panel';
import progressbar from './progressbar';
import radiobutton from './radiobutton';
import rating from './rating';
import ripple from './ripple';
import selectbutton from './selectbutton';
import sidebar from './sidebar';
import skeleton from './skeleton';
import slider from './slider';
import splitbutton from './splitbutton';
import steps from './steps';
import tabview from './tabview';
import tag from './tag';
import tieredmenu from './tieredmenu';
import toast from './toast';
import togglebutton from './togglebutton';
import tooltip from './tooltip';
import tree from './tree';

export default {
    global,
    directives: {
        badge: badgedirective,
        ripple,
        tooltip
    },

    //forms
    autocomplete,
    dropdown,
    inputnumber,
    inputtext,
    calendar,
    checkbox,
    radiobutton,
    inputswitch,
    selectbutton,
    slider,
    chips,
    rating,
    multiselect,
    togglebutton,
    cascadeselect,
    listbox,
    colorpicker,
    inputgroup,
    inputmask,
    knob,

    //buttons
    button,
    splitbutton,

    //data
    paginator,
    datatable,
    tree,

    //panels
    accordion,
    panel,
    fieldset,
    card,
    tabview,

    //menu
    contextmenu,
    menu,
    menubar,
    steps,
    tieredmenu,

    //overlays
    dialog,
    overlaypanel,
    sidebar,

    //messages
    message,
    inlinemessage,
    toast,

    //misc
    badge,
    avatar,
    avatargroup,
    tag,
    chip,
    progressbar,
    skeleton
};
