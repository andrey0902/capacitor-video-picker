import { registerPlugin } from '@capacitor/core';
const GalleryVideoPickerPlugin = registerPlugin('GalleryVideoPickerPlugin', {
    web: () => import('./web').then(m => new m.GalleryVideoPickerPluginWeb()),
});
export * from './definitions';
export { GalleryVideoPickerPlugin };
//# sourceMappingURL=index.js.map