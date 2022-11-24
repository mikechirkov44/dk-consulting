import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { SlidePrevButton } from '../UI/SlideAboutPrevBtn';
import { SlideNextButton } from '../UI/SlideAboutNextBtn';

export const AboutCompetenses = () => {

    return (
        <div className='mb-[60px] bg-serviceheading bg-no-repeat bg-cover'>
            <div className="max-w-[1290px] mx-auto w-[100vw] relative lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px]">
                <Swiper
                    spaceBetween={150}
                    loop={true}
                    slidesPerView={1}
                    className="h-[465px] pt-[14px] pb-[26px] px-10 lg:max-h-[875px] lg:h-full md:max-h-[645px] md:h-full sm:max-h-[875px] sm:h-full xs:max-h-[525px] xs:h-full"
                >
                    <SlidePrevButton />
                        <SwiperSlide>
                            <div className="flex flex-col items-center h-full">
                                <div className="flex items-center mb-[18px]">
                                    <svg className='md:w-[23px] sm:w-4 xs:w-4' width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.4996 4.39233H21.409C22.1807 4.39233 22.9207 4.69886 23.4663 5.24449C24.0119 5.79011 24.3185 6.53014 24.3185 7.30177V27.6678C24.3185 28.4395 24.0119 29.1795 23.4663 29.7251C22.9207 30.2707 22.1807 30.5773 21.409 30.5773H3.9524C3.18077 30.5773 2.44075 30.2707 1.89512 29.7251C1.3495 29.1795 1.04297 28.4395 1.04297 27.6678V7.30177C1.04297 6.53014 1.3495 5.79011 1.89512 5.24449C2.44075 4.69886 3.18077 4.39233 3.9524 4.39233H6.86184" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.0448 1.48267H8.31653C7.51312 1.48267 6.86182 2.13397 6.86182 2.93738V5.84682C6.86182 6.65024 7.51312 7.30154 8.31653 7.30154H17.0448C17.8483 7.30154 18.4996 6.65024 18.4996 5.84682V2.93738C18.4996 2.13397 17.8483 1.48267 17.0448 1.48267Z" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8.5918 17.4847L12.2566 21.1495L19.5864 13.8198" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <h3 className='text-[40px] font-extralight leading-[56px] text-white ml-[10px] lg:text-4xl md:text-4xl sm:text-lg xs:text-base'>Ключевые компетенции:</h3>
                                </div>
                                <ul className='flex items-start justify-between w-full h-full lg:flex-col lg:items-center lg:justify-center lg:space-y-5 md:flex-col md:items-center md:justify-center md:space-y-5 sm:flex-col sm:items-center sm:justify-center sm:space-y-2 xs:flex-col xs:items-center xs:justify-center xs:space-y-2'>
                                    <li className='bg-lightgrey py-[21px] px-[25px] rounded-[5px] w-[595px] lg:py-5 md:py-5 sm:w-full sm:py-5 sm:px-[15px] xs:w-full xs:py-5 xs:px-[15px]'>
                                        <ul className='border-l-[1px] border-blue pl-[20px] h-[270px] flex flex-col justify-between max-w-[544px] md:h-[170px] sm:h-[120px] sm:w-full sm:pl-[12px] xs:h-[170px] xs:w-full xs:pl-[10px]'>
                                            <li className='par md:text-base sm:text-xs xs:text-xs'>&bull; Стратегическое руководство и операционное управление</li>
                                            <li className='par md:text-base sm:text-xs xs:text-xs'>&bull; Антикризисное управление</li>
                                            <li className='par md:text-base sm:text-xs xs:text-xs'>&bull; Внедрение системы &laquo;бережливого производства&raquo;</li>
                                            <li className='par md:text-base sm:text-xs xs:text-xs'>&bull; Управление проектной и&nbsp;инновационной деятельностью</li>
                                        </ul>
                                    </li>
                                    <li className='bg-lightgrey py-[21px] px-[25px] rounded-[5px] w-[595px] lg:py-5 md:py-5 sm:w-full sm:py-5 sm:px-[15px] xs:w-full xs:py-5 xs:px-[15px]'>
                                        <ul className='border-l-[1px] border-blue pl-[20px] h-[270px] flex flex-col justify-between max-w-[544px] md:h-[170px] sm:h-[100px] sm:w-full sm:pl-[12px] xs:h-[170px] xs:w-full xs:pl-[10px]'>
                                            <li className='par md:text-base sm:text-xs xs:text-xs'>&bull; Разработка продукта и&nbsp;диверсификация бизнеса</li>
                                            <li className='par md:text-base sm:text-xs xs:text-xs'>&bull; Реструктуризация бизнеса</li>
                                            <li className='par md:text-base sm:text-xs xs:text-xs'>&bull; Оптимизация технологических и бизнес-процессов</li>
                                            <li className='par md:text-base sm:text-xs xs:text-xs'>&bull; Формирование корпоративной культуры компании</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center mb-[18px] xs:mb-2">
                                    <svg className='md:w-[23px] sm:w-4 xs:w-4' width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.4545 25.6948V22.9675C21.4545 21.5208 20.8799 20.1335 19.8569 19.1105C18.834 18.0876 17.4466 17.5129 16 17.5129H6.45455C5.00791 17.5129 3.62053 18.0876 2.5976 19.1105C1.57467 20.1335 1 21.5208 1 22.9675V25.6948" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.2275 12.0585C14.24 12.0585 16.682 9.61642 16.682 6.60396C16.682 3.5915 14.24 1.14941 11.2275 1.14941C8.21503 1.14941 5.77295 3.5915 5.77295 6.60396C5.77295 9.61642 8.21503 12.0585 11.2275 12.0585Z" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M22.8184 12.0586L25.5456 14.7858L31.0002 9.3313" stroke="#E8E9EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <h3 className='text-[40px] font-extralight leading-[56px] text-white ml-[10px] lg:text-4xl md:text-4xl sm:text-lg xs:text-base'>Образование:</h3>
                                </div>
                                <ul className='flex flex-wrap items-start w-full justify-between  lg:flex-col lg:items-center lg:space-y-5 md:flex-col md:items-center md:space-y-5 sm:space-y-3 xs:space-y-2'>
                                    <li className='bg-lightgrey p-[15px] rounded-[5px] w-[595px] h-[150px] mb-[30px] relative flex items-center lg:mb-0 md:h-full md:py-3 md:mb-0 sm:py-2 sm:h-full sm:mb-0 xs:py-2  xs:h-full xs:mb-0'>
                                        <p className='par border-l-[1px] border-blue h-full flex flex-col items-center justify-center text-black text-center w-full md:text-base sm:text-xs xs:text-xs xs:text-start xs:pl-2'><span className='font-normal'>Московский Государственный Технический Университет им. Н.Э. Баумана,</span>&laquo;Металлообрабатывающие станки и&nbsp;комплексы&raquo;</p>
                                    </li>
                                    <li className='bg-lightgrey p-[15px] rounded-[5px] w-[595px] h-[150px] mb-[30px] relative flex items-center lg:mb-0 md:h-full md:py-3 sm:py-2 sm:h-full xs:py-2  xs:h-full'>
                                        <p className='par border-l-[1px] border-blue h-full flex flex-col items-center justify-center text-black text-center w-full md:text-base sm:text-xs xs:text-xs xs:text-start xs:pl-2'><span className='font-normal'>Государственный Университет Управления,</span>&laquo;Менеджмент организации&raquo;</p>
                                    </li>
                                    <li className='bg-lightgrey p-[15px] rounded-[5px] w-[595px] h-[150px] mb-[30px] relative flex items-center lg:mb-0 md:h-full md:py-3 sm:py-2 sm:h-full xs:py-2  xs:h-full'>
                                        <p className='par border-l-[1px] border-blue h-full flex flex-col items-center justify-center text-black text-center w-full md:text-base sm:text-xs xs:text-xs xs:text-start xs:pl-2'><span className='font-normal'>Институт Бизнеса и&nbsp;Делового Администрирования РАНХиГС при президенте РФ, МВА</span>&laquo;Мастер делового администрирования. Предпринимательство и&nbsp;управление компанией&raquo;</p>
                                    </li>
                                    <li className='bg-lightgrey p-[15px] rounded-[5px] w-[595px] h-[150px] mb-[30px] relative flex items-center lg:mb-0 md:h-full md:py-3 sm:py-2 sm:h-full xs:py-2 xs:h-full'>
                                        <p className='par border-l-[1px] border-blue h-full flex flex-col items-center justify-center text-black text-center w-full md:text-base sm:text-xs xs:text-xs xs:text-start xs:pl-2 '><span className='font-normal'>Член&nbsp;&mdash; корреспондент Международной Академии Менеджмента,<br/>победитель конкурса</span>&laquo;Менеджер года 2022&raquo; по&nbsp;версии МАМ</p>
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>
                    <SlideNextButton/>
                </Swiper>
            </div>
        </div>
    )
} 