

export const AboutCardWithText = (props) => {
    return(
        <div className={props.ltr? "flex mx-auto items-center sm:flex-col xs:flex-col group" : "flex flex-row-reverse my-[27px] items-center sm:flex-col xs:flex-col group"}>
            <img alt="ассоциация" src={props.image} className="group-hover:scale-[102%] duration-500 relative z-0 lg:h-[350px] w-auto md:h-[350px] sm:h-[183px]"/>
            <div className={props.ltr ? "pl-[38px] flex flex-col items-start justify-center bg-lightgrey relative z-2 w-[658px] h-[360px] rounded-[6px] ml-[-130px] lg:w-[415px] lg:h-[315px] lg:ml-[-100px] lg:pl-5 md:pl-5 md:ml-[-360px] md:w-[415px] md:h-[315px] sm:ml-0 sm:w-[340px] sm:h-[205px] sm:px-4 sm:py-[15px] sm:mt-[-80px] xs:ml-0 xs:w-[340px] xs:h-[190px] xs:px-[12px] xs:py-[5px] xs:mt-[-80px]" : "pl-[72px] flex flex-col items-start justify-center bg-lightgrey relative z-2 w-[658px] h-[360px] rounded-[6px] mr-[-130px] lg:w-[415px] lg:h-[315px] lg:mr-[-100px] lg:pl-5 md:mr-[-360px] md:pl-5 md:w-[415px] md:h-[315px] sm:mr-0 sm:w-[340px] sm:h-[155px] sm:px-4 sm:py-[15px] sm:mt-[-60px] xs:mr-0 xs:w-[340px] xs:h-[155px] xs:px-[12px] xs:py-[5px] xs:mt-[-60px]"}>
                <h3 className="littleTitle text-black lg:text-[22px] lg:leading-[30px] md:text-[22px] md:leading-[30px] sm:text-[15px] sm:leading-[20px] sm:font-normal xs:text-[15px] xs:leading-[20px] xs:font-normal">{props.heading}</h3>
                <div className={props.ltr? "w-full h-[1px] bg-blue my-[10px] sm:my-[4px] xs:my-[4px]" : "w-full h-[1px] bg-blue my-[10px] lg:my-2 md:my-2 sm:my-[4px] xs:my-[4px]"}></div>
                <h6 className="par font-normal text-black lg:text-[16px] lg:leading-[21px] md:text-[16px] md:leading-[21px] sm:text-[12px] sm:leading-[16px] sm:font-light  xs:text-[12px] xs:leading-[16px] xs:font-light">&laquo;{props.subheading}&raquo;</h6>
                <p className="par text-black lg:text-[16px] lg:leading-[21px] md:text-[16px] md:leading-[21px] sm:text-[12px] sm:leading-[16px] sm:font-light  xs:text-[12px] xs:leading-[16px] xs:font-light">{props.par}</p>
            </div>
        </div>
    )
}