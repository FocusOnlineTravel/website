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
        {testimonials && testimonials.length > 0 ? (
  testimonials.map((testimonial, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-56">
        <img 
          src={testimonial.image?.url || `/static/images/testimonials/${testimonial.image}`} 
          alt={testimonial.propertyName || 'Testimonial'} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        
        <blockquote className="text-gray-700 italic mb-6 flex-grow">
          "{testimonial.quote || 'Testimonial content'}"
        </blockquote>
        
        <div>
          <p className="font-bold text-gray-900">{testimonial.author || 'Client'}</p>
          <p className="text-gray-600">{testimonial.position || 'Position'}, {testimonial.propertyName || 'Property'}</p>
        </div>
        
        {testimonial.results && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-800 mb-2">Results:</p>
            <p className="text-gray-700">{testimonial.results}</p>
          </div>
        )}
      </div>
    </div>
  ))
) : (
  <div className="text-center py-12">
    <p className="text-gray-600">No testimonials available</p>
  </div>
)}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;