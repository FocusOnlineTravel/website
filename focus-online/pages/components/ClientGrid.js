import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ClientCarousel = ({ clients }) => {
  return (
    <div className="bg-storm-dark py-12 h-screen content-center text-center text-white">
      <small className="font-semibold">WORK</small>
      <h2 className="text-4xl mb-12 font-semibold mb-3 playfair-font italic text-white">Some of our clients</h2>
      <div className="container mx-auto px-4">
          
              <div className="items-center justify-center p-4 grid grid-cols-4 gap-4 text-center">
              {clients.map((client, index) => (
                <Image 
                  src={client.logo.url || `/static/images/clients/${client.logo}`} 
                  alt={client.name} 
                  width={300} 
                  height={160} 
                  className="mx-auto max-h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
              </div>
          
      </div>
    </div>
  );
};

export default ClientCarousel;