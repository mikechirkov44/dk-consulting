import {useState, useEffect} from "react";
import Register from "../UI/Register";
import Login from "../UI/Login";


export const AboutPromo = () => {

    const [loginVisible, setLoginVisible] = useState(false);
    const [regVisible, setRegVisible] = useState(false);
    const [account, setAccount] = useState(false);
    const [email, setEmail] = useState("");

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
        <div className="h-[910px] lg:h-[685px] sm:h-[256px] xs:h-[328px] bg-no-repeat bg-bottom bg-aboutpromo bg-cover">
            <div className="bg-gradient-to-r from-[#090A20] via-[#06082BE8] to-[#07093E14] h-full relative">
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

                <div className="w-[calc(50%-90px)] bg-[#090A20] h-full relative lg:w-[calc(50%-20px)] md:w-[calc(50%+45px)] sm:w-[calc(50%+90px)] xs:w-[calc(50%+120px)]">
                    <div className="absolute top-[203px] right-[35px] lg:top-[150px] sm:top-[35px] sm:right-0 xs:right-4 xs:top-10">
                        <div className="max-w-[550px] mb-[48px] lg:max-w-[355px] md:max-w-[355px] sm:max-w-[305px] sm:mb-[16px] xs:max-w-[235px] xs:mb-[20px]">
                            <div className="flex items-center">
                                <h1 className="bigTitle text-white lg:text-[36px] lg:leading-[50px] md:text-[36px] md:leading-[50px] sm:text-[20px] sm:leading-[28px] xs:text-[20px] xs:leading-[28px]">НАША Миссия</h1>
                            </div>
                            <div className="w-[546px] h-[1px] bg-blue mb-[10px] lg:max-w-[355px] md:max-w-[355px] sm:max-w-[305px] sm:mb-1 xs:max-w-[235px]"></div>
                            <p className="par text-white lg:text-[18px] lg:leading-[24px] md:text-[18px] md:leading-[24px] sm:text-[12px] sm:leading-[16px]  xs:text-[12px] xs:leading-[16px]">&laquo;Совершенствование бизнеса наших клиентов для развития технологического потенциала России&raquo;</p>
                        </div>
                        <div className="max-w-[550px] lg:max-w-[355px] md:max-w-[355px] sm:max-w-[305px] xs:max-w-[235px]">
                            <div className="flex items-center">
                                <h1 className="bigTitle text-white lg:text-[36px] lg:leading-[50px] md:text-[36px] md:leading-[50px] sm:text-[20px] sm:leading-[28px] xs:text-[20px] xs:leading-[28px]">Концепция</h1>
                            </div>
                            <div className="w-[546px] h-[1px] bg-blue mb-[10px] lg:max-w-[355px] md:max-w-[355px] sm:max-w-[305px] sm:mb-1 xs:max-w-[235px]"></div>
                            <p className="par text-white lg:text-[18px] lg:leading-[24px] md:text-[18px] md:leading-[24px] sm:text-[12px] sm:leading-[16px]  xs:text-[12px] xs:leading-[16px]">Системный подход к&nbsp;управлению бизнесом, а&nbsp;значит, и&nbsp;успех компании заключается в&nbsp;управлении триадой неразрывно связанных элементов&nbsp;&mdash; корпоративная культура\ресурсная база\процессы.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Register isVisible={regVisible} setVisible={setRegVisible} setLoginVisible={setLoginVisible}/>
            <Login isVisible={loginVisible} setVisible={setLoginVisible} setAccount={setAccount} regVisible={setRegVisible}/>
        </div>

    )
}
