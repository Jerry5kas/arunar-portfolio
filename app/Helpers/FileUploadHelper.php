<?php

namespace App\Helpers;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class FileUploadHelper
{
    /**
     * Upload an image file to storage
     *
     * @param UploadedFile|null $file
     * @param string $directory
     * @param string|null $oldPath Path to old file to delete
     * @return string|null The stored file path or null on failure
     */
    public static function uploadImage(?UploadedFile $file, string $directory, ?string $oldPath = null): ?string
    {
        if (!$file || !$file->isValid()) {
            return null;
        }

        try {
            // Ensure directory exists
            Storage::disk('public')->makeDirectory($directory);

            // Delete old file if exists
            if ($oldPath && Storage::disk('public')->exists($oldPath)) {
                Storage::disk('public')->delete($oldPath);
                Log::info('Deleted old file', ['path' => $oldPath]);
            }

            // Store new file
            $path = $file->store($directory, 'public');
            
            Log::info('File uploaded successfully', [
                'path' => $path,
                'directory' => $directory,
                'original_name' => $file->getClientOriginalName(),
                'size' => $file->getSize(),
            ]);

            return $path;
        } catch (\Exception $e) {
            Log::error('File upload failed', [
                'error' => $e->getMessage(),
                'directory' => $directory,
                'file_name' => $file->getClientOriginalName(),
            ]);

            return null;
        }
    }

    /**
     * Get the public URL for a stored file
     *
     * @param string|null $path
     * @return string|null
     */
    public static function getUrl(?string $path): ?string
    {
        if (empty($path)) {
            return null;
        }

        // If it's already a full URL, return as-is
        if (filter_var($path, FILTER_VALIDATE_URL)) {
            return $path;
        }

        // If path already starts with /storage/, return as relative URL
        if (str_starts_with($path, '/storage/')) {
            return $path;
        }

        // If path already starts with storage/, add leading slash
        if (str_starts_with($path, 'storage/')) {
            return '/' . $path;
        }

        // Always return relative URL starting with /storage/
        // This ensures consistency regardless of APP_URL setting
        $cleanPath = ltrim($path, '/');
        
        // Remove 'storage/' prefix if present (shouldn't be, but handle it)
        if (str_starts_with($cleanPath, 'storage/')) {
            $cleanPath = substr($cleanPath, 8); // Remove 'storage/' (8 chars)
        }
        
        // Ensure path doesn't already have /storage/ prefix
        $cleanPath = ltrim($cleanPath, '/');
        
        // Return relative URL with /storage/ prefix
        return '/storage/' . $cleanPath;
    }

    /**
     * Delete a file from storage
     *
     * @param string|null $path
     * @return bool
     */
    public static function delete(?string $path): bool
    {
        if (empty($path)) {
            return false;
        }

        try {
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
                Log::info('File deleted', ['path' => $path]);
                return true;
            }
        } catch (\Exception $e) {
            Log::error('File deletion failed', [
                'error' => $e->getMessage(),
                'path' => $path,
            ]);
        }

        return false;
    }
}

