import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/Animations/motionPresets';
import useAOSRefresh from '@/hooks/useAOSRefresh';
import LazyImage from '@/components/LazyImage';

export default function About() {
    useAOSRefresh();

    return (
        <SiteLayout>
            <Head title="About" />
            {/* Hero section - Elite White */}
            <section className="w-full relative min-h-screen py-8 sm:py-12 md:py-16 lg:py-12 pt-24 lg:min-h-screen overflow-hidden bg-[#F9F9F7] text-[#0E0E0E] flex items-center justify-center">
                {/* Subtle background texture/pattern */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #0E0E0E 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
                
                {/* Container - mobile responsive layout */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 grid grid-cols-1 lg:grid-cols-2 items-start justify-center w-full gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
                    {/* Left Column: Image + Story Content */}
                    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 order-2 lg:order-1 sm:pt-20 pt-0">
                        {/* Image - Elite Minimal */}
                        <div 
                            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto relative group"
                            data-aos="fade"
                            data-aos-duration="1200"
                        >
                            {/* Decorative frame elements */}
                            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#C9A24D]/20 hidden lg:block"></div>
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#C9A24D]/20 hidden lg:block"></div>
                            
                            <div className="relative overflow-hidden rounded-sm">
                                {/* Subtle shadow/glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out -z-10"></div>
                                
                                <LazyImage
                                    src="/images/about.png"
                                    alt="Arunar seated portrait"
                                    className="w-full sm:h-[35rem] h-[20rem] object-contain mx-auto transition-all duration-700 ease-out group-hover:scale-[1.02]"
                                />
                            </div>
                            
                            {/* Elegant border on hover */}
                            <div className="absolute inset-0 border border-[#E5E5E0] rounded-sm opacity-0 group-hover:opacity-100 group-hover:border-[#C9A24D]/30 transition-all duration-700 ease-out pointer-events-none"></div>
                        </div>

                        {/* Enhanced Story content with better structure */}
                        <div className="w-full max-w-3xl mx-auto relative">
                            {/* Decorative accent line */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent hidden sm:block"></div>
                            
                            {/* Story text - Elite Typography */}
                            <div 
                                className="space-y-6 sm:space-y-7 md:space-y-8 text-[#555555] text-sm sm:text-base md:text-lg leading-[1.85] sm:leading-[1.9] md:leading-[1.95] font-body text-center px-2 sm:px-4"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <p>
                                    I am an entrepreneur driven by a relentless passion for innovation, growth, and excellence. My journey began in <span className="text-[#C9A24D] font-medium">2010</span> with the establishment of <span className="text-[#0E0E0E] font-medium">The Stage 365</span>, setting the foundation for a multi-industry legacy. Over the years, I have expanded my footprint across real estate, construction, interior design, and event management, building brands that redefine industry standards and transform urban landscapes.
                                </p>
                                <p>
                                    From founding <span className="text-[#0E0E0E] font-medium">Area24</span> as a premium real estate solutions provider to evolving it into a fully integrated development and consulting firm, my ventures have consistently focused on quality, sustainability, and customer-centric solutions. The launch of <span className="text-[#0E0E0E] font-medium">Atha Construction Pvt. Ltd.</span> and <span className="text-[#0E0E0E] font-medium">Nesthetix Designs LLP</span> further strengthened my commitment to engineering excellence and luxury interior design, creating spaces that inspire and endure.
                                </p>
                                <p>
                                    Through strategic expansions and corporate structuring, my businesses continue to innovate, transform urban landscapes, and create lasting impact. My entrepreneurial journey is a testament to resilience, vision, and the unwavering pursuit of excellence—building not just companies, but legacies that shape the future.
                                </p>
                            </div>

                            {/* Elite Divider - Enhanced */}
                            <div 
                                className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 mt-10 sm:mt-12 md:mt-16 py-6"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                <div className="h-px flex-1 max-w-16 sm:max-w-20 md:max-w-24 bg-gradient-to-r from-transparent to-[#E5E5E0]"></div>
                                <div className="relative">
                                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#C9A24D]"></div>
                                    <div className="absolute inset-0 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#C9A24D]/20 animate-ping"></div>
                                </div>
                                <div className="h-px w-px bg-[#C9A24D]/30"></div>
                                <div className="relative">
                                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#C9A24D]"></div>
                                    <div className="absolute inset-0 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#C9A24D]/20 animate-ping" style={{animationDelay: '0.5s'}}></div>
                                </div>
                                <div className="h-px flex-1 max-w-16 sm:max-w-20 md:max-w-24 bg-gradient-to-l from-transparent to-[#E5E5E0]"></div>
                            </div>

                            {/* Core Philosophy Section */}
                            
                        </div>
                    </div>

                    {/* Right Column: Label, Quote, Signatures */}
                    <div className="flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center order-1 lg:order-2 pt-0 sm:pt-60 relative">
                        {/* Subtle decorative corner accent - top right */}
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#C9A24D]/10 hidden lg:block"></div>
                        
                        {/* Enhanced Label with subtle animation */}
                        <motion.div 
                            className="group relative"
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-[#C9A24D]/30 hidden lg:block"></div>
                            <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-[#7A7A7A] font-medium relative inline-block">
                                Excellency
                            </p>
                            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-[#C9A24D]/30 hidden lg:block"></div>
                        </motion.div>

                        {/* Enhanced Main quote with better typography */}
                        <div className="relative space-y-3 sm:space-y-4 md:space-y-5 px-4 sm:px-6 md:px-8">
                            {/* Decorative quote marks - Enhanced */}
                            <div className="absolute -left-2 sm:-left-4 md:-left-6 lg:-left-8 top-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#C9A24D]/15 select-none font-accent leading-none">"</div>
                            
                            <motion.h1 
                                className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-[1.15] sm:leading-[1.12] md:leading-[1.1] text-[#0E0E0E] tracking-[0.01em] sm:tracking-[0.02em]"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                            >
                                Creating standards.
                                <br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>
                                Elevating experiences.
                                <br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>
                                Redefining progress.
                            </motion.h1>
                            
                            <div className="absolute -right-2 sm:-right-4 md:-right-6 lg:-right-8 bottom-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#C9A24D]/15 rotate-180 select-none font-accent leading-none">"</div>
                            
                            {/* Subtle underline accent */}
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#C9A24D]/20 to-transparent hidden sm:block"></div>
                        </div>

                        {/* Elite Divider - Enhanced */}
                        <div 
                            className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 py-6 relative"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="h-px flex-1 max-w-16 sm:max-w-20 md:max-w-24 bg-gradient-to-r from-transparent via-[#E5E5E0] to-[#E5E5E0]"></div>
                            <div className="relative flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#C9A24D]"></div>
                                <div className="h-px w-2 bg-[#C9A24D]/40"></div>
                                <div className="h-1.5 w-1.5 rounded-full bg-[#C9A24D]"></div>
                            </div>
                            <div className="h-px flex-1 max-w-16 sm:max-w-20 md:max-w-24 bg-gradient-to-l from-transparent via-[#E5E5E0] to-[#E5E5E0]"></div>
                        </div>

                        {/* Signature section - Enhanced */}
                        <div 
                            className="space-y-4 sm:space-y-5 md:space-y-6 text-[#555555] relative"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            {/* Subtle background accent */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C9A24D]/3 to-transparent rounded-lg -mx-4 sm:-mx-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
                            
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-[0.05em] font-body relative z-10">
                                Founder & CEO
                            </p>
                            <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 relative z-10">
                                <div className="h-px w-10 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-[#E5E5E0]"></div>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.24em] text-[#C9A24D] font-heading font-medium px-4 sm:px-6">
                                    Arunar
                                </p>
                                <div className="h-px w-10 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-[#E5E5E0]"></div>
                            </div>
                            
                            {/* Decorative accent dots */}
                            <div className="flex items-center justify-center gap-2 pt-2">
                                <div className="h-1 w-1 rounded-full bg-[#C9A24D]/40"></div>
                                <div className="h-1 w-1 rounded-full bg-[#C9A24D]/60"></div>
                                <div className="h-1 w-1 rounded-full bg-[#C9A24D]/40"></div>
                            </div>
                        </div>
                        
                        {/* Subtle decorative corner accent - bottom left */}
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#C9A24D]/10 hidden lg:block"></div>
                    </div>
                </div>
            </section>

            {/* Contact Section - Elite White */}
            <section className="relative bg-[#FFFFFF] text-[#0E0E0E] py-16 sm:py-20 md:py-24 lg:py-32">
                
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Title */}
                        <div 
                            className="text-center mb-8 sm:mb-10 md:mb-12"
                            data-aos="fade-up"
                        >
                            <div className="overflow-hidden mb-4 sm:mb-5">
                                <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#7A7A7A] font-medium">Get In Touch</p>
                            </div>
                            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8">
                                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#E5E5E0]" />
                                <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#C9A24D]" />
                                <div className="h-px w-12 sm:w-16 md:w-20 bg-[#E5E5E0]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:items-stretch">
                            {/* Contact Form */}
                            <div 
                                className="flex flex-col h-full"
                                data-aos="fade"
                                data-aos-delay="100"
                            >
                                <div className="mb-6 sm:mb-8">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-[#0E0E0E] mb-2 sm:mb-3 tracking-[0.02em]">Contact</h2>
                                    <p className="text-sm sm:text-base text-[#555555] font-body">Have Any Question?</p>
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
                                                className="w-full px-4 py-3 bg-white border border-[#E5E5E0] rounded-lg text-[#0E0E0E] placeholder-[#7A7A7A] focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D]/20 transition-all duration-700 ease-out text-sm sm:text-base font-body"
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
                                                className="w-full px-4 py-3 bg-white border border-[#E5E5E0] rounded-lg text-[#0E0E0E] placeholder-[#7A7A7A] focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D]/20 transition-all duration-700 ease-out text-sm sm:text-base font-body"
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
                                            className="w-full px-4 py-3 bg-white border border-[#E5E5E0] rounded-lg text-[#0E0E0E] placeholder-[#7A7A7A] focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D]/20 transition-all duration-700 ease-out text-sm sm:text-base font-body"
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
                                            className="w-full px-4 py-3 bg-white border border-[#E5E5E0] rounded-lg text-[#0E0E0E] placeholder-[#7A7A7A] focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D]/20 transition-all duration-700 ease-out text-sm sm:text-base font-body"
                                            placeholder="Subject"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div className="group flex-1 flex flex-col">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={2}
                                            className="w-full px-4 py-3 bg-white border border-[#E5E5E0] rounded-lg text-[#0E0E0E] placeholder-[#7A7A7A] focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D]/20 transition-all duration-700 ease-out resize-none text-sm sm:text-base flex-1 font-body"
                                            placeholder="Your message..."
                        />
                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto px-8 py-3 bg-[#C9A24D] text-[#0E0E0E] font-heading font-medium uppercase tracking-wide rounded-lg hover:bg-[#A8842D] transition-all duration-700 ease-out text-sm sm:text-base border border-[#C9A24D]"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                        </div>

                            {/* Contact Information */}
                            <div 
                                className="space-y-6 sm:space-y-8 flex flex-col text-center"
                                data-aos="fade"
                                data-aos-delay="150"
                            >
                                {/* Address */}
                                <div className="group">
                                    <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#7A7A7A] font-medium mb-3 sm:mb-4">Address</h3>
                                    <p className="text-sm sm:text-base text-[#555555] font-body leading-relaxed">
                                        No.81/37, Ground Floor, The Hulkul,<br />
                                        Lavelle Road, Bengaluru - 560001
                            </p>
                        </div>

                                {/* Email */}
                                <div className="group">
                                    <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#7A7A7A] font-medium mb-3 sm:mb-4">Email Us</h3>
                                    <div className="space-y-2">
                                        <a 
                                            href="mailto:arun.rudraksha@gmail.com" 
                                            className="block text-sm sm:text-base text-[#555555] hover:text-[#C9A24D] font-body transition-colors duration-700 ease-out"
                                        >
                                            arun.rudraksha@gmail.com
                                        </a>
                                        <a 
                                            href="mailto:arun.ar@area24.in" 
                                            className="block text-sm sm:text-base text-[#555555] hover:text-[#C9A24D] font-body transition-colors duration-700 ease-out"
                                        >
                                            arun.ar@area24.in
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group">
                                    <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#7A7A7A] font-medium mb-3 sm:mb-4">Call Now</h3>
                                    <div className="space-y-2">
                                        <a 
                                            href="tel:+919916273917" 
                                            className="block text-sm sm:text-base text-[#555555] hover:text-[#C9A24D] font-body transition-colors duration-700 ease-out"
                                        >
                                            +91 99162 73917
                                        </a>
                                        <a 
                                            href="tel:+919986650509" 
                                            className="block text-sm sm:text-base text-[#555555] hover:text-[#C9A24D] font-body transition-colors duration-700 ease-out"
                                        >
                                            +91 99866 50509
                                        </a>
                                    </div>
                                </div>
                            </div>


                            

                            {/* Map Section */}
                            <div 
                                className="flex flex-col space-y-4 sm:space-y-5"
                                data-aos="fade"
                                data-aos-delay="200"
                            >
                                <div>
                                    <h3 className="text-sm sm:text-base font-heading font-medium text-[#0E0E0E] mb-2 sm:mb-3 tracking-[0.02em]">Hulkul Residency</h3>
                                    <p className="text-xs sm:text-sm text-[#555555] font-body leading-relaxed mb-4">
                                        81, Lavelle Road, Shanthala Nagar,<br />
                                        Ashok Nagar, Bengaluru, Karnataka 560001
                                    </p>
                                    <a 
                                        href="https://maps.google.com/?q=Hulkul+Residency,+Lavelle+Road,+Bengaluru" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#C9A24D] hover:text-[#A8842D] transition-colors duration-700 ease-out"
                                    >
                                        <span>Directions</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Minimap - fills remaining height */}
                                <div className="relative w-full flex-1 min-h-[200px] sm:min-h-[250px] rounded-lg overflow-hidden border border-[#E5E5E0] group hover:border-[#C9A24D] transition-colors duration-700 ease-out">
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
                                    <div className="absolute inset-0 pointer-events-none border border-[#E5E5E0] rounded-lg"></div>
                                </div>
                            </div>

                            

                            
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}

