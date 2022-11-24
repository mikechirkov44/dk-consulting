import  React  from 'react';
import { useSwiper } from 'swiper/react';

export const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
      <button className='group absolute top-[45%] left-0 z-[20]' onClick={() => swiper.slidePrev()}> 
        <svg className='sm:h-10 xs:h-9' width="22" height="96" viewBox="0 0 22 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='group-hover:stroke-darkblue' d="M21 0.999914L1 47.6666L21 94.3333" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
  );
}