import { registerPlugin } from '@capacitor/core';
const GalleryVideoPicker = registerPlugin('GalleryVideoPicker', {
    web: () => import('./web').then(m => new m.GalleryVideoPickerPluginWeb()),
});
export * from './definitions';
export { GalleryVideoPicker };
//# sourceMappingURL=index.js.map