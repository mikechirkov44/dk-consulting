import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

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

    const [defaultPageWidth, setDefaultPageWidth] = React.useState(window.innerWidth);
    const bp = 1023;
    React.useEffect(() => {
        const windowResizer = () => setDefaultPageWidth(window.innerWidth);
        window.addEventListener("resize", windowResizer);
        return () => {
            window.removeEventListener("resize", windowResizer);
        };
    }, []);

    return (
        <section className="pb-10 w-full relative h-auto max-w-[1290px] mx-auto lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px]">
            <Swiper
                slidesPerView={defaultPageWidth > bp ? 2 : 1}
                spaceBetween={42}
                loop={true}
                grabCursor={true}
                className="px-10"
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
                    <div className="h-[410px] w-full mx-auto lg:h-[290px] sm:h-[240px] xs:h-[168px]">
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