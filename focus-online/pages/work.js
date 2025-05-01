import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Create a client-side only component for swiper functionality
const ClientCarousel = dynamic(() => import('./components/ClientCarousel'), { ssr: false });
const TestimonialCarousel = dynamic(() => import('./components/TestimonialCarousel'), { ssr: false });

export default function PortfolioPage({ clients, testimonials, caseStudies, clientTypes }) {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);

  // Filter case studies by client type
  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredCaseStudies(caseStudies);
    } else {
      setFilteredCaseStudies(caseStudies.filter(study => study.clientType === activeTab));
    }
  }, [activeTab, caseStudies]);

  return (
    <>
      <Head>
        <title>Our Portfolio | Luxury African Properties</title>
        <meta name="description" content="Explore our portfolio of luxury African properties and discover how we help elevate their digital presence." />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/static/images/portfolio-hero.jpg"
            alt="Luxury African Properties Portfolio"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Discover how we've helped luxury properties across Africa achieve digital excellence
          </p>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">We Work With Luxury Properties Across Africa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From exclusive safari lodges to boutique hotels and luxury guesthouses, we specialize in elevating Africa's finest properties online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
                <div className="relative h-64">
                  <Image 
                    src={type.image} 
                    alt={type.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{type.name}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Logo Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Valued Clients
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by 50+ luxury properties across Africa
            </p>
          </div>
          
          <ClientCarousel clients={clients} />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how our tailored digital solutions have transformed the online presence of luxury African properties.
            </p>
          </div>

          {/* Case Study Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === 'all' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {clientTypes.map((type, index) => (
              <button 
                key={index}
                onClick={() => setActiveTab(type.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === type.id 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>
          
          {/* Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {clientTypes.find(type => type.id === study.clientType)?.name}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.summary}</p>
                  <div className="mb-4">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href={`/case-studies/${study.slug}`} className="text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No case studies found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about working with us
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Services/Offerings Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How We Can Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the approach that best suits your property's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Web Development */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2 duration-300">
              <div className="relative h-72">
                <Image 
                  src="/static/images/web-development.jpg" 
                  alt="Web Development"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Web Development</h3>
                <p className="text-gray-600 mb-6">
                  A complete transformation of your property's digital presence with a custom-designed, high-performance website built to showcase your unique offering and drive direct bookings.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Custom WordPress design & development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Responsive, mobile-optimized interface</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Integrated booking systems & CRM</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>SEO optimization from the ground up</span>
                  </li>
                </ul>
                <Link href="/services/web-development" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-md transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Ongoing Retainers */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2 duration-300">
              <div className="relative h-72">
                <Image 
                  src="/static/images/digital-marketing.jpg" 
                  alt="Ongoing Retainers"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ongoing Retainers</h3>
                <p className="text-gray-600 mb-6">
                  Continuous digital marketing support to grow your property's online presence, drive qualified traffic, and increase direct bookings through strategic campaigns.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Monthly Google Ads management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Social media strategy & content creation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Email marketing campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Performance analytics & reporting</span>
                  </li>
                </ul>
                <Link href="/services/digital-marketing" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-md transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Property's Digital Presence?</h2>
            <p className="text-xl text-amber-100 mb-8">
              Let's discuss how we can help you increase direct bookings and reduce OTA commissions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white hover:bg-gray-100 text-amber-600 font-bold rounded-md transition-colors text-lg">
                Schedule a Consultation
              </Link>
              <Link href="/work" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold rounded-md transition-colors text-lg">
                View More Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Mock data for demonstration purposes
export async function getStaticProps() {
  const clients = [
    { name: "Serengeti Luxury Lodge", logo: "client1.png" },
    { name: "Zanzibar Beach Resort", logo: "client2.png" },
    { name: "Cape Town Boutique Hotel", logo: "client3.png" },
    { name: "Okavango Delta Safari", logo: "client4.png" },
    { name: "Moroccan Riad Collection", logo: "client5.png" },
    { name: "Victoria Falls Lodge", logo: "client6.png" },
    { name: "Namib Desert Retreat", logo: "client7.png" },
    { name: "Masai Mara Camp", logo: "client8.png" },
  ];
  
  const clientTypes = [
    {
      id: "safari-lodge",
      name: "Safari Lodges",
      image: "/static/images/safari-lodge.jpg",
      description: "Exclusive wildlife experiences in Africa's most stunning locations, from the Serengeti to Kruger National Park."
    },
    {
      id: "boutique-hotel",
      name: "Boutique Hotels",
      image: "/static/images/boutique-hotel.jpg",
      description: "Character-filled urban retreats offering personalized service in Africa's vibrant cities and cultural hotspots."
    },
    {
      id: "luxury-guesthouse",
      name: "Luxury Guesthouses",
      image: "/static/images/luxury-guesthouse.jpg",
      description: "Intimate accommodations that combine personalized hospitality with elegant design and attention to detail."
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
  
  const caseStudies = [
    {
      title: "Serengeti Luxury Lodge Website Redesign",
      slug: "serengeti-luxury-lodge",
      clientType: "safari-lodge",
      image: "/static/images/case-study-1.jpg",
      summary: "Complete website redesign that increased direct bookings by 65% and reduced OTA dependency.",
      tags: ["Website Design", "Booking Engine", "SEO"]
    },
    {
      title: "Zanzibar Beach Resort Digital Marketing",
      slug: "zanzibar-beach-resort",
      clientType: "boutique-hotel",
      image: "/static/images/case-study-2.jpg",
      summary: "12-month digital marketing campaign that doubled website traffic and increased revenue by 40%.",
      tags: ["Google Ads", "Social Media", "Content Marketing"]
    },
    {
      title: "Cape Town Boutique Hotel Brand Refresh",
      slug: "cape-town-boutique-hotel",
      clientType: "boutique-hotel",
      image: "/static/images/case-study-3.jpg",
      summary: "Complete digital brand refresh including photography, website, and marketing collateral.",
      tags: ["Branding", "Photography", "Website Design"]
    },
    {
      title: "Victoria Falls Lodge Booking System Integration",
      slug: "victoria-falls-lodge",
      clientType: "safari-lodge",
      image: "/static/images/case-study-4.jpg",
      summary: "Custom booking system integration that streamlined operations and improved guest experience.",
      tags: ["Booking Engine", "CRM Integration", "UX Design"]
    },
    {
      title: "Moroccan Riad Collection Multi-Property Platform",
      slug: "moroccan-riad-collection",
      clientType: "luxury-guesthouse",
      image: "/static/images/case-study-5.jpg",
      summary: "Consolidated digital platform for a collection of luxury riads across Morocco.",
      tags: ["Multi-property Solution", "Arabic/English/French", "Mobile Optimization"]
    },
    {
      title: "Namib Desert Retreat Social Media Strategy",
      slug: "namib-desert-retreat",
      clientType: "luxury-guesthouse",
      image: "/static/images/case-study-6.jpg",
      summary: "Social media strategy that increased engagement by 300% and direct inquiries by 75%.",
      tags: ["Social Media", "Content Creation", "Influencer Partnerships"]
    }
  ];
  
  return {
    props: {
      clients,
      clientTypes,
      testimonials,
      caseStudies
    },
  };
}