<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $blogs = [
            [
                'title' => 'The Evolution of Area24: Transforming Real Estate with Innovation',
                'slug' => 'the-evolution-of-area24-transforming-real-estate-with-innovation',
                'excerpt' => 'Area24 grew from a consultancy into a full-fledged development firm, reshaping urban landscapes with sustainable construction, modern design, and customer-centric solutions.',
                'content' => '<h2>Introduction</h2>
<p>The real estate industry is evolving rapidly, and Area24 has been a game-changer in this transformation. What started as a real estate consultancy has now grown into a full-fledged development firm, reshaping urban landscapes and setting new standards in the industry. Area24\'s journey is built on innovation, quality, and a commitment to customer-centric solutions.</p>

<h2>The Beginning: Laying the Foundation</h2>
<p>Every great venture begins with a vision. Area24 started as a real estate consultancy with a focus on guiding clients to make informed property decisions. With a deep understanding of market trends, legal frameworks, and investment strategies, the company quickly gained credibility in the real estate sector.</p>

<h2>Expansion & Growth: From Consultancy to Development</h2>
<p>As the demand for high-quality residential and commercial spaces grew, Area24 transitioned into property management, sales, and eventually full-scale real estate development. By focusing on sustainable construction and modern design, Area24 has successfully developed landmark projects that combine aesthetics with functionality.</p>

<h2>Setting New Benchmarks in Real Estate</h2>
<p>Area24 has led the industry with its innovative approach, ensuring that every project delivers superior value. The company\'s portfolio includes premium residential developments, commercial hubs, and mixed-use spaces that reflect a blend of luxury and convenience.</p>

<h2>The Future of Real Estate and Area24\'s Role</h2>
<p>With smart cities and sustainable living becoming the norm, Area24 is at the forefront of adopting cutting-edge technology and eco-friendly building practices. From energy-efficient buildings to AI-driven property management, the company continues to shape the future of real estate.</p>

<h2>Conclusion</h2>
<p>Area24\'s success story is a testament to its ability to innovate and adapt to market changes. As the real estate industry continues to evolve, Area24 remains committed to setting new standards in quality, design, and customer satisfaction.</p>',
                'is_published' => true,
                'published_at' => '2025-01-01 10:00:00',
                'author' => 'Arunar',
                'meta_title' => 'The Evolution of Area24: Transforming Real Estate with Innovation',
                'meta_description' => 'Discover how Area24 evolved from a real estate consultancy into a leading development firm, reshaping urban landscapes with innovation, sustainability, and customer-centric solutions.',
                'meta_keywords' => 'Area24, real estate, property development, sustainable construction, real estate innovation, property consultancy',
                'og_title' => 'The Evolution of Area24: Transforming Real Estate with Innovation',
                'og_description' => 'Area24\'s journey from consultancy to full-fledged development firm, setting new standards in real estate with innovation and quality.',
            ],
            [
                'title' => 'The Aesthetics: How Nesthetix Designs is Redefining Luxury Interiors',
                'slug' => 'the-aesthetics-how-nesthetix-designs-is-redefining-luxury-interiors',
                'excerpt' => 'Nesthetix Designs fuses elegance with functionality—delivering bespoke interiors, smart home integrations, and timeless craftsmanship for premium spaces.',
                'content' => '<h2>Introduction</h2>
<p>Interior design goes beyond aesthetics; it\'s about crafting experiences that elevate spaces. Nesthetix Designs has positioned itself as a leader in luxury interiors, delivering bespoke solutions that fuse elegance with functionality. With a deep understanding of global trends and client aspirations, Nesthetix Designs transforms living and working spaces into timeless masterpieces.</p>

<h2>The Art of Personalization</h2>
<p>Nesthetix Designs believes that every space should reflect the personality and lifestyle of its owner. From modern minimalism to opulent luxury, the company curates designs that tell a story. Through collaborative consultation and meticulous planning, every project is uniquely tailored to its client.</p>

<h2>Innovative Design Trends Shaping the Future</h2>
<ul>
<li><strong>Sustainable & Eco-friendly Materials:</strong> The use of reclaimed wood, organic fabrics, and energy-efficient lighting is becoming a priority.</li>
<li><strong>Smart Home Integration:</strong> AI-driven automation for lighting, temperature control, and security enhances convenience.</li>
<li><strong>Timeless Elegance:</strong> A fusion of traditional craftsmanship with contemporary aesthetics is gaining prominence.</li>
</ul>

<h2>Case Study: Transforming a Luxury Penthouse</h2>
<p>Nesthetix Designs recently reimagined a luxury penthouse, combining modern sophistication with classical elements. By utilizing custom-made furniture, artistic lighting, and high-end materials, the space was transformed into an elegant sanctuary that exudes warmth and style.</p>

<h2>Why Luxury Interiors Matter</h2>
<p>Beyond beauty, well-designed interiors impact mood, productivity, and overall well-being. Whether it\'s a home, office, or commercial space, investing in premium interiors adds long-term value.</p>

<h2>Conclusion</h2>
<p>Nesthetix Designs continues to push boundaries, proving that great design is not just about appearance but about crafting spaces that inspire and enhance daily living.</p>',
                'is_published' => true,
                'published_at' => '2025-01-17 10:00:00',
                'author' => 'Arunar',
                'meta_title' => 'The Aesthetics: How Nesthetix Designs is Redefining Luxury Interiors',
                'meta_description' => 'Explore how Nesthetix Designs transforms spaces with bespoke luxury interiors, smart home integration, and timeless elegance for premium living.',
                'meta_keywords' => 'Nesthetix Designs, luxury interiors, interior design, bespoke design, smart home, luxury living, premium interiors',
                'og_title' => 'The Aesthetics: How Nesthetix Designs is Redefining Luxury Interiors',
                'og_description' => 'Discover how Nesthetix Designs creates timeless, personalized luxury interiors that fuse elegance with functionality.',
            ],
            [
                'title' => 'From Concept to Reality: The Rise of Atha Construction in Modern Infrastructure',
                'slug' => 'from-concept-to-reality-the-rise-of-atha-construction-in-modern-infrastructure',
                'excerpt' => 'Atha Construction leads with sustainable materials, energy-efficient designs, and smart techniques—building durable, future-ready infrastructure.',
                'content' => '<h2>Introduction</h2>
<p>The construction industry is undergoing a massive transformation, and Atha Construction is leading the charge. By focusing on sustainable development, superior craftsmanship, and innovative technology, Atha Construction is building the future of urban infrastructure.</p>

<h2>The Foundation: From Vision to Reality</h2>
<p>Originally a division under Area24, Atha Construction quickly established itself as an independent entity specializing in high-quality residential and commercial projects. Driven by a passion for engineering excellence, the company has played a key role in shaping cityscapes.</p>

<h2>Smart & Sustainable Construction: The Atha Approach</h2>
<p>The construction sector is shifting towards sustainable practices, and Atha Construction is at the forefront of this change. By incorporating:</p>
<ul>
<li>Eco-friendly materials such as low-carbon concrete and recycled steel.</li>
<li>Energy-efficient designs that reduce carbon footprints.</li>
<li>Smart construction techniques that enhance durability and safety.</li>
</ul>
<p>Atha Construction is redefining modern infrastructure.</p>

<h2>Projects That Speak Volumes</h2>
<p>From high-rise residential towers to state-of-the-art commercial complexes, Atha Construction\'s projects are a testament to innovation and quality. With a focus on timely delivery and exceptional workmanship, the company has earned a reputation for excellence.</p>

<h2>The Road Ahead: Shaping the Future</h2>
<p>As urban landscapes continue to evolve, Atha Construction is committed to pioneering next-generation infrastructure. By integrating technology, sustainable solutions, and world-class designs, the company aims to redefine the way people live and work.</p>

<h2>Conclusion</h2>
<p>With a strong foundation in quality and innovation, Atha Construction is not just building structures—it is shaping the future of modern infrastructure.</p>',
                'is_published' => true,
                'published_at' => '2025-02-11 10:00:00',
                'author' => 'Arunar',
                'meta_title' => 'From Concept to Reality: The Rise of Atha Construction in Modern Infrastructure',
                'meta_description' => 'Learn how Atha Construction is revolutionizing modern infrastructure with sustainable building practices, innovative technology, and superior craftsmanship.',
                'meta_keywords' => 'Atha Construction, construction company, sustainable building, infrastructure, green construction, modern construction, building excellence',
                'og_title' => 'From Concept to Reality: The Rise of Atha Construction in Modern Infrastructure',
                'og_description' => 'Discover how Atha Construction is building the future with sustainable, innovative, and high-quality construction solutions.',
            ],
        ];

        foreach ($blogs as $blogData) {
            Blog::create($blogData);
        }
    }
}
