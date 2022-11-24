import {NavLink} from "react-router-dom";
import {useState} from "react";
import Register from "../UI/Register";
import Login from "../UI/Login";


export const AboutPromo = () => {

    const [loginVisible, setLoginVisible] = useState(false);
    const [regVisible, setRegVisible] = useState(false);

    return (
        <div className="h-[910px] lg:h-[685px] sm:h-[256px] xs:h-[328px] bg-no-repeat bg-bottom bg-aboutpromo bg-cover">
            <div className="bg-gradient-to-r from-[#090A20] via-[#06082BE8] to-[#07093E14] h-full relative">
                <div className="flex absolute z-10 text-white font-extralight text-[16px] leading-[22px] top-[16px] right-[75px] sm:text-[10px] sm:leading-[12px] sm:right-[60px] xs:text-[10px] xs:leading-[12px] xs:right-[calc(50%-61px)] ">
                    <button className="hover:text-[#27699E] sm:text-[10px] xs:text-[10px]" onClick={() => {setRegVisible(true)}}>Регистрация / </button>
                    <button className="hover:text-[#27699E] sm:text-[10px] xs:text-[10px]" onClick={() => {setLoginVisible(true)}}>Авторизация</button>
                </div>

                <div className="w-[calc(50%-90px)] bg-[#090A20] h-full relative lg:w-[calc(50%-20px)] md:w-[calc(50%+45px)] sm:w-[calc(50%+90px)] xs:w-[calc(50%+120px)]">
                    <div className="absolute top-[203px] right-[35px] lg:top-[150px] sm:top-[35px] sm:right-0 xs:right-4 xs:top-10">
                        <div className="max-w-[550px] mb-[48px] lg:max-w-[355px] md:max-w-[355px] sm:max-w-[305px] sm:mb-[16px] xs:max-w-[235px] xs:mb-[20px]">
                            <div className="flex items-center">
                                <svg className="sm:w-5 xs:w-5" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.5893 1.73843C18.291 1.73843 18.8598 2.30669 18.8598 3.00766V6.88507C24.1597 7.47038 28.3679 11.6745 28.9537 16.9692H32.8349C33.5366 16.9692 34.1054 17.5375 34.1054 18.2384C34.1054 18.9394 33.5366 19.5077 32.8349 19.5077H28.9537C28.3679 24.8024 24.1597 29.0065 18.8598 29.5918V33.4692C18.8598 34.1702 18.291 34.7384 17.5893 34.7384C16.8877 34.7384 16.3188 34.1702 16.3188 33.4692V29.5918C11.0189 29.0065 6.81077 24.8024 6.22489 19.5077H2.34371C1.64205 19.5077 1.07324 18.9394 1.07324 18.2384C1.07324 17.5375 1.64205 16.9692 2.34371 16.9692H6.22489C6.81077 11.6745 11.0189 7.47038 16.3188 6.88507V3.00766C16.3188 2.30669 16.8877 1.73843 17.5893 1.73843ZM12.9309 18.2384C12.9309 15.6682 15.0166 13.5846 17.5893 13.5846C20.1621 13.5846 22.2477 15.6682 22.2477 18.2384C22.2477 20.8087 20.1621 22.8923 17.5893 22.8923C15.0166 22.8923 12.9309 20.8087 12.9309 18.2384Z" stroke="#40454E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <h1 className="bigTitle text-white ml-[10px] lg:text-[36px] lg:leading-[50px] md:text-[36px] md:leading-[50px] sm:text-[20px] sm:leading-[28px] xs:text-[20px] xs:leading-[28px]">НАША Миссия</h1>
                            </div>
                            <div className="w-[546px] h-[1px] bg-blue mb-[10px] lg:max-w-[355px] md:max-w-[355px] sm:max-w-[305px] sm:mb-1 xs:max-w-[235px]"></div>
                            <p className="par text-white lg:text-[18px] lg:leading-[24px] md:text-[18px] md:leading-[24px] sm:text-[12px] sm:leading-[16px]  xs:text-[12px] xs:leading-[16px]">&laquo;Совершенствование бизнеса наших клиентов для развития технологического потенциала России&raquo;</p>
                        </div>
                        <div className="max-w-[550px] lg:max-w-[355px] md:max-w-[355px] sm:max-w-[305px] xs:max-w-[235px]">
                            <div className="flex items-center">
                                <svg className="sm:w-5 xs:w-5" width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M31.6759 0.399351C32.1984 0.921809 32.1984 1.76888 31.6759 2.29134L30.8381 3.12913L33.4597 5.7507C33.9822 6.27316 33.9822 7.12023 33.4597 7.64269C32.9373 8.16515 32.0902 8.16515 31.5677 7.64269L28.9462 5.02112L25.4868 8.48048L26.3246 9.31827C26.847 9.84073 26.847 10.6878 26.3246 11.2103C25.8021 11.7327 24.9551 11.7327 24.4326 11.2103L23.5948 10.3725L19.2453 14.722C20.5739 16.451 21.3651 18.6175 21.3651 20.967C21.3651 26.6316 16.773 31.2237 11.1083 31.2237C5.44367 31.2237 0.851562 26.6316 0.851562 20.967C0.851562 15.3023 5.44367 10.7102 11.1083 10.7102C13.4578 10.7102 15.6242 11.5014 17.3533 12.83L29.7839 0.399351C30.3064 -0.123107 31.1535 -0.123107 31.6759 0.399351ZM11.1083 13.3859C6.9214 13.3859 3.52724 16.7801 3.52724 20.967C3.52724 25.1539 6.9214 28.548 11.1083 28.548C15.2952 28.548 18.6894 25.1539 18.6894 20.967C18.6894 18.8731 17.8423 16.9797 16.469 15.6063C15.0956 14.233 13.2021 13.3859 11.1083 13.3859Z" fill="#40454E"/>
                                </svg>
                                <h1 className="bigTitle text-white ml-[10px] lg:text-[36px] lg:leading-[50px] md:text-[36px] md:leading-[50px] sm:text-[20px] sm:leading-[28px] xs:text-[20px] xs:leading-[28px]">Концепция</h1>
                            </div>
                            <div className="w-[546px] h-[1px] bg-blue mb-[10px] lg:max-w-[355px] md:max-w-[355px] sm:max-w-[305px] sm:mb-1 xs:max-w-[235px]"></div>
                            <p className="par text-white lg:text-[18px] lg:leading-[24px] md:text-[18px] md:leading-[24px] sm:text-[12px] sm:leading-[16px]  xs:text-[12px] xs:leading-[16px]">Системный подход к&nbsp;управлению бизнесом, а&nbsp;значит, и&nbsp;успех компании заключается в&nbsp;управлении триадой неразрывно связанных элементов&nbsp;&mdash; корпоративная культура\ресурсная база\процессы.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Register isVisible={regVisible} setVisible={setRegVisible}/>
            <Login isVisible={loginVisible} setVisible={setLoginVisible}/>
        </div>

    )
}
