import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function OngoingMarketingPage() {
  return (
    <>
      <Head>
        <title>Ongoing Marketing Services | Luxury African Properties</title>
        <meta name="description" content="Strategic ongoing marketing services for luxury African properties. Drive direct bookings and reduce OTA dependency with our specialized support." />
      </Head>

      <section className="relative w-full h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/static/images/services/marketing-hero.jpg"
            alt="Luxury property marketing services" 
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
        <section className="relative w-full h-[60vh] flex items-center">
<div className="absolute inset-0 z-0">
<Image 
src="/static/images/services/marketing-hero.jpg"
alt="Luxury property marketing services" 
layout="fill"
objectFit="cover"
priority
/>
<div className="absolute inset-0 bg-black bg-opacity-40"></div>
</div>

<div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
Ongoing Marketing for Luxury African Properties
</h1>
<p className="text-xl md:text-2xl text-white max-w-2xl">
Reduce OTA dependency and drive sustainable revenue through strategic digital marketing.
</p>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Drive Revenue Without Relying on OTAs</h2>
<p className="text-xl text-gray-700 mb-6">
  Our ongoing marketing services are designed to help luxury African properties establish sustainable direct booking channels that reduce commission costs and build valuable direct relationships with guests.
</p>
<p className="text-xl text-gray-700">
  Unlike generic marketing agencies, we specialize exclusively in the luxury African hospitality market. This focused expertise means we understand the unique challenges, opportunities, and competitive landscape your property faces.
</p>
</div>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Choose Your Marketing Portfolio</h2>
<p className="text-xl text-center text-gray-700 mb-16 max-w-4xl mx-auto">
Our service tiers are named after financial investment vehicles, reflecting how we view digital marketing—as a strategic investment in your property's future with measurable returns.
</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
<div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
  <div className="p-1 bg-gray-600"></div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">The Explorer</h3>
    <p className="text-gray-600 mb-4">Quarterly oversight for properties testing the waters</p>
    <div className="mb-6">
      <span className="text-2xl font-bold text-amber-600">From $1,500</span>
      <span className="text-gray-600 block mt-1">Per quarter + ad spend</span>
    </div>
    <ul className="mb-6">
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Quarterly strategy review</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Basic campaign management</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Technical maintenance</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Email support</span>
      </li>
    </ul>
    <div className="mt-auto">
      <Link href="/contact">
        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium transition-colors">
          Get a Quote
        </button>
      </Link>
    </div>
  </div>
</div>
</div>

<div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
  <div className="p-1 bg-amber-500"></div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">The Dividend</h3>
    <p className="text-gray-600 mb-4">Monthly basics for steady, reliable growth</p>
    <div className="mb-6">
      <span className="text-2xl font-bold text-amber-600">From $2,000</span>
      <span className="text-gray-600 block mt-1">Per month + ad spend</span>
    </div>
    <ul className="mb-6">
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Monthly strategy reviews</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Standard campaign management</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Basic content updates</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">SEO maintenance</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Regular support</span>
      </li>
    </ul>
    <div className="mt-auto">
      <Link href="/contact">
        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium transition-colors">
          Get a Quote
        </button>
      </Link>
    </div>
  </div>
</div>

<div className="bg-white rounded-lg shadow-lg overflow-hidden h-full border-2 border-amber-500">
  <div className="bg-amber-600 text-white text-center py-2 font-semibold">
    RECOMMENDED
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">The Growth Fund</h3>
    <p className="text-gray-600 mb-4">Comprehensive strategy for accelerated performance</p>
    <div className="mb-6">
      <span className="text-2xl font-bold text-amber-600">From $3,000</span>
      <span className="text-gray-600 block mt-1">Per month + ad spend</span>
    </div>
    <ul className="mb-6">
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Detailed monthly strategy & reporting</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Multi-channel campaign management</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Regular content creation</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Ongoing SEO optimization</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Conversion rate optimization</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Priority support</span>
      </li>
    </ul>
    <div className="mt-auto">
      <Link href="/contact">
        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium transition-colors">
          Get a Quote
        </button>
      </Link>
    </div>
  </div>
</div>

<div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
  <div className="p-1 bg-gray-800"></div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">The Private Equity</h3>
    <p className="text-gray-600 mb-4">Tailored partnership for luxury properties with complex needs</p>
    <div className="mb-6">
      <span className="text-2xl font-bold text-amber-600">Bespoke</span>
      <span className="text-gray-600 block mt-1">Custom investment</span>
    </div>
    <ul className="mb-6">
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Fully customized service package</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Dedicated account strategist</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Premium content production</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Executive-level reporting</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">Advanced strategy for multi-property groups</span>
      </li>
      <li className="flex items-start mb-3">
        <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-700">VIP service & 24/7 priority support</span>
      </li>
    </ul>
</div>

<div className="max-w-4xl mx-auto mt-12 text-center">
<p className="text-gray-600 italic">All options follow our proven methodology of establishing a solid foundation, implementing targeted growth strategies, and continuous optimization. The difference is in the frequency, depth, and breadth of our involvement.</p>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Core Services in All Portfolios</h2>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
<div className="bg-gray-50 p-8 rounded-lg">
  <div className="w-16 h-16 mb-6 text-amber-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  </div>
  <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Planning & Reporting</h3>
  <ul className="space-y-2">
    <li className="text-gray-700">Goal setting & KPI definition</li>
    <li className="text-gray-700">Competitor analysis</li>
    <li className="text-gray-700">Performance tracking</li>
    <li className="text-gray-700">Regular strategy reviews</li>
    <li className="text-gray-700">Customized reporting dashboards</li>
  </ul>
</div>

<div className="bg-gray-50 p-8 rounded-lg">
  <div className="w-16 h-16 mb-6 text-amber-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  </div>
  <h3 className="text-xl font-bold text-gray-800 mb-4">Campaign Management</h3>
  <ul className="space-y-2">
    <li className="text-gray-700">Google Ads management</li>
    <li className="text-gray-700">Meta/Instagram advertising</li>
    <li className="text-gray-700">Email marketing campaigns</li>
    <li className="text-gray-700">Seasonal promotions</li>
    <li className="text-gray-700">Retargeting strategies</li>
  </ul>
</div>

<div className="bg-gray-50 p-8 rounded-lg">
  <div className="w-16 h-16 mb-6 text-amber-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </div>
  <h3 className="text-xl font-bold text-gray-800 mb-4">Optimization & Growth</h3>
  <ul className="space-y-2">
    <li className="text-gray-700">Conversion rate optimization</li>
    <li className="text-gray-700">SEO maintenance & improvement</li>
    <li className="text-gray-700">Content updates & creation</li>
    <li className="text-gray-700">Website performance tuning</li>
    <li className="text-gray-700">Analytics & tracking refinement</li>
  </ul>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Results You Can Expect</h2>

<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
<div className="bg-white p-6 rounded-lg shadow-md text-center">
  <div className="text-4xl font-bold text-amber-600 mb-2">40%+</div>
  <p className="text-xl font-semibold text-gray-800 mb-2">Increase in Direct Bookings</p>
  <p className="text-gray-600">Average increase within the first year of partnership</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-md text-center">
  <div className="text-4xl font-bold text-amber-600 mb-2">35%</div>
  <p className="text-xl font-semibold text-gray-800 mb-2">Reduction in OTA Commissions</p>
  <p className="text-gray-600">Typical savings by shifting to direct channels</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-md text-center">
  <div className="text-4xl font-bold text-amber-600 mb-2">3.2x</div>
  <p className="text-xl font-semibold text-gray-800 mb-2">Return on Investment</p>
  <p className="text-gray-600">Average ROI across our client portfolio</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-gray-800 text-center mb-16">What Our Clients Say</h2>

<div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
<div className="bg-gray-50 p-8 rounded-lg relative">
  <div className="absolute -top-8 left-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white">
    <Image
      src="/static/images/testimonials/client1.jpg"
      alt="Sarah Williams"
      layout="fill"
      objectFit="cover"
    />
  </div>
  <div className="pt-8">
    <p className="text-gray-700 mb-6">
      "Their expertise in the African luxury market is unmatched. Within 6 months, our direct bookings increased by 42% and we've been able to significantly reduce our dependency on OTAs. The monthly strategy calls keep us aligned and focused on continuous improvement."
    </p>
    <div>
      <p className="font-bold text-gray-900">Sarah Williams</p>
      <p className="text-gray-600">General Manager, Botswana Safari Collection</p>
    </div>
  </div>
</div>

<div className="bg-gray-50 p-8 rounded-lg relative">
  <div className="absolute -top-8 left-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white">
    <Image
      src="/static/images/testimonials/client2.jpg"
      alt="Michael Johnson"
      layout="fill"
      objectFit="cover"
    />
  </div>
  <div className="pt-8">
    <p className="text-gray-700 mb-6">
      "We started with the quarterly retainer and quickly upgraded to monthly support as we saw the results coming in. Their team understands what luxury travelers are looking for and how to reach them effectively. Our ROI has been well over 4x on our marketing spend."
    </p>
    <div>
      <p className="font-bold text-gray-900">Michael Johnson</p>
      <p className="text-gray-600">Owner, Cape Coastal Retreat</p>
    </div>
  </div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="container mx-auto px-4 max-w-4xl">
<h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>

<div className="space-y-6">
<div>
  <h3 className="text-xl font-bold text-gray-800 mb-2">How long does it take to see results?</h3>
  <p className="text-gray-600">Most properties start seeing an increase in direct bookings within the first 3 months of our partnership. The exact timeline depends on your property's current marketing presence and the strategies we implement.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-amber-600">
<div className="container mx-auto px-4">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Direct Bookings?</h2>
<p className="text-xl text-amber-100 mb-8">
  Let's create a marketing strategy tailored to your property's unique character and goals.
</p>
<Link href="/contact">
  <button className="px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-md font-medium transition-colors text-lg">
    Schedule a Consultation
  </button>
</Link>
</div>
</div>
</section>
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