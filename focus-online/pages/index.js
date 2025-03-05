import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Create a client-side only component for swiper functionality
const ClientCarousel = dynamic(() => import('./components/ClientCarousel'), { ssr: false });
const TestimonialCarousel = dynamic(() => import('./components/TestimonialCarousel'), { ssr: false });

// Add styles for tab transitions as a string to be injected in the component
const fadeInStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;

export default function HomePage({ siteData, heroVideo, clients, approach, testimonials }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Head>
        <title>{siteData?.title || 'Luxury African Properties'}</title>
        <meta name="description" content="Elevating Africa's Finest Properties Online" />
        <style dangerouslySetInnerHTML={{ __html: fadeInStyles }} />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[65vh]">
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            muted
            loop={isPlaying}
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => setIsPlaying(false)}
          >
            <source src={heroVideo?.url || 'https://streamable.com/l/89cjjq/mp4.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto mt-12"> {/* Added container with max width */}
            <h1 className="text-4xl md:text-5xl text-white mt-4 md:mt-12 italic"> {/* Added italic class */}
              Elevating Safari Lodges & Boutique Hotels Across Africa Since 2012.
            </h1>
          </div>
        </div>
            

      </section>

      {/* Clients Section - Implemented without Swiper for SSR compatibility */}

      <ClientCarousel clients={clients} />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl md:text-2xl text-center text-gray-700 leading-relaxed">
            Since 2012, we have been elevating luxury African properties' digital visibility through bespoke marketing solutions that drive direct bookings and reduce commission costs. From distinguished hotels to exclusive safari lodges, we deliver comprehensive digital expertise that captures your unique character while creating sustainable revenue channels.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Expertise</h2>
            <p className="text-xl text-gray-600">Transform Your Property's Digital Presence</p>
          </div>

          {/* Tabs Component */}
          <div className="mb-16">
            {/* Tab Navigation */}
            <div className="flex flex-col md:flex-row justify-center mb-8">
              {['Digital Foundation', 'Targeted Growth', 'Visual Storytelling'].map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`py-4 px-6 text-lg font-semibold transition-colors duration-300 mx-2 mb-2 md:mb-0 ${
                    activeTab === index
                      ? 'bg-amber-600 text-white rounded-lg shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 rounded-lg'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {/* Digital Foundation Tab */}
              {activeTab === 0 && (
                <div className="animate-fadeIn">
                  <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Digital Foundation</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Website Development</h4>
                      <p className="text-gray-600">
                        Custom WordPress websites that transform browsers into bookers. We create high-performance, visually stunning sites that showcase your property's unique character and drive direct bookings.
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Analytics & Optimization</h4>
                      <p className="text-gray-600">
                        Data-driven insights that fuel continuous improvement. We track, analyze, and optimize your digital performance to maximize direct bookings and revenue.
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Search Engine Optimisation</h4>
                      <p className="text-gray-600">
                        Strategic optimization that elevates your property's visibility in search results. We ensure you're discoverable by qualified travelers actively planning their African luxury experience.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Targeted Growth Tab */}
              {activeTab === 1 && (
                <div className="animate-fadeIn">
                  <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Targeted Growth</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Google Ads Management</h4>
                      <p className="text-gray-600">
                        Precision-targeted campaigns that place your property in front of high-intent luxury travelers. We maximize your advertising ROI while maintaining your premium positioning.
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Social Media Management</h4>
                      <p className="text-gray-600">
                        Sophisticated social media storytelling that builds desire and engagement. We create and curate content that captures your property's essence across key platforms.
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Newsletter Marketing</h4>
                      <p className="text-gray-600">
                        Strategic email campaigns that nurture leads and encourage repeat bookings. Our tailored content maintains connection with past guests and converts prospects into customers.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Visual Storytelling Tab */}
              {activeTab === 2 && (
                <div className="animate-fadeIn">
                  <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visual Storytelling</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Content Creation</h4>
                      <p className="text-gray-600">
                        Compelling copywriting that speaks to discerning travelers. From room descriptions to blog posts, we craft content that converts while maintaining your luxury positioning.
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Photography</h4>
                      <p className="text-gray-600">
                        Professional photography that showcases your property's unique appeal. We capture the moments, spaces, and details that inspire travelers to book.
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Video</h4>
                      <p className="text-gray-600">
                        Cinematic storytelling that brings your property to life. From aerial footage to immersive room tours, we create videos that engage and convert.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Building Sustainable Digital Success</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {approach.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center text-white text-2xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials - Simple version without Swiper */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* Newsletter Signup */}
      <section className="py-20 bg-dune">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Luxury Hospitality Insights</h2>
            <p className="text-xl text-amber-100 mb-8">
              Subscribe to our newsletter for exclusive strategies and trends in luxury hospitality marketing.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-amber-100 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// Mock data for demonstration purposes
export async function getStaticProps() {
  const siteData = {
    title: "Luxury African Properties",
    description: "Elevating Africa's Finest Properties Online",
  };
  
  const heroVideo = {
    url: "https://streamable.com/l/89cjjq/mp4.mp4",
  };
  
  const clients = [
    { name: "Ilala Lodge", logo: "ilala-lodge.png" },
    { name: "Kings Camp", logo: "kings-camp.png" },
    { name: "Beach Resort", logo: "lmc.png" },
    { name: "Boutique Hotel", logo: "melozhori.png" },
    { name: "Wine Estate", logo: "seasons-in-africa.png" },
    { name: "Game Reserve", logo: "turbine.png" },
    { name: "Game Reserve", logo: "zqc.png" },
    { name: "Wine Estate", logo: "scott.png" },
    { name: "Game Reserve", logo: "gondwana.png" },
    { name: "Game Reserve", logo: "penhill.png" },
    { name: "Game Reserve", logo: "strandloper.png" },
    { name: "Game Reserve", logo: "sirai.png" },
    { name: "Game Reserve", logo: "palm.png" },
  ];
  
  const approach = [
    {
      title: "Research & Analysis",
      description: "We begin with a comprehensive digital audit of your property's online presence, identifying opportunities and untapped potential. Our data-driven approach pinpoints where we can create the most immediate impact for your revenue."
    },
    {
      title: "Foundation Building",
      description: "Before driving new traffic, we ensure your digital foundation is solid. This means optimizing your website's performance, implementing proper tracking, and ensuring your property is presented at its best online."
    },
    {
      title: "Strategic Implementation",
      description: "Based on our findings, we prioritize initiatives that deliver the highest value for your property. Every solution is tailored to your specific needs, focusing on services that will generate the strongest return on investment."
    },
    {
      title: "Growth Acceleration",
      description: "With a strong foundation in place, we amplify your reach through targeted campaigns, content creation, and strategic digital marketing. This drives qualified traffic to your optimized platform, maximizing direct booking potential."
    },
    {
      title: "Continuous Optimization",
      description: "We constantly monitor performance, refine our approach, and adapt strategies to ensure sustainable growth in direct bookings and revenue."
    }
  ];
  
  const testimonials = [
    {
      author: "Jane Smith",
      position: "Marketing Director",
      propertyName: "Serengeti Luxury Lodge",
      quote: "Since partnering with this team, our direct bookings have increased by 45% and our dependency on OTAs has significantly decreased. Their understanding of the luxury African hospitality market is unmatched.",
      image: "testimonial1.jpg",
      results: "45% increase in direct bookings, 30% reduction in OTA commissions"
    },
    {
      author: "Michael Johnson",
      position: "Owner",
      propertyName: "Cape Coastal Retreat",
      quote: "The website they created for us perfectly captures the essence of our property while delivering outstanding performance. Our conversion rate has doubled since the launch.",
      image: "testimonial2.jpg",
      results: "100% increase in website conversion rate, 65% improvement in page load speed"
    },
    {
      author: "Sarah Williams",
      position: "General Manager",
      propertyName: "Botswana Safari Collection",
      quote: "Their holistic approach to digital marketing transformed our online presence. From stunning photography to strategic SEO, every element works together seamlessly to drive qualified traffic and bookings.",
      image: "testimonial3.jpg",
      results: "210% increase in organic search traffic, 78% growth in direct revenue"
    }
  ];
  
  return {
    props: {
      siteData,
      heroVideo,
      clients,
      approach,
      testimonials,
    },
    // Re-generate the page at most once per day
    revalidate: 86400,
  };
}