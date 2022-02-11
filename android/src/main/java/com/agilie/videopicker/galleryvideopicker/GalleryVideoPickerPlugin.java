package com.agilie.videopicker;

import android.Manifest;
import android.content.ContentResolver;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.media.MediaPlayer;
import android.net.Uri;
import android.provider.DocumentsContract;
import android.provider.MediaStore;
import android.provider.Settings;
import android.util.Log;
import android.webkit.MimeTypeMap;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import java.io.File;
import java.util.concurrent.TimeUnit;

import static android.app.Activity.RESULT_OK;

@NativePlugin(
    permissions = {
        Manifest.permission.READ_EXTERNAL_STORAGE,
        Manifest.permission.CAMERA
    },
    requestCodes = {
        GalleryVideoPickerPlugin.PICK_FROM_GALLERY,
        GalleryVideoPickerPlugin.REQUEST_TAKE_GALLERY_PERMISSION,
        GalleryVideoPickerPlugin.REQUEST_TAKE_VIDEO_PERMISSION
    }
)
public class GalleryVideoPickerPlugin extends Plugin {
    public static final int REQUEST_TAKE_GALLERY_PERMISSION = 3145;
    public static final int REQUEST_TAKE_VIDEO_PERMISSION = 3146;
    public static final int PICK_FROM_GALLERY = 1213;

    public static final int CAMERA_CODE = 0;
    public static final int GALLERY_CODE = 1;

    @PluginMethod()
    public void getPermissions(PluginCall call) {
        int reqCode = call.getInt("permissionType");

        if (reqCode == CAMERA_CODE) {
            saveCall(call);
            permissionsRequest(Manifest.permission.CAMERA, GalleryVideoPicker.REQUEST_TAKE_VIDEO_PERMISSION, call);
        }

        if (reqCode == GALLERY_CODE) {
            saveCall(call);
            permissionsRequest(Manifest.permission.READ_EXTERNAL_STORAGE, GalleryVideoPicker.REQUEST_TAKE_GALLERY_PERMISSION, call);
        }
    }

    @PluginMethod
    public void getVideoFromGallery(PluginCall call) {
        int reqSizeLimit = call.getInt("sizeLimit");
        int reqSource = call.getInt("source");
        Intent intent;

        if (reqSource == CAMERA_CODE) {
            float reqQuality = call.getFloat("quality");
            int reqDuration = call.getInt("duration");
            intent = new Intent(android.provider.MediaStore.ACTION_VIDEO_CAPTURE);
            intent.putExtra("android.intent.extra.durationLimit", reqDuration);
            intent.putExtra("android.intent.extra.videoQuality", reqQuality);
            saveCall(call);
            startActivityForResult(call, intent, GalleryVideoPicker.PICK_FROM_GALLERY);
        }

        if (reqSource == GALLERY_CODE) {
            intent = new Intent(Intent.ACTION_PICK, MediaStore.Video.Media.EXTERNAL_CONTENT_URI);
            intent.putExtra(MediaStore.EXTRA_SIZE_LIMIT, reqSizeLimit);
            saveCall(call);
            startActivityForResult(call, intent, GalleryVideoPicker.PICK_FROM_GALLERY);
        }
    }

    @PluginMethod
    public void openSettings(PluginCall call) {
        Intent intent = new Intent();
        intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        Uri uri = Uri.fromParts("package", this.bridge.getActivity().getPackageName(), null);
        intent.setData(uri);
        this.bridge.getActivity().startActivity(intent);
    }

    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);

        PluginCall savedCall = getSavedCall();

        if (savedCall == null) {
            return;
        }

        if (resultCode == RESULT_OK) {
            if (requestCode == PICK_FROM_GALLERY) {
                Uri videoUri = data.getData();
                File file = new File(getRealPathFromURI_API19(this.bridge.getContext(), videoUri));


                String mimetype = getMimeType(videoUri);
                long duration = getDuration(videoUri);

                JSObject ret = new JSObject();
                int reqDuration = savedCall.getInt("duration");

                if (duration > reqDuration) {
                    savedCall.reject("File is very large");
                    return;
                }

                ret.put("path", "file://" + file.getAbsolutePath());
                ret.put("name", file.getName());
                ret.put("size", file.length());
                ret.put("type", mimetype);
                ret.put("duration", duration);

                savedCall.resolve(ret);
            }
        }
    }

    public static String getRealPathFromURI_API19(Context context, Uri uri) {
        String filePath = "";
        if (uri.getHost().contains("com.android.providers.media")) {
            // Image pick from recent
            String wholeID = DocumentsContract.getDocumentId(uri);

            // Split at colon, use second item in the array
            String id = wholeID.split(":")[1];

            String[] column = {MediaStore.Images.Media.DATA};

            // where id is equal to
            String sel = MediaStore.Images.Media._ID + "=?";

            Cursor cursor = context.getContentResolver().query(MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
                column, sel, new String[]{id}, null);

            int columnIndex = cursor.getColumnIndex(column[0]);

            if (cursor.moveToFirst()) {
                filePath = cursor.getString(columnIndex);
            }
            cursor.close();
            return filePath;
        } else {
            // image pick from gallery
            return  getRealPathFromURI_BelowAPI11(context,uri);
        }

    }

    public static String getRealPathFromURI_BelowAPI11(Context context, Uri contentUri){
        String[] proj = { MediaStore.Images.Media.DATA };
        Cursor cursor = context.getContentResolver().query(contentUri, proj, null, null, null);
        int column_index
            = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
        cursor.moveToFirst();
        return cursor.getString(column_index);
    }

    public String getMimeType(Uri uri) {
        String mimeType = null;
        if (ContentResolver.SCHEME_CONTENT.equals(uri.getScheme())) {
            ContentResolver cr = this.bridge.getActivity().getApplicationContext().getContentResolver();
            mimeType = cr.getType(uri);
        } else {
            String fileExtension = MimeTypeMap.getFileExtensionFromUrl(uri
                .toString());
            mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(
                fileExtension.toLowerCase());
        }
        return mimeType;
    }

    public long getDuration(Uri uri) {
        MediaPlayer mp = MediaPlayer.create(this.bridge.getActivity().getApplicationContext(), uri);
        int duration = mp.getDuration();
        mp.release();
        return TimeUnit.MILLISECONDS.toSeconds(duration);
    }

    @Override
    protected void handleRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.handleRequestPermissionsResult(requestCode, permissions, grantResults);

        PluginCall savedCall = getSavedCall();

        Log.d("CODE", String.valueOf(requestCode));

        if (requestCode == REQUEST_TAKE_GALLERY_PERMISSION || requestCode == REQUEST_TAKE_VIDEO_PERMISSION) {
            for(int result : grantResults) {

                if (result == PackageManager.PERMISSION_DENIED) {
                    savedCall.reject("Permission denied");
                    return;
                }
            }

            JSObject result = new JSObject();
            savedCall.success(result);
        }
    }

    private void permissionsRequest(String permission, int code, PluginCall call) {
        if (!hasPermission(permission)) {
            pluginRequestPermissions(new String[] { permission }, code);
        } else {
            JSObject result = new JSObject();
            result.put("granted", true);
            result.put("permission", permission);
            call.success(result);
        }
    }
}
