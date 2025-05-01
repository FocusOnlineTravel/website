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
    <div className="bg-storm-dark py-12">
      <h2 className="text-3xl text-center font-semibold text-white mb-4">
        WE WORK WITH LEADING AFRICAN TRAVEL BRANDS
      </h2>
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800} // Control speed of slide transition
          navigation={false} // Add navigation arrows
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          className="clients-carousel"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="h-48 flex items-center justify-center p-4">
                <Image 
                  src={client.logo.url || `/static/images/clients/${client.logo}`} 
                  alt={client.name} 
                  width={300} 
                  height={160} 
                  className="max-h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientCarousel;