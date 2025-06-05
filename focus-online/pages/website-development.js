import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function WebDevelopmentPage() {
  return (
    <>
      <Head>
        <title>Website Development Services | Luxury African Properties</title>
        <meta name="description" content="Custom WordPress website development for luxury African properties. Beautiful, high-performance websites designed to convert visitors into direct bookings." />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/static/images/services/website-hero.jpg"
            alt="Luxury property website development" 
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
            Website Development for Luxury African Properties
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            Beautiful, high-performance websites designed to showcase your property and drive direct bookings.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Your Website Is Your Digital Front Door</h2>
            <p className="text-xl text-gray-700 mb-6">
              In the competitive luxury hospitality market, your website isn't just a digital brochure—it's the cornerstone of your direct booking strategy. We specialize in creating websites that not only showcase the unique character and beauty of your property but are strategically designed to convert visitors into direct bookers.
            </p>
            <p className="text-xl text-gray-700">
              Unlike generic web developers, we bring over a decade of specialized expertise in the African luxury property market. We understand the unique technical challenges, guest expectations, and conversion optimization techniques that make the difference between a pretty website and a high-performing direct booking channel.
            </p>
          </div>
        </div>
      </section>

      {/* Website Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Website Development Options</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-1 bg-amber-600"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Essential</h3>
                <p className="text-gray-600 mb-6">Perfect for smaller properties with straightforward needs</p>
                <div className="mb-8">
                  <span className="text-3xl font-bold text-amber-600">From $4,500</span>
                  <span className="text-gray-600 block mt-1">One-time investment</span>
                </div>
                <ul className="mb-8">
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">5-10 pages custom WordPress website</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Basic booking engine integration</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Standard SEO setup</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">30-day post-launch support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium transition-colors">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-amber-500">
              <div className="bg-amber-600 text-white text-center py-2 font-semibold">
                MOST POPULAR
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium</h3>
                <p className="text-gray-600 mb-6">Ideal for established properties seeking conversion-focused design</p>
                <div className="mb-8">
                  <span className="text-3xl font-bold text-amber-600">From $8,500</span>
                  <span className="text-gray-600 block mt-1">One-time investment</span>
                </div>
                <ul className="mb-8">
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">10-20 pages custom WordPress website</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Premium design with advanced animations</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Advanced booking engine integration</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Comprehensive SEO optimization</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Custom inquiry forms & lead capture</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">60-day post-launch support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium transition-colors">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>

            {/* Luxury Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-1 bg-gray-800"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Luxury</h3>
                <p className="text-gray-600 mb-6">For exclusive properties requiring exceptional digital presence</p>
                <div className="mb-8">
                  <span className="text-3xl font-bold text-amber-600">From $12,500</span>
                  <span className="text-gray-600 block mt-1">One-time investment</span>
                </div>
                <ul className="mb-8">
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Complete custom website with unlimited pages</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Premium design with custom animations</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Virtual tours & immersive media integration</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Custom reservation & experience booking system</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Multi-language support</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">90-day post-launch support & training</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium transition-colors">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-gray-600 italic">All website packages include professional copywriting for key pages, custom design, and full technical setup. Additional services such as photography, virtual tours, and content creation are available as add-ons.</p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Development Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Discovery & Planning</h3>
              <p className="text-gray-600">We start by understanding your property's unique character and business goals. We analyze competitors, create wireframes, and define the ideal user journeys for your target audience.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Design & Content</h3>
              <p className="text-gray-600">Our design team creates visuals that capture your property's essence while our copywriters craft compelling content that engages visitors and drives booking decisions.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Development</h3>
              <p className="text-gray-600">Our developers build a responsive, fast-loading website optimized for all devices, integrating your booking engine, analytics, and other essential tools seamlessly.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Testing</h3>
              <p className="text-gray-600">Before launch, we rigorously test your website across devices, browsers, and connection speeds, ensuring all integrations function perfectly.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white text-xl font-bold mb-4">5</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Launch</h3>
              <p className="text-gray-600">We carefully coordinate the website launch to ensure a smooth transition with minimal downtime, including setting up redirects if needed.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white text-xl font-bold mb-4">6</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Post-Launch Support</h3>
              <p className="text-gray-600">After launch, we provide dedicated support and training to ensure your team can confidently manage content updates going forward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does it take to build a website?",
                answer: "Typically, our website projects take 6-10 weeks from kickoff to launch, depending on the complexity and package selected. Essential websites can sometimes be completed in as little as 4-6 weeks, while Luxury websites with custom functionality may take 10-14 weeks."
              },
              {
                question: "Do I need to provide my own photography?",
                answer: "While you're welcome to provide existing photography, we also offer professional photography services specifically for luxury properties. Many clients opt for a combination of existing assets and new photography to create the most compelling visual presentation."
              },
              {
                question: "Will I be able to update the website myself?",
                answer: "Absolutely. We build all our websites on WordPress with custom, user-friendly content management systems. We provide training for your team and create documentation specific to your website. Most clients find they can easily manage day-to-day content updates without technical assistance."
              },
              {
                question: "What booking engines do you integrate with?",
                answer: "We have experience integrating with all major booking engines used by luxury African properties, including ResRequest, Nightsbridge, Cloudbeds, Profitroom, and more. We can recommend the best option for your specific needs or seamlessly integrate with your existing system."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl text-amber-100 mb-8">
              Let's create a website that captures your property's unique character and converts visitors into direct bookers.
            </p>
            <Link href="/contact">
              <button className="px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-md font-medium transition-colors text-lg">
                Schedule a Consultation
              </button>
            </Link>
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