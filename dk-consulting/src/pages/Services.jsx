import React from "react";

import {Helmet} from "react-helmet";
import { ServiceItem1} from "../components/Services/ServiceItem1"
import { ServiceItem2 } from "../components/Services/ServiceItem2"
import { ServiceItem3 } from "../components/Services/ServiceItem3"
import { ServiceItem4 } from "../components/Services/ServiceItem4"
import { ServicePromo } from "../components/Services/ServicePromo"
import Header from "../components/Header&Footer/Header";
import Footer from "../components/Header&Footer/Footer"
import { HeaderBurger } from "../components/Header&Footer/HeaderBurger";
import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";


export const Services = () => {

    const [defaultPageWidth, setDefaultPageWidth] = React.useState(window.innerWidth);
    const bp = 767;
    React.useEffect(() => {
        const windowResizer = () => setDefaultPageWidth(window.innerWidth);
        window.addEventListener("resize", windowResizer);
        return () => {
            window.removeEventListener("resize", windowResizer);
        };
    }, []);

    const params = useParams();

    const services = {
        audit: useRef(null),
        teach: useRef(null),
        organize: useRef(null),
        consult: useRef(null)
    };

    const scrollToService = (service = "") => {
        if (service in services) {
            services[service].current.scrollIntoView({
              behavior: "smooth"
            });
        }
    }

    useEffect(() => {
        scrollToService(params.service);
    }, [params]);
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return ( 
        <div className="oveflow-hidden">
            <Helmet>
                <title>Услуги | DK-CONSULTING</title>
                <meta name="description" content="Услуги компании" />
            </Helmet>
            {defaultPageWidth > bp
                ? <Header />
                : <HeaderBurger/>
            }
            <main className="mt-[70px] lg:mt-[87px] md:mt-[87px] sm:mt-[64px] xs:mt-[64px]">
                <ServicePromo />
                <ServiceItem1 ref={services.audit}/>
                <ServiceItem2 ref={services.consult}/>
                <ServiceItem3 ref={services.organize}/>
                <ServiceItem4 ref={services.teach}/>
                <button onClick={scrollToTop} className="fixed bottom-4 right-4 z-[300] group">
                <svg className=" lg:w-[50px] md:w-10 sm:w-[30px] xs:w-[30px]" width="60" height="100" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                    <rect className="group-hover:stroke-sky-700" x="1" y="99" width="58" height="58" rx="29" transform="rotate(-90 1 99)" stroke="#40454E" strokeWidth="2"/>
                    </g>
                    <line className="group-hover:stroke-sky-700" x1="30.396" y1="78.3716" x2="30.396" y2="1.62872" stroke="#40454E" strokeWidth="2" strokeLinecap="round"/>
                    <line className="group-hover:stroke-sky-700" x1="1" y1="-1" x2="17.0377" y2="-1" transform="matrix(0.512439 -0.858724 0.955154 0.296109 22.1528 16.4355)" stroke="#40454E" strokeWidth="2" strokeLinecap="round"/>
                    <line className="group-hover:stroke-sky-700" x1="1" y1="-1" x2="17.0377" y2="-1" transform="matrix(-0.512439 -0.858724 -0.955154 0.296109 38.4497 16.4355)" stroke="#40454E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
            </main>
            <Footer />
        </div>
        
    )
}