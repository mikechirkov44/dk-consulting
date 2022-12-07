import  React  from 'react';
import { useSwiper } from 'swiper/react';

export const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
      <button onClick={() => swiper.slideNext()} className="opacity-50 hover:opacity-100 duration-500 absolute z-[6] right-0 top-[calc(50%-118px)] sm:top-[calc(50%-51px)] xs:top-[calc(50%-51px)]">

          <svg width="50" height="226" viewBox="0 0 50 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:h-[102px] sm:w-[22px] xs:h-[102px] xs:w-[22px]">
              <path d="M1 1L49 113L1 225" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

      </button>
  );
}
