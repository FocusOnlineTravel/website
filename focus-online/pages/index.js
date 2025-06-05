import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import AnimatedButton from './components/AnimatedButton';
import NewsletterSignup from './components/NewsletterSignup';
import ClientGrid from './components/ClientGrid';

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
<section className="mt-12 w-full h-[calc(100vh-130px)] bg-neutral-100">
  {/* Text container positioned at the bottom */}
  <div className="pt-5 z-10 container mx-auto h-full flex flex-col align-middle">
    <small class="font-semibold uppercase">Hello! We are Focus Online travel, since 2012.</small>
    <h1 className="text-7xl md:text-7xl text-storm-dark">
      <span className="leading-[1.5]">
      We elevate luxury <b>African properties</b> online with refined <b>digital experiences</b> that drive <b>direct bookings.</b>
      </span>
    </h1>
  </div>

  {/* Logo positioned to overlap the bottom of this section */}
  <div className="absolute bottom-0 right-20 z-20 transform translate-y-1/2">
    <img 
      src="/static/images/logo.png" 
      alt="Focus Online Logo" 
      className="w-64 h-64 object-contain"
    />
  </div>
</section>

{/* Clients Section */}
<ClientGrid clients={clients} />

{/* Who We Are Section */}
<section className="py-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        {/* Main content with improved vertical spacing */}
        <div className="text-center mb-16 flex-grow flex flex-col justify-center">
          <small className="font-semibold mb-2">AGENCY</small>
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 playfair-font italic">We are Focus Online</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Headquartered in Cape Town, Focus Online brings together a passionate collective of digital specialists who have been elevating luxury African properties online since 2012. Our nimble team of designers, developers, content creators, and marketing strategists works seamlessly to craft bespoke digital experiences that capture the essence of extraordinary destinations while driving measurable results for our clients.
          </p>
          <div className="mt-6">
            <button className="bg-storm-dark hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-md text-golden transition-colors uppercase font-semibold">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Tool logos section */}
        <div className="mt-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {/* Google Ads */}
            <img 
              src="/static/images/tools/google-ads.jpg" 
              alt="Google Ads" 
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            
            {/* Mailchimp */}
            <img 
              src="/static/images/tools/mailchimp.webp" 
              alt="Mailchimp" 
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            
            {/* Meta Business Suite */}
            <img 
              src="/static/images/tools/meta.webp" 
              alt="Meta Business Suite" 
              className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            
            {/* WordPress */}
            <img 
              src="/static/images/tools/wordpress.webp" 
              alt="WordPress" 
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            
            {/* Microsoft Clarity */}
            <img 
              src="/static/images/tools/clarity.jpg" 
              alt="Microsoft Clarity" 
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            
            {/* Google Analytics */}
            <img 
              src="/static/images/tools/google-analytics.png" 
              alt="Google Analytics" 
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>

<section className="py-20  bg-storm-dark">
  <div className="container mx-auto px-4 bg-storm-dark">
    <div className="text-center mb-16">
      <small>SERVICES</small>
      <h2 className="text-4xl font-bold text-gray-800 mb-3 playfair">How Can We Help?</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Choose the path that best fits your property's current needs
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {/* Website Design & Development Option */}
      <div className="group relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[30rem]">
        {/* Full background image */}
        <img 
          src="https://www.focusonline.co.za/wp-content/uploads/2022/02/Sirai_Kilifi_160-e1644573151574-980x560.jpg" 
          alt="Website Design and Development" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          {/* Top headline */}
          <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-1">Website Design & Development</h3>
            <p className="text-amber-300 text-sm">Specialized for hotels & safari lodges</p>
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* Bottom content */}
          <div>
            <p className="text-white mb-6">
              Transform your online presence with a custom, high-performance website designed to showcase your property.
            </p>
            <a href="/services/website-design" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Marketing Solutions Option */}
      <div className="group relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-96">
        {/* Full background image */}
        <img 
          src="https://www.focusonline.co.za/wp-content/uploads/2020/05/Boat-Exterior-Dawn.jpg" 
          alt="Marketing Solutions" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          {/* Top headline */}
          <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-1">Marketing Solutions</h3>
            <p className="text-amber-300 text-sm">Tailored for hospitality & safari experiences</p>
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          
          {/* Bottom content */}
          <div>
            <p className="text-white mb-6">
              Strategic digital marketing that drives qualified traffic and builds brand awareness.
            </p>
            <a href="/services/marketing-solutions" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Success Stories / Testimonials - Simple version without Swiper */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* Newsletter Signup */}
      <NewsletterSignup />
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
    { name: "Ilala Lodge", logo: "logo-ilala-1.png" },
    { name: "Kings Camp", logo: "logo-kings-1.png" },
    { name: "Boutique Hotel", logo: "logo-melozhori-1.png" },
    { name: "Wine Estate", logo: "logo-seasons-1.png" },
    { name: "Game Reserve", logo: "logo-turbine-1.png" },
    { name: "Game Reserve", logo: "logo-zambezi-1.png" },
    { name: "Wine Estate", logo: "logo-scott-1.png" },
    { name: "Game Reserve", logo: "logo-gondwana-1.png" },
    { name: "Game Reserve", logo: "logo-leopard-1.png" },
    { name: "Game Reserve", logo: "logo-strandloper-1.png" },
    { name: "Game Reserve", logo: "logo-sirai-1.png" },
    { name: "Game Reserve", logo: "logo-palm-1.png" },
    { name: "Game Reserve", logo: "logo-ras-1.png" },
    { name: "Game Reserve", logo: "logo-flightsite-1.png" },
    { name: "Game Reserve", logo: "logo-kiboko-1.png" },
    { name: "Game Reserve", logo: "logo-src-1.png" },    
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