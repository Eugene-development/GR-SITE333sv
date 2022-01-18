const specialists = [
    {
        id: 1,
        speciality: 'Замерщик по ремонту квартир',
        description: 'Обмер помещений и составление сметы',
        workers: [
            {
                name: 'Гаврилов Роман',
                age: '31 год'
            },
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut dolor eius est hic illum iste iusto libero modi natus nobis numquam, officia perspiciatis porro praesentium quae quam quas quasi quia quibusdam quisquam quod recusandae sed sequi sit sunt suscipit unde vel voluptas voluptatum! Alias, ea eaque ex in inventore ipsa libero necessitatibus nesciunt non placeat rerum sapiente suscipit voluptatem. Aut consequuntur earum id laudantium libero magni maxime natus odio quam quasi quidem repellat, reprehenderit repudiandae rerum sapiente suscipit vel vero voluptas? A aperiam assumenda at beatae dignissimos eveniet in iste, iusto officiis qui recusandae repellendus saepe sequi, sint voluptatibus?\n'
    },
    {
        id: 1,
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
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut dolor eius est hic illum iste iusto libero modi natus nobis numquam, officia perspiciatis porro praesentium quae quam quas quasi quia quibusdam quisquam quod recusandae sed sequi sit sunt suscipit unde vel voluptas voluptatum! Alias, ea eaque ex in inventore ipsa libero necessitatibus nesciunt non placeat rerum sapiente suscipit voluptatem. Aut consequuntur earum id laudantium libero magni maxime natus odio quam quasi quidem repellat, reprehenderit repudiandae rerum sapiente suscipit vel vero voluptas? A aperiam assumenda at beatae dignissimos eveniet in iste, iusto officiis qui recusandae repellendus saepe sequi, sint voluptatibus?\n'
    },
    {
        id: 1,
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
        id: 1,
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
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut dolor eius est hic illum iste iusto libero modi natus nobis numquam, officia perspiciatis porro praesentium quae quam quas quasi quia quibusdam quisquam quod recusandae sed sequi sit sunt suscipit unde vel voluptas voluptatum! Alias, ea eaque ex in inventore ipsa libero necessitatibus nesciunt non placeat rerum sapiente suscipit voluptatem. Aut consequuntur earum id laudantium libero magni maxime natus odio quam quasi quidem repellat, reprehenderit repudiandae rerum sapiente suscipit vel vero voluptas? A aperiam assumenda at beatae dignissimos eveniet in iste, iusto officiis qui recusandae repellendus saepe sequi, sint voluptatibus?\n'
    },
    {
        id: 1,
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
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut dolor eius est hic illum iste iusto libero modi natus nobis numquam, officia perspiciatis porro praesentium quae quam quas quasi quia quibusdam quisquam quod recusandae sed sequi sit sunt suscipit unde vel voluptas voluptatum! Alias, ea eaque ex in inventore ipsa libero necessitatibus nesciunt non placeat rerum sapiente suscipit voluptatem. Aut consequuntur earum id laudantium libero magni maxime natus odio quam quasi quidem repellat, reprehenderit repudiandae rerum sapiente suscipit vel vero voluptas? A aperiam assumenda at beatae dignissimos eveniet in iste, iusto officiis qui recusandae repellendus saepe sequi, sint voluptatibus?\n'
    },
]

export const useSpecialists = {
    specialists
}
