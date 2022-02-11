import { registerPlugin } from '@capacitor/core';

import type { GalleryVideoPickerPlugin } from './definitions';

const GalleryVideoPicker = registerPlugin<GalleryVideoPickerPlugin>('GalleryVideoPickerPlugin', {
  web: () => import('./web').then(m => new m.GalleryVideoPickerPluginWeb()),
});

export * from './definitions';
export { GalleryVideoPicker };
