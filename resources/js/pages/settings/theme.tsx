import { Head, useForm, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { type FormEventHandler, useRef, useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Theme settings',
        href: '/settings/theme',
    },
];

interface ThemeSettingsPageProps {
    theme: {
        primaryColor: string;
        secondaryColor: string;
        accentColor: string;
        accentSecondaryColor: string;
        fontFamily: string;
        fontUrl: string;
        fontHeadingFamily: string;
        fontBodyFamily: string;
        fontAccentFamily: string;
        fontHeadingUrl: string;
        fontBodyUrl: string;
        fontAccentUrl: string;
        logoUrl: string;
    };
}

export default function ThemeSettings({ theme }: ThemeSettingsPageProps) {
    // Initialize form with default values - ensure they're always strings
    const { data, setData, put, processing, errors, reset } = useForm({
        primaryColor: (theme?.primaryColor || '#000000').toString().trim(),
        secondaryColor: (theme?.secondaryColor || '#FFFFFF').toString().trim(),
        accentColor: (theme?.accentColor || '#D4AF37').toString().trim(),
        accentSecondaryColor: (theme?.accentSecondaryColor || '#B8860B').toString().trim(),
        fontHeadingFamily: (theme?.fontHeadingFamily || 'Playfair Display').toString().trim(),
        fontBodyFamily: (theme?.fontBodyFamily || 'Neue Haas Grotesk Display').toString().trim(),
        fontAccentFamily: (theme?.fontAccentFamily || 'Cormorant Garamond').toString().trim(),
        fontHeadingUrl: (theme?.fontHeadingUrl || '').toString().trim(),
        fontBodyUrl: (theme?.fontBodyUrl || '').toString().trim(),
        fontAccentUrl: (theme?.fontAccentUrl || '').toString().trim(),
        logo: null as File | null,
        logoUrl: (theme?.logoUrl || '').toString().trim(),
    });

    const logoInputRef = useRef<HTMLInputElement>(null);
    const [logoPreview, setLogoPreview] = useState<string>('');
    const [editingEnabled, setEditingEnabled] = useState<boolean>(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        
        if (!editingEnabled) {
            return;
        }
        
        // Check if we have a file to upload
        const hasFile = data.logo instanceof File;
        
        if (hasFile) {
            // When file is present, use FormData manually
            const formData = new FormData();
            
            // Add all form data
            Object.keys(data).forEach((key) => {
                const value = data[key as keyof typeof data];
                if (value !== null && value !== undefined) {
                    if (value instanceof File) {
                        formData.append(key, value);
                    } else {
                        formData.append(key, String(value));
                    }
                }
            });
            
            // Use router.post with method spoofing for file uploads
            formData.append('_method', 'PUT');
            router.post('/settings/theme', formData, {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setLogoPreview('');
                    setEditingEnabled(false);
                    // Reset file input
                    if (logoInputRef.current) {
                        logoInputRef.current.value = '';
                    }
                },
                onError: (errors) => {
                    console.error('Validation errors:', errors);
                },
            });
        } else {
            // No file, use regular put method
        put('/settings/theme', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                    setLogoPreview('');
                setEditingEnabled(false);
            },
                onError: (errors) => {
                    console.error('Validation errors:', errors);
                },
        });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Theme settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Theme settings"
                        description="Customize your site's color scheme and typography"
                    />

                    {/* Edit Mode Toggle */}
                    <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-950">
                        <div className="flex items-center space-x-3">
                            <Checkbox
                                id="enableEditing"
                                checked={editingEnabled}
                                onCheckedChange={(checked) => setEditingEnabled(checked === true)}
                            />
                            <div className="flex-1">
                                <Label
                                    htmlFor="enableEditing"
                                    className="text-sm font-medium text-yellow-900 dark:text-yellow-100 cursor-pointer"
                                >
                                    Enable editing mode
                                </Label>
                                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                                    Toggle this to enable or disable theme customization. This prevents accidental changes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {editingEnabled && (
                        <Alert className="border-orange-200 bg-orange-50 dark:border-orange-900 dark:bg-orange-950">
                            <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                            <AlertDescription className="text-sm text-orange-800 dark:text-orange-200">
                                Editing mode is enabled. Changes will be saved immediately when you submit the form.
                            </AlertDescription>
                        </Alert>
                    )}

                    <form onSubmit={submit} className="space-y-6" encType="multipart/form-data">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="primaryColor">
                                    Primary Color (Black)
                                </Label>
                                <div className="mt-2 flex items-center gap-3">
                                    <Input
                                        id="primaryColor"
                                        type="color"
                                        value={data.primaryColor || '#000000'}
                                        onChange={(e) =>
                                            setData(
                                                'primaryColor',
                                                e.target.value,
                                            )
                                        }
                                        disabled={!editingEnabled}
                                        className="h-12 w-20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                    <Input
                                        type="text"
                                        value={data.primaryColor || '#000000'}
                                        onChange={(e) =>
                                            setData(
                                                'primaryColor',
                                                e.target.value,
                                            )
                                        }
                                        disabled={!editingEnabled}
                                        placeholder="#000000"
                                        className="font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>
                                {errors.primaryColor && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.primaryColor}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="secondaryColor">
                                    Secondary Color (White)
                                </Label>
                                <div className="mt-2 flex items-center gap-3">
                                    <Input
                                        id="secondaryColor"
                                        type="color"
                                        value={data.secondaryColor || '#FFFFFF'}
                                        onChange={(e) =>
                                            setData(
                                                'secondaryColor',
                                                e.target.value,
                                            )
                                        }
                                        disabled={!editingEnabled}
                                        className="h-12 w-20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                    <Input
                                        type="text"
                                        value={data.secondaryColor || '#FFFFFF'}
                                        onChange={(e) =>
                                            setData(
                                                'secondaryColor',
                                                e.target.value,
                                            )
                                        }
                                        disabled={!editingEnabled}
                                        placeholder="#FFFFFF"
                                        className="font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>
                                {errors.secondaryColor && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.secondaryColor}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="accentColor">
                                    Accent Color (Royal Gold)
                                </Label>
                                <div className="mt-2 flex items-center gap-3">
                                    <Input
                                        id="accentColor"
                                        type="color"
                                        value={data.accentColor || '#D4AF37'}
                                        onChange={(e) =>
                                            setData('accentColor', e.target.value)
                                        }
                                        disabled={!editingEnabled}
                                        className="h-12 w-20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                    <Input
                                        type="text"
                                        value={data.accentColor || '#D4AF37'}
                                        onChange={(e) =>
                                            setData('accentColor', e.target.value)
                                        }
                                        disabled={!editingEnabled}
                                        placeholder="#D4AF37"
                                        className="font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>
                                {errors.accentColor && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.accentColor}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="accentSecondaryColor">
                                    Accent Secondary Color (Dark Gold)
                                </Label>
                                <div className="mt-2 flex items-center gap-3">
                                    <Input
                                        id="accentSecondaryColor"
                                        type="color"
                                        value={data.accentSecondaryColor || '#B8860B'}
                                        onChange={(e) =>
                                            setData(
                                                'accentSecondaryColor',
                                                e.target.value,
                                            )
                                        }
                                        disabled={!editingEnabled}
                                        className="h-12 w-20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                    <Input
                                        type="text"
                                        value={data.accentSecondaryColor || '#B8860B'}
                                        onChange={(e) =>
                                            setData(
                                                'accentSecondaryColor',
                                                e.target.value,
                                            )
                                        }
                                        disabled={!editingEnabled}
                                        placeholder="#B8860B"
                                        className="font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>
                                {errors.accentSecondaryColor && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.accentSecondaryColor}
                                    </p>
                                )}
                            </div>

                            <div className="pt-4 border-t">
                                <h3 className="text-lg font-semibold mb-4">Luxury Font System</h3>
                                
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="fontHeadingFamily">
                                            Heading Font (Playfair Display) - For H1, H2, Titles
                                        </Label>
                                        <Input
                                            id="fontHeadingFamily"
                                            type="text"
                                            value={data.fontHeadingFamily}
                                            onChange={(e) =>
                                                setData('fontHeadingFamily', e.target.value)
                                            }
                                            disabled={!editingEnabled}
                                            placeholder="Playfair Display"
                                            className="mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                        <Input
                                            id="fontHeadingUrl"
                                            type="url"
                                            value={data.fontHeadingUrl}
                                            onChange={(e) =>
                                                setData('fontHeadingUrl', e.target.value)
                                            }
                                            disabled={!editingEnabled}
                                            placeholder="Google Fonts URL for heading font"
                                            className="mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="fontBodyFamily">
                                            Body Font (Neue Haas Grotesk) - For paragraphs, descriptions
                                        </Label>
                                        <Input
                                            id="fontBodyFamily"
                                            type="text"
                                            value={data.fontBodyFamily}
                                            onChange={(e) =>
                                                setData('fontBodyFamily', e.target.value)
                                            }
                                            disabled={!editingEnabled}
                                            placeholder="Neue Haas Grotesk Display"
                                            className="mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                        <Input
                                            id="fontBodyUrl"
                                            type="url"
                                            value={data.fontBodyUrl}
                                            onChange={(e) =>
                                                setData('fontBodyUrl', e.target.value)
                                            }
                                            disabled={!editingEnabled}
                                            placeholder="Google Fonts URL for body font"
                                            className="mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="fontAccentFamily">
                                            Accent Font (Cormorant Garamond) - For quotes, highlights
                                        </Label>
                                        <Input
                                            id="fontAccentFamily"
                                            type="text"
                                            value={data.fontAccentFamily}
                                            onChange={(e) =>
                                                setData('fontAccentFamily', e.target.value)
                                            }
                                            disabled={!editingEnabled}
                                            placeholder="Cormorant Garamond"
                                            className="mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                        <Input
                                            id="fontAccentUrl"
                                            type="url"
                                            value={data.fontAccentUrl}
                                            onChange={(e) =>
                                                setData('fontAccentUrl', e.target.value)
                                            }
                                            disabled={!editingEnabled}
                                            placeholder="Google Fonts URL for accent font"
                                            className="mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <h3 className="text-lg font-semibold mb-4">Logo</h3>
                                
                                <div className="space-y-4">
                                    {(data.logoUrl || logoPreview) && (
                                        <div className="mb-4">
                                            <Label>
                                                {logoPreview ? 'New Logo Preview' : 'Current Logo'}
                                            </Label>
                                            <div className="mt-2">
                                                <img
                                                    src={logoPreview || data.logoUrl}
                                                    alt="Logo preview"
                                                    className="h-16 w-auto object-contain"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <Label htmlFor="logo">
                                            Upload New Logo
                                        </Label>
                                        <Input
                                            ref={logoInputRef}
                                            id="logo"
                                            type="file"
                                            accept="image/jpeg,image/jpg,image/png,image/svg+xml,image/webp"
                                            disabled={!editingEnabled}
                                            onChange={(e) => {
                                                const file = e.target.files?.[0] || null;
                                                setData('logo', file);
                                                if (file) {
                                                    // Preview the new logo
                                                    const reader = new FileReader();
                                                    reader.onload = (event) => {
                                                        setLogoPreview(event.target?.result as string);
                                                    };
                                                    reader.readAsDataURL(file);
                                                } else {
                                                    setLogoPreview('');
                                                    setData('logo', null);
                                                }
                                            }}
                                            className="mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                        <p className="mt-1 text-sm text-gray-500">
                                            Recommended: PNG, SVG, or WebP. Max size: 2MB
                                        </p>
                                        {errors.logo && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.logo}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="logoUrl">
                                            Or Enter Logo URL
                                        </Label>
                                        <Input
                                            id="logoUrl"
                                            type="url"
                                            value={data.logoUrl}
                                            onChange={(e) =>
                                                setData('logoUrl', e.target.value)
                                            }
                                            disabled={!editingEnabled}
                                            placeholder="https://example.com/logo.png"
                                            className="mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                        {errors.logoUrl && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {errors.logoUrl}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button 
                                type="submit" 
                                disabled={processing || !editingEnabled}
                            >
                                {processing ? 'Saving...' : !editingEnabled ? 'Enable editing to save' : 'Save Changes'}
                            </Button>
                        </div>
                    </form>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}

