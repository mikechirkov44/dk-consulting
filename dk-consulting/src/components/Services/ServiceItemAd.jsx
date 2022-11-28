import { NavLink } from "react-router-dom"
import Button from "../UI/Button"


export const ServiceItemAd = (props) => {
    return (
        <div className="bg-serviceheading h-[600px] bg-no-repeat bg-cover lg:h-[220px] md:h-[220px] sm:h-[180px] xs:h-[180px]">
            <div className="py-[175px] h-full flex flex-col items-center justify-center lg:py-[37px] md:py-[37px] sm:py-[30px] xs:py-[20px]">
                <h1 className="bigTitle max-w-[960px] mb-[60px] text-center text-white lg:mb-[38px] lg:text-2xl lg:max-w-[580px] md:mb-[38px] md:text-2xl md:max-w-[580px] sm:text-base sm:mb-[20px] sm:max-w-[280px] xs:text-base xs:mb-[20px] xs:max-w-[280px]">{props.ad}</h1>
                <NavLink to="/mainform">
                    <Button bluebtn={false} buttonText="оставить заявку"></Button>
                </NavLink>
            </div>
        </div>
    )
}