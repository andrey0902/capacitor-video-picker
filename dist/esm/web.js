import { WebPlugin } from '@capacitor/core';
export class GalleryVideoPickerPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'GalleryVideoPicker',
            platforms: ['web'],
        });
    }
    async getVideoFromGallery(options) {
        console.log(options);
        return { duration: 0, name: 'Unsupported', path: 'Unsupported', size: 0, type: 'Unsupported' };
    }
    async getPermissions(options) {
        console.log(options);
        return { error: 'Unsupported' };
    }
    async openSettings() {
        return { error: 'Unsupported' };
    }
    async GalleryVideoPicker(options) {
        console.log('ECHO', options);
        return options;
    }
}
const GalleryVideoPicker = new GalleryVideoPickerPluginWeb();
export { GalleryVideoPicker };
// export const GalleryVideoPicker = registerPlugin('GalleryVideoPicker', { web: () => new GalleryVideoPickerWeb() })
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(GalleryVideoPicker);
//# sourceMappingURL=web.js.map