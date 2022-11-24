import CardWithText from "./CardWithText";

import pic1 from "../../assets/Main/Rectangle 21.jpg"
import pic2 from "../../assets/Main/Rectangle 19.jpg"
import pic3 from "../../assets/Main/Rectangle 20.jpg"
import pic4 from "../../assets/Main/Rectangle 22.jpg"


export default function MainCards() {

    const firstQuotes = [
        "Высокие производственные издержки",
        "Длительный цикл производства",
        "Большие сроки разработки продукта",
        "Низкий уровень мотивации сотрудников",
        "Высокий процент внутреннего брака",
        "Излишние складские запасы",
        "Низкая доля реализация проектов"
    ];

    const secondQuotes = [
        "Неконкурентоспособная цена продукта",
        "Неудовлетворенность клиента",
        "Высокая текучесть кадров",
        "Низкая рентабельность бизнеса"
    ];

    const thirdQuotes = [
        "Проанализировать текущие процессы и состояние компании",
        "Оценить свои возможности",
        "Сформировать достижимые и оцифрованные цели",
        "Разработать стратегию улучшений",
        "Декомпозировать стратегические цели",
        "Составить план-график реализации"
    ];

    const fourthQuote = [
        "Сокращение операционных издержек",
        "Повышение производительности труда",
        "Вывод корпоративной культуры на новый уровень",
        "Детальный план развития компании",
        "Расширение видения горизонтов бизнеса",
        "Рост прибыли компании"
    ]


    return(
        <section className="max-w-[1440px] w-[100vw] mx-auto lg:max-w-[1289px] md:max-w-[1023px] sm:max-w-[767px] xs:max-w-[479px]">
            <CardWithText ltr={true} quotes={firstQuotes} pic={pic1} header="Где теряет деньги компания?"/>
            <CardWithText ltr={false} quotes={secondQuotes} pic={pic2} header="К чему это приводит?"/>
            <CardWithText ltr={true} quotes={thirdQuotes} pic={pic3} header="Как начать процесс изменений?"/>
            <CardWithText ltr={false} quotes={fourthQuote} pic={pic4} header="Результат трансформации"/>
        </section>
    )
}
