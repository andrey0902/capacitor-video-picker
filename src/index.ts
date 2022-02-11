import { registerPlugin } from '@capacitor/core';
export * from './definitions';

export default registerPlugin<any>('GalleryVideoPicker', {
  web: () => import('./web').then(m => new m.GalleryVideoPickerPluginWeb()),
});
