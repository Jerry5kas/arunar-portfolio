import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/Animations/motionPresets';
import useAOSRefresh from '@/hooks/useAOSRefresh';
import LazyImage from '@/components/LazyImage';

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
    useAOSRefresh();

    return (
        <SiteLayout>
            <Head title="Blog - Insights & Stories" />
            <div className="bg-[#F9F9F7] text-[#0E0E0E]">
                {/* Header Section - Elite White */}
                <section className="relative overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] py-24">
                    
                    <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
                        <div className="text-center space-y-6">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                            >
                            <p className="text-sm uppercase tracking-[0.24em] text-[#7A7A7A]">Insights</p>
                            </motion.div>
                            <h1 
                                className="text-5xl font-heading font-medium leading-tight lg:text-6xl xl:text-7xl tracking-[0.02em]"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                Stories on building, design, and experiences.
                            </h1>
                            <p 
                                className="max-w-3xl mx-auto text-lg text-[#555555] font-body"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                Updates from real estate development, construction innovation, luxury interiors, and immersive events—capturing the thinking that shapes each venture.
                            </p>
                            <div 
                                className="h-px w-24 mx-auto bg-[#E5E5E0]"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            />
                        </div>
                    </div>
                </section>

                {/* Blog Cards Section - Elite White */}
                <section className="relative overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] py-24">
                    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
                        {blogs.data.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-xl text-[#7A7A7A] font-body">No blog posts available yet.</p>
                            </div>
                        ) : (
                            <>
                                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                                    {blogs.data.map((post, index) => (
                                        <Link
                                            key={post.id}
                                            href={`/blog/${post.slug}`}
                                            className="group relative overflow-hidden rounded-lg bg-white border border-[#E5E5E0] transition-all duration-1000 ease-out hover:border-[#C9A24D]"
                                            data-aos="fade"
                                            data-aos-delay={index % 3 * 100}
                                        >
                                            {/* Image Section */}
                                            {post.featured_image ? (
                                                <div className="relative h-64 overflow-hidden">
                                                    <LazyImage
                                                        src={post.featured_image}
                                                        alt={post.title}
                                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="relative h-64 bg-[#F6F5F2] flex items-center justify-center">
                                                    <div className="text-center space-y-2">
                                                        <div className="w-16 h-16 mx-auto border-2 border-[#E5E5E0] rounded-full flex items-center justify-center">
                                                            <ArrowRight className="h-6 w-6 text-[#7A7A7A]" />
                                                        </div>
                                                        <p className="text-xs text-[#7A7A7A] uppercase tracking-wider font-body">No Image</p>
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {/* Content Section */}
                                            <div className="p-8 space-y-5">
                                                {/* Meta Info */}
                                                <div className="flex items-center gap-4 text-xs text-[#7A7A7A] flex-wrap font-body">
                                                    {post.published_at && (
                                                        <span className="uppercase tracking-[0.24em] text-[#7A7A7A] font-medium">
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
                                                <h3 className="text-xl font-heading font-medium text-[#0E0E0E] group-hover:text-[#C9A24D] transition-colors duration-700 ease-out line-clamp-2 tracking-[0.02em]">
                                                    {post.title}
                                                </h3>
                                                
                                                {/* Excerpt */}
                                                {post.excerpt && (
                                                    <p className="text-sm leading-relaxed text-[#555555] line-clamp-3 font-body">
                                                        {post.excerpt}
                                                    </p>
                                                )}
                                                
                                                {/* Author */}
                                                {post.author && (
                                                    <p className="text-xs text-[#7A7A7A] pt-3 border-t border-[#E5E5E0] font-body">
                                                        By {post.author}
                                                    </p>
                                                )}
                                                
                                                {/* Read More */}
                                                <div className="flex items-center gap-2 text-sm font-medium text-[#C9A24D] group-hover:text-[#A8842D] transition-colors duration-700 ease-out pt-2">
                                                    Read more
                                                    <ArrowRight className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-1" />
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
                                                className={`px-4 py-2 rounded-md text-sm transition-colors duration-700 ease-out ${
                                                    link.active
                                                        ? 'bg-[#C9A24D] text-[#0E0E0E] font-heading font-medium border border-[#C9A24D]'
                                                        : link.url
                                                          ? 'bg-white border border-[#E5E5E0] text-[#0E0E0E] hover:border-[#C9A24D] hover:text-[#C9A24D]'
                                                          : 'bg-white border border-[#E5E5E0] text-[#7A7A7A] cursor-not-allowed'
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

