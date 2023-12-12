// Hero.tsx
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Navbar from './Navbar'; // Adjust the path accordingly

const Hero = () => {
  const data = [
    { id: 1, name: 'Product 1', price: '$45', image: '111.jpg' },
    { id: 2, name: 'Product 2', price: '$75', image: '222.jpg' },
  ];

  return (
    <div className='overflow-hidden mb-8'>
      <Navbar />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay configuration
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='lg:h-[80vh] h-[60vh]'>
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center">
                    <div className="bg-gray-800 py-4 px-8 rounded-lg lg:min-w-[30%] min-w-[80%]">
                        <h2 className="text-xl font-bold mb-4 text-white">{item.name}</h2>
                        <div className='flex justify-between items-center'>
                            <button className="bg-orange-700 text-white px-4 py-2 rounded-md">
                                Add to Cart
                            </button>
                            <p className='text-sm font-medium text-white'>{item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
