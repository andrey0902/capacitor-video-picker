import { registerPlugin } from '@capacitor/core';
import { GalleryVideoPickerPlugin } from './definitions';

const GalleryVideoPicker = registerPlugin<GalleryVideoPickerPlugin>('GalleryVideoPicker', {
  web: () => import('./web').then((m) => new m.GalleryVideoPickerPluginWeb()),
});
export * from './definitions';
export { GalleryVideoPicker };

