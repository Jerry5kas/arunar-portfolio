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
        title: 'Blogs',
        href: '/admin/blogs',
    },
    {
        title: 'Create',
        href: '/admin/blogs/create',
    },
];

export default function BlogCreate() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        featured_image: null as File | null,
        is_published: false,
        published_at: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        og_image: null as File | null,
        og_title: '',
        og_description: '',
        author: '',
    });

    const featuredImageRef = useRef<HTMLInputElement>(null);
    const ogImageRef = useRef<HTMLInputElement>(null);
    const [featuredImagePreview, setFeaturedImagePreview] = useState<string>('');
    const [ogImagePreview, setOgImagePreview] = useState<string>('');

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        
        // Check if we have files to upload
        const hasFiles = data.featured_image instanceof File || data.og_image instanceof File;
        
        if (hasFiles) {
            // When files are present, use FormData manually
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
            
            // Use router.post for file uploads
            router.post('/admin/blogs', formData, {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setFeaturedImagePreview('');
                    setOgImagePreview('');
                    // Reset file inputs
                    if (featuredImageRef.current) {
                        featuredImageRef.current.value = '';
                    }
                    if (ogImageRef.current) {
                        ogImageRef.current.value = '';
                    }
                },
                onError: (errors) => {
                    console.error('Validation errors:', errors);
                },
            });
        } else {
            // No files, use regular post method
            post('/admin/blogs', {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    setFeaturedImagePreview('');
                    setOgImagePreview('');
                },
                onError: (errors) => {
                    console.error('Validation errors:', errors);
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Blog Post" />
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Link href="/admin/blogs">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                    </Link>
                    <HeadingSmall
                        title="Create Blog Post"
                        description="Add a new blog post with SEO optimization"
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
                                        placeholder="Enter blog post title"
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
                                    <Label htmlFor="excerpt">Excerpt</Label>
                                    <Textarea
                                        id="excerpt"
                                        value={data.excerpt}
                                        onChange={(e) => setData('excerpt', e.target.value)}
                                        placeholder="Brief description of the post"
                                        rows={3}
                                        className="mt-2"
                                    />
                                    <InputError message={errors.excerpt} />
                                </div>

                                <div>
                                    <Label htmlFor="content">Content *</Label>
                                    <Textarea
                                        id="content"
                                        value={data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                        placeholder="Write your blog post content here..."
                                        rows={15}
                                        className="mt-2 font-mono"
                                    />
                                    <InputError message={errors.content} />
                                </div>

                                <div>
                                    <Label htmlFor="author">Author</Label>
                                    <Input
                                        id="author"
                                        value={data.author}
                                        onChange={(e) => setData('author', e.target.value)}
                                        placeholder="Author name"
                                        className="mt-2"
                                    />
                                    <InputError message={errors.author} />
                                </div>
                            </div>

                            {/* Featured Image */}
                            <div className="rounded-lg border bg-card p-6 space-y-4">
                                <h2 className="text-lg font-semibold">Featured Image</h2>
                                
                                {featuredImagePreview && (
                                    <div className="mt-4">
                                        <img
                                            src={featuredImagePreview}
                                            alt="Featured preview"
                                            className="max-w-md h-48 object-cover rounded-lg"
                                        />
                                    </div>
                                )}

                                <div>
                                    <Input
                                        ref={featuredImageRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0] || null;
                                            setData('featured_image', file);
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onload = (event) => {
                                                    setFeaturedImagePreview(event.target?.result as string);
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    />
                                    <InputError message={errors.featured_image} />
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
                                    {processing ? 'Creating...' : 'Create Post'}
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

