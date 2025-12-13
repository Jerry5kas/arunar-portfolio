import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';
import { Clock, Eye, ArrowRight } from 'lucide-react';

interface Blog {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
    published_at: string | null;
    author: string | null;
    reading_time: number | null;
    views: number;
}

interface Props {
    blogs: {
        data: Blog[];
        links: any;
        meta: any;
    };
}

export default function Blog({ blogs }: Props) {
    return (
        <SiteLayout>
            <Head title="Blog - Insights & Stories" />
            <div className="bg-gradient-to-b from-[#fdf8f1] via-[#fffaf5] to-[#f4eee3] text-[#1b1a16] dark:from-[#090807] dark:via-[#0c0b09] dark:to-[#0f0d0b]">
                {/* Header Section - Taglines, Title, Description */}
                <section className="relative overflow-hidden bg-black text-white py-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(212,175,55,0.14),transparent_60%)]" />
                    
                    <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
                        <div className="text-center space-y-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Insights</p>
                            <h1 className="text-4xl font-semibold leading-tight lg:text-5xl xl:text-6xl">
                                Stories on building, design, and experiences.
                            </h1>
                            <p className="max-w-3xl mx-auto text-lg text-white/85">
                                Updates from real estate development, construction innovation, luxury interiors, and immersive events—capturing the thinking that shapes each venture.
                            </p>
                            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                        </div>
                    </div>
                </section>

                {/* Blog Cards Section */}
                <section className="relative overflow-hidden bg-black text-white py-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_28%)]" />
                    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
                        {blogs.data.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-xl text-white/60">No blog posts available yet.</p>
                            </div>
                        ) : (
                            <>
                                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    {blogs.data.map((post) => (
                                        <Link
                                            key={post.id}
                                            href={`/blog/${post.slug}`}
                                            className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur shadow-[0_22px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] hover:-translate-y-1"
                                        >
                                            {/* Image Section */}
                                            {post.featured_image ? (
                                                <div className="relative h-64 overflow-hidden">
                                                    <img
                                                        src={post.featured_image}
                                                        alt={post.title}
                                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                                </div>
                                            ) : (
                                                <div className="relative h-64 bg-gradient-to-br from-[#d4af37]/20 to-black/40 flex items-center justify-center">
                                                    <div className="text-center space-y-2">
                                                        <div className="w-16 h-16 mx-auto border-2 border-[#d4af37]/50 rounded-full flex items-center justify-center">
                                                            <ArrowRight className="h-6 w-6 text-[#d4af37]" />
                                                        </div>
                                                        <p className="text-xs text-white/60 uppercase tracking-wider">No Image</p>
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {/* Content Section */}
                                            <div className="p-6 space-y-4">
                                                {/* Meta Info */}
                                                <div className="flex items-center gap-4 text-xs text-white/60 flex-wrap">
                                                    {post.published_at && (
                                                        <span className="uppercase tracking-[0.24em] text-[#d4af37] font-medium">
                                                            {post.published_at}
                                                        </span>
                                                    )}
                                                    {post.reading_time && (
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="h-3 w-3" />
                                                            {post.reading_time} min read
                                                        </span>
                                                    )}
                                                    {post.views > 0 && (
                                                        <span className="flex items-center gap-1">
                                                            <Eye className="h-3 w-3" />
                                                            {post.views}
                                                        </span>
                                                    )}
                                                </div>
                                                
                                                {/* Title */}
                                                <h3 className="text-xl font-semibold text-white group-hover:text-[#d4af37] transition-colors line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                
                                                {/* Excerpt */}
                                                {post.excerpt && (
                                                    <p className="text-sm leading-relaxed text-white/80 line-clamp-3">
                                                        {post.excerpt}
                                                    </p>
                                                )}
                                                
                                                {/* Author */}
                                                {post.author && (
                                                    <p className="text-xs text-white/60 pt-2 border-t border-white/10">
                                                        By {post.author}
                                                    </p>
                                                )}
                                                
                                                {/* Read More */}
                                                <div className="flex items-center gap-2 text-sm font-semibold text-[#d4af37] group-hover:text-white transition-colors pt-2">
                                                    Read more
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {blogs.links && blogs.links.length > 3 && (
                                    <div className="flex items-center justify-center gap-2 mt-12">
                                        {blogs.links.map((link: any, index: number) => (
                                            <Link
                                                key={index}
                                                href={link.url || '#'}
                                                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                                                    link.active
                                                        ? 'bg-[#d4af37] text-black font-semibold'
                                                        : link.url
                                                          ? 'bg-white/5 text-white hover:bg-white/10'
                                                          : 'bg-white/5 text-white/30 cursor-not-allowed'
                                                }`}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}

