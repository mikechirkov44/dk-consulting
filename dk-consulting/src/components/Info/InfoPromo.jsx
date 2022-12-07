import Button from "../UI/Button";

import { Link, animateScroll as scroll } from "react-scroll";

export const InfoPromo = ({account, email, logout, setRegVisible, setLoginVisible}) => {

    return (
        <div className="h-[910px] lg:h-[685px] sm:h-[256px] xs:h-[328px] bg-no-repeat bg-bottom bg-infopromo bg-cover xs:bg-top">
            <div className="bg-gradient-to-r from-[#090A20] to-[#07093E14] h-full xs:bg-gradient-to-t xs:from-[#090A20] xs:to-[#07093E14] relative">
                <div className="w-full absolute h-8 sm:h-5 xs:h-5">
                    <div className="max-w-[1290px] h-full w-full flex justify-end items-end mx-auto  lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] sm:justify-end xs:justify-center xs:max-w-[290px]">
                        <div className="flex z-10 text-black font-light text-[16px] leading-[22px] sm:text-[10px] sm:leading-[12px] sm:right-[60px] xs:text-[10px] xs:leading-[12px] xs:right-[calc(50%-61px)] ">
                            {
                            account ?  <div>
                                <p className="hover:opacity-100 duration-500 opacity-60 inline sm:text-[10px] xs:text-[10px]">{email} </p>&nbsp;/&nbsp;
                                <button className="hover:opacity-100 duration-500 opacity-60 sm:text-[10px] xs:text-[10px]" onClick={logout}> Выйти</button>
                            </div> :  <div>
                            <button className="hover:opacity-100 duration-500 opacity-60 sm:text-[10px] xs:text-[10px]" onClick={() => {setRegVisible(true)}}>Регистрация </button>&nbsp;/&nbsp;
                            <button className="hover:opacity-100 duration-500 opacity-60 sm:text-[10px] xs:text-[10px]" onClick={() => {setLoginVisible(true)}}>Авторизация</button></div>
                            }
                        </div>
                    </div>
                </div>
                
                <div className="w-[calc(50%-90px)] bg-[#090A20] h-full relative lg:w-[calc(50%-20px)]  md:w-[calc(50%+45px)] sm:w-[50%] xs:bg-transparent xs:w-full xs:mx-auto xs:relative">
                    <div className="absolute top-[321px] right-[24px] lg:top-[112px]  md:top-[152px] sm:top-[26px] xs:top-[150px] xs:mx-auto xs:right-[calc(50%-117.5px)]">
                        <div className="max-w-[526px] flex flex-col items-start  lg:max-w-[306px]  md:max-w-[306px] sm:max-w-[180px] xs:max-w-[235px] xs:w-full">
                            <h1 className="par text-white mb-[61px] lg:text-[18px] lg:leading-[24px] lg:mb-[50px] md:text-[18px] md:leading-[24px] md:mb-[50px] sm:mb-[18px] sm:text-[12px] sm:leading-[16px] sm:text-center xs:mb-[18px] xs:text-[12px] xs:leading-[16px] xs:text-center">Разработанный нами материал полезен для изучения руководителям любого уровня, а также для проведения обучающих семинаров с целью повышения личной и командной эффективности сотрудников компании.</h1>
                            <Link to="info-materials" smooth={true} className="xs:absolute xs:top-[115px] xs:mx-auto xs:right-[calc(50%-90px)]">
                                <Button bluebtn={false} buttonText="приступить к изучению"/>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
