export interface GalleryVideoPickerPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
