import {Swiper, SwiperSlide} from "swiper/react";
import { SlideNextButton } from "../UI/slideNextButton";

export const FourSteps = () => {
    
    return (
        <section className="h-[350px] sm:h-[256px]  xs:h-[256px] mx-auto ">
            <Swiper
                loop={true}
                //slidesPerView={1}
                className="w-full h-full mx-auto"
            >
                <SwiperSlide className="relative block">
                    <div className="hidden absolute z-[3] top-0 h-[142px] w-full bg-gradient-to-b from-[#000000] to-0 lg:block md:block sm:block xs:block"></div>
                    <div className="absolute z-[3] bottom-0 h-[142px] w-full bg-gradient-to-t from-[#000000] to-0"></div>
                    <div className="w-[100%] bg-chess h-[100%] text-white bg-no-repeat bg-cover bg-bottom">
                        <div className="relative z-[10] flex flex-col justify-end items-center h-[100%] py-[25px] lg:justify-between md:justify-between sm:justify-between xs:justify-between max-w-[1290px] lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px] mx-auto">
                            <h2 className="font-extralight text-[40px] lg:text-4xl md:text-[36px] sm:text-[20px] sm:leading-[28px] md:leading-[50px] leading-[56px] xs:text-[20px] xs:leading-[28px] text-center">4 ШАГА К ИЗМЕНЕНИЮ</h2>
                            <p className="font-light text-[26px] leading-[36px] w-[80%] md:text-[22px] sm:text-[18px] sm:leading-[25px] md:leading-[31px] sm:w-[370px] text-center lg:text-2xl xs:text-base">от анализа текущей ситуации до построения стратегии развития бизнеса</p>
                            <SlideNextButton />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slide1 bg-no-repeat bg-cover bg-bottom w-full h-full">
                        <div className="pr-[65px] w-full h-full mx-auto text-white text-xl font-light flex justify-between items-center max-w-[1290px] lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px] relative lg:text-lg sm:text-base xs:text-xs sm:pr-9 xs:pr-9">
                            <div className="max-w-[580px] mr-5 lg:max-w-[420px]">
                                <div className="uppercase text-4xl border-2 border-blue rounded-full text-center w-[200px] py-[10px] mb-5  lg:text-3xl md:text-3xl sm:text-xl xs:text-lg">1 шаг</div>
                                <div className="flex items-center">
                                    <svg className="w-8 sm:w-5 xs:w-5" width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M20.26 1.10938V22.2441M20.26 1.10938L27.3049 5.80597M20.26 1.10938L13.2151 5.80597M20.26 22.2441L1.47363 33.9856M20.26 22.2441L39.0464 33.9856M1.47363 33.9856V26.9407M1.47363 33.9856L8.51853 36.3339M39.0464 33.9856V26.9407M39.0464 33.9856L32.0015 36.3339" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <h3 className="text-4xl ml-2 lg:text-3xl md:text-3xl sm:text-xl xs:text-lg">Что с нами сейчас?</h3>
                                </div>
                                <div className="w-full h-[1px] bg-blue my-2"></div>
                                <p>Диагностика производственной компании заключается в оценке качества следующих параметров:</p>
                            </div>
                            <ul className="md:hidden sm:hidden xs:hidden sm:leading-[20px] sm:text-[15px] xs:leading-[20px] xs:text-[15px] max-w-[560px] sm:max-w-[370px] xs:max-w-[250px]">
                                <li>&bull; Техническое состояние производства</li>
                                <li>&bull; Конструкторско-технологическая документация</li>
                                <li>&bull; Бизнес-процессы in/out (поставщики, сервис)</li>
                                <li>&bull; Процессы проектного управления, управления инновациями</li>
                                <li>&bull; Система управления качеством</li>
                                <li>&bull; Организационная система, система мотивации</li>
                                <li>&bull; Оценка финансовой модели, экономических показателей</li>
                                <li>&bull; Анализ издержек, оценка себестоимости</li>
                            </ul>
                            <SlideNextButton/>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slide1 bg-no-repeat bg-cover bg-bottom w-full h-full">
                        <div className="pr-[65px] w-full h-full mx-auto text-white text-xl font-light flex justify-between items-center max-w-[1290px] lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px] relative lg:text-lg sm:text-base xs:text-xs sm:pr-9 xs:pr-9">
                            <div className="max-w-[580px] mr-5 lg:max-w-[420px]">
                                <div className="uppercase text-4xl border-2 border-blue rounded-full text-center w-[200px] py-[10px] mb-5  lg:text-3xl md:text-3xl sm:text-xl xs:text-lg">2 шаг</div>
                                <div className="flex items-center">             
                                    <svg className="w-8 sm:w-5 xs:w-5" width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M16.9852 20.5977V17.1507M16.9852 17.1507V13.7037M16.9852 17.1507H20.4322M16.9852 17.1507H13.5382M14.6759 6.22388L10.6769 2.22495C10.3019 1.84987 9.79315 1.63916 9.26272 1.63916H3.47363C2.36906 1.63916 1.47363 2.53459 1.47363 3.63916V25.4917C1.47363 26.5963 2.36906 27.4917 3.47363 27.4917H30.4967C31.6013 27.4917 32.4967 26.5963 32.4967 25.4917V8.80967C32.4967 7.7051 31.6013 6.80967 30.4967 6.80967H16.0901C15.5596 6.80967 15.0509 6.59895 14.6759 6.22388Z" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <h3 className="text-4xl ml-2 lg:text-3xl md:text-3xl sm:text-xl xs:text-lg">Какими ресурсами обладаем?</h3>
                                </div>
                                <div className="w-full h-[1px] bg-blue my-2"></div>
                                <p>Анализ текущего состояния воплощается в оценке экономического потенциала предприятия:</p>
                            </div>
                            <ul className="md:hidden sm:hidden xs:hidden sm:leading-[20px] sm:text-[15px] xs:leading-[20px] xs:text-[15px] max-w-[560px] sm:max-w-[370px] xs:max-w-[250px]">
                                <li>&bull; Фондовый потенциал</li>
                                <li>&bull; Финансовый потенциал</li>
                                <li>&bull; Управленческий потенциал</li>
                                <li>&bull; Кадровый потенциал</li>
                                <li>&bull; Инновационный потенциал</li>
                            </ul>
                            <SlideNextButton/>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slide1 bg-no-repeat bg-cover bg-bottom w-full h-full">
                        <div className="pr-[65px] w-full h-full mx-auto text-white text-xl font-light flex justify-between items-center max-w-[1290px] lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px] relative lg:text-lg sm:text-base xs:text-xs sm:pr-9 xs:pr-9">
                            <div className="max-w-[580px] mr-5 lg:max-w-[420px]">
                                <div className="uppercase text-4xl border-2 border-blue rounded-full text-center w-[200px] py-[10px] mb-5  lg:text-3xl md:text-3xl sm:text-xl xs:text-lg">3 шаг</div>
                                <div className="flex items-center">
                                    <svg className="w-8 sm:w-5 xs:w-5" width="34" height="19" viewBox="0 0 34 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M1.94434 17.5791L12.6292 6.89421L19.7525 14.0175L32.2182 1.55176M32.2182 1.55176V10.4558M32.2182 1.55176H23.3141" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <h3 className="text-4xl ml-2 lg:text-3xl md:text-3xl sm:text-xl xs:text-lg">Чего хотим достичь?</h3>
                                </div>
                                <div className="w-full h-[1px] bg-blue my-2"></div>
                                <p>На основании оценки потенциала выполняется формирование целей и ключевых показателей компании в выбранном горизонте:</p>
                            </div>
                            <ul className="md:hidden sm:hidden xs:hidden sm:leading-[20px] sm:text-[15px] xs:leading-[20px] xs:text-[15px] max-w-[560px] sm:max-w-[370px] xs:max-w-[250px]">
                                <li>&bull; Увеличение прибыли, повышение рентабельности</li>
                                <li>&bull; Увеличение производительности</li>
                                <li>&bull; Повышение качества продукции/ сервиса</li>
                                <li>&bull; Снижение цикла разработки продукта</li>
                                <li>&bull; Диверсификация ассортимента</li>
                                <li>&bull; Диверсификация ассортимента</li>
                                <li>&bull; Снижение цикла производства/ увеличение оборачиваемости</li>
                            </ul>
                            <SlideNextButton/>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slide1 bg-no-repeat bg-cover bg-bottom w-full h-full">
                        <div className="pr-[65px] w-full h-full mx-auto text-white text-xl font-light flex justify-between items-center max-w-[1290px] lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px] relative lg:text-lg sm:text-base xs:text-xs sm:pr-9 xs:pr-9">
                            <div className="max-w-[580px] mr-5 lg:max-w-[420px]">
                                <div className="uppercase text-4xl border-2 border-blue rounded-full text-center w-[200px] py-[10px] mb-5  lg:text-3xl md:text-3xl sm:text-xl xs:text-lg">4 шаг</div>
                                <div className="flex items-center">
                                    <svg className="w-8 sm:w-5 xs:w-5" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M9.90876 29.2181C9.44924 29.5245 9.32506 30.1453 9.63142 30.6049C9.93777 31.0644 10.5586 31.1886 11.0182 30.8822L9.90876 29.2181ZM20.6966 30.8822C21.1561 31.1886 21.777 31.0644 22.0833 30.6049C22.3897 30.1453 22.2655 29.5245 21.806 29.2181L20.6966 30.8822ZM1.47363 21.8583C0.921348 21.8583 0.473633 22.306 0.473633 22.8583C0.473633 23.4106 0.921348 23.8583 1.47363 23.8583V21.8583ZM30.2411 23.8583C30.7934 23.8583 31.2411 23.4106 31.2411 22.8583C31.2411 22.306 30.7934 21.8583 30.2411 21.8583V23.8583ZM1.47363 0.282715C0.921348 0.282715 0.473633 0.73043 0.473633 1.28271C0.473633 1.835 0.921348 2.28271 1.47363 2.28271V0.282715ZM30.2411 2.28271C30.7934 2.28271 31.2411 1.835 31.2411 1.28271C31.2411 0.73043 30.7934 0.282715 30.2411 0.282715V2.28271ZM14.8574 31.8481C14.8574 32.4004 15.3051 32.8481 15.8574 32.8481C16.4096 32.8481 16.8574 32.4004 16.8574 31.8481H14.8574ZM9.63142 15.1117C9.32506 15.5713 9.44924 16.1921 9.90876 16.4985C10.3683 16.8048 10.9892 16.6807 11.2955 16.2211L9.63142 15.1117ZM14.0594 10.2725L14.8594 9.67255C14.6647 9.41292 14.3561 9.26393 14.0317 9.27293C13.7072 9.28194 13.4074 9.44781 13.2273 9.71785L14.0594 10.2725ZM16.7563 13.8685L15.9563 14.4685C16.1398 14.7131 16.4251 14.8603 16.7307 14.8682C17.0364 14.876 17.3288 14.7436 17.5246 14.5087L16.7563 13.8685ZM22.0195 9.11477C22.373 8.69049 22.3157 8.05992 21.8914 7.70636C21.4672 7.3528 20.8366 7.41012 20.483 7.8344L22.0195 9.11477ZM3.2716 2.28271H28.4431V0.282715H3.2716V2.28271ZM27.4431 1.28271V22.8583H29.4431V1.28271H27.4431ZM4.2716 22.8583V1.28271H2.2716V22.8583H4.2716ZM28.4431 21.8583H15.8574V23.8583H28.4431V21.8583ZM15.8574 21.8583H3.2716V23.8583H15.8574V21.8583ZM14.8574 22.8583V26.4542H16.8574V22.8583H14.8574ZM15.3027 25.6222L9.90876 29.2181L11.0182 30.8822L16.4121 27.2863L15.3027 25.6222ZM15.3027 27.2863L20.6966 30.8822L21.806 29.2181L16.4121 25.6222L15.3027 27.2863ZM3.2716 21.8583H1.47363V23.8583H3.2716V21.8583ZM28.4431 23.8583H30.2411V21.8583H28.4431V23.8583ZM3.2716 0.282715H1.47363V2.28271H3.2716V0.282715ZM28.4431 2.28271H30.2411V0.282715H28.4431V2.28271ZM14.8574 26.4542V31.8481H16.8574V26.4542H14.8574ZM11.2955 16.2211L14.8914 10.8272L13.2273 9.71785L9.63142 15.1117L11.2955 16.2211ZM13.2594 10.8725L15.9563 14.4685L17.5563 13.2685L14.8594 9.67255L13.2594 10.8725ZM17.5246 14.5087L22.0195 9.11477L20.483 7.8344L15.9881 13.2283L17.5246 14.5087Z" fill="#E8E9EF"/>
                                    </svg>
                                    <h3 className="text-4xl ml-2 lg:text-3xl md:text-3xl sm:text-xl xs:text-lg">Как будем достигать цели?</h3>
                                </div>
                                <div className="w-full h-[1px] bg-blue my-2"></div>
                                <p>Разработка стратегии развития компании выражается в составлении методик достижения ключевых целей, таких как:</p>
                            </div>
                            <ul className="md:hidden sm:hidden xs:hidden sm:leading-[20px] sm:text-[15px] xs:leading-[20px] xs:text-[15px] max-w-[560px] sm:max-w-[370px] xs:max-w-[250px]">
                                <li>&bull; Внедрение инструментов lean production</li>
                                <li>&bull; Построение системы развития сотрудников</li>
                                <li>&bull; Построение системы эффективного менеджмента</li>
                                <li>&bull; Организация инновационной и проектной деятельности</li>
                                <li>&bull; Построение системы менеджмента качества</li>
                                <li>&bull; Автоматизация бизнес-процессов</li>
                            </ul>
                            <SlideNextButton/>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>
        </section>
    )
}
