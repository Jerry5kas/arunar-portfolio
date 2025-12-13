# File Upload Troubleshooting Guide

## Current Implementation

### Frontend (React/Inertia)
- **Edit Form**: Uses manual `FormData` when files are present, `router.post` with `_method: 'PUT'`
- **Create Form**: Uses manual `FormData` when files are present, `router.post` directly
- Files are stored as `File | null` in form state
- Console logging added to track file submission

### Backend (Laravel)
- Uses `FileUploadHelper::uploadImage()` for all file operations
- Comprehensive logging in `BlogController@update`
- Handles both PUT and POST requests (POST with `_method: 'PUT'`)

## Debugging Steps

### 1. Check Browser Console
When you submit the form, check the browser console for:
```
Submitting form: {
  has_featured_image: true/false,
  has_og_image: true/false,
  featured_image_name: "filename.jpg",
  ...
}
```

### 2. Check Laravel Logs
Check `storage/logs/laravel.log` for:
```
Blog Update Request: {
  method: "POST" or "PUT",
  has_featured_image: true/false,
  all_files: [...],
  featured_image_size: 12345,
  ...
}
```

### 3. Verify File Selection
- Open browser DevTools → Network tab
- Select a file in the form
- Submit the form
- Look for the request to `/admin/blogs/{id}`
- Check the request payload - should show `FormData` with files

### 4. Check Storage Permissions
```bash
# Windows
icacls storage\app\public /grant Users:F /T

# Linux/Mac
chmod -R 775 storage/app/public
```

### 5. Verify Storage Link
```bash
php artisan storage:link
# Should create: public/storage -> storage/app/public
```

## Common Issues & Solutions

### Issue: Files not detected in console
**Solution**: Check if file input `onChange` is firing. Add breakpoint in file input handler.

### Issue: Files detected but not sent
**Solution**: Check Network tab - if request is JSON, files won't be included. Should be `multipart/form-data`.

### Issue: Backend says "No featured image file in request"
**Possible Causes**:
1. Files not being sent (check Network tab)
2. Route not accepting POST (check routes)
3. CSRF token issue
4. File size too large (check `php.ini` upload limits)

### Issue: Files upload but path not saved
**Solution**: Check if `$data['featured_image']` is being set and `$blog->update($data)` is called.

## Testing Checklist

1. **File Selection**:
   - [ ] File input shows file name after selection
   - [ ] Preview image appears (if image)
   - [ ] Console shows file detected

2. **Form Submission**:
   - [ ] Network request shows `multipart/form-data`
   - [ ] Request includes file in FormData
   - [ ] Laravel log shows file received

3. **File Storage**:
   - [ ] File appears in `storage/app/public/blogs/`
   - [ ] Database has path saved
   - [ ] Image displays in admin panel

4. **URL Generation**:
   - [ ] Image URL is correct format
   - [ ] Image accessible via `/storage/blogs/...`
   - [ ] Image displays on public pages

## Manual Test

Try this in browser console on the edit page:
```javascript
// Check if file is in form data
const form = document.querySelector('form');
const formData = new FormData(form);
console.log('FormData entries:');
for (let [key, value] of formData.entries()) {
    console.log(key, value instanceof File ? `File: ${value.name}` : value);
}
```

## Next Steps if Still Not Working

1. Check `php.ini` settings:
   - `upload_max_filesize`
   - `post_max_size`
   - `max_file_uploads`

2. Check Laravel config:
   - `config/filesystems.php` - verify 'public' disk config
   - Check `APP_URL` in `.env`

3. Test with a simple test endpoint:
   ```php
   Route::post('test-upload', function(Request $request) {
       return [
           'has_file' => $request->hasFile('test'),
           'all_files' => array_keys($request->allFiles()),
       ];
   });
   ```

4. Check middleware:
   - Verify CSRF token is being sent
   - Check if any middleware is blocking requests

