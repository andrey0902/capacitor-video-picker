import {
  WebPlugin,
} from '@capacitor/core';

import type {
  GalleryVideoPickerPlugin,
  PickerVideoOptions,
  PickerVideoPermissions,
  PickerVideoResults,
} from './definitions';

export class GalleryVideoPickerPluginWeb extends WebPlugin implements GalleryVideoPickerPlugin {
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

  async GalleryVideoPicker(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const GalleryVideoPicker = new GalleryVideoPickerPluginWeb();
//
export { GalleryVideoPicker };

// export const GalleryVideoPicker = registerPlugin('GalleryVideoPicker', { web: () => new GalleryVideoPickerPluginWeb() })

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(GalleryVideoPicker);
