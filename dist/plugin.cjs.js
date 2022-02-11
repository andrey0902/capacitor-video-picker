'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

exports.PickerVideoType = void 0;
(function (PickerVideoType) {
    PickerVideoType[PickerVideoType["CAMERA"] = 0] = "CAMERA";
    PickerVideoType[PickerVideoType["GALLERY"] = 1] = "GALLERY";
})(exports.PickerVideoType || (exports.PickerVideoType = {}));

core.registerPlugin('GalleryVideoPickerPlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.GalleryVideoPickerPluginWeb()),
});

class GalleryVideoPickerPluginWeb extends core.WebPlugin {
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
// const GalleryVideoPicker = new GalleryVideoPickerPluginWeb();
// export { GalleryVideoPicker };
// export const GalleryVideoPicker = registerPlugin('GalleryVideoPicker', { web: () => new GalleryVideoPickerPluginWeb() })
// import { registerWebPlugin } from '@capacitor/core';
// registerWebPlugin(GalleryVideoPicker);

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GalleryVideoPickerPluginWeb: GalleryVideoPickerPluginWeb
});
//# sourceMappingURL=plugin.cjs.js.map
