const prices = [
    {
        id: 1,
        name: 'Косметический',
        price: '2500',
        description: 'some text',
        works: [
            {
                id: 1,
                name: 'Демонтаж'
            },
            {
                id: 2,
                name: 'Подготовка стен'
            },
            {
                id: 3,
                name: 'Оклейка стен и потолка обоями'
            },
            {
                id: 4,
                name: 'Монтаж натяжного одноуровнего потолка'
            },
            {
                id: 5,
                name: 'Монтаж розеток, плинтусов и пр.'
            },
            {
                id: 6,
                name: 'Прочие работы'
            },
        ]
    },
    {
        id: 2,
        name: 'Стандартный',
        price: '4500',
        description: '',
        works: [
            {
                id: 1,
                name: 'Всё что входит в Косметический ремонт +'
            },
            {
                id: 2,
                name: 'Частичное штробление'
            },
            {
                id: 3,
                name: 'Установка дверей'
            },
            {
                id: 4,
                name: 'Монтаж полового покрытия'
            },
            {
                id: 5,
                name: 'Монтаж натяжных потолков'
            },
            {
                id: 6,
                name: 'Прочие работы'
            },
        ]
    },
    {
        id: 3,
        name: 'Капитальный',
        price: '8500',
        description: '',
        works: [
            {
                id: 1,
                name: 'Всё что входит в Стандартный ремонт +'
            },
            {
                id: 2,
                name: 'Установка ПВХ окон'
            },
            {
                id: 3,
                name: 'Капитальный ремонт пола'
            },
            {
                id: 3,
                name: 'Замена сантехники и электрики "От щитка"'
            },
            {
                id: 3,
                name: 'Монтаж натяжных потолков и ГВЛ'
            },
            {
                id: 3,
                name: 'Прочие работы'
            },
        ]
    },
]

const services = [
    {
        id: 1,
        name: 'Демонтаж',
        description: ''
    },
    {
        id: 2,
        name: 'Возведение перегородок',
        description: ''
    },
    {
        id: 3,
        name: 'Электромонтажные работы',
        description: ''
    },
    {
        id: 4,
        name: 'Заливка стяжки пола',
        description: ''
    },
    {
        id: 5,
        name: 'Монтаж инженерной сантехники',
        description: ''
    },
    {
        id: 6,
        name: 'Штукатурка стен',
        description: ''
    },
    {
        id: 7,
        name: 'Укладка плитки санузлов',
        description: ''
    },
    {
        id: 8,
        name: 'Монтаж конструкций ГКЛ',
        description: ''
    },
    {
        id: 9,
        name: 'Заливка наливных полов',
        description: ''
    },
    {
        id: 10,
        name: 'Укладка плитки пола',
        description: ''
    },
    {
        id: 11,
        name: 'Шпатлевка стен и потолков',
        description: ''
    },
    {
        id: 12,
        name: 'Покраска потолков',
        description: ''
    },
    {
        id: 13,
        name: 'Укладка напольного покрытия',
        description: ''
    },
    {
        id: 14,
        name: 'Поклейка обоев',
        description: ''
    },
    {
        id: 15,
        name: 'Установка дверей',
        description: ''
    },
    {
        id: 16,
        name: 'Установка оконных блоков',
        description: ''
    },
    {
        id: 17,
        name: 'Монтаж плинтусов и багета',
        description: ''
    },
    {
        id: 18,
        name: 'Монтаж бытовой сантехники',
        description: ''
    },
    {
        id: 19,
        name: 'Монтаж натяжных потолков',
        description: ''
    },
]

export const useServices = {
    prices,
    services
}
