import React from "react";

import { InfoPromo } from "../components/Info/InfoPromo"
import Header from "../components/Header&Footer/Header";
import Footer from "../components/Header&Footer/Footer";
import { HeaderBurger } from "../components/Header&Footer/HeaderBurger";
import { InfoMaterials } from "../components/Info/InfoMaterials";


export const Info = () => {

    const [defaultPageWidth, setDefaultPageWidth] = React.useState(window.innerWidth);
    const bp = 767;
    React.useEffect(() => {
        const windowResizer = () => setDefaultPageWidth(window.innerWidth);
        window.addEventListener("resize", windowResizer);
        return () => {
            window.removeEventListener("resize", windowResizer);
        };
    }, []);

    return (
        <div>
            {defaultPageWidth > bp
                ? <Header />
                : <HeaderBurger/>
            }
            <main className="mt-[70px] lg:mt-[87px] md:mt-[87px] sm:mt-[64px] xs:mt-[64px]">
                <InfoPromo />
                <InfoMaterials/>
            </main>
            <Footer />
        </div>
    )
}