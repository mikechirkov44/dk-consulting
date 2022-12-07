import  React  from 'react';
import { useSwiper } from 'swiper/react';

export const DiplomasNextButton = () => {
  const swiper = useSwiper();
  return (
      <button className='group absolute top-[calc(50%-48px)] right-[0px] z-[50] sm:top-[calc(50%-20px)] xs:top-[calc(50%-20px)]' onClick={() => swiper.slideNext()}> 
        <svg className='sm:h-10 xs:h-9' width="23" height="96" viewBox="0 0 23 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='group-hover:stroke-blue duration-500'  d="M1.5 0.999914L21.5 47.6666L1.5 94.3333" stroke="#bdbdbd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
  );
}