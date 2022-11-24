import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

import diplom1 from "../../assets/About/diplom1.jpg";
import diplom2 from "../../assets/About/diplom2.jpg";
import diplom3 from "../../assets/About/diplom3.jpg";
import diplom4 from "../../assets/About/diplom4.jpg";
import diplom5 from "../../assets/About/diplom5.jpg";
import diplom6 from "../../assets/About/diplom6.jpg";
import diplom7 from "../../assets/About/diplom7.jpg";
import diplom8 from "../../assets/About/diplom8.jpg";
import { DiplomasNextButton } from "../UI/DiplomasNextBtn";
import { DiplomasPrevButton } from "../UI/DiplomasPrevBtn";


export const AboutDiplomas = () => {
    return (
        <section className="pb-10">
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-[500px] relative h-auto sm:w-80 xs:w-60"
            >
                <DiplomasPrevButton/>
                <SwiperSlide>
                    <img src={diplom1} alt="diplom1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={diplom2} alt="diplom2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={diplom3} alt="diplom3" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[350px] w-full mx-auto sm:h-[220px] xs:h-[168px]">
                        <img src={diplom4} alt="diplom4" className="h-full mx-auto"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={diplom5} alt="diplom5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={diplom6} alt="diplom6" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={diplom7} alt="diplom7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={diplom8} alt="diplom8" />
                </SwiperSlide>
                <DiplomasNextButton/>
            </Swiper>
        </section>
    )
}