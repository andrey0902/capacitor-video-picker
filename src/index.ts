import { registerPlugin } from '@capacitor/core';

import type { GalleryVideoPickerPluginPlugin } from './definitions';

const GalleryVideoPickerPlugin = registerPlugin<GalleryVideoPickerPluginPlugin>('GalleryVideoPickerPlugin', {
  web: () => import('./web').then(m => new m.GalleryVideoPickerPluginWeb()),
});

export * from './definitions';
export { GalleryVideoPickerPlugin };
