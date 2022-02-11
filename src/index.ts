import { registerPlugin } from '@capacitor/core';
export * from './definitions';

import type { GalleryVideoPickerPlugin } from './definitions';

export const GalleryVideoPicker = registerPlugin<GalleryVideoPickerPlugin>('GalleryVideoPicker', {
  web: () => import('./web').then(m => new m.GalleryVideoPickerPluginWeb()),
});
