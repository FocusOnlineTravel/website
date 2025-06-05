import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';

// Calendar & Form Components
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function ConsultationPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    propertyLocation: '',
    propertyType: '',
    message: '',
    marketingGoals: [],
    budget: '',
    hearAboutUs: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '01:00 PM', '02:00 PM', 
    '03:00 PM', '04:00 PM'
  ];
  
  // Marketing goals options
  const marketingGoalOptions = [
    'Increase direct bookings',
    'Reduce OTA commission costs',
    'Develop/refresh website',
    'Improve search engine visibility',
    'Social media management',
    'Content creation',
    'Photography & video',
    'Email marketing',
    'Google Ads management',
    'Analytics & tracking',
    'Other'
  ];
  
  // Form change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      // Handle checkboxes (multiple selection)
      const updatedGoals = [...formData.marketingGoals];
      if (checked) {
        updatedGoals.push(value);
      } else {
        const index = updatedGoals.indexOf(value);
        if (index > -1) {
          updatedGoals.splice(index, 1);
        }
      }
      setFormData({ ...formData, marketingGoals: updatedGoals });
    } else {
      // Handle regular inputs
      setFormData({ ...formData, [name]: value });
    }
    
    // Clear error when field is modified
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: null });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const errors = {};
    const requiredFields = ['name', 'email', 'phone', 'propertyName', 'propertyLocation', 'propertyType'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Date and time validation
    if (!selectedDate) {
      errors.date = 'Please select a date';
    }
    
    if (!selectedTime) {
      errors.time = 'Please select a time';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Combine all form data including date and time
      const consultationData = {
        ...formData,
        consultationDate: selectedDate ? selectedDate.toDateString() : '',
        consultationTime: selectedTime
      };
      
      console.log('Form submitted:', consultationData);
      
      // Show success message/animation
      setFormSubmitted(true);
      
      // Redirect after delay or show confirmation screen
      setTimeout(() => {
        router.push('/consultation-confirmation');
      }, 3000);
    }
  };
  
  // GSAP animations
  useEffect(() => {
    // Animate header section
    gsap.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
    
    // Stagger animate form elements
    gsap.from('.form-control', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.5,
      ease: 'power1.out'
    });
  }, []);
  
  // Filter available dates (e.g., exclude weekends and past dates)
  const filterAvailableDates = (date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Allow only future dates (excluding weekends)
    return date >= today && day !== 0 && day !== 6;
  };
  
  return (
    <>
      <Head>
        <title>Schedule a Consultation | Luxury African Properties</title>
        <meta name="description" content="Book a free consultation to discuss how we can elevate your property's digital presence and increase direct bookings." />
      </Head>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/static/images/consultation-bg.jpg" 
            alt="Luxury African Safari Lodge" 
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center hero-content">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Schedule Your Free Consultation</h1>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can elevate your property's digital presence and increase direct bookings.
            </p>
          </div>
        </div>
      </section>
      
      {/* Consultation Booking Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Tell Us About Your Property</h2>
                
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Consultation Scheduled!</h3>
                    <p className="text-gray-600">Thank you for booking a consultation. We'll send a confirmation email with all the details.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="form-control">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                          Your Name*
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                      </div>
                      
                      {/* Email */}
                      <div className="form-control">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                          Email Address*
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                      </div>
                      
                      {/* Phone */}
                      <div className="form-control">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                          Phone Number*
                        </label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                      </div>
                      
                      {/* Property Name */}
                      <div className="form-control">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="propertyName">
                          Property Name*
                        </label>
                        <input 
                          type="text" 
                          id="propertyName" 
                          name="propertyName" 
                          value={formData.propertyName} 
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${formErrors.propertyName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formErrors.propertyName && <p className="text-red-500 text-sm mt-1">{formErrors.propertyName}</p>}
                      </div>
                      
                      {/* Property Location */}
                      <div className="form-control">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="propertyLocation">
                          Property Location*
                        </label>
                        <input 
                          type="text" 
                          id="propertyLocation" 
                          name="propertyLocation" 
                          value={formData.propertyLocation} 
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${formErrors.propertyLocation ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {formErrors.propertyLocation && <p className="text-red-500 text-sm mt-1">{formErrors.propertyLocation}</p>}
                      </div>
                      
                      {/* Property Type */}
                      <div className="form-control">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="propertyType">
                          Property Type*
                        </label>
                        <select 
                          id="propertyType" 
                          name="propertyType" 
                          value={formData.propertyType} 
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${formErrors.propertyType ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Select property type</option>
                          <option value="Luxury Hotel">Luxury Hotel</option>
                          <option value="Safari Lodge">Safari Lodge</option>
                          <option value="Beach Resort">Beach Resort</option>
                          <option value="Boutique Hotel">Boutique Hotel</option>
                          <option value="Villa Collection">Villa Collection</option>
                          <option value="Game Reserve">Game Reserve</option>
                          <option value="Other">Other</option>
                        </select>
                        {formErrors.propertyType && <p className="text-red-500 text-sm mt-1">{formErrors.propertyType}</p>}
                      </div>
                      
                      {/* Budget Range */}
                      <div className="form-control">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="budget">
                          Marketing Budget Range
                        </label>
                        <select 
                          id="budget" 
                          name="budget" 
                          value={formData.budget} 
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          <option value="">Select budget range</option>
                          <option value="Under $1,000/month">Under $1,000/month</option>
                          <option value="$1,000 - $3,000/month">$1,000 - $3,000/month</option>
                          <option value="$3,000 - $5,000/month">$3,000 - $5,000/month</option>
                          <option value="$5,000 - $10,000/month">$5,000 - $10,000/month</option>
                          <option value="Over $10,000/month">Over $10,000/month</option>
                          <option value="Project-based">Project-based</option>
                        </select>
                      </div>
                      
                      {/* How did you hear about us */}
                      <div className="form-control md:col-span-2">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="hearAboutUs">
                          How did you hear about us?
                        </label>
                        <select 
                          id="hearAboutUs" 
                          name="hearAboutUs" 
                          value={formData.hearAboutUs} 
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          <option value="">Select an option</option>
                          <option value="Google Search">Google Search</option>
                          <option value="Referral">Referral</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Industry Event">Industry Event</option>
                          <option value="Article/Publication">Article/Publication</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      {/* Marketing Goals */}
                      <div className="form-control md:col-span-2">
                        <p className="block text-gray-700 font-medium mb-2">
                          Marketing Goals (select all that apply)
                        </p>
                        <div className="grid md:grid-cols-2 gap-2 mt-2">
                          {marketingGoalOptions.map((goal) => (
                            <div key={goal} className="flex items-start">
                              <input
                                type="checkbox"
                                id={goal.replace(/\s+/g, '-').toLowerCase()}
                                name="marketingGoals"
                                value={goal}
                                checked={formData.marketingGoals.includes(goal)}
                                onChange={handleChange}
                                className="mt-1 mr-2"
                              />
                              <label htmlFor={goal.replace(/\s+/g, '-').toLowerCase()} className="text-gray-700">
                                {goal}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Message */}
                      <div className="form-control md:col-span-2">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                          Additional Information
                        </label>
                        <textarea 
                          id="message" 
                          name="message" 
                          value={formData.message} 
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="Tell us more about your property and your digital marketing goals..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="mt-10">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Select Consultation Date & Time</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Date Picker */}
                        <div className="form-control">
                          <label className="block text-gray-700 font-medium mb-2">
                            Preferred Date*
                          </label>
                          <DatePicker
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            filterDate={filterAvailableDates}
                            minDate={new Date()}
                            dateFormat="MMMM d, yyyy"
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${formErrors.date ? 'border-red-500' : 'border-gray-300'}`}
                            placeholderText="Select a date"
                          />
                          {formErrors.date && <p className="text-red-500 text-sm mt-1">{formErrors.date}</p>}
                        </div>
                        
                        {/* Time Slots */}
                        <div className="form-control">
                          <label className="block text-gray-700 font-medium mb-2">
                            Preferred Time* (CAT/SAST)
                          </label>
                          <select 
                            value={selectedTime} 
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${formErrors.time ? 'border-red-500' : 'border-gray-300'}`}
                          >
                            <option value="">Select a time slot</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                          {formErrors.time && <p className="text-red-500 text-sm mt-1">{formErrors.time}</p>}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-10">
                      <button 
                        type="submit" 
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                      >
                        Schedule Consultation
                      </button>
                      <p className="text-gray-500 text-sm mt-2 text-center">
                        We'll send you a confirmation email with meeting details
                      </p>
                    </div>
                  </form>
                )}
              </div>
              
              {/* Right Column - Info */}
              <div>
                <div className="bg-gray-50 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">What to Expect</h2>
                  <p className="text-gray-600 mb-6">
                    During your 30-minute consultation, one of our marketing specialists will:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Discuss your property's current digital presence",
                      "Identify key opportunities for improvement",
                      "Recommend strategies to increase direct bookings",
                      "Outline potential solutions tailored to your needs",
                      "Answer any questions you may have about our services"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-amber-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Clients Say</h2>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "The free consultation was incredibly valuable. They identified issues with our website I hadn't even noticed and outlined a clear strategy for improvement. Within 3 months of implementing their recommendations, our direct bookings increased by 45%."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <p className="font-bold text-gray-900">Jane Smith</p>
                      <p className="text-gray-600">Marketing Director, Serengeti Luxury Lodge</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-800 text-white rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-4">Call us directly or send an email:</p>
                  <p className="flex items-center mb-2">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span>(123) 456-7890</span>
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span>hello@youragency.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Is the consultation really free?",
                  answer: "Yes, the initial 30-minute consultation is completely free with no obligation. We believe in providing value upfront and helping you understand how we can assist before you make any commitments."
                },
                {
                  question: "What should I prepare before the consultation?",
                  answer: "Having access to your current website analytics, information about your current marketing efforts, and a clear idea of your goals will help us provide the most valuable insights during our call."
                },
                {
                  question: "How long does it take to see results?",
                  answer: "While every property is different, our clients typically begin seeing improvements in their digital performance within 1-3 months of implementation. More significant results in direct bookings often become apparent after 3-6 months of consistent work."
                },
                {
                  question: "Do you work with properties outside of Africa?",
                  answer: "While we specialize in luxury African properties, we do occasionally work with select luxury properties in other regions. Feel free to schedule a consultation to discuss your specific needs."
                },
                {
                  question: "What happens after the consultation?",
                  answer: "If we both feel there's a good fit, we'll provide a detailed proposal outlining recommended services, timelines, and investment levels. You're under no obligation to proceed, but we're confident you'll see the value in our approach."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// This would be used for the consultation confirmation page
export function getStaticProps() {
  return {
    props: {
      // Any props needed
    },
  };
}