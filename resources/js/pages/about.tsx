import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <SiteLayout>
            <Head title="About" />
            {/* Hero section */}
            <section className="relative min-h-screen py-8 sm:py-12 md:py-16 lg:py-12 lg:min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
                {/* Enhanced radial background overlays with animation */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_70%)] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.08),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(212,175,55,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
                
                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
                
                {/* Container - mobile responsive layout */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 flex flex-col lg:flex-row items-start justify-center lg:justify-evenly gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-full">
                    {/* Text content */}
                    <div className="flex w-full max-w-4xl flex-col items-center gap-4 sm:gap-6 md:gap-8 text-center order-2 lg:order-1">
                        {/* Enhanced Label with subtle animation */}
                        <div className="overflow-hidden group">
                            <div className="inline-block">
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium relative">
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></span>
                                    <span className="relative">Excellency</span>
                                </p>
                            </div>
                        </div>

                        {/* Enhanced Main quote with better typography */}
                        <div className="relative space-y-2 sm:space-y-3 md:space-y-4 px-4 sm:px-6 md:px-0">
                            <div className="absolute -left-4 sm:-left-6 md:-left-8 top-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#d4af37]/20 select-none" style={{ fontFamily: 'serif' }}>
                                "
                            </div>
                            <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-white px-2 sm:px-4">
                                <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                                Creating standards.
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                                Elevating experiences.
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                                Redefining progress.
                                </span>
                            </h1>
                            <div className="absolute -right-4 sm:-right-6 md:-right-8 bottom-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#d4af37]/20 rotate-180 select-none" style={{ fontFamily: 'serif' }}>
                                "
                            </div>
                        </div>

                        {/* Enhanced Decorative divider with glow effect */}
                        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 py-2">
                            <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
                            <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.6)] animate-pulse" style={{ animationDuration: '2s' }} />
                            <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent via-[#d4af37]/30 to-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
                        </div>

                        {/* Enhanced Signature section */}
                        <div className="space-y-2 sm:space-y-3 md:space-y-4 text-white/90">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide font-light">
                                Founder & CEO
                            </p>
                            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                                <div className="h-px w-8 sm:w-10 md:w-12 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-[#d4af37]" />
                                <p className="text-sm sm:text-base md:text-base lg:text-lg uppercase tracking-[0.22em] text-[#d4af37] font-semibold relative group">
                                    <span className="relative z-10">Arunar</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></span>
                                </p>
                                <div className="h-px w-8 sm:w-10 md:w-12 bg-gradient-to-l from-transparent via-[#d4af37]/50 to-[#d4af37]" />
                            </div>
                        </div>

                        {/* Enhanced Story content with better structure */}
                        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 w-full max-w-3xl">
                            {/* Label */}
                            {/* <div className="overflow-hidden mb-4 sm:mb-5 md:mb-6">
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium">About Me</p>
                            </div> */}

                            {/* Enhanced Story text with better typography */}
                            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-white/80 sm:text-white/85 md:text-white/90 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed md:leading-relaxed">
                                <p className="font-light">
                                    I am an entrepreneur driven by a relentless passion for innovation, growth, and excellence. My journey began in <span className="text-[#d4af37] font-medium">2010</span> with the establishment of <span className="text-white font-medium">The Stage 365</span>, setting the foundation for a multi-industry legacy. Over the years, I have expanded my footprint across real estate, construction, interior design, and event management, building brands that redefine industry standards and transform urban landscapes.
                                </p>
                                <p className="font-light">
                                    From founding <span className="text-white font-medium">Area24</span> as a premium real estate solutions provider to evolving it into a fully integrated development and consulting firm, my ventures have consistently focused on quality, sustainability, and customer-centric solutions. The launch of <span className="text-white font-medium">Atha Construction Pvt. Ltd.</span> and <span className="text-white font-medium">Nesthetix Designs LLP</span> further strengthened my commitment to engineering excellence and luxury interior design, creating spaces that inspire and endure.
                                </p>
                                <p className="font-light">
                                    Through strategic expansions and corporate structuring, my businesses continue to innovate, transform urban landscapes, and create lasting impact. My entrepreneurial journey is a testament to resilience, vision, and the unwavering pursuit of excellence—building not just companies, but legacies that shape the future.
                                </p>
                            </div>

                            {/* Enhanced Decorative divider */}
                            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10 py-2">
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
                                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent via-[#d4af37]/30 to-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
                            </div>

                            {/* Core Philosophy Section */}
                            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 w-full">
                                {/* Section Label */}
                                <div className="overflow-hidden mb-6 sm:mb-8 text-center">
                                    <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium">Core Philosophy</p>
                                </div>

                                {/* Responsive Grid: 1 column on mobile, 3 columns on larger screens */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                                    {/* Innovation Card */}
                                    <div className="group relative p-5 sm:p-6 rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-[#d4af37]/5 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                                        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                                                <img 
                                                    src="/images/idea.png" 
                                                    alt="Innovation" 
                                                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain relative z-10 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="space-y-1 sm:space-y-2">
                                                <h3 className="text-sm sm:text-base font-semibold text-white uppercase tracking-wide">Innovation</h3>
                                                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Pioneering solutions that shape tomorrow</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Excellence Card */}
                                    <div className="group relative p-5 sm:p-6 rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-[#d4af37]/5 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                                        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                                                <img 
                                                    src="/images/iso-certificate.png" 
                                                    alt="Excellence" 
                                                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain relative z-10 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="space-y-1 sm:space-y-2">
                                                <h3 className="text-sm sm:text-base font-semibold text-white uppercase tracking-wide">Excellence</h3>
                                                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Uncompromising quality in every endeavor</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sustainability Card */}
                                    <div className="group relative p-5 sm:p-6 rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-[#d4af37]/5 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                                        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                                                <img 
                                                    src="/images/sustainable-building.png" 
                                                    alt="Sustainability" 
                                                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain relative z-10 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="space-y-1 sm:space-y-2">
                                                <h3 className="text-sm sm:text-base font-semibold text-white uppercase tracking-wide">Sustainability</h3>
                                                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Building for future generations</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Image with better styling */}
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md order-1 lg:order-2 mb-4 sm:mb-6 md:mb-8 lg:mb-0 relative group lg:pt-32">
                        {/* Image Container */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img
                            src="/images/about.png"
                            alt="Arunar seated portrait"
                                    className="aspect-[3/4] w-full object-cover mx-auto relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                            style={{ 
                                clipPath: 'ellipse(78% 65% at 50% 42%)'
                            }}
                        />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)]" />
                
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Title */}
                        <div className="text-center mb-8 sm:mb-10 md:mb-12">
                            <div className="overflow-hidden mb-3 sm:mb-4">
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#d4af37] font-medium">Get In Touch</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5">
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-[#d4af37]" />
                                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#d4af37]" />
                                <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent via-[#d4af37]/30 to-[#d4af37]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:items-stretch">
                            {/* Contact Form */}
                            <div className="flex flex-col h-full">
                                <div className="mb-6 sm:mb-8">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-3">Contact</h2>
                                    <p className="text-sm sm:text-base text-white/70 font-light">Have Any Question?</p>
                                </div>

                                <form className="space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between">
                                    {/* Name and Lastname Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                        {/* Name Field */}
                                        <div className="group">
                                            {/* <label htmlFor="name" className="block text-xs sm:text-sm text-white/70 font-light mb-2 uppercase tracking-wide">
                                                Name
                                            </label> */}
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full px-4 py-3 bg-black/30 border border-[#d4af37]/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/30 transition-all duration-300 text-sm sm:text-base"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        {/* Lastname Field */}
                                        <div className="group">
                                            {/* <label htmlFor="lastname" className="block text-xs sm:text-sm text-white/70 font-light mb-2 uppercase tracking-wide">
                                                Lastname
                                            </label> */}
                                            <input
                                                type="text"
                                                id="lastname"
                                                name="lastname"
                                                className="w-full px-4 py-3 bg-black/30 border border-[#d4af37]/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/30 transition-all duration-300 text-sm sm:text-base"
                                                placeholder="Your lastname"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="group">
                                        {/* <label htmlFor="email" className="block text-xs sm:text-sm text-white/70 font-light mb-2 uppercase tracking-wide">
                                            Email
                                        </label> */}
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 bg-black/30 border border-[#d4af37]/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/30 transition-all duration-300 text-sm sm:text-base"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    {/* Subject Field */}
                                    <div className="group">
                                        {/* <label htmlFor="subject" className="block text-xs sm:text-sm text-white/70 font-light mb-2 uppercase tracking-wide">
                                            Subject
                                        </label> */}
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="w-full px-4 py-3 bg-black/30 border border-[#d4af37]/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/30 transition-all duration-300 text-sm sm:text-base"
                                            placeholder="Subject"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div className="group flex-1 flex flex-col">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={2}
                                            className="w-full px-4 py-3 bg-black/30 border border-[#d4af37]/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/30 transition-all duration-300 resize-none text-sm sm:text-base flex-1"
                                            placeholder="Your message..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto px-8 py-3 bg-[#d4af37] text-black font-semibold uppercase tracking-wide rounded-lg hover:bg-[#f4d03f] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 text-sm sm:text-base"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6 sm:space-y-8 flex flex-col text-center">
                                {/* Address */}
                                <div className="group">
                                    <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#d4af37] font-medium mb-3 sm:mb-4">Address</h3>
                                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                                        No.81/37, Ground Floor, The Hulkul,<br />
                                        Lavelle Road, Bengaluru - 560001
                                    </p>
                                </div>

                                {/* Email */}
                                <div className="group">
                                    <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#d4af37] font-medium mb-3 sm:mb-4">Email Us</h3>
                                    <div className="space-y-2">
                                        <a 
                                            href="mailto:arun.rudraksha@gmail.com" 
                                            className="block text-sm sm:text-base text-white/80 hover:text-[#d4af37] font-light transition-colors duration-300"
                                        >
                                            arun.rudraksha@gmail.com
                                        </a>
                                        <a 
                                            href="mailto:arun.ar@area24.in" 
                                            className="block text-sm sm:text-base text-white/80 hover:text-[#d4af37] font-light transition-colors duration-300"
                                        >
                                            arun.ar@area24.in
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group">
                                    <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#d4af37] font-medium mb-3 sm:mb-4">Call Now</h3>
                                    <div className="space-y-2">
                                        <a 
                                            href="tel:+919916273917" 
                                            className="block text-sm sm:text-base text-white/80 hover:text-[#d4af37] font-light transition-colors duration-300"
                                        >
                                            +91 99162 73917
                                        </a>
                                        <a 
                                            href="tel:+919986650509" 
                                            className="block text-sm sm:text-base text-white/80 hover:text-[#d4af37] font-light transition-colors duration-300"
                                        >
                                            +91 99866 50509
                                        </a>
                                    </div>
                                </div>
                            </div>


                            

                            {/* Map Section */}
                            <div className="flex flex-col space-y-4 sm:space-y-5">
                                <div>
                                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3">Hulkul Residency</h3>
                                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-4">
                                        81, Lavelle Road, Shanthala Nagar,<br />
                                        Ashok Nagar, Bengaluru, Karnataka 560001
                                    </p>
                                    <a 
                                        href="https://maps.google.com/?q=Hulkul+Residency,+Lavelle+Road,+Bengaluru" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#d4af37] hover:text-[#f4d03f] transition-colors duration-300"
                                    >
                                        <span>Directions</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Minimap - fills remaining height */}
                                <div className="relative w-full flex-1 min-h-[200px] sm:min-h-[250px] rounded-lg overflow-hidden border border-[#d4af37]/20 group hover:border-[#d4af37]/40 transition-colors duration-300">
                                    <iframe
                                        src="https://www.google.com/maps?q=Hulkul+Residency,+81+Lavelle+Road,+Bengaluru,+Karnataka+560001&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'grayscale(0.3) brightness(0.8) contrast(1.2)' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full absolute inset-0"
                                        title="Hulkul Residency Location"
                                    />
                                    <div className="absolute inset-0 pointer-events-none border border-[#d4af37]/10 rounded-lg"></div>
                                </div>
                            </div>

                            

                            
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}

