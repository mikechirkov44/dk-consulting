import React from "react";

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

    return ( 
        <div className="oveflow-hidden">
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
            </main>
            <Footer />
        </div>
        
    )
}