import { useRef, useState, useCallback } from 'react';

interface UseFileUploadOptions {
    onFileSelect?: (file: File | null) => void;
    accept?: string;
    maxSize?: number; // in bytes
}

interface UseFileUploadReturn {
    file: File | null;
    preview: string;
    error: string | null;
    fileInputRef: React.RefObject<HTMLInputElement>;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    clearFile: () => void;
    validateFile: (file: File) => boolean;
}

/**
 * Reusable hook for file uploads
 * Handles file selection, preview, validation, and cleanup
 */
export function useFileUpload(options: UseFileUploadOptions = {}): UseFileUploadReturn {
    const { onFileSelect, accept, maxSize } = options;
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validateFile = useCallback((file: File): boolean => {
        setError(null);

        // Check file type
        if (accept && !accept.split(',').some(type => {
            const trimmed = type.trim();
            if (trimmed.startsWith('.')) {
                return file.name.toLowerCase().endsWith(trimmed.toLowerCase());
            }
            return file.type === trimmed || file.type.startsWith(trimmed.split('/')[0] + '/');
        })) {
            setError(`File type not allowed. Accepted types: ${accept}`);
            return false;
        }

        // Check file size
        if (maxSize && file.size > maxSize) {
            const maxSizeMB = (maxSize / (1024 * 1024)).toFixed(2);
            setError(`File size exceeds ${maxSizeMB}MB`);
            return false;
        }

        return true;
    }, [accept, maxSize]);

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        
        if (selectedFile) {
            if (!validateFile(selectedFile)) {
                setFile(null);
                setPreview('');
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                return;
            }

            setFile(selectedFile);
            setError(null);

            // Generate preview for images
            if (selectedFile.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setPreview(event.target?.result as string);
                };
                reader.readAsDataURL(selectedFile);
            } else {
                setPreview('');
            }

            // Call optional callback
            if (onFileSelect) {
                onFileSelect(selectedFile);
            }
        } else {
            setFile(null);
            setPreview('');
            if (onFileSelect) {
                onFileSelect(null);
            }
        }
    }, [validateFile, onFileSelect]);

    const clearFile = useCallback(() => {
        setFile(null);
        setPreview('');
        setError(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, []);

    return {
        file,
        preview,
        error,
        fileInputRef,
        handleFileChange,
        clearFile,
        validateFile,
    };
}

