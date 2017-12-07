import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Current Campaigns',
        icon: 'glyphicon-star',
        route: 'authenticated/campaigns',
        submenu: null
    },
    {
        text: 'Inventory Searcher',
        icon: 'glyphicon-search',
        route: 'authenticated/search',
        submenu: null
    },
    {
        text: 'Current Recalls',
        icon: 'glyphicon-warning-sign',
        route: 'authenticated/recall',
        submenu: null
    },
    {
        text: 'Alerts',
        icon: 'glyphicon-flash',
        route: 'authenticated/alerts',
        submenu: null
    },
];
