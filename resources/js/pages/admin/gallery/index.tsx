import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem } from '@/types';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import HeadingSmall from '@/components/heading-small';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gallery',
        href: '/admin/gallery',
    },
];

interface GalleryImage {
    id: number;
    title: string;
    slug: string;
    alt: string | null;
    image: string | null;
    image_url: string | null;
    order: number;
    is_published: boolean;
    published_at: string | null;
    category: string | null;
    views: number;
    created_at: string;
}

interface Props {
    galleryImages: {
        data: GalleryImage[];
        links: any;
        meta: any;
    };
}

export default function GalleryIndex({ galleryImages }: Props) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this gallery image?')) {
            router.delete(`/admin/gallery/${id}`, {
                preserveScroll: true,
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Gallery Management" />
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <HeadingSmall
                        title="Gallery Images"
                        description="Manage your gallery images"
                    />
                    <Link href="/admin/gallery/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Image
                        </Button>
                    </Link>
                </div>

                <div className="rounded-lg border bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Order</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Views</TableHead>
                                <TableHead>Published</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {galleryImages.data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center text-muted-foreground">
                                        No gallery images found. Add your first image!
                                    </TableCell>
                                </TableRow>
                            ) : (
                                galleryImages.data.map((image) => (
                                    <TableRow key={image.id}>
                                        <TableCell>
                                            {(image.image || image.image_url) ? (
                                                <img
                                                    src={image.image || image.image_url || ''}
                                                    alt={image.alt || image.title}
                                                    className="h-12 w-12 object-cover rounded-md"
                                                />
                                            ) : (
                                                <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                                                    No Image
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            <div className="max-w-md truncate" title={image.title}>
                                                {image.title}
                                            </div>
                                        </TableCell>
                                        <TableCell>{image.category || '-'}</TableCell>
                                        <TableCell>{image.order}</TableCell>
                                        <TableCell>
                                            <Badge variant={image.is_published ? 'default' : 'secondary'}>
                                                {image.is_published ? 'Published' : 'Draft'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{image.views}</TableCell>
                                        <TableCell>
                                            {image.published_at
                                                ? new Date(image.published_at).toLocaleDateString()
                                                : '-'}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={`/admin/gallery/${image.id}/edit`}>
                                                    <Button variant="ghost" size="sm">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleDelete(image.id)}
                                                >
                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                {galleryImages.links && galleryImages.links.length > 3 && (
                    <div className="flex items-center justify-center gap-2">
                        {galleryImages.links.map((link: any, index: number) => (
                            <Link
                                key={index}
                                href={link.url || '#'}
                                className={`px-3 py-2 rounded-md text-sm ${
                                    link.active
                                        ? 'bg-primary text-primary-foreground'
                                        : link.url
                                          ? 'bg-card hover:bg-accent'
                                          : 'bg-card opacity-50 cursor-not-allowed'
                                }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </AppLayout>
    );
}

