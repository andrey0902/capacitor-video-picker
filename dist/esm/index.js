import { registerPlugin } from '@capacitor/core';
export * from './definitions';
export default registerPlugin('GalleryVideoPicker', {
    web: () => import('./web').then(m => new m.GalleryVideoPickerPluginWeb()),
});
//# sourceMappingURL=index.js.map