export interface GalleryVideoPickerPlugin {
  getVideoFromGallery(options: PickerVideoOptions): Promise<PickerVideoResults>;
  getPermissions(options: PickerVideoPermissions): Promise<any>;
  openSettings(): Promise<any>;
}

export enum PickerVideoType {
  CAMERA,
  GALLERY
}

export interface PickerVideoOptions {
  readonly sizeLimit?: number;
  readonly source: PickerVideoType;
  readonly duration?: number;
  readonly quality?: number;
}

export interface PickerVideoResults {
  readonly name: string;
  readonly size: number;
  readonly duration: number;
  readonly path: string;
  readonly type: string;
}

export interface PickerVideoPermissions {
  readonly permissionType: PickerVideoType;
}
