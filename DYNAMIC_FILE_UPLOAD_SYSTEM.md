# Dynamic File Upload System - Complete Guide

## Overview
A centralized, reusable file upload system that works across all modules in the application. This system provides consistent file handling, storage, and URL generation.

## Architecture

### Backend Service Layer
- **`FileUploadService`** - Main service for all file operations
- **`FileUploadHelper`** - Low-level helper (used by service)
- Consistent API across all modules

### Frontend Pattern
- Manual `FormData` creation when files are present
- Automatic file detection and handling
- Consistent error handling

## Backend Usage

### Basic File Upload

```php
use App\Services\FileUploadService;

// Upload a single file
$path = FileUploadService::upload(
    $request->file('image'),
    'module_name',        // e.g., 'blogs', 'logos', 'media'
    'subdirectory',      // Optional: e.g., 'og', 'thumbnails'
    $oldPath             // Optional: old file to delete
);

// Store path in database
$model->image = $path;
$model->save();
```

### Multiple File Upload

```php
// Upload multiple files
$paths = FileUploadService::uploadMultiple(
    $request->file('images'), // Array of files
    'gallery',
    'thumbnails'
);
```

### Get File URL

```php
// Get public URL for display
$url = FileUploadService::getUrl($model->image);
// Returns: /storage/module_name/filename.jpg
```

### Delete Files

```php
// Delete single file
FileUploadService::delete($path);

// Delete multiple files
$deleted = FileUploadService::deleteMultiple([$path1, $path2]);
```

### File Information

```php
// Check if file exists
if (FileUploadService::exists($path)) {
    // File exists
}

// Get file size
$size = FileUploadService::size($path); // bytes

// Get MIME type
$mime = FileUploadService::mimeType($path);
```

## Frontend Usage

### React Component Pattern

```typescript
import { useForm, router } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function MyComponent() {
    const form = useForm({
        image: null as File | null,
        // ... other fields
    });
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string>('');
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        form.setData('image', file);
        
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreview(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview('');
        }
    };
    
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const hasFile = form.data.image instanceof File;
        
        if (hasFile) {
            // Use FormData for file uploads
            const formData = new FormData();
            Object.keys(form.data).forEach((key) => {
                const value = form.data[key as keyof typeof form.data];
                if (value !== null && value !== undefined) {
                    if (value instanceof File) {
                        formData.append(key, value);
                    } else {
                        formData.append(key, String(value));
                    }
                }
            });
            
            router.post('/endpoint', formData, {
                preserveScroll: true,
                onSuccess: () => {
                    if (fileInputRef.current) {
                        fileInputRef.current.value = '';
                    }
                },
            });
        } else {
            // No file, use regular form submission
            form.post('/endpoint', {
                preserveScroll: true,
            });
        }
    };
    
    return (
        <form onSubmit={submit}>
            <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
            />
            {preview && <img src={preview} alt="Preview" />}
            <button type="submit">Submit</button>
        </form>
    );
}
```

## Module Examples

### Blog Module
```php
// Upload featured image
$path = FileUploadService::upload(
    $request->file('featured_image'),
    'blogs',
    null,
    $blog->featured_image
);

// Upload OG image
$path = FileUploadService::upload(
    $request->file('og_image'),
    'blogs',
    'og',
    $blog->og_image
);
```

### Theme/Logo Module
```php
// Upload logo
$path = FileUploadService::upload(
    $request->file('logo'),
    'logos',
    null,
    $oldLogoPath
);
```

### Media/Gallery Module
```php
// Upload multiple images
$paths = FileUploadService::uploadMultiple(
    $request->file('images'),
    'media',
    'gallery'
);
```

### User Avatar Module
```php
// Upload user avatar
$path = FileUploadService::upload(
    $request->file('avatar'),
    'users',
    'avatars',
    $user->avatar
);
```

## Storage Structure

```
storage/app/public/
├── blogs/              # Blog module
│   └── og/            # Blog OG images
├── logos/             # Theme/Logo module
├── media/             # Media module
│   └── gallery/      # Gallery subdirectory
├── users/             # User module
│   └── avatars/      # User avatars
└── [module]/          # Any future module
    └── [subdirectory]/ # Optional subdirectory
```

## URL Generation

All URLs are generated consistently:
- Database stores: `blogs/filename.jpg`
- Service returns: `/storage/blogs/filename.jpg`
- Accessible at: `http://domain.com/storage/blogs/filename.jpg`

## Best Practices

1. **Always use FileUploadService** - Don't use Storage directly
2. **Use module names** - Organize by module (blogs, logos, media, etc.)
3. **Use subdirectories** - For organization within modules
4. **Delete old files** - Pass old path when updating
5. **Handle errors** - Check if upload returns null
6. **Log operations** - All operations are logged automatically

## Error Handling

```php
$path = FileUploadService::upload($file, 'module');
if (!$path) {
    // Upload failed - check logs
    \Log::error('File upload failed');
    return back()->withErrors(['file' => 'Upload failed']);
}
```

## Frontend Error Handling

```typescript
router.post('/endpoint', formData, {
    onError: (errors) => {
        console.error('Upload errors:', errors);
        // Handle errors
    },
    onSuccess: () => {
        // Success
    },
});
```

## Migration Guide

### Old Code
```php
$path = $request->file('image')->store('module', 'public');
$url = Storage::disk('public')->url($path);
```

### New Code
```php
$path = FileUploadService::upload($request->file('image'), 'module');
$url = FileUploadService::getUrl($path);
```

## Testing

```php
// Test upload
$file = UploadedFile::fake()->image('test.jpg');
$path = FileUploadService::upload($file, 'test');
$this->assertNotNull($path);
$this->assertTrue(FileUploadService::exists($path));

// Test URL
$url = FileUploadService::getUrl($path);
$this->assertStringStartsWith('/storage/', $url);

// Test delete
FileUploadService::delete($path);
$this->assertFalse(FileUploadService::exists($path));
```

