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
      <section className="relative w-full h-[100vh]">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Solutions</h2>
            <p className="text-l text-gray-600">Transform Your Property's Digital Presence</p>
          </div>

          {/* Tabs Component */}
          <div className="mb-16">
            {/* Tab Navigation */}
            <div className="flex flex-col md:flex-row justify-center mb-8">
              {['Foundation', 'Growth', 'Content'].map((tab, index) => (
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
        <div className="flex justify-between items-center mb-6">
          <div className="w-16 h-px bg-amber-600"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Website Development</h4>
        <p className="text-gray-600">
          Custom WordPress websites that transform browsers into bookers. We create high-performance, visually stunning sites that showcase your property's unique character and drive direct bookings.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div className="w-16 h-px bg-amber-600"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Analytics & Optimization</h4>
        <p className="text-gray-600">
          Data-driven insights that fuel continuous improvement. We track, analyze, and optimize your digital performance to maximize direct bookings and revenue.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div className="w-16 h-px bg-amber-600"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
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
        <div className="flex justify-between items-center mb-6">
          <div className="w-16 h-px bg-amber-600"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Google Ads Management</h4>
        <p className="text-gray-600">
          Precision-targeted campaigns that place your property in front of high-intent luxury travelers. We maximize your advertising ROI while maintaining your premium positioning.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div className="w-16 h-px bg-amber-600"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Social Media Management</h4>
        <p className="text-gray-600">
          Sophisticated social media storytelling that builds desire and engagement. We create and curate content that captures your property's essence across key platforms.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div className="w-16 h-px bg-amber-600"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Newsletter Marketing</h4>
        <p className="text-gray-600">
          Strategic email campaigns that nurture leads and encourage repeat bookings. Our tailored content maintains connection with past guests and converts prospects into customers.
        </p>
      </div>
    </div>
  </div>
)}

{/* Content Production Tab */}
{activeTab === 2 && (
  <div className="animate-fadeIn">
    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Content Production</h3>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div className="w-16 h-px bg-amber-600"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Content Creation</h4>
        <p className="text-gray-600">
          Compelling copywriting that speaks to discerning travelers. From room descriptions to blog posts, we craft content that converts while maintaining your luxury positioning.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div className="w-16 h-px bg-amber-600"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Photography</h4>
        <p className="text-gray-600">
          Professional photography that showcases your property's unique appeal. We capture the moments, spaces, and details that inspire travelers to book.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div className="w-16 h-px bg-amber-600"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
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


{/* How Can We Help Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-3">How Can We Help?</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Choose the path that best fits your property's current needs
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {/* Website Design & Development Option */}
      <div className="group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-64 overflow-hidden">
          <img 
            src="/static/images/services/website-design.jpg" 
            alt="Website Design and Development" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">Website Design & Development</h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-6">
            Transform your online presence with a custom, high-performance website designed to showcase your property's unique character and drive direct bookings.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Custom WordPress development</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Optimized booking experiences</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Mobile-first responsive design</span>
            </li>
          </ul>
          <a href="/services/website-design" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Learn More
          </a>
        </div>
      </div>
      
      {/* Marketing Solutions Option */}
      <div className="group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-64 overflow-hidden">
          <img 
            src="/static/images/services/marketing-solutions.jpg" 
            alt="Marketing Solutions" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">Marketing Solutions</h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-6">
            Strategic digital marketing that drives qualified traffic, builds brand awareness, and converts travelers into guests, all while reducing OTA dependency.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Search marketing (SEO & PPC)</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Social media management</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Content creation & email marketing</span>
            </li>
          </ul>
          <a href="/services/marketing-solutions" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Our Approach Section */}
<section className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-3">Building Sustainable Digital Success</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our proven methodology delivers lasting results for luxury properties
      </p>
    </div>

    <div className="max-w-6xl mx-auto relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-amber-200 transform md:translate-x-px"></div>
      
      <div className="space-y-16 md:space-y-24 relative">
        {approach.map((step, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 relative`}>
            {/* Step Number Circle - Always Centered on Timeline */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-amber-200 shadow-lg flex items-center justify-center z-10">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white text-xl font-bold">
                {index + 1}
              </div>
            </div>
            
            {/* Content Box - Alternating Left/Right */}
            <div className={`w-full md:w-5/12 pt-8 md:pt-0 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-2 border-amber-600">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
            
            {/* Image or Icon Section - Alternating Right/Left */}
            <div className="w-full md:w-5/12 hidden md:block">
              <div className={`bg-white p-8 rounded-lg shadow-md flex items-center justify-center h-64 ${index % 2 === 0 ? 'ml-16' : 'mr-16'}`}>
                <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center">
                  {/* Icons for each step */}
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 7h6" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )}
                </div>
              </div>
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
      <section className="py-20 bg-storm">
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