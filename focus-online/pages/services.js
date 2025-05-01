import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  // GSAP animations
  useEffect(() => {
    // Set initial states to ensure elements are visible even if animations fail
    gsap.set('.hero-title, .hero-description, .services-title, .service-card, .process-title, .cta-container', {
      opacity: 1,
      y: 0
    });

    // Hero section animation
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      onComplete: () => gsap.set('.hero-title', {clearProps: 'all'})
    });

    gsap.from('.hero-description', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
      onComplete: () => gsap.set('.hero-description', {clearProps: 'all'})
    });

    // Services section animations
    gsap.from('.services-title', {
      scrollTrigger: {
        trigger: '.services-title',
        start: 'top 80%',
        once: true
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      onComplete: () => gsap.set('.services-title', {clearProps: 'all'})
    });

    // Service card animations
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
        once: true
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      onComplete: () => gsap.set('.service-card', {clearProps: 'all'})
    });

    // Process section animations
    gsap.from('.process-title', {
      scrollTrigger: {
        trigger: '.process-section',
        start: 'top 80%',
        once: true
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      onComplete: () => gsap.set('.process-title', {clearProps: 'all'})
    });

    // CTA section animation
    gsap.from('.cta-container', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        once: true
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      onComplete: () => gsap.set('.cta-container', {clearProps: 'all'})
    });

    // Clean up function
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Services | Luxury African Properties</title>
        <meta name="description" content="Comprehensive digital marketing solutions for luxury African properties. Drive direct bookings and reduce OTA dependency." />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/static/images/services-hero.jpg"
            alt="Luxury African property services" 
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
            Specialized Digital Solutions for Luxury African Properties
          </h1>
          <p className="hero-description text-xl md:text-2xl text-white max-w-2xl">
            Reduce OTA dependency and drive sustainable revenue through expertly crafted direct booking channels.
          </p>
        </div>
      </section>

      {/* Introduction Section - Split into two parts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Part 1: Main Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Driving Direct Bookings for Luxury African Properties</h2>
            <p className="text-xl text-center text-gray-700 leading-relaxed">
              Since 2012, we've specialized in elevating luxury African properties' online presence. Our tailored digital marketing solutions help distinguished hotels, exclusive safari lodges and premium vacation properties maximize direct bookings while reducing commission costs.
            </p>
          </div>
          
          {/* Part 2: Key Differentiators */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What Sets Us Apart</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-800">African Market Specialists: </span>
                      <span className="text-gray-700">Unlike generalist agencies, we exclusively focus on the unique challenges and opportunities of luxury African hospitality.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-800">Results-Focused: </span>
                      <span className="text-gray-700">We measure success through direct booking increases, not vanity metrics. Our strategies deliver measurable ROI.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-800">Full-Service Expertise: </span>
                      <span className="text-gray-700">From technical implementation to content creation and marketing strategy, we provide end-to-end solutions.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Clients Experience</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-800">42% Average Increase </span>
                      <span className="text-gray-700">in direct bookings within the first six months of partnership.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-800">35% Reduction </span>
                      <span className="text-gray-700">in dependency on online travel agencies and third-party commissions.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-800">3.2x Average ROI </span>
                      <span className="text-gray-700">on digital marketing investment across our client portfolio.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="services-title text-4xl font-bold text-gray-800 text-center mb-8">Our Methodology</h2>
          
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-xl text-gray-700 mb-10">
              We believe in a methodical, step-by-step approach to digital marketing for luxury properties. Like building a house, we start with a solid foundation before adding more advanced elements.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Digital Foundation</h3>
                <p className="text-gray-600">We establish technical infrastructure, website health, and proper tracking first. Without this foundation, there's no stability or ability to measure success.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Targeted Growth</h3>
                <p className="text-gray-600">With a solid base established, we identify and pursue the lowest-hanging fruit – opportunities that will generate immediate impact and revenue.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Content & Optimization</h3>
                <p className="text-gray-600">We enhance storytelling through content while continuously optimizing all three phases in a cycle of improvement, refinement, and adapting to market changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Options Section */}
      <section className="py-20 bg-white services-grid">
        <div className="container mx-auto px-4">
          <h2 className="services-title text-4xl font-bold text-gray-800 text-center mb-16">Service Options</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Website Development Card */}
            <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-64 relative">
                <Image 
                  src="/static/images/services/website-development.jpg" 
                  alt="Website Development Services"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">Website Development</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-700 mb-6">
                  Custom WordPress websites designed to showcase your luxury property and convert visitors into direct bookings. Whether you need a complete website overhaul or a new property launch, our one-off development services deliver beautiful, high-performance results.
                </p>
                <div className="flex justify-center">
                  <Link href="/services/website-development">
                    <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-colors">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Ongoing Marketing Card */}
            <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-64 relative">
                <Image 
                  src="/static/images/services/ongoing-growth.jpg" 
                  alt="Ongoing Marketing Services"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">Ongoing Marketing</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-700 mb-6">
                  Strategic, ongoing marketing relationships designed to continuously grow your direct bookings and reduce OTA dependency. From quarterly check-ins to comprehensive monthly management, we offer flexible options tailored to your budget and goals.
                </p>
                <div className="flex justify-center">
                  <Link href="/services/ongoing-marketing">
                    <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-colors">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-24 bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="cta-container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Reduce Your OTA Dependency?</h2>
            <p className="text-xl text-amber-100 mb-8">
              Let's create a sustainable direct booking strategy tailored to your property's unique character and goals.
            </p>
            <Link href="/contact">
              <button className="px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-md font-medium transition-colors text-lg">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4 max-w-5xl">
    <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Frequently Asked Questions</h2>
    
    <div className="space-y-4">
      {/* FAQ Accordion - uses React state to manage which item is open */}
      {(() => {
        const [openIndex, setOpenIndex] = useState(null);
        
        const toggleAccordion = (index) => {
          setOpenIndex(openIndex === index ? null : index);
        };
        
        const faqs = [
          {
            question: "How do I know which service option is right for my property?",
            answer: "The best choice depends on your current digital presence, goals, and budget. If you primarily need a professional online presence without ongoing marketing, our Website Development services are ideal. If you're looking to actively grow direct bookings and reduce OTA dependency, our Ongoing Marketing options provide the strategic support needed. We're happy to discuss your specific situation during a free consultation call."
          },
          {
            question: "How long will it take to see results from your services?",
            answer: "While every property is unique, our clients typically begin seeing measurable improvements within 2-3 months. Initial quick wins often come from technical optimizations and website improvements, while sustainable growth builds over 6-12 months as we implement comprehensive strategies across channels."
          },
          {
            question: "Do you require long-term contracts?",
            answer: "For website development projects, we work on a project basis with clear milestones and deliverables. For ongoing marketing relationships, our standard agreements are 6-month commitments to ensure we have sufficient time to implement strategies and demonstrate results, but we don't lock you into multi-year contracts."
          },
          {
            question: "What makes you different from other digital marketing agencies?",
            answer: "Unlike general marketing agencies, we exclusively serve luxury African properties. This specialized focus gives us unparalleled insight into your unique challenges, target audience, and competitive landscape. Our team combines local market knowledge with international digital expertise to deliver results that generalist agencies simply cannot match."
          }
        ];
        
        return faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button
              className="flex justify-between items-center w-full px-8 py-5 text-left bg-white hover:bg-gray-50 focus:outline-none transition-colors"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-amber-600 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`faq-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-8 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ));
      })()}
    </div>
  </div>
</section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    // Re-generate the page at most once per day
    revalidate: 86400,
  };
}