<?php

namespace App\Services;

use App\Helpers\FileUploadHelper;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;

/**
 * File Upload Service
 * 
 * A centralized service for handling file uploads across all modules.
 * Provides consistent file handling, validation, and storage.
 */
class FileUploadService
{
    /**
     * Upload a file and return the stored path
     *
     * @param UploadedFile|null $file
     * @param string $module Module name (e.g., 'blogs', 'logos', 'media')
     * @param string|null $subdirectory Optional subdirectory within module
     * @param string|null $oldPath Path to old file to delete (for updates)
     * @return string|null The stored file path or null on failure
     */
    public static function upload(
        ?UploadedFile $file,
        string $module,
        ?string $subdirectory = null,
        ?string $oldPath = null
    ): ?string {
        if (!$file || !$file->isValid()) {
            return null;
        }

        // Build directory path
        $directory = $subdirectory 
            ? "{$module}/{$subdirectory}" 
            : $module;

        return FileUploadHelper::uploadImage($file, $directory, $oldPath);
    }

    /**
     * Upload multiple files
     *
     * @param array $files Array of UploadedFile objects
     * @param string $module Module name
     * @param string|null $subdirectory Optional subdirectory
     * @return array Array of stored paths
     */
    public static function uploadMultiple(
        array $files,
        string $module,
        ?string $subdirectory = null
    ): array {
        $paths = [];
        
        foreach ($files as $file) {
            if ($file instanceof UploadedFile && $file->isValid()) {
                $path = self::upload($file, $module, $subdirectory);
                if ($path) {
                    $paths[] = $path;
                }
            }
        }
        
        return $paths;
    }

    /**
     * Get the public URL for a stored file
     *
     * @param string|null $path Stored file path
     * @return string|null Public URL or null
     */
    public static function getUrl(?string $path): ?string
    {
        return FileUploadHelper::getUrl($path);
    }

    /**
     * Delete a file
     *
     * @param string|null $path File path to delete
     * @return bool True on success, false on failure
     */
    public static function delete(?string $path): bool
    {
        return FileUploadHelper::delete($path);
    }

    /**
     * Delete multiple files
     *
     * @param array $paths Array of file paths
     * @return int Number of files successfully deleted
     */
    public static function deleteMultiple(array $paths): int
    {
        $deleted = 0;
        
        foreach ($paths as $path) {
            if (self::delete($path)) {
                $deleted++;
            }
        }
        
        return $deleted;
    }

    /**
     * Check if a file exists
     *
     * @param string|null $path File path
     * @return bool
     */
    public static function exists(?string $path): bool
    {
        if (empty($path)) {
            return false;
        }

        return \Illuminate\Support\Facades\Storage::disk('public')->exists($path);
    }

    /**
     * Get file size
     *
     * @param string|null $path File path
     * @return int|null File size in bytes or null
     */
    public static function size(?string $path): ?int
    {
        if (empty($path) || !self::exists($path)) {
            return null;
        }

        return \Illuminate\Support\Facades\Storage::disk('public')->size($path);
    }

    /**
     * Get file MIME type
     *
     * @param string|null $path File path
     * @return string|null MIME type or null
     */
    public static function mimeType(?string $path): ?string
    {
        if (empty($path) || !self::exists($path)) {
            return null;
        }

        return \Illuminate\Support\Facades\Storage::disk('public')->mimeType($path);
    }
}

