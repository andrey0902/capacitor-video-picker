import { registerPlugin } from '@capacitor/core';
const GalleryVideoPicker = registerPlugin('GalleryVideoPickerPlugin', {
    web: () => import('./web').then(m => new m.GalleryVideoPickerPluginWeb()),
});
export * from './definitions';
export { GalleryVideoPicker };
//# sourceMappingURL=index.js.map