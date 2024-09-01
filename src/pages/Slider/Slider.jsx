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
    return (
        <div>
            <div className='mt-10'>
                <h2 className='text-center text-3xl font font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#9dca34] to-[#025742] hover:scale-125 hover:text-blue-500'>Curated Collection of Houses</h2>
            </div>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='h-full' src="https://i.ibb.co/5x7mvjf/bailey-anselme-Bkp3g-Lygye-A-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full' src="https://i.ibb.co/djFKrMz/grant-lemons-j-TCLppdw-SEc-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full' src="https://i.ibb.co/w7SVtyD/zac-gudakov-wwq-Z8-CM21gg-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full' src="https://i.ibb.co/LPxJ8tk/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full' src="https://i.ibb.co/pwNBLRh/webaliser-TPTXZd9m-Oo-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full' src="https://i.ibb.co/JHKYCt8/ronnie-george-9g-Gv-NWBe-Oq4-unsplash.jpg" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;