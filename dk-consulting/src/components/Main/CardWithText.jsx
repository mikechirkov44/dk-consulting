


export default function CardWithText(props) {
    return(
        <div className={props.ltr? "flex mx-auto items-center sm:flex-col xs:flex-col" : "flex flex-row-reverse my-[27px] items-center sm:flex-col xs:flex-col"}>
            <img alt="ассоциация" className="relative z-0 lg:h-[350px] w-auto md:h-[350px] sm:h-[183px]" src={props.pic}/>
            <div className={props.ltr ? "pl-[38px] flex flex-col items-start justify-center bg-lightgrey relative z-2 w-[658px] h-[360px] rounded-[6px] ml-[-130px] lg:w-[415px] lg:h-[250px] lg:ml-[-100px] lg:pl-[21px] md:ml-[-380px] md:w-[415px] md:h-[250px] sm:ml-0 sm:w-[340px] sm:h-[190px] sm:px-[45px] sm:py-[15px] sm:mt-[-50px] xs:ml-0 xs:w-[340px] xs:h-[160px] xs:px-[12px] xs:py-[5px] xs:mt-[-50px]" : "pl-[72px] flex flex-col items-start justify-center bg-lightgrey relative z-2 w-[658px] h-[360px] rounded-[6px] mr-[-130px] lg:w-[415px] lg:h-[250px] lg:mr-[-100px] lg:pl-[40px] md:mr-[-380px] md:w-[415px] md:h-[250px] sm:mr-0 sm:w-[340px] sm:h-[175px] sm:px-[45px] sm:py-[15px] sm:mt-[-50px] xs:mr-0 xs:w-[340px] xs:h-[140px] xs:px-[12px] xs:py-[5px] xs:mt-[-50px]"}>
                <h3 className="littleTitle text-black lg:text-[22px] lg:leading-[30px] md:text-[22px] md:leading-[30px] sm:text-[15px] sm:leading-[20px] sm:font-light xs:text-[15px] xs:leading-[20px] xs:font-light ">{props.header}</h3>
                <div className={props.ltr? "w-[619px] h-[1px] bg-blue my-[10px] lg:w-[333px] md:w-[333px] sm:w-[240px] sm:my-[4px] xs:w-[240px] xs:my-[4px]" : "w-[585px] h-[1px] bg-blue my-[10px] lg:w-[333px] md:w-[333px] sm:w-[240px] sm:my-[4px] xs:w-[240px] xs:my-[4px]"}></div>
                <ul className="list-disc ml-[18px]">
                    {props.quotes.map(
                        (q, i) => {
                            return(<li key={i} className="par text-black lg:text-[16px] lg:leading-[21px] md:text-[16px] md:leading-[21px] sm:text-[12px] sm:leading-[16px] sm:font-extralight  xs:text-[12px] xs:leading-[16px] xs:font-extralight">{q}</li>)
                        }
                    )}
                </ul>
            </div>
        </div>
    )
}
