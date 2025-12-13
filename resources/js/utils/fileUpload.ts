import { router } from '@inertiajs/react';

/**
 * Create FormData from form data object, handling files properly
 */
export function createFormData(data: Record<string, any>): FormData {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        const value = data[key];
        
        if (value !== null && value !== undefined) {
            if (value instanceof File) {
                formData.append(key, value);
            } else if (value instanceof Date) {
                formData.append(key, value.toISOString());
            } else if (typeof value === 'boolean') {
                formData.append(key, value ? '1' : '0');
            } else {
                formData.append(key, String(value));
            }
        }
    });

    return formData;
}

/**
 * Check if form data contains files
 */
export function hasFiles(data: Record<string, any>): boolean {
    return Object.values(data).some(value => value instanceof File);
}

/**
 * Submit form with file upload support
 * Automatically uses FormData when files are present
 */
export function submitWithFiles(
    url: string,
    data: Record<string, any>,
    options: {
        method?: 'post' | 'put' | 'patch';
        preserveScroll?: boolean;
        onSuccess?: () => void;
        onError?: (errors: any) => void;
    } = {}
) {
    const { method = 'post', preserveScroll = true, onSuccess, onError } = options;
    const hasFileUploads = hasFiles(data);

    if (hasFileUploads) {
        const formData = createFormData(data);
        
        // Add method override for PUT/PATCH
        if (method === 'put' || method === 'patch') {
            formData.append('_method', method.toUpperCase());
            router.post(url, formData, {
                preserveScroll,
                onSuccess,
                onError,
            });
        } else {
            router.post(url, formData, {
                preserveScroll,
                onSuccess,
                onError,
            });
        }
    } else {
        // No files, use regular form submission
        if (method === 'post') {
            router.post(url, data, { preserveScroll, onSuccess, onError });
        } else if (method === 'put') {
            router.put(url, data, { preserveScroll, onSuccess, onError });
        } else if (method === 'patch') {
            router.patch(url, data, { preserveScroll, onSuccess, onError });
        }
    }
}

