var capacitorGalleryVideoPickerPlugin = (function (exports, core) {
    'use strict';

    exports.PickerVideoType = void 0;
    (function (PickerVideoType) {
        PickerVideoType[PickerVideoType["CAMERA"] = 0] = "CAMERA";
        PickerVideoType[PickerVideoType["GALLERY"] = 1] = "GALLERY";
    })(exports.PickerVideoType || (exports.PickerVideoType = {}));

    const GalleryVideoPickerPlugin = core.registerPlugin('GalleryVideoPickerPlugin', {
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
    }
    // const GalleryVideoPicker = new GalleryVideoPickerPluginWeb();
    //
    // export { GalleryVideoPicker };
    //
    // import { registerWebPlugin } from '@capacitor/core';
    // registerWebPlugin(GalleryVideoPicker);

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GalleryVideoPickerPluginWeb: GalleryVideoPickerPluginWeb
    });

    exports.GalleryVideoPickerPlugin = GalleryVideoPickerPlugin;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
