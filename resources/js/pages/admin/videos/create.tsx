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
        title: 'Videos',
        href: '/admin/videos',
    },
    {
        title: 'Create',
        href: '/admin/videos/create',
    },
];

export default function VideoCreate() {
    const { data, setData, processing, errors, reset } = useForm({
        title: '',
        slug: '',
        description: '',
        video_url: '',
        video_type: 'youtube',
        duration: '',
        category: '',
        author: '',
        order: 0,
        is_published: false,
        published_at: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        og_image: null as File | null,
        og_title: '',
        og_description: '',
        thumbnail: null as File | null,
    });

    const thumbnailRef = useRef<HTMLInputElement>(null);
    const ogImageRef = useRef<HTMLInputElement>(null);
    const [thumbnailPreview, setThumbnailPreview] = useState<string>('');
    const [ogImagePreview, setOgImagePreview] = useState<string>('');

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        
        const hasFiles = data.thumbnail instanceof File || data.og_image instanceof File;
        
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
            
            router.post('/admin/videos', formData, {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setThumbnailPreview('');
                    setOgImagePreview('');
                    if (thumbnailRef.current) thumbnailRef.current.value = '';
                    if (ogImageRef.current) ogImageRef.current.value = '';
                },
            });
        } else {
            router.post('/admin/videos', data, {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setThumbnailPreview('');
                    setOgImagePreview('');
                },
            });
        }
    };

    // Auto-detect video type from URL
    const handleVideoUrlChange = (url: string) => {
        setData('video_url', url);
        if (url) {
            if (url.includes('youtube.com') || url.includes('youtu.be')) {
                setData('video_type', 'youtube');
            } else if (url.includes('vimeo.com')) {
                setData('video_type', 'vimeo');
            } else {
                setData('video_type', 'other');
            }
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Video" />
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Link href="/admin/videos">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                    </Link>
                    <HeadingSmall
                        title="Create Video"
                        description="Add a new video with SEO optimization"
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
                                        placeholder="Enter video title"
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
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        placeholder="Video description"
                                        rows={4}
                                        className="mt-2"
                                    />
                                    <InputError message={errors.description} />
                                </div>

                                <div>
                                    <Label htmlFor="video_url">Video URL *</Label>
                                    <Input
                                        id="video_url"
                                        type="url"
                                        value={data.video_url}
                                        onChange={(e) => handleVideoUrlChange(e.target.value)}
                                        placeholder="https://www.youtube.com/watch?v=..."
                                        className="mt-2"
                                    />
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        YouTube, Vimeo, or other video URL
                                    </p>
                                    <InputError message={errors.video_url} />
                                </div>

                                <div>
                                    <Label htmlFor="video_type">Video Type</Label>
                                    <Input
                                        id="video_type"
                                        value={data.video_type}
                                        onChange={(e) => setData('video_type', e.target.value)}
                                        className="mt-2"
                                        readOnly
                                    />
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Auto-detected from URL
                                    </p>
                                    <InputError message={errors.video_type} />
                                </div>

                                <div>
                                    <Label htmlFor="duration">Duration (seconds)</Label>
                                    <Input
                                        id="duration"
                                        type="number"
                                        value={data.duration}
                                        onChange={(e) => setData('duration', e.target.value)}
                                        placeholder="e.g., 300 for 5 minutes"
                                        className="mt-2"
                                    />
                                    <InputError message={errors.duration} />
                                </div>

                                <div>
                                    <Label htmlFor="category">Category</Label>
                                    <Input
                                        id="category"
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        placeholder="e.g., Stories, Tutorials, Events"
                                        className="mt-2"
                                    />
                                    <InputError message={errors.category} />
                                </div>

                                <div>
                                    <Label htmlFor="author">Author</Label>
                                    <Input
                                        id="author"
                                        value={data.author}
                                        onChange={(e) => setData('author', e.target.value)}
                                        placeholder="Video author"
                                        className="mt-2"
                                    />
                                    <InputError message={errors.author} />
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

                            {/* Thumbnail Upload */}
                            <div className="rounded-lg border bg-card p-6 space-y-4">
                                <h2 className="text-lg font-semibold">Thumbnail</h2>
                                
                                {thumbnailPreview && (
                                    <div className="mt-4">
                                        <img
                                            src={thumbnailPreview}
                                            alt="Thumbnail preview"
                                            className="max-w-md h-48 object-cover rounded-lg"
                                        />
                                    </div>
                                )}

                                <div>
                                    <Label htmlFor="thumbnail">Upload Thumbnail</Label>
                                    <Input
                                        ref={thumbnailRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0] || null;
                                            setData('thumbnail', file);
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onload = (event) => {
                                                    setThumbnailPreview(event.target?.result as string);
                                                };
                                                reader.readAsDataURL(file);
                                            } else {
                                                setThumbnailPreview('');
                                            }
                                        }}
                                        className="mt-2"
                                    />
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Optional: Custom thumbnail (YouTube auto-generates if not provided)
                                    </p>
                                    <InputError message={errors.thumbnail} />
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
                                    {processing ? 'Creating...' : 'Create Video'}
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

