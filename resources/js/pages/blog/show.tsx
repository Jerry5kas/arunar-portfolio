import SiteLayout from '@/layouts/site-layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Clock, Eye, ArrowLeft, Calendar, User } from 'lucide-react';
import { type SharedData } from '@/types';

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
    const page = usePage<SharedData>();
    const accentColor = page.props.theme?.accentColor || '#C9A24D';
    
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
            
            <div className="bg-[#F9F9F7] text-[#0E0E0E]">
                {/* Hero Section - Elite White */}
                <section className="relative overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] py-24">

                    <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-[#555555] hover:text-[#C9A24D] transition-colors duration-700 ease-out mb-12"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Link>
                        
                        <div className="space-y-8">
                            <h1 className="text-5xl font-heading font-medium leading-tight lg:text-6xl xl:text-7xl text-[#0E0E0E] tracking-[0.02em]">
                                {blog.title}
                            </h1>
                            
                            {blog.excerpt && (
                                <p className="text-xl text-[#555555] leading-relaxed max-w-4xl font-body">
                                    {blog.excerpt}
                                </p>
                            )}
                            
                            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-[#7A7A7A] pt-6 border-t border-[#E5E5E0]">
                                {blog.published_at && (
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-[#7A7A7A]" />
                                        <span>{blog.published_at}</span>
                                    </div>
                                )}
                                {blog.author && (
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-[#7A7A7A]" />
                                        <span>{blog.author}</span>
                                    </div>
                                )}
                                {blog.reading_time && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-[#7A7A7A]" />
                                        <span>{blog.reading_time} min read</span>
                                    </div>
                                )}
                                {blog.views > 0 && (
                                    <div className="flex items-center gap-2">
                                        <Eye className="h-4 w-4 text-[#7A7A7A]" />
                                        <span>{blog.views} views</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Image - Elite Minimal */}
                {blog.featured_image && (
                    <section className="relative -mt-12 z-10 px-6 sm:px-10 lg:px-14">
                        <div className="mx-auto max-w-6xl">
                            <div className="relative overflow-hidden">
                                <img
                                    src={blog.featured_image}
                                    alt={blog.title}
                                    className="w-full h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
                                />
                            </div>
                        </div>
                    </section>
                )}

                {/* Content Section - Elite Editorial */}
                <section className="relative py-20 px-6 sm:px-10 lg:px-14 bg-[#F9F9F7]">
                    <div className="mx-auto max-w-4xl">
                        <article className="prose prose-lg max-w-none font-body
                            prose-headings:font-heading prose-headings:font-medium prose-headings:text-[#0E0E0E] prose-headings:tracking-[0.02em]
                            prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-8 prose-h1:text-[#0E0E0E]
                            prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-7 prose-h2:text-[#0E0E0E]
                            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-5 prose-h3:text-[#0E0E0E]
                            prose-p:text-[#0E0E0E] prose-p:leading-[1.8] prose-p:mb-7 prose-p:font-body
                            prose-a:text-[#C9A24D] prose-a:no-underline prose-a:border-b prose-a:border-[#C9A24D] prose-a:pb-0.5 hover:prose-a:text-[#A8842D] hover:prose-a:border-[#A8842D] transition-colors duration-700
                            prose-strong:text-[#0E0E0E] prose-strong:font-medium
                            prose-ul:text-[#0E0E0E] prose-ul:my-8 prose-ul:leading-relaxed
                            prose-ol:text-[#0E0E0E] prose-ol:my-8 prose-ol:leading-relaxed
                            prose-li:text-[#0E0E0E] prose-li:my-3 prose-li:leading-relaxed
                            prose-blockquote:border-l-[3px] prose-blockquote:border-[#C9A24D] prose-blockquote:pl-8 prose-blockquote:italic prose-blockquote:text-[#555555] prose-blockquote:font-accent prose-blockquote:font-light
                            prose-img:my-10 prose-img:w-full
                            prose-hr:border-[#E5E5E0] prose-hr:my-12">
                            <div
                                className="text-[#0E0E0E] leading-[1.8] text-justify font-body"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </article>
                    </div>
                </section>

                {/* Related Posts - Elite White Cards */}
                {relatedPosts.length > 0 && (
                    <section className="relative overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] py-24 px-6 sm:px-10 lg:px-14">
                        <div className="relative mx-auto max-w-6xl">
                            <h2 className="text-4xl font-heading font-medium mb-16 text-center text-[#0E0E0E] tracking-[0.02em]">
                                Related Stories
                            </h2>
                            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                                {relatedPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        className="group space-y-5 bg-white p-8 border border-[#E5E5E0] transition-all duration-1000 ease-out hover:border-[#C9A24D]"
                                    >
                                        {post.featured_image && (
                                            <div className="relative overflow-hidden aspect-video">
                                                <img
                                                    src={post.featured_image}
                                                    alt={post.title}
                                                    className="h-full w-full object-cover transition-opacity duration-1000 ease-out group-hover:opacity-90"
                                                />
                                            </div>
                                        )}
                                        
                                        <div className="space-y-4">
                                            {post.published_at && (
                                                <p className="text-xs uppercase tracking-wider text-[#7A7A7A]">
                                                    {post.published_at}
                                                </p>
                                            )}
                                            
                                            <h3 className="text-xl font-heading font-medium text-[#0E0E0E] group-hover:text-[#C9A24D] transition-colors duration-700 tracking-[0.02em]">
                                                {post.title}
                                            </h3>
                                            
                                            {post.excerpt && (
                                                <p className="text-sm leading-relaxed text-[#555555] line-clamp-3 font-body">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                            
                                            {post.reading_time && (
                                                <div className="flex items-center gap-2 text-xs text-[#7A7A7A] pt-2 border-t border-[#E5E5E0]">
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

