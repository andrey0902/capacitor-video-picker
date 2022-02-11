import { WebPlugin } from '@capacitor/core';
import type { GalleryVideoPickerPlugin, PickerVideoOptions, PickerVideoPermissions, PickerVideoResults } from './definitions';
export declare class GalleryVideoPickerPluginWeb extends WebPlugin implements GalleryVideoPickerPlugin {
    constructor();
    getVideoFromGallery(options: PickerVideoOptions): Promise<PickerVideoResults>;
    getPermissions(options: PickerVideoPermissions): Promise<any>;
    openSettings(): Promise<any>;
    GalleryVideoPicker(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
