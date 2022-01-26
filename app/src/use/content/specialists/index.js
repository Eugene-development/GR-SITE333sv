const specialists = [
    {
        id: 1,
        speciality: 'Дизайнеры и замерщики',
        description: 'Обмер помещений, составление дизайн-проекта и составление сметы',
        workers: [
            {
                name: 'Роман Г.',
                age: '31 год'
            },
            {
                name: 'Татьяна Д.',
                age: '40 лет'
            },
        ],
        text: 'Замерщик - это специалист, который определяет виды, последовательность и объемы работ, сопровождает Заказчика до подписания договора. При этом вы будите точно знать, в какую сумму обойдется ремонт. Одна из первых его задач является обсуждение отделки вашего объекта, далее осмотрит все помещения и согласует необходимые варианты отделки пола, стен и потолка и т.д. Также составит план помещения, укажет все необходимые размеры, рассчитает и подготовит смету. Ответит на все интересующие вопросы по ремонту, материалам, особенностям составление договора, скидках и способах оплаты. Для тех, кто ценит основательность во всем и не терпит ненужных переделок. Предусмотрен верный помощник, готовый подарить комфорт нового дома. Этот человек- дизайнер интерьеров. Экономит время на подборе материалов и мебели, составит грамотную планировку помещений, сделает чертежи, которые уберегут вас от проблем при проведении строительных работ.'
    },
    {
        id: 2,
        speciality: 'Универсальные работники',
        description: 'Работы широкого профиля',
        workers: [
            {
                name: 'Виталий Б.',
                age: '42 года'
            },
            {
                name: 'Олег Б.',
                age: '40 лет'
            },
            {
                name: 'Антон П.',
                age: '30 лет'
            },
            {
                name: 'Сергей К.',
                age: '46 лет'
            },
            {
                name: 'Михаил Т.',
                age: '45 лет'
            },
            {
                name: 'Сергей П.',
                age: '43 года'
            },
            {
                name: 'Михаил Т.',
                age: '45 лет'
            },
        ],
        text: 'Выполняют наружные и внутренние работы по отделке квартир: все виды демонтажных работ, электромонтажные, сантехнические, малярно-штукатурные, облицовочные работы, возведение новых перегородок, выравнивание полов, стен, потолков. Умеют работать с различными материалами, а также по дизайн-проектам.'
    },
    {
        id: 3,
        speciality: 'Штукатур-маляр',
        description: 'Отделочные работы',
        workers: [
            {
                name: 'Галина Т.',
                age: '43 года'
            },
            {
                name: 'Татьяна Т.',
                age: '40 лет'
            },
            {
                name: 'Елена М.',
                age: '31 год'
            },
            {
                name: 'Оксана С.',
                age: '40 лет'
            },
            {
                name: 'Сергей С.',
                age: '40 лет'
            },
        ],
        text: 'Подготовка стен Убрать старые обои или краску со стен, штукатурка по маякам, штукатурка под провило, штукатурка в 1 слой Шпатлевание стен Грунтование стен Все эти же процедуры с потолками. Покраска стен,покраска потолков,а также оклейка стен обоями и потолков'
    },
    {
        id: 4,
        speciality: 'Монтажник',
        description: 'Мантаж натяжных потолков',
        workers: [
            {
                name: 'Некоркин Алексей',
                age: '33 года'
            },
            {
                name: 'Казаков Григорий',
                age: '35 лет'
            },
            {
                name: 'Горнов Вадим',
                age: '28 лет'
            },
        ],
        text: 'Монтирует потолочные конструкции различного уровня сложности, учитывая особенности помещения. Устанавливает осветительные приборы. Использует электроинструменты и композитный баллон, соблюдая технику безопасности.'
    },
    {
        id: 5,
        speciality: 'Установщик',
        description: 'Установка межкомнатных дверей и окон',
        workers: [
            {
                name: 'Быбин Михаил',
                age: '31 год'
            },
            {
                name: 'Мальков Евгений',
                age: '35 лет'
            },
        ],
        text: 'В обязанности мастера по установке дверей входит демонтаж двери и дверной коробки, при необходимости расширяет или уменьшает дверной проем. Устанавливает по уровню и фиксирует новый блок, монтирует дверное полотно с последующей регулировкой зазоров. Также врезает замки и петли, устанавливает дверные ручки, устанавливает комплект доборов, наличников и порогов. А в обязанности мастера по установке окон входит демонтаж старой рамы, створок, наличников, отливов и подоконников. Монтирует новую оконную раму с использованием высокоточного лазера, заполняет шов между рамой и стеной полиуретановой пеной, закрепляет створки, выполняет монтаж откосов, отливов и подоконников. Установка оконной фурнитуры.'
    },
]

export const useSpecialists = {
    specialists
}
