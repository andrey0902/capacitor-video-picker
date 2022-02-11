import { WebPlugin } from '@capacitor/core';

import type { GalleryVideoPickerPluginPlugin } from './definitions';

export class GalleryVideoPickerPluginWeb extends WebPlugin implements GalleryVideoPickerPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
