import { Head, useForm, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { FormEventHandler, useRef, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gallery',
        href: '/admin/gallery',
    },
    {
        title: 'Create',
        href: '/admin/gallery/create',
    },
];

export default function GalleryCreate() {
    const { data, setData, processing, errors, reset } = useForm({
        title: '',
        slug: '',
        alt: '',
        image: null as File | null,
        image_url: '',
        order: 0,
        category: '',
        description: '',
        is_published: false,
        published_at: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        og_image: null as File | null,
        og_title: '',
        og_description: '',
    });

    const imageRef = useRef<HTMLInputElement>(null);
    const ogImageRef = useRef<HTMLInputElement>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [ogImagePreview, setOgImagePreview] = useState<string>('');

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        
        const hasFiles = data.image instanceof File || data.og_image instanceof File;
        
        if (hasFiles) {
            const formData = new FormData();
            
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
            
            router.post('/admin/gallery', formData, {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setImagePreview('');
                    setOgImagePreview('');
                    if (imageRef.current) imageRef.current.value = '';
                    if (ogImageRef.current) ogImageRef.current.value = '';
                },
            });
        } else {
            router.post('/admin/gallery', data, {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setImagePreview('');
                    setOgImagePreview('');
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Gallery Image" />
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Link href="/admin/gallery">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                    </Link>
                    <HeadingSmall
                        title="Create Gallery Image"
                        description="Add a new gallery image with SEO optimization"
                    />
                </div>

                <form onSubmit={submit} className="space-y-6" encType="multipart/form-data" noValidate>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="rounded-lg border bg-card p-6 space-y-6">
                                <h2 className="text-lg font-semibold">Content</h2>

                                <div>
                                    <Label htmlFor="title">Title *</Label>
                                    <Input
                                        id="title"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        placeholder="Enter image title"
                                        className="mt-2"
                                    />
                                    <InputError message={errors.title} />
                                </div>

                                <div>
                                    <Label htmlFor="slug">Slug</Label>
                                    <Input
                                        id="slug"
                                        value={data.slug}
                                        onChange={(e) => setData('slug', e.target.value)}
                                        placeholder="auto-generated-from-title"
                                        className="mt-2"
                                    />
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Leave empty to auto-generate from title
                                    </p>
                                    <InputError message={errors.slug} />
                                </div>

                                <div>
                                    <Label htmlFor="alt">Alt Text</Label>
                                    <Input
                                        id="alt"
                                        value={data.alt}
                                        onChange={(e) => setData('alt', e.target.value)}
                                        placeholder="Alternative text for accessibility"
                                        className="mt-2"
                                    />
                                    <InputError message={errors.alt} />
                                </div>

                                <div>
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        placeholder="Image description"
                                        rows={4}
                                        className="mt-2"
                                    />
                                    <InputError message={errors.description} />
                                </div>

                                <div>
                                    <Label htmlFor="category">Category</Label>
                                    <Input
                                        id="category"
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        placeholder="e.g., Architecture, Interior, Exterior"
                                        className="mt-2"
                                    />
                                    <InputError message={errors.category} />
                                </div>

                                <div>
                                    <Label htmlFor="order">Order</Label>
                                    <Input
                                        id="order"
                                        type="number"
                                        value={data.order}
                                        onChange={(e) => setData('order', parseInt(e.target.value) || 0)}
                                        className="mt-2"
                                    />
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Lower numbers appear first
                                    </p>
                                    <InputError message={errors.order} />
                                </div>
                            </div>

                            {/* Image Upload */}
                            <div className="rounded-lg border bg-card p-6 space-y-4">
                                <h2 className="text-lg font-semibold">Image</h2>
                                
                                {(imagePreview || data.image_url) && (
                                    <div className="mt-4">
                                        <img
                                            src={imagePreview || data.image_url || ''}
                                            alt="Preview"
                                            className="max-w-md h-48 object-cover rounded-lg"
                                        />
                                    </div>
                                )}

                                <div>
                                    <Label htmlFor="image">Upload Image</Label>
                                    <Input
                                        ref={imageRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0] || null;
                                            setData('image', file);
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onload = (event) => {
                                                    setImagePreview(event.target?.result as string);
                                                };
                                                reader.readAsDataURL(file);
                                            } else {
                                                setImagePreview('');
                                            }
                                        }}
                                        className="mt-2"
                                    />
                                    <InputError message={errors.image} />
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-card px-2 text-muted-foreground">Or</span>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="image_url">Image URL</Label>
                                    <Input
                                        id="image_url"
                                        type="url"
                                        value={data.image_url}
                                        onChange={(e) => {
                                            setData('image_url', e.target.value);
                                            if (e.target.value) {
                                                setImagePreview(e.target.value);
                                                setData('image', null);
                                                if (imageRef.current) imageRef.current.value = '';
                                            }
                                        }}
                                        placeholder="https://example.com/image.jpg"
                                        className="mt-2"
                                    />
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Enter external image URL (file upload takes priority)
                                    </p>
                                    <InputError message={errors.image_url} />
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Publish Settings */}
                            <div className="rounded-lg border bg-card p-6 space-y-4">
                                <h2 className="text-lg font-semibold">Publish</h2>
                                
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="is_published"
                                        checked={data.is_published}
                                        onCheckedChange={(checked) =>
                                            setData('is_published', checked === true)
                                        }
                                    />
                                    <Label htmlFor="is_published" className="cursor-pointer">
                                        Publish immediately
                                    </Label>
                                </div>

                                <div>
                                    <Label htmlFor="published_at">Publish Date</Label>
                                    <Input
                                        id="published_at"
                                        type="datetime-local"
                                        value={data.published_at}
                                        onChange={(e) => setData('published_at', e.target.value)}
                                        className="mt-2"
                                    />
                                    <InputError message={errors.published_at} />
                                </div>

                                <Button type="submit" disabled={processing} className="w-full">
                                    <Save className="mr-2 h-4 w-4" />
                                    {processing ? 'Creating...' : 'Create Image'}
                                </Button>
                            </div>

                            {/* SEO Settings */}
                            <div className="rounded-lg border bg-card p-6 space-y-4">
                                <h2 className="text-lg font-semibold">SEO Settings</h2>

                                <div>
                                    <Label htmlFor="meta_title">Meta Title</Label>
                                    <Input
                                        id="meta_title"
                                        value={data.meta_title}
                                        onChange={(e) => setData('meta_title', e.target.value)}
                                        placeholder="SEO title"
                                        className="mt-2"
                                    />
                                    <InputError message={errors.meta_title} />
                                </div>

                                <div>
                                    <Label htmlFor="meta_description">Meta Description</Label>
                                    <Textarea
                                        id="meta_description"
                                        value={data.meta_description}
                                        onChange={(e) => setData('meta_description', e.target.value)}
                                        placeholder="SEO description"
                                        rows={3}
                                        className="mt-2"
                                    />
                                    <InputError message={errors.meta_description} />
                                </div>

                                <div>
                                    <Label htmlFor="meta_keywords">Meta Keywords</Label>
                                    <Input
                                        id="meta_keywords"
                                        value={data.meta_keywords}
                                        onChange={(e) => setData('meta_keywords', e.target.value)}
                                        placeholder="keyword1, keyword2, keyword3"
                                        className="mt-2"
                                    />
                                    <InputError message={errors.meta_keywords} />
                                </div>

                                <div>
                                    <Label htmlFor="og_title">OG Title</Label>
                                    <Input
                                        id="og_title"
                                        value={data.og_title}
                                        onChange={(e) => setData('og_title', e.target.value)}
                                        placeholder="Open Graph title"
                                        className="mt-2"
                                    />
                                    <InputError message={errors.og_title} />
                                </div>

                                <div>
                                    <Label htmlFor="og_description">OG Description</Label>
                                    <Textarea
                                        id="og_description"
                                        value={data.og_description}
                                        onChange={(e) => setData('og_description', e.target.value)}
                                        placeholder="Open Graph description"
                                        rows={3}
                                        className="mt-2"
                                    />
                                    <InputError message={errors.og_description} />
                                </div>

                                <div>
                                    <Label htmlFor="og_image">OG Image</Label>
                                    {ogImagePreview && (
                                        <div className="mt-2 mb-2">
                                            <img
                                                src={ogImagePreview}
                                                alt="OG preview"
                                                className="max-w-full h-32 object-cover rounded-lg"
                                            />
                                        </div>
                                    )}
                                    <Input
                                        ref={ogImageRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0] || null;
                                            setData('og_image', file);
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onload = (event) => {
                                                    setOgImagePreview(event.target?.result as string);
                                                };
                                                reader.readAsDataURL(file);
                                            } else {
                                                setOgImagePreview('');
                                            }
                                        }}
                                        className="mt-2"
                                    />
                                    <InputError message={errors.og_image} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}

