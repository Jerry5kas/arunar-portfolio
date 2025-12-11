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
            <div className="bg-gradient-to-b from-[#fdf8f1] via-[#fffaf5] to-[#f4eee3] text-[#1b1a16] dark:from-[#090807] dark:via-[#0c0b09] dark:to-[#0f0d0b]">
                <section className="relative min-h-screen overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(212,175,55,0.14),transparent_60%)]" />

                    <div className="relative z-10 flex min-h-screen flex-col justify-center gap-8 px-6 py-16 sm:px-10 lg:px-14">
                        <p className="text-sm uppercase tracking-[0.24em] text-[#d4af37]">Insights</p>
                        <h1 className="max-w-5xl text-4xl font-semibold leading-tight lg:text-5xl">
                            Stories on building, design, and experiences.
                        </h1>
                        <p className="max-w-4xl text-lg text-white/85">
                            Updates from real estate development, construction innovation, luxury interiors, and immersive events—capturing the thinking that shapes each venture.
                        </p>
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                    </div>
                </section>

                <section className="relative overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_28%)]" />
                    <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-3 lg:px-14">
                        {posts.map((post) => (
                            <article key={post.title} className="space-y-3 rounded-[22px] bg-white/5 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">{post.date}</p>
                                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                                <p className="text-sm leading-relaxed text-white/80">{post.excerpt}</p>
                                <button className="text-sm font-semibold text-[#d4af37] transition hover:text-white">Read more</button>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}

