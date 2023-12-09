import accordion from './accordion';
import avatar from './avatar';
import avatargroup from './avatargroup';
import badge from './badge';
import badgedirective from './badgedirective';
import button from './button';
import calendar from './calendar';
import card from './card';
import checkbox from './checkbox';
import dialog from './dialog';
import dropdown from './dropdown';
import fieldset from './fieldset';
import global from './global';
import inputnumber from './inputnumber';
import inputswitch from './inputswitch';
import inputtext from './inputtext';
import panel from './panel';
import ripple from './ripple';
import selectbutton from './selectbutton';
import slider from './slider';
import tabview from './tabview';
import tag from './tag';
import tooltip from './tooltip';

export default {
    global,
    directives: {
        badge: badgedirective,
        ripple,
        tooltip
    },

    //forms
    dropdown,
    inputnumber,
    inputtext,
    calendar,
    checkbox,
    inputswitch,
    slider,

    //buttons
    button,
    selectbutton,

    //panels
    accordion,
    panel,
    fieldset,
    card,
    tabview,

    //overlays
    dialog,

    //misc
    badge,
    avatar,
    avatargroup,
    tag
};
