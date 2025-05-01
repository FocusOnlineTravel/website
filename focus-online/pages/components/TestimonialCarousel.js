import React from 'react';
import Image from 'next/image';

const TestimonialsGrid = ({ testimonials }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Success Stories</h2>
          <p className="text-l text-gray-600 max-w-3xl mx-auto">See how we've transformed digital performance for luxury African properties. Our tailored strategies have increased direct bookings, reduced OTA dependency, and created sustainable revenue growth for these distinguished partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-56">
                <Image 
                  src={testimonial.image.url || '/static/images/testimonials/${testimonial.image}'} 
                  alt={testimonial.propertyName} 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}, {testimonial.propertyName}</p>
                </div>
                
                {testimonial.results && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-800 mb-2">Results:</p>
                    <p className="text-gray-700">{testimonial.results}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;