

export const MainSchema = () => {
    return (
        <div className="max-w-[1290px] mx-auto pt-[60px] lg:max-w-[944px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px]">
            <h1 className="text-[36px] leading-[50px] uppercase text-center font-light text-black mb-[37px] lg:text-4xl md:text-4xl sm:text-xl xs:text-xl">Схема взаимодействия</h1>
            <ul className="flex items-start justify-between w-full lg:flex-col lg:gap-8 md:flex-col md:gap-8 sm:flex-col sm:gap-8 xs:flex-col xs:gap-6">
                <li className="flex flex-col items-center w-full px-[30px]  border-blue lg:border-b-2 lg:pb-8 md:border-b-2 md:pb-8">
                    <h3 className="bigTitle text-blue border-2 border-blue py-[22px] px-[38px] rounded-[50px] lg:py-[15px] lg:px-[32px] md:py-[15px] md:px-[32px] sm:text-[20px] sm:px-[25px] sm:py-[2px] xs:text-[20px] xs:px-[30px] xs:py-[7px]">1</h3>
                    <h6 className="littleTitle text-black mt-[28px] text-center mb-[40px] lg:my-[15px]  lg:text-[22px] md:my-[15px]  md:text-[22px]   sm:text-[18px] sm:my-[8px] sm:leading-[20px] xs:leading-[20px] xs:text-[18px] xs:my-[8px]">Интервьюирование и&nbsp;выявление проблематики</h6>
                    <p className="par text-[#36353D] text-center  lg:text-[18px] md:text-[18px] sm:text-[15px] sm:leading-[20px] xs:text-[15px] xs:leading-[20px]">В&nbsp;процессе беседы обозначаются проблемы, видимые со&nbsp;стороны руководства компании, а&nbsp;также ожидания от&nbsp;взаимодействия с&nbsp;экспертом.</p>
                </li>
                <li className="flex flex-col items-center  border-blue lg:border-b-2 lg:pb-8 md:border-b-2 md:pb-8 sm:border-none xs:border-none">
                    <h3 className="bigTitle text-blue border-2 border-blue py-[22px] px-[38px] rounded-[50px] lg:py-[15px] lg:px-[32px] md:py-[15px] md:px-[32px] sm:text-[20px] sm:px-[25px] sm:py-[2px] xs:text-[20px] xs:px-[30px] xs:py-[7px]">2</h3>
                    <div className="border-x-2 border-blue lg:border-x-0 md:border-x-0 sm:border-none xs:border-none">
                        <h6 className="littleTitle text-black mt-[46px] mb-[58px] text-center px-[30px] lg:my-[15px] md:my-[15px]  md:text-[22px] lg:text-[22px] sm:text-[18px] sm:my-[8px]  sm:leading-[20px] xs:leading-[20px] xs:text-[18px] xs:my-[8px]">Диагностика компании</h6>
                        <p className="par text-[#36353D] text-center  px-[30px]  lg:text-[18px] md:text-[18px] sm:text-[15px] sm:leading-[20px] xs:text-[15px] xs:leading-[20px]">Анализ текущего состояния показывает реальные проблемы и&nbsp;их&nbsp;предпосылки. Диагностика проводится с&nbsp;выездом на&nbsp;предприятие.</p>
                    </div>
                </li>
                <li className="flex flex-col items-center w-full px-[30px]">
                    <h3 className="bigTitle text-blue border-2 border-blue py-[22px] px-[38px] rounded-[50px] lg:py-[15px] lg:px-[32px] md:py-[15px] md:px-[32px] sm:text-[20px] sm:px-[25px] sm:py-[2px] xs:text-[20px] xs:px-[30px] xs:py-[7px]">3</h3>
                    <h6 className="littleTitle text-black mt-[28px] mb-[40px] text-center max-w-[282px] lg:max-w-[500px] lg:my-[15px] lg:text-[22px] md:max-w-[500px] md:my-[15px] md:text-[22px] sm:text-[18px] sm:my-[8px]  sm:leading-[20px] xs:leading-[20px] xs:text-[18px] xs:my-[8px]">Разработка  стратегического плана</h6>
                    <p className="par text-[#36353D] text-center   lg:text-[18px] md:text-[18px] sm:text-[15px] sm:leading-[20px] xs:text-[15px] xs:leading-[20px]">После выполнения диагностики формируется стратегия развития и&nbsp;выбираются методы достижения целей, проводится декомпозиция задач.</p>
                </li>
            </ul>
        </div>
    )
}