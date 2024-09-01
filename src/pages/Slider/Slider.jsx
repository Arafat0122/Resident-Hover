// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Slider = () => {
  const initialSlideIndex = 2; // Index of the slide you want to display initially

  return (
    <div>
      <div className='mt-10'>
        <h2 className='text-center text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#9dca34] to-[#025742] hover:scale-125 hover:text-blue-500'>
          Curated Collection of Houses
        </h2>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={initialSlideIndex} // Show the middle slide initially
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]} // No Autoplay module included
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='h-full rounded-xl' src="https://i.ibb.co/5x7mvjf/bailey-anselme-Bkp3g-Lygye-A-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full rounded-xl' src="https://i.ibb.co/djFKrMz/grant-lemons-j-TCLppdw-SEc-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full rounded-xl' src="https://i.ibb.co/w7SVtyD/zac-gudakov-wwq-Z8-CM21gg-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full rounded-xl' src="https://i.ibb.co/LPxJ8tk/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full rounded-xl' src="https://i.ibb.co/pwNBLRh/webaliser-TPTXZd9m-Oo-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full rounded-xl' src="https://i.ibb.co/JHKYCt8/ronnie-george-9g-Gv-NWBe-Oq4-unsplash.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;