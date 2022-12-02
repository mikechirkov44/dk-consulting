import { forwardRef } from "react";
import React from "react";
import Button from "../../components/UI/Button";
import { useState } from "react";
import mainFormService from "../../services/mainFormService";
import { NavLink } from "react-router-dom";


export const FormComponent = React.forwardRef((props, forwardedRef) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");
    const [subject, setSubject] = useState("");
    const [source, setSource] = useState("");
    const [message, setMessage] = useState("");
    const [msgVisible, setMsgVisible] = useState(false);

    const phoneChange = (e) => {
        setPhone(e.target.value);
    };

    const commentChange = (e) => {
        setComment(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const nameChange = (e) => {
        setName(e.target.value);
    };

    const sourceChange = (src) => {
        setSource(src);
    };

    const subjectChange = (subj) => {
        setSubject(subj);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log("name: ", name, " email: ", email, " phone: ", phone, " comment: ", comment, " subj: ", subject, "src: ", source)
        setMsgVisible(true);
        setMessage("Загрузка");
        if (subject !== "" && source !== "") {
            mainFormService.postForm({
                request_type: subject,
                channel_type: source,
                customer_name: name,
                phone_number: phone,
                email: email,
                comment: comment,
            }).then((res) => {
                console.log(res);
                setMessage("Вы успешно отправили заявку!");
                setTimeout(() => {
                    setMsgVisible(false);
                }, "3000")
            }).catch((err) => {
                setMessage("Что-то пошло не так, попробуйте позже!");
                console.log(err)
                setTimeout(() => {
                    setMsgVisible(false);
                }, "3000")
            })
        } else {
            setMessage("Вы заполнили не все данные, проверьте и попробуйте еще раз");
            setTimeout(() => {
                setMsgVisible(false);
            }, "3000")
        }


    }



    return (
        <section {...props} ref={forwardedRef} className="py-[88px] max-w-[1290px] mx-auto  lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px]">
            <div className="flex flex-col justify-between items-center ">
                <h2 className="text-[36px] leading-[50px] font-extralight text-center uppercase lg:text-4xl md:text-4xl sm:text-2xl xs:text-2xl">Запрос на сотрудничество</h2>
                <p className="font-normal text-[26px] leading-[36px] text-center text-[#40454E] lg:text-xl md:text-xl sm:hidden xs:hidden">Опишите Ваш запрос либо проблему и мы свяжемся с Вами</p>
            </div>
            {msgVisible
                ? <div className="flex-col justify-between items-center">
                    <h2 className="font-normal text-[26px] leading-[36px] text-center text-blue lg:text-xl md:text-xl sm:text-base xs:text-base">{message}</h2>
                </div>
                : <form
                    type="submit"
                    className="flex flex-col  items-center h-full mt-[37px]"
                    onSubmit={submit}
                >
                    <ul className="flex justify-between items-center text-[#5A5656] w-[100%] mb-[32px] flex-wrap md:space-y-2 md:mb-5 sm:space-y-2 sm:mb-5 xs:flex-col xs:items-start xs:space-y-2">
                        <li className="flex items-center md:w-[50%] sm:w-[50%]">
                            <input type="radio" name="problem" value="AUDIT" id="audit" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4" onClick={() => { subjectChange("AUDIT") }} />
                            <label htmlFor="audit" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Аудит</label>
                        </li>
                        <li className="flex items-center md:w-[50%] sm:w-[50%]">
                            <input type="radio" name="problem" value="IND_CONSLT" id="consult" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4" onClick={() => { subjectChange("IND_CONSLT") }} />
                            <label htmlFor="consult" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Промышленный консалтинг</label>
                        </li>
                        <li className="flex items-center md:w-[50%] sm:w-[50%]">
                            <input type="radio" name="problem" value="ORG" id="organize" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4" onClick={() => { subjectChange("ORG") }} />
                            <label htmlFor="organize" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Организация производства</label>
                        </li>
                        <li className="flex items-center md:w-[50%] sm:w-[50%]">
                            <input type="radio" name="problem" value="LEARN" id="teach" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4" onClick={() => { subjectChange("LRN") }} />
                            <label htmlFor="teach" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Обучение</label>
                        </li>
                    </ul>
                    <ul className="flex flex-col w-[100%]">
                        <li className="flex flex-col">
                            <label htmlFor="name" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal md:text-lg sm:text-sm xs:text-sm">
                                Ваше имя
                            </label>
                            <input required type="text" id="name" value={name} onChange={nameChange} placeholder="Иванов Иван" className="px-2 w-[100%] border-b-[1px] border-black mt-[20px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px] py-1 md:text-lg sm:text-sm sm:mb-5 sm:mt-3 xs:text-sm xs:mb-4 xs:mt-2" />
                        </li>
                        <li className="flex flex-col">
                            <label htmlFor="name" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal md:text-lg sm:text-sm xs:text-sm">
                                E-mail
                            </label>
                            <input required type="email" id="email" value={email} onChange={emailChange} placeholder="mail@mail.ru" className="px-2 w-[100%] border-b-[1px] border-black mt-[20px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px] py-1 md:text-lg sm:text-sm sm:mb-5 sm:mt-3 xs:text-sm xs:mb-4 xs:mt-2" />
                        </li>
                        <li className="flex flex-col">
                            <label htmlFor="name" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal md:text-lg sm:text-sm xs:text-sm">
                                Телефон
                            </label>
                            <input required type="phone" id="phone" value={phone} onChange={phoneChange} placeholder="+7 777 777 77 77" className="px-2 w-[100%] border-b-[1px] border-black mt-[20px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px] py-1 md:text-lg sm:text-sm sm:mb-5 sm:mt-3 xs:text-sm xs:mb-4 xs:mt-2" />
                        </li>
                        <li className="flex flex-col">
                            <label htmlFor="description" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal md:text-lg sm:text-sm xs:text-sm">
                                Ваш запрос
                            </label>
                            <input required type="text" id="description" value={comment} onChange={commentChange} placeholder="Опишите ваш запрос" className="px-2 w-[100%] border-b-[1px] border-black mt-[20px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px] py-1 md:text-lg sm:text-sm sm:mb-5 sm:mt-3 xs:text-sm xs:mb-4 xs:mt-2" />
                        </li>
                    </ul>
                    <div className="flex flex-col w-[100%] mb-10">
                        <div> <p className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal md:text-lg sm:text-sm xs:text-sm" >Как вы узнали о нас?</p></div>
                        <ul className="flex justify-between items-center text-[#5A5656] w-[100%] mt-[15px] flex-wrap md:space-y-2 xs:flex-col xs:items-start xs:space-y-2">
                            <li className="flex items-center md:w-[50%] sm:w-[50%]">
                                <input type="radio" name="reference" id="social" value="SCL" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4" onClick={() => { sourceChange("SCL") }} />
                                <label htmlFor="social" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Социальные сети</label>
                            </li>
                            <li className="flex items-center md:w-[50%] sm:w-[50%]">
                                <input type="radio" name="reference" id="internet" value="WEB" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4" onClick={() => { sourceChange("WEB") }} />
                                <label htmlFor="internet" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Поиск в интернет</label>
                            </li>
                            <li className="flex items-center md:w-[50%] sm:w-[50%]">
                                <input type="radio" name="reference" id="friends" value="REC" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4" onClick={() => { sourceChange("REC") }} />
                                <label htmlFor="friends" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">От знакомых</label>
                            </li>
                            <li className="flex items-center md:w-[50%] sm:w-[50%]">
                                <input type="radio" name="reference" id="other" value="OTHER" className="w-7 h-7 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-4 xs:w-4" onClick={() => { sourceChange("OTHER") }} />
                                <label htmlFor="other" className="font-light text-[22px] leading-[30px] ml-[10px] md:text-lg sm:text-sm sm:ml-1 xs:text-sm xs:ml-1">Другой источник</label>
                            </li>
                        </ul>
                    </div>
                    <Button bluebtn={true} buttonText="ОТПРАВИТЬ" />
                    <p className="text-base py-3 text-grey opacity-60 text-center lg:text-sm md:text-sm sm:text-xs xs:text-xs">Отправляя запрос, я подтверждаю согласие с <br /><NavLink to="/privacy-policy" className="underline cursor-pointer">политикой&nbsp;конфиденциальности</NavLink></p>
                </form>
            }

        </section>
    )
});
