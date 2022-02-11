import {
  WebPlugin,
} from '@capacitor/core';

import type {
  GalleryVideoPickerPluginPlugin,
  PickerVideoOptions,
  PickerVideoPermissions,
  PickerVideoResults,
} from './definitions';

export class GalleryVideoPickerPluginWeb extends WebPlugin implements GalleryVideoPickerPluginPlugin {
  constructor() {
    super({
      name: 'GalleryVideoPicker',
      platforms: ['web'],
    });
  }

  async getVideoFromGallery(options: PickerVideoOptions): Promise<PickerVideoResults> {
    console.log(options);
    return { duration: 0, name: 'Unsupported', path: 'Unsupported', size: 0, type: 'Unsupported' };
  }

  async getPermissions(options: PickerVideoPermissions): Promise<any> {
    console.log(options);
    return { error: 'Unsupported' };
  }

  async openSettings(): Promise<any> {
    return { error: 'Unsupported' };
  }
}

// const GalleryVideoPicker = new GalleryVideoPickerPluginWeb();
//
// export { GalleryVideoPicker };
//
// import { registerWebPlugin } from '@capacitor/core';
// registerWebPlugin(GalleryVideoPicker);
