
export default function Button(props) {
    return (
        <button className={props.bluebtn ? "bluebtn lg:w-[276px] lg:text-[14px] lg:py-[15px] md:text-[14px] md:leading-[14px] md:py-[14px] md:w-[275px] sm:w-[180px] sm:text-[10px] sm:leading-[13px] sm:py-[8px] sm:font-light xs:w-[180px] xs:text-[10px] xs:leading-[13px] xs:py-[8px] xs:font-light" : "transbtn  lg:w-[276px] lg:text-[14px] lg:py-[15px] md:text-[14px] md:leading-[14px] md:py-[14px] md:w-[275px] sm:w-[180px] sm:text-[10px] sm:leading-[13px] sm:py-[8px] sm:font-light xs:w-[180px] xs:text-[10px] xs:leading-[13px] xs:py-[8px] xs:font-light"}>{props.buttonText}</button>
    )
}
