import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';
import { Clock, Eye, ArrowLeft, Calendar, User } from 'lucide-react';

interface Blog {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    featured_image: string | null;
    published_at: string | null;
    author: string | null;
    reading_time: number | null;
    views: number;
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
    og_image: string | null;
    og_title: string | null;
    og_description: string | null;
}

interface RelatedPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
    published_at: string | null;
    reading_time: number | null;
}

interface Props {
    blog: Blog;
    relatedPosts: RelatedPost[];
}

export default function BlogShow({ blog, relatedPosts }: Props) {
    return (
        <SiteLayout>
            <Head>
                <title>{blog.meta_title || blog.title}</title>
                {blog.meta_description && (
                    <meta name="description" content={blog.meta_description} />
                )}
                {blog.meta_keywords && (
                    <meta name="keywords" content={blog.meta_keywords} />
                )}
                {/* Open Graph */}
                <meta property="og:title" content={blog.og_title || blog.title} />
                {blog.og_description && (
                    <meta property="og:description" content={blog.og_description} />
                )}
                {blog.og_image && (
                    <meta property="og:image" content={blog.og_image} />
                )}
                <meta property="og:type" content="article" />
            </Head>
            
            <div className="bg-gradient-to-b from-[#fdf8f1] via-[#fffaf5] to-[#f4eee3] text-[#1b1a16] dark:from-[#090807] dark:via-[#0c0b09] dark:to-[#0f0d0b]">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-black text-white py-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(212,175,55,0.14),transparent_60%)]" />

                    <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-[#d4af37] hover:text-white transition-colors mb-8"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Link>
                        
                        <div className="space-y-6">
                            <h1 className="text-4xl font-semibold leading-tight lg:text-5xl xl:text-6xl">
                                {blog.title}
                            </h1>
                            
                            {blog.excerpt && (
                                <p className="text-xl text-white/85 leading-relaxed max-w-4xl">
                                    {blog.excerpt}
                                </p>
                            )}
                            
                            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/70 pt-4 border-t border-white/10">
                                {blog.published_at && (
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-[#d4af37]" />
                                        <span>{blog.published_at}</span>
                                    </div>
                                )}
                                {blog.author && (
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-[#d4af37]" />
                                        <span>{blog.author}</span>
                                    </div>
                                )}
                                {blog.reading_time && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-[#d4af37]" />
                                        <span>{blog.reading_time} min read</span>
                                    </div>
                                )}
                                {blog.views > 0 && (
                                    <div className="flex items-center gap-2">
                                        <Eye className="h-4 w-4 text-[#d4af37]" />
                                        <span>{blog.views} views</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Image */}
                {blog.featured_image && (
                    <section className="relative -mt-12 z-10 px-6 sm:px-10 lg:px-14">
                        <div className="mx-auto max-w-6xl">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src={blog.featured_image}
                                    alt={blog.title}
                                    className="w-full h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                        </div>
                    </section>
                )}

                {/* Content Section */}
                <section className="relative py-16 px-6 sm:px-10 lg:px-14">
                    <div className="mx-auto max-w-6xl">
                        <article className="prose prose-lg dark:prose-invert max-w-none 
                            prose-headings:font-semibold prose-headings:text-[#1b1a16] dark:prose-headings:text-white
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                            prose-p:text-[#1b1a16]/90 dark:prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
                            prose-a:text-[#d4af37] dark:prose-a:text-[#d4af37] prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-[#1b1a16] dark:prose-strong:text-white prose-strong:font-semibold
                            prose-ul:text-[#1b1a16]/90 dark:prose-ul:text-white/80 prose-ul:my-6
                            prose-ol:text-[#1b1a16]/90 dark:prose-ol:text-white/80 prose-ol:my-6
                            prose-li:text-[#1b1a16]/90 dark:prose-li:text-white/80 prose-li:my-2
                            prose-blockquote:border-l-4 prose-blockquote:border-[#d4af37] prose-blockquote:pl-6 prose-blockquote:italic
                            prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8">
                            <div
                                className="text-[#1b1a16] dark:text-white/90 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </article>
                    </div>
                </section>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="relative overflow-hidden bg-black text-white py-20 px-6 sm:px-10 lg:px-14">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_28%)]" />
                        <div className="relative mx-auto max-w-6xl">
                            <h2 className="text-3xl font-semibold mb-12 text-center">
                                Related Stories
                            </h2>
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {relatedPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        className="group space-y-4 rounded-[22px] bg-white/5 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.35)] backdrop-blur transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] hover:-translate-y-1"
                                    >
                                        {post.featured_image && (
                                            <div className="relative overflow-hidden rounded-lg aspect-video">
                                                <img
                                                    src={post.featured_image}
                                                    alt={post.title}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            </div>
                                        )}
                                        
                                        <div className="space-y-3">
                                            {post.published_at && (
                                                <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">
                                                    {post.published_at}
                                                </p>
                                            )}
                                            
                                            <h3 className="text-xl font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                                                {post.title}
                                            </h3>
                                            
                                            {post.excerpt && (
                                                <p className="text-sm leading-relaxed text-white/80 line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                            
                                            {post.reading_time && (
                                                <div className="flex items-center gap-2 text-xs text-white/60">
                                                    <Clock className="h-3 w-3" />
                                                    <span>{post.reading_time} min read</span>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </SiteLayout>
    );
}

