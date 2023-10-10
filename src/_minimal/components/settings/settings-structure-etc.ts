import { ConfObj } from '../../../_provider/definitions';
import SettingsGeneral from './settings-general.vue';
import SettingsGroup from './settings-group.vue';
import SettingsClearTags from './settings-clear-tags.vue';

export const etc: ConfObj[] = [
  {
    key: 'forceEn',
    title: 'Force English',
    props: {
      component: 'checkbox',
      option: 'forceEn',
    },
    component: SettingsGeneral,
  },
];
