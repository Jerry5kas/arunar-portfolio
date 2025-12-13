# File Upload System - Complete Guide

## Overview
This document explains the complete file upload system implemented for blog images and theme logos.

## Architecture

### 1. Frontend (React/Inertia)
- Uses Inertia's `useForm` hook for form management
- Files are stored as `File | null` in form data
- `forceFormData: true` ensures files are sent as FormData
- No transform function needed - files are sent directly

### 2. Backend (Laravel)
- Uses `FileUploadHelper` class for all file operations
- Files stored in `storage/app/public/` directory
- URLs generated using `Storage::disk('public')->url()`
- Automatic directory creation
- Old file deletion on update

### 3. Storage Structure
```
storage/app/public/
├── blogs/              # Blog featured images
│   └── og/            # Blog OG images
└── logos/             # Theme logos
```

## File Upload Helper

### Location
`app/Helpers/FileUploadHelper.php`

### Methods

#### `uploadImage(UploadedFile $file, string $directory, ?string $oldPath = null): ?string`
- Uploads an image file to storage
- Automatically creates directory if it doesn't exist
- Deletes old file if provided
- Returns stored path or null on failure
- Includes comprehensive logging

#### `getUrl(?string $path): ?string`
- Converts stored path to full public URL
- Handles external URLs (returns as-is)
- Returns null if file doesn't exist

#### `delete(?string $path): bool`
- Deletes a file from storage
- Returns true on success, false on failure
- Includes error logging

## Implementation Details

### Blog Images

#### Create Blog
```php
// In BlogController@store
if ($request->hasFile('featured_image')) {
    $data['featured_image'] = FileUploadHelper::uploadImage(
        $request->file('featured_image'),
        'blogs'
    );
}
```

#### Update Blog
```php
// In BlogController@update
if ($request->hasFile('featured_image')) {
    $data['featured_image'] = FileUploadHelper::uploadImage(
        $request->file('featured_image'),
        'blogs',
        $blog->featured_image  // Old path for deletion
    );
}
```

#### Display Images
```php
// Convert path to URL
$blogData['featured_image'] = FileUploadHelper::getUrl($blog->featured_image);
```

### Theme Logo

#### Update Logo
```php
// In ThemeSettingsController@update
if ($request->hasFile('logo')) {
    $oldPath = ($oldLogo && !filter_var($oldLogo, FILTER_VALIDATE_URL)) 
        ? $oldLogo 
        : null;
    
    $logoPath = FileUploadHelper::uploadImage(
        $request->file('logo'),
        'logos',
        $oldPath
    );
    
    if ($logoPath) {
        ThemeSetting::set('logo_url', $logoPath);
    }
}
```

## Frontend Implementation

### Form Setup
```typescript
const form = useForm({
    featured_image: null as File | null,
    // ... other fields
});

// File input handler
onChange={(e) => {
    const file = e.target.files?.[0] || null;
    setData('featured_image', file);
    // Preview logic...
}}
```

### Form Submission
```typescript
put(`/admin/blogs/${blog.id}`, {
    preserveScroll: true,
    forceFormData: true,  // Critical for file uploads
    onSuccess: () => {
        // Reset file inputs
    },
});
```

## Key Fixes Applied

1. **Removed Transform Function**: Was interfering with file uploads
2. **Added forceFormData**: Ensures files are sent as FormData
3. **Created FileUploadHelper**: Centralized file handling logic
4. **Improved Error Handling**: Comprehensive logging and validation
5. **Automatic Directory Creation**: Directories created if they don't exist
6. **Old File Cleanup**: Old files deleted when updating

## Troubleshooting

### Files Not Uploading
1. Check browser console for errors
2. Check Laravel logs: `storage/logs/laravel.log`
3. Verify storage link: `php artisan storage:link`
4. Check file permissions on `storage/app/public`

### Files Not Displaying
1. Verify storage link exists: `ls -la public/storage`
2. Check file exists: `storage/app/public/blogs/filename.jpg`
3. Verify URL generation: Check `FileUploadHelper::getUrl()`
4. Check browser network tab for 404 errors

### Common Issues

#### Issue: "File not found" after upload
**Solution**: Run `php artisan storage:link`

#### Issue: Permission denied
**Solution**: 
```bash
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

#### Issue: Files upload but URLs are wrong
**Solution**: Ensure using `Storage::disk('public')->url()` not `Storage::url()`

## Testing Checklist

- [ ] Upload featured image on blog create
- [ ] Upload featured image on blog update
- [ ] Upload OG image on blog create
- [ ] Upload OG image on blog update
- [ ] Upload theme logo
- [ ] Verify images display in admin panel
- [ ] Verify images display on public blog pages
- [ ] Verify old images are deleted on update
- [ ] Check Laravel logs for any errors

## Best Practices

1. **Always use FileUploadHelper**: Don't handle files directly in controllers
2. **Always use forceFormData**: Required for Inertia file uploads
3. **Check file validity**: Use `$file->isValid()` before processing
4. **Log operations**: All file operations are logged for debugging
5. **Handle errors gracefully**: Use try-catch blocks where needed
6. **Clean up old files**: Always delete old files when updating

