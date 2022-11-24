import React from "react";

import AboutCards from "../components/About/AboutCards";
import { AboutPrinciples } from "../components/About/AboutPrinciples";
import { AboutPromo } from "../components/About/AboutPromo";
import { AboutResources } from "../components/About/AboutResourses";
import { AboutSpecialist } from "../components/About/AboutSpecialist";
import { AboutWorth } from "../components/About/AboutWorth";
import { GreyLine } from "../components/UI/GreyLine";
import Button from "../components/UI/Button";
import Header from "../components/Header&Footer/Header";
import Footer from "../components/Header&Footer/Footer";
import { AboutCompetenses } from "../components/About/AboutCompetenses";
import { HeaderBurger } from "../components/Header&Footer/HeaderBurger";
import { AboutDiplomas } from "../components/About/AboutDiplomas";
import { NavLink } from "react-router-dom";


export const About = () => {

    const [defaultPageWidth, setDefaultPageWidth] = React.useState(window.innerWidth);
    const bp = 767;
    React.useEffect(() => {
        const windowResizer = () => setDefaultPageWidth(window.innerWidth);
        window.addEventListener("resize", windowResizer);
        return () => {
            window.removeEventListener("resize", windowResizer);
        };
    }, []);

    const parline="Ценности являются основой компании, способной сделать ее сильной"

    return (
        <div className="overflow-hidden">

            {defaultPageWidth > bp
                ? <Header />
                : <HeaderBurger/>
            }
            <main className="mt-[70px] lg:mt-[87px] md:mt-[87px] sm:mt-[64px] xs:mt-[64px]"> 
                <AboutPromo />
                <AboutResources />
                <AboutPrinciples />
                <AboutSpecialist />
                <AboutCompetenses />
                <AboutDiplomas />
                <AboutWorth />
                <AboutCards />
                <GreyLine 
                    bigpar={true}
                    par={parline}
                />
                <NavLink to="/mainform" className="py-[30px] mx-auto flex items-center justify-center">
                    <Button bluebtn={true} buttonText="начать сотрудничество"/>
                </NavLink>
            </main>
            <Footer />
        </div>
    )
}