import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <div className="bg-tropical-dark py-16"> {/* Blue background from your color palette */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold text-white mb-12">
          Success Stories
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="testimonial-carousel"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-full">
                    <Image 
                      src={testimonial.image.url || `/static/images/testimonials/${testimonial.image}`} 
                      alt={testimonial.propertyName} 
                      width={500}
                      height={350}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-golden" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl text-gray-700 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.position}, {testimonial.propertyName}</p>
                    </div>
                    {testimonial.results && (
                      <div className="mt-6 p-4 bg-sand-light rounded-lg">
                        <p className="font-semibold text-storm-dark mb-2">Results:</p>
                        <p className="text-gray-700">{testimonial.results}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;