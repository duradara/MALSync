import SettingsGroup from './settings-group.vue';
import SettingsHr from './settings-hr.vue';
import { image } from './settings-structure-tracking';
import { ConfObj } from '../../../_provider/definitions';
import { theming } from './settings-structure-theming';
import { etc } from './settings-structure-etc';

export const structure: ConfObj[] = [
  {
    key: 'image',
    title: () => api.storage.lang('settings_tracking'),
    props: {
      icon: 'visibility',
    },
    component: SettingsGroup,
    children: image,
  },
  {
    key: 'theming',
    title: () => api.storage.lang('settings_theming'),
    props: {
      icon: 'palette',
    },
    component: SettingsGroup,
    children: theming,
  },
  {
    key: 'streaming',
    title: () => api.storage.lang('settings_StreamingSite'),
    props: {
      icon: 'rss_feed',
    },
    component: SettingsGroup,
    children: [],
  },
  {
    key: 'videoPlayerSection',
    title: () => api.storage.lang('settings_Video_Player'),
    props: {
      icon: 'play_circle_filled',
    },
    component: SettingsGroup,
    children: [],
  },
  {
    key: 'notifiactionSection',
    title: () => api.storage.lang('settings_Notifications'),
    props: {
      icon: 'notifications',
    },
    component: SettingsGroup,
    children: [],
  },
  {
    key: 'miscellaneous',
    title: () => api.storage.lang('settings_miscellaneous'),
    props: {
      icon: 'code',
    },
    component: SettingsGroup,
    children: etc,
  },
  {
    key: 'hr',
    title: '',
    component: SettingsHr,
  },
  {
    key: 'support',
    title: () => api.storage.lang('settings_help'),
    props: {
      icon: 'help',
      href: '123',
    },
    component: SettingsGroup,
  },
];
