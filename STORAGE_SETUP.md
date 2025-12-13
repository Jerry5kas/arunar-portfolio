# Storage Setup Guide

## Overview
This application uses Laravel's file storage system to handle file uploads (images, logos, etc.). Files are stored in the `storage/app/public` directory and made accessible via a symbolic link to `public/storage`.

## Storage Configuration

### File Storage Location
- **Storage Path**: `storage/app/public/`
- **Public URL**: `/storage/` (via symbolic link)
- **Full URL Example**: `http://your-domain.com/storage/blogs/image.jpg`

### Storage Disks
The application uses the `public` disk for all file uploads:
- Blog featured images: `storage/app/public/blogs/`
- Blog OG images: `storage/app/public/blogs/og/`
- Theme logos: `storage/app/public/logos/`

## Setup Instructions

### 1. Create Storage Link
Run this command to create the symbolic link:
```bash
php artisan storage:link
```

This creates a link from `public/storage` → `storage/app/public`, making uploaded files accessible via the web.

### 2. Verify Storage Link
Check that the link exists:
- Windows: `public\storage` should be a symlink
- Linux/Mac: `public/storage` should be a symlink

### 3. Set Permissions (Linux/Mac)
```bash
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

## How File Uploads Work

### Blog Images
1. **Upload**: Files are uploaded via form and stored using:
   ```php
   Storage::disk('public')->store('blogs', 'public')
   ```
   This saves to: `storage/app/public/blogs/filename.jpg`

2. **Retrieval**: URLs are generated using:
   ```php
   Storage::disk('public')->url($path)
   ```
   This returns: `http://your-domain.com/storage/blogs/filename.jpg`

3. **Database**: Only the relative path is stored (e.g., `blogs/filename.jpg`)

### Theme Logo
1. **Upload**: Logo is stored to `storage/app/public/logos/`
2. **Retrieval**: Same URL generation method as blog images
3. **Database**: Path stored in `theme_settings` table

## Troubleshooting

### Images Not Displaying
1. **Check Storage Link**: Run `php artisan storage:link` again
2. **Check File Exists**: Verify file exists in `storage/app/public/`
3. **Check Permissions**: Ensure web server can read files
4. **Check URL**: Verify the URL format is correct

### Files Not Saving
1. **Check Disk**: Ensure using `Storage::disk('public')`
2. **Check Permissions**: Ensure `storage/app/public` is writable
3. **Check Logs**: Check Laravel logs for errors

### Common Issues
- **404 on images**: Storage link not created or broken
- **Permission denied**: File permissions incorrect
- **Files not saving**: Storage directory not writable

## Code Examples

### Saving a File
```php
if ($request->hasFile('featured_image')) {
    $path = $request->file('featured_image')->store('blogs', 'public');
    // $path = 'blogs/filename.jpg'
}
```

### Getting File URL
```php
$url = Storage::disk('public')->url($path);
// $url = 'http://domain.com/storage/blogs/filename.jpg'
```

### Checking if File Exists
```php
if (Storage::disk('public')->exists($path)) {
    // File exists
}
```

### Deleting a File
```php
Storage::disk('public')->delete($path);
```

