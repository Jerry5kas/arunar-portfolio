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
        title: 'Blogs',
        href: '/admin/blogs',
    },
];

interface Blog {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
    is_published: boolean;
    published_at: string | null;
    views: number;
    created_at: string;
}

interface Props {
    blogs: {
        data: Blog[];
        links: any;
        meta: any;
    };
}

export default function BlogIndex({ blogs }: Props) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this blog post?')) {
            router.delete(`/admin/blogs/${id}`, {
                preserveScroll: true,
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Blog Management" />
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <HeadingSmall
                        title="Blog Posts"
                        description="Manage your blog posts and articles"
                    />
                    <Link href="/admin/blogs/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Create Post
                        </Button>
                    </Link>
                </div>

                <div className="rounded-lg border bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Views</TableHead>
                                <TableHead>Published</TableHead>
                                <TableHead>Created</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {blogs.data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center text-muted-foreground">
                                        No blog posts found. Create your first post!
                                    </TableCell>
                                </TableRow>
                            ) : (
                                blogs.data.map((blog) => (
                                    <TableRow key={blog.id}>
                                        <TableCell>
                                            {blog.featured_image ? (
                                                <img
                                                    src={blog.featured_image}
                                                    alt={blog.title}
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />
                                            ) : (
                                                <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center text-xs text-muted-foreground">
                                                    No Image
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            <div className="max-w-md truncate" title={blog.title}>
                                                {blog.title}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={blog.is_published ? 'default' : 'secondary'}>
                                                {blog.is_published ? 'Published' : 'Draft'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{blog.views}</TableCell>
                                        <TableCell>
                                            {blog.published_at
                                                ? new Date(blog.published_at).toLocaleDateString()
                                                : '-'}
                                        </TableCell>
                                        <TableCell>
                                            {new Date(blog.created_at).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={`/blog/${blog.slug}`} target="_blank">
                                                    <Button variant="ghost" size="sm">
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                                <Link href={`/admin/blogs/${blog.id}/edit`}>
                                                    <Button variant="ghost" size="sm">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleDelete(blog.id)}
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
                {blogs.links && blogs.links.length > 3 && (
                    <div className="flex items-center justify-center gap-2">
                        {blogs.links.map((link: any, index: number) => (
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

