import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import MainPromo from "../components/Main/MainPromo";
import MainConsult from "../components/Main/MainConsult";
import MainServices from "../components/Services/MainServices";
import MainCards from "../components/Main/MainCards";
import { GreyLine } from "../components/UI/GreyLine"
import Header from "../components/Header&Footer/Header";
import Button from "../components/UI/Button";
import { MainSchema } from "../components/Main/MainSchema";
import Footer from "../components/Header&Footer/Footer";
import { FourSteps } from "../components/FourSteps/FourSteps";
import {FormComponent} from "../components/Main/FormComponent";
import { HeaderBurger } from "../components/Header&Footer/HeaderBurger";
import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FourStepsMob } from "../components/FourSteps/FourStepsMob";

export const MainPage = () => {
    
    const [defaultPageWidth, setDefaultPageWidth] = React.useState(window.innerWidth);
    
    const bp = 767;
    const bp2 = 1023;

    React.useEffect(() => {
        const windowResizer = () => {
            setDefaultPageWidth(window.innerWidth)
        };
        window.addEventListener("resize", windowResizer);
        return () => {
            window.removeEventListener("resize", windowResizer);
        };
    }, []);





    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const params = useParams();

    const blocks = {
        mainform: useRef(null),
    };

    const scrollToBlock = (block = "") => {
        if (block in blocks) {
            blocks[block].current.scrollIntoView({
              behavior: "smooth"
            });
        }
    }

    useEffect(() => {
        scrollToBlock(params.block);
      }, [params]);
    
    return (
     <>
        {defaultPageWidth > bp
          ? <Header />
          : <HeaderBurger/>
        }
        
        <main className="mt-[70px] lg:mt-[87px] md:mt-[87px] sm:mt-[64px] xs:mt-[64px] overflow-hidden">
            <MainPromo />
            <MainConsult />
            <GreyLine pic={true} heading="Lean-технологии" par="Максимально оптимизирует операционную деятельность. Позволяет планировать развитие с учетом дальних перспектив. Запускает процесс непрерывного совершенствования."/>
            <MainServices />
            <MainCards />
            <NavLink to="/mainform" className="py-[30px] mx-auto flex items-center justify-center">
                <Button bluebtn={true} buttonText="начать изменения"/>
            </NavLink>
            {defaultPageWidth > bp2
                ? <FourSteps/>
                : <FourStepsMob/>
            }
            <MainSchema />
            <FormComponent ref={blocks.mainform} />
            <Link to="" onClick={scrollToTop} smooth={true} className="fixed bottom-4 right-4 z-[300] group">
                <svg className=" lg:w-[50px] md:w-10 sm:w-[30px] xs:w-[30px]" width="60" height="100" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                    <rect className="group-hover:stroke-blue" x="1" y="99" width="58" height="58" rx="29" transform="rotate(-90 1 99)" stroke="#40454E" strokeWidth="2"/>
                    </g>
                    <line className="group-hover:stroke-blue" x1="30.396" y1="78.3716" x2="30.396" y2="1.62872" stroke="#40454E" strokeWidth="2" strokeLinecap="round"/>
                    <line className="group-hover:stroke-blue" x1="1" y1="-1" x2="17.0377" y2="-1" transform="matrix(0.512439 -0.858724 0.955154 0.296109 22.1528 16.4355)" stroke="#40454E" strokeWidth="2" strokeLinecap="round"/>
                    <line className="group-hover:stroke-blue" x1="1" y1="-1" x2="17.0377" y2="-1" transform="matrix(-0.512439 -0.858724 -0.955154 0.296109 38.4497 16.4355)" stroke="#40454E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </Link>
        </main>
        <Footer />
     </>

    )
}
