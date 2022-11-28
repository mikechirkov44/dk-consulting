import {useEffect} from "react";
import articlesService from "../../services/articlesService";


export const InfoMaterials = () => {

    //localStorage.clear()

    useEffect(()=>{
        articlesService.getArticles().then( (res) => {
            console.log(res)
        }).catch(err => {
            console.log(err)})
    },[])

    const themes = [
        {
            title: "Название 1",
            description: "Господа, высококачественный прототип будущего проекта обеспечивает актуальность дальнейших направлений развития.Господа, высококачественный прототип будущего проекта обеспечивает1"
        },
        {
            title: "Название 2",
            description: "Господа, высококачественный прототип будущего проекта обеспечивает актуальность дальнейших направлений развития.Господа, высококачественный прототип будущего проекта обеспечивает2"
        },
        {
            title: "Название 3",
            description: "Господа, высококачественный прототип будущего проекта обеспечивает актуальность дальнейших направлений развития.Господа, высококачественный прототип будущего проекта обеспечивает3"
        },
    ]
    return (
        <section>
            <ul className="py-[52px] max-w-[1290px] mx-auto relative lg:max-w-[940px] lg:py-[60px] md:max-w-[690px] sm:max-w-[420px] sm:py-[20px] xs:max-w-[290px] xs:py-5">
                {themes.map((theme, i) => {
                    return (
                        <li key={i} className="border-blue border-b-[1px] py-5">
                            <svg className="float-left mr-7 mb-0 h-auto sm:w-12 sm:mr-4 xs:w-12 xs:mr-3" width="108" height="86" viewBox="0 0 108 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M107 13.2609H42.5081C41.3391 13.2609 40.2287 12.7496 39.4687 11.8614L31.3733 2.39955C30.6133 1.51134 29.5029 1 28.3339 1H5C2.79086 1 1 2.79086 1 5V13.2609M107 13.2609H1M107 13.2609V20.456M1 13.2609V20.456M1 20.456V81C1 83.2091 2.79086 85 5 85H103C105.209 85 107 83.2091 107 81V20.456M1 20.456H107" stroke="#4D8BBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M66.0289 57.5293C66.4194 57.1388 66.4194 56.5056 66.0289 56.1151L59.6649 49.7512C59.2744 49.3606 58.6412 49.3606 58.2507 49.7512C57.8602 50.1417 57.8602 50.7749 58.2507 51.1654L63.9076 56.8222L58.2507 62.4791C57.8602 62.8696 57.8602 63.5028 58.2507 63.8933C58.6412 64.2838 59.2744 64.2838 59.6649 63.8933L66.0289 57.5293ZM36.5336 57.8222L65.3218 57.8222L65.3218 55.8222L36.5336 55.8222L36.5336 57.8222Z" fill="#4D8BBE"/>
                                <line x1="72.5235" y1="70.6282" x2="72.5235" y2="43.0163" stroke="#4D8BBE" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <h3 className="text-2xl lg:text-xl md:text-xl md:mb-2 sm:mb-2 sm:text-base xs:text-base xs:mb-1">{theme.title}</h3>
                            <p className="text-xl font-light lg:text-base md:text-base sm:text-xs xs:text-xs">{theme.description}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
