


export const ServiceItemPromo = (props) => {

    return (
        <div className={`${props.promobg} h-[350px] bg-no-repeat bg-cover bg-right sm:h-[180px] xs:h-[180px]`}>
            <div className="bg-gradient-to-r from-[#090A20] via-[#06082BE8] to-[#07093E14] h-full relative sm:h-[180px] xs:h-[180px]">
                <div className="max-w-[1290px] mx-auto flex items-end h-full lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px]">
                    <h1 className="bigTitle text-white max-w-[678px] mb-[71px] lg:text-2xl lg:mb-10 md:text-2xl md:mb-8 sm:text-xl sm:mb-5 xs:text-xl xs:mb-5">{props.promoheading}</h1>
                </div>
            </div>
        </div>
    )
}
