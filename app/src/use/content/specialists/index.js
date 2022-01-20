const specialists = [
    {
        id: 1,
        speciality: 'Дизайнеры и замерщики',
        description: 'Обмер помещений, составление дизайн-проекта и составление сметы',
        workers: [
            {
                name: 'Гаврилов Роман',
                age: '31 год'
            },
            {
                name: 'Дусенко Татьяна',
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
                name: 'Борщ Виталий',
                age: '42 года'
            },
            {
                name: 'Бенеаминов Олег',
                age: '40 лет'
            },
            {
                name: 'Прайс Антон',
                age: '30 лет'
            },
            {
                name: 'Копосов Сергей',
                age: '46 лет'
            },
            {
                name: 'Торопов Михаил',
                age: '45 лет'
            },
            {
                name: 'Пестра Сергей',
                age: '43 года'
            },
            {
                name: 'Торопов Михаил',
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
                name: 'Тулонкина Галина',
                age: '43 года'
            },
            {
                name: 'Кирлик Татьяна',
                age: '40 лет'
            },
            {
                name: 'Москвина Елена',
                age: '31 год'
            },
            {
                name: 'Себостьянова Оксана',
                age: '40 лет'
            },
            {
                name: 'Себостьянова Оксана',
                age: '40 лет'
            },
            {
                name: 'Пестра Сергей',
                age: '40 лет'
            },
            {
                name: 'Торопов Михаил',
                age: '45 лет'
            },
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut dolor eius est hic illum iste iusto libero modi natus nobis numquam, officia perspiciatis porro praesentium quae quam quas quasi quia quibusdam quisquam quod recusandae sed sequi sit sunt suscipit unde vel voluptas voluptatum! Alias, ea eaque ex in inventore ipsa libero necessitatibus nesciunt non placeat rerum sapiente suscipit voluptatem. Aut consequuntur earum id laudantium libero magni maxime natus odio quam quasi quidem repellat, reprehenderit repudiandae rerum sapiente suscipit vel vero voluptas? A aperiam assumenda at beatae dignissimos eveniet in iste, iusto officiis qui recusandae repellendus saepe sequi, sint voluptatibus?\n'
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
        text: 'Монтирует потолочные конструкции различного уровня сложности, учитывая особенности помещения. Устанавливает осветительные приборы. Пользует электроинструменты и композитный баллон, соблюдая технику безопасности.'
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
