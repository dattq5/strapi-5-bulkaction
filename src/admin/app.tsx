import type { StrapiApp } from '@strapi/strapi/admin';
import {BulkEditButton} from './components/BulkEditButton/BulkEditButton';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    // console.log('.................app..............', app);
    (app as any).getPlugin('content-manager').apis.addBulkAction((actions: any[]) => {
      console.log('action----', actions);
      actions.push(BulkEditButton);
      return actions;
    });
  },
};
