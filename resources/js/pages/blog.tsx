import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

const posts = [
    {
        title: 'The Evolution of Area24: Transforming Real Estate with Innovation',
        date: 'January 01, 2025',
        excerpt:
            "Area24 grew from a consultancy into a full-fledged development firm, reshaping urban landscapes with sustainable construction, modern design, and customer-centric solutions.",
    },
    {
        title: 'The Aesthetics: How Nesthetix Designs is Redefining Luxury Interiors',
        date: 'January 17, 2025',
        excerpt:
            'Nesthetix Designs fuses elegance with functionality—delivering bespoke interiors, smart home integrations, and timeless craftsmanship for premium spaces.',
    },
    {
        title: 'From Concept to Reality: The Rise of Atha Construction in Modern Infrastructure',
        date: 'February 11, 2025',
        excerpt:
            'Atha Construction leads with sustainable materials, energy-efficient designs, and smart techniques—building durable, future-ready infrastructure.',
    },
];

export default function Blog() {
    return (
        <SiteLayout>
            <Head title="Blog" />
            <div className="space-y-16 bg-gradient-to-b from-[#fdfaf5] via-[#fbf5ea] to-[#f3ebde] px-6 pb-24 pt-14 text-[#1b1a16] dark:from-[#0b0a0a] dark:via-[#0e0c0b] dark:to-[#100e0c] lg:px-12">
                {/* Hero */}
                <section className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white/90 px-8 py-14 shadow-[0_26px_90px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#0f0d0b]/90 dark:shadow-[0_26px_90px_rgba(0,0,0,0.45)] lg:px-16">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_38%),radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.14),transparent_32%)]" />
                    <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-6 text-[14vw] font-extrabold uppercase leading-none text-[#ece5d5] opacity-60 mix-blend-multiply dark:text-white/5 lg:text-[9vw]">
                        <span>Blog</span>
                    </div>
                    <div className="relative space-y-5">
                        <p className="text-sm uppercase tracking-[0.28em] text-[#8a7b55] dark:text-[#cbb478]">Insights</p>
                        <h1 className="text-4xl font-semibold leading-[1.05] text-[#1b1a16] dark:text-white">
                            Stories on building, design, and experiences.
                        </h1>
                        <p className="max-w-3xl text-lg text-[#3f3a31] dark:text-[#d6cdb6]">
                            Updates from real estate development, construction innovation, luxury interiors, and immersive events—capturing the thinking
                            that shapes each venture.
                        </p>
                    </div>
                </section>

                {/* Posts */}
                <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.title}
                            className="group relative overflow-hidden rounded-[22px] border border-black/5 bg-white/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-[#12100d]/90 dark:shadow-[0_24px_90px_rgba(0,0,0,0.4)]"
                        >
                            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#8d6a2a]/15" />
                            </div>
                            <div className="relative space-y-3">
                                <p className="text-xs uppercase tracking-[0.24em] text-[#9b8b4b] dark:text-[#e3c464]">{post.date}</p>
                                <h3 className="text-xl font-semibold text-[#1b1a16] dark:text-white">{post.title}</h3>
                                <p className="text-sm leading-relaxed text-[#3f3a31] dark:text-[#d6cdb6]">{post.excerpt}</p>
                                <button className="text-sm font-semibold text-[#9b8b4b] transition hover:text-[#6f5f33] dark:text-[#e3c464] dark:hover:text-[#cbb478]">
                                    Read more
                                </button>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </SiteLayout>
    );
}

