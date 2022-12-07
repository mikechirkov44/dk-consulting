import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import { useState, useEffect } from "react";
import Register from "../UI/Register";
import Login from "../UI/Login";

export const ServicePromo = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [regVisible, setRegVisible] = useState(false);
  const [account, setAccount] = useState(false);
  const [email, setEmail] = useState("");

    console.log(account)

    useEffect(()=>{
        const jwt = localStorage.getItem('jwt');
      if (jwt) {
        setAccount(true);
        const localEmail = localStorage.getItem("email");
        setEmail(localEmail);
      } else {
        console.log("net tokena");
      }
    }, [account])

    const logout = () => {
        localStorage.clear();
        setAccount(false);
    }

  return (
    <div className="h-[910px] lg:h-[685px] sm:h-[256px] xs:h-[328px] bg-no-repeat bg-bottom bg-servicepromo bg-cover relative">
      <div className="hidden sm:block xs:block bg-gradient-to-b from-[#030B29] via-[#02114596] to-[#020B2800] absolute top-0 z-2 w-full h-full"></div>
      <div className="bg-gradient-to-r from-[#090A20] via-[#06082BE8] to-[#07093E14] h-full relative sm:bg-transparent xs:bg-transparent">
                <div className="w-full absolute h-8 sm:h-5 xs:h-5">
                    <div className="max-w-[1290px] h-full w-full flex justify-end items-end mx-auto  lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] sm:justify-end xs:justify-center xs:max-w-[290px]">
                        <div className="flex z-10 text-white font-extralight text-[16px] leading-[22px] sm:text-[10px] sm:leading-[12px] sm:right-[60px] xs:text-[10px] xs:leading-[12px] xs:right-[calc(50%-61px)] ">
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
        <div className="w-[calc(50%-90px)] bg-[#090A20] h-full relative lg:w-[calc(50%-20px)]  md:w-[calc(50%+45px)] sm:bg-transparent  xs:bg-transparent sm:max-w-[370px] sm:w-full sm:mx-auto xs:max-w-[290px] xs:w-full xs:mx-auto">
          <div className="absolute top-[203px] right-[65px] lg:top-[112px]  md:top-[152px] sm:top-[50px] sm:right-0 sm:w-full xs:top-[40px] xs:right-0 xs:w-full">
            <div className="max-w-[485px] flex flex-col items-center lg:max-w-[276px] md:max-w-[276px]  sm:max-w-[370px] sm:w-full sm:mx-auto xs:max-w-[290px] xs:w-full xs:mx-auto">
              <h1 className="text-[22px] leading-[34px] text-center uppercase font-extralight text-white ml-[10px] lg:text-[18px] lg:leading-[24px]  md:text-[18px] md:leading-[24px] sm:text-[16px] sm:leading-[21px] xs:text-[16px] xs:leading-[21px]">
                Управление процессами компании для повышения эффективности
                бизнеса
              </h1>
              <ul className="mt-[48px] w-full flex flex-col items-center gap-12 sm:flex-wrap sm:gap-[10px] sm:h-[80px] xs:gap-5 xs:mt-4">
                <Link to="audit" smooth={true}>
                  <Button bluebtn={false} buttonText="аудит" />
                </Link>
                <Link to="consult" smooth={true}>
                  <Button
                    bluebtn={false}
                    buttonText="Промышленный консалтинг"
                  />
                </Link>
                <Link to="organize" smooth={true}>
                  <Button
                    bluebtn={false}
                    buttonText="ОРГАНИЗАЦИЯ ПРОИЗВОДСТВА"
                  />
                </Link>
                <Link to="teach" smooth={true}>
                  <Button bluebtn={false} buttonText="обучение" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Register
        isVisible={regVisible}
        setVisible={setRegVisible}
        setLoginVisible={setLoginVisible}
      />
      <Login
        isVisible={loginVisible}
        setVisible={setLoginVisible}
        setAccount={setAccount}
        regVisible={setRegVisible}
      />
    </div>
  );
};