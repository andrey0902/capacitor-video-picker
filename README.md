# gallery-video-picker

This plugin is used to get video from gallery

## Install

```bash
npm install gallery-video-picker
npx cap sync
```

## API

<docgen-index>

* [`getVideoFromGallery(...)`](#getvideofromgallery)
* [`getPermissions(...)`](#getpermissions)
* [`openSettings()`](#opensettings)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getVideoFromGallery(...)

```typescript
getVideoFromGallery(options: PickerVideoOptions) => Promise<PickerVideoResults>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#pickervideooptions">PickerVideoOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#pickervideoresults">PickerVideoResults</a>&gt;</code>

--------------------


### getPermissions(...)

```typescript
getPermissions(options: PickerVideoPermissions) => Promise<any>
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#pickervideopermissions">PickerVideoPermissions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### openSettings()

```typescript
openSettings() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### Interfaces


#### PickerVideoResults

| Prop           | Type                |
| -------------- | ------------------- |
| **`name`**     | <code>string</code> |
| **`size`**     | <code>number</code> |
| **`duration`** | <code>number</code> |
| **`path`**     | <code>string</code> |
| **`type`**     | <code>string</code> |


#### PickerVideoOptions

| Prop            | Type                                                        |
| --------------- | ----------------------------------------------------------- |
| **`sizeLimit`** | <code>number</code>                                         |
| **`source`**    | <code><a href="#pickervideotype">PickerVideoType</a></code> |
| **`duration`**  | <code>number</code>                                         |
| **`quality`**   | <code>number</code>                                         |


#### PickerVideoPermissions

| Prop                 | Type                                                        |
| -------------------- | ----------------------------------------------------------- |
| **`permissionType`** | <code><a href="#pickervideotype">PickerVideoType</a></code> |


### Enums


#### PickerVideoType

| Members       |
| ------------- |
| **`CAMERA`**  |
| **`GALLERY`** |

</docgen-api>
