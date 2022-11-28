import { forwardRef } from "react";
import React from "react";
import Button from "../../components/UI/Button";

export const FormComponent = React.forwardRef((props, forwardedRef) => {
    return (
        <section {...props} ref={forwardedRef} className="py-[88px] max-w-[1290px] mx-auto  lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px]">
            <div className="flex flex-col justify-between items-center ">
                <h2 className="text-[36px] leading-[50px] font-extralight text-center uppercase lg:text-4xl md:text-4xl sm:text-2xl xs:text-2xl">Запрос на сотрудничество</h2>
                <p className="font-normal text-[26px] leading-[36px] text-center text-[#40454E] lg:text-xl md:text-xl sm:hidden xs:hidden">Опишите Ваш запрос либо проблему и мы свяжемся с Вами</p>
            </div>
            <form
                type="submit"
                className="flex flex-col  items-center h-full mt-[37px]"
            >
                <ul className="flex justify-between items-center text-[#5A5656] w-[100%] mb-[32px] flex-wrap md:space-y-2 md:mb-5 sm:space-y-2 sm:mb-5 xs:flex-col xs:items-start xs:space-y-2">
                    <li className="flex items-center md:w-[50%] sm:w-[50%]">
                        <input type="radio" name="problem" value="audit" id="audit" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4"/>
                        <label htmlFor="audit" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Аудит</label>
                    </li>
                    <li className="flex items-center md:w-[50%] sm:w-[50%]">
                        <input type="radio" name="problem" value="consult" id="consult" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4"/>
                        <label htmlFor="consult" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Промышленный консалтинг</label>
                    </li>
                    <li className="flex items-center md:w-[50%] sm:w-[50%]">
                        <input type="radio" name="problem" value="organize" id="organize" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4"/>
                        <label htmlFor="organize" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Организация производства</label>
                    </li>
                    <li className="flex items-center md:w-[50%] sm:w-[50%]">
                        <input type="radio" name="problem" value="teach" id="teach" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4"/>
                        <label htmlFor="teach" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Обучение</label>
                    </li>
                </ul>
                <ul className="flex flex-col w-[100%]">
                        <li className="flex flex-col">
                            <label htmlFor="name" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal md:text-lg sm:text-sm xs:text-sm">
                                Ваше имя
                            </label>
                            <input type="name" id="name" placeholder="Иванов Иван" className="w-[100%] border-b-[1px] border-black mt-[20px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px] py-1 md:text-lg sm:text-sm sm:mb-5 sm:mt-3 xs:text-sm xs:mb-4 xs:mt-2"/>
                        </li>
                        <li className="flex flex-col">
                            <label htmlFor="name" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal md:text-lg sm:text-sm xs:text-sm">
                                E-mail
                            </label>
                            <input type="name" id="name" placeholder="mail@mail.ru" className="w-[100%] border-b-[1px] border-black mt-[20px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px] py-1 md:text-lg sm:text-sm sm:mb-5 sm:mt-3 xs:text-sm xs:mb-4 xs:mt-2"/>
                        </li>
                        <li className="flex flex-col">
                            <label htmlFor="name" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal md:text-lg sm:text-sm xs:text-sm">
                                Телефон
                            </label>
                            <input type="name" id="name" placeholder="+7 777 777 77 77" className="w-[100%] border-b-[1px] border-black mt-[20px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px] py-1 md:text-lg sm:text-sm sm:mb-5 sm:mt-3 xs:text-sm xs:mb-4 xs:mt-2"/>
                        </li>
                        <li className="flex flex-col">
                            <label htmlFor="description" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal md:text-lg sm:text-sm xs:text-sm">
                                Ваш запрос
                            </label>
                            <input type="text" id="description" placeholder="Опишите ваш запрос" className="w-[100%] border-b-[1px] border-black mt-[20px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px] py-1 md:text-lg sm:text-sm sm:mb-5 sm:mt-3 xs:text-sm xs:mb-4 xs:mt-2"/>
                        </li>
                </ul>
                <div className="flex flex-col w-[100%] mb-10">
                        <div> <p className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal md:text-lg sm:text-sm xs:text-sm" >Как вы узнали о нас?</p></div>
                        <ul className="flex justify-between items-center text-[#5A5656] w-[100%] mt-[15px] flex-wrap md:space-y-2 xs:flex-col xs:items-start xs:space-y-2">
                            <li className="flex items-center md:w-[50%] sm:w-[50%]">
                                <input type="radio" name="reference" id="social" value="social"  className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4"/>
                                <label htmlFor="social" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Социальные сети</label>
                            </li>
                            <li className="flex items-center md:w-[50%] sm:w-[50%]">
                                <input type="radio" name="reference" id="internet" value="internet" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4"/>
                                <label htmlFor="internet" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Поиск в интернет</label>
                            </li>
                            <li className="flex items-center md:w-[50%] sm:w-[50%]">
                                <input type="radio" name="reference" id="friends" value="friends" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4"/>
                                <label htmlFor="friends" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">От знакомых</label>
                            </li>
                            <li className="flex items-center md:w-[50%] sm:w-[50%]">
                                <input type="radio" name="reference" id="other" value="other" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4"/>
                                <label htmlFor="other" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Другой источник</label>
                            </li>
                        </ul>
                </div>
                <Button bluebtn={true} buttonText="ОТПРАВИТЬ"/>
            </form>
        </section>
    )
});
