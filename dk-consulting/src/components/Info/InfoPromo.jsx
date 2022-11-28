import {NavLink} from "react-router-dom";
import Button from "../UI/Button";
import Register from "../UI/Register";
import Login from "../UI/Login";
import {useState} from "react";

export const InfoPromo = () => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [regVisible, setRegVisible] = useState(false);
    return (
        <div className="h-[910px] lg:h-[685px] sm:h-[256px] xs:h-[328px] bg-no-repeat bg-bottom bg-infopromo bg-cover xs:bg-top">
            <div className="bg-gradient-to-r from-[#090A20] via-[#06082BE8] to-[#07093E14] h-full xs:bg-gradient-to-t xs:from-[#090A20] xs:to-[#07093E14]">
                <div className="w-[calc(50%-90px)] bg-[#090A20] h-full relative lg:w-[calc(50%-20px)]  md:w-[calc(50%+45px)] sm:w-[50%] xs:bg-transparent xs:w-full xs:mx-auto xs:relative">
                    <div className="absolute top-[321px] right-[24px] lg:top-[112px]  md:top-[152px] sm:top-[26px] xs:top-[150px] xs:mx-auto xs:right-[calc(50%-117.5px)]">
                        <div className="max-w-[526px] flex flex-col items-start  lg:max-w-[306px]  md:max-w-[306px] sm:max-w-[180px] xs:max-w-[235px] xs:w-full">
                            <h1 className="par text-white mb-[61px] lg:text-[18px] lg:leading-[24px] lg:mb-[50px] md:text-[18px] md:leading-[24px] md:mb-[50px] sm:mb-[18px] sm:text-[12px] sm:leading-[16px] sm:text-center xs:mb-[18px] xs:text-[12px] xs:leading-[16px] xs:text-center">Разработанный нами материал полезен для изучения руководителям любого уровня, а также для проведения обучающих семинаров с целью повышения личной и командной эффективности сотрудников компании.</h1>
                            <NavLink to="/mainform" className="xs:absolute xs:top-[115px] xs:mx-auto xs:right-[calc(50%-90px)]">
                                <Button bluebtn={false} buttonText="начать сотрудничество"/>
                            </NavLink>
                            <div className='mt-[50px] text-lightgrey font-extralight text-[16px] leading-[22px] lg:mt-[50px] md:mt-[50px] sm:text-[10px] sm:leading-[12px] sm:mt-[15px] xs:absolute xs:top-[-130px] xs:text-[10px] xs:leading-[12px] xs:left-[calc(50%-63px)] xs:mt-0'>
                                <button className="hover:text-[#27699E] sm:text-[10px] xs:text-[10px]" onClick={() => {setRegVisible(true)}}>Регистрация / </button>
                                <button className="hover:text-[#27699E] sm:text-[10px] xs:text-[10px]" onClick={() => {setLoginVisible(true)}}>Авторизация</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Register isVisible={regVisible} setVisible={setRegVisible}/>
            <Login isVisible={loginVisible} setVisible={setLoginVisible}/>
        </div>
    )
}
