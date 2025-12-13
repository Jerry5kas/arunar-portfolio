import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem } from '@/types';
import { Plus, Edit, Trash2 } from 'lucide-react';
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
        title: 'Videos',
        href: '/admin/videos',
    },
];

interface Video {
    id: number;
    title: string;
    slug: string;
    video_url: string;
    video_type: string;
    thumbnail: string | null;
    thumbnail_url: string | null;
    is_published: boolean;
    published_at: string | null;
    category: string | null;
    views: number;
    order: number;
    created_at: string;
}

interface Props {
    videos: {
        data: Video[];
        links: any;
        meta: any;
    };
}

export default function VideoIndex({ videos }: Props) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this video?')) {
            router.delete(`/admin/videos/${id}`, {
                preserveScroll: true,
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Video Management" />
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <HeadingSmall
                        title="Videos"
                        description="Manage your video content"
                    />
                    <Link href="/admin/videos/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Video
                        </Button>
                    </Link>
                </div>

                <div className="rounded-lg border bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Thumbnail</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Order</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Views</TableHead>
                                <TableHead>Published</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {videos.data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={9} className="text-center text-muted-foreground">
                                        No videos found. Add your first video!
                                    </TableCell>
                                </TableRow>
                            ) : (
                                videos.data.map((video) => (
                                    <TableRow key={video.id}>
                                        <TableCell>
                                            {(video.thumbnail || video.thumbnail_url) ? (
                                                <img
                                                    src={video.thumbnail || video.thumbnail_url || ''}
                                                    alt={video.title}
                                                    className="h-12 w-12 object-cover rounded-md"
                                                />
                                            ) : (
                                                <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                                                    No Thumb
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            <div className="max-w-md truncate" title={video.title}>
                                                {video.title}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{video.video_type}</Badge>
                                        </TableCell>
                                        <TableCell>{video.category || '-'}</TableCell>
                                        <TableCell>{video.order}</TableCell>
                                        <TableCell>
                                            <Badge variant={video.is_published ? 'default' : 'secondary'}>
                                                {video.is_published ? 'Published' : 'Draft'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{video.views}</TableCell>
                                        <TableCell>
                                            {video.published_at
                                                ? new Date(video.published_at).toLocaleDateString()
                                                : '-'}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={`/admin/videos/${video.id}/edit`}>
                                                    <Button variant="ghost" size="sm">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleDelete(video.id)}
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
                {videos.links && videos.links.length > 3 && (
                    <div className="flex items-center justify-center gap-2">
                        {videos.links.map((link: any, index: number) => (
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

