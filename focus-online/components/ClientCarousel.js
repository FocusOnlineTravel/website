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
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      className="clients-carousel"
    >
      {clients.map((client, index) => (
        <SwiperSlide key={index}>
          <div className="h-24 flex items-center justify-center p-4">
            <Image 
              src={client.logo.url || `/static/images/clients/${client.logo}`} 
              alt={client.name} 
              width={150} 
              height={80} 
              className="max-h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientCarousel;