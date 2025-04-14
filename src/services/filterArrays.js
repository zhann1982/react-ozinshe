export let filterPopularity = [
    'Популярные',
    'Сначала новые',
    'Сначала старые',
    'По алфавиту (А-Я)',
    'По алфавиту (Я-А)',
    'По длительности',
];

export let filterType = [
    'Фильмы и сериалы',
    'Фильм',
    'Сериал',
    'Мультфильм',
    'Документальный фильм',
    'Телепередача',
];

export let filterCategory = [
    'Все категории',
    'Телехикая, Мультсериал',
    'Телехикая',
    'Комедии',
    'Приключения',
    'Фэнтези',
    'Фантастика',
    'Для малышей',
    'Уроки',
    'Научно-популярные',
    'Исторические',
];

export let filterYears = [
    'За все время',
    '2025',
    '2024',
    '2023',
    '2022',
    '2021',
    '2011 - 2020',
    '2000 - 2010',
    'до 2000'
]

export let filterAgeCategories = [
    '0-3',
    '4-6',
    '6-8',
    '8-10',
    '10-12',
    '12-14',
    '14-16',
    '16-18'
]

export let filterUsers = [
    "по дате регистрации",
    "по роли на сайте",
    "по дате последнего входа",
    "по активности",
    "по алфавиту (А-Я)",
    "по алфавиту (Я-А)"
]

export let filterRoles = [
    {
        roleName: "Администратор",
        access: {
            projects: {
                edit: true,
                delete: true,
                view: true,
            },
            categories: {
                edit: true,
                delete: true,
                view: true,
            },
            users: {
                edit: true,
                delete: true,
                view: true,
            },
            roles: {
                edit: true,
                delete: true,
                view: true,
            },
        }
    },
    {
        roleName: "Менеджер 1",
        access: {
            projects: {
                edit: false,
                delete: false,
                view: true,
            },
            categories: {
                edit: false,
                delete: false,
                view: true,
            },
            users: {
                edit: false,
                delete: false,
                view: true,
            },
            roles: {
                edit: false,
                delete: false,
                view: false,
            },
        }
    },
    {
        roleName: "Старший менеджер",
        access: {
            projects: {
                edit: true,
                delete: false,
                view: true,
            },
            categories: {
                edit: true,
                delete: false,
                view: true,
            },
            users: {
                edit: true,
                delete: false,
                view: true,
            },
            roles: {
                edit: false,
                delete: false,
                view: true,
            },
        }
    },
]

export let filterGenres = [
    {
        genreName: 'Комедиялар',
        image: 'placeholderImage1.png'
    },
    {
        genreName: 'Отбасымен көретіндер',
        image:'placeholderImage2.png'
    },
    {
        genreName: 'Ғылыми-танымдық',
        image:'placeholderImage3.png'
    },
    {
        genreName: 'Ойын-сауық',
        image:'placeholderImage4.png'
    },
    {
        genreName: 'Ғылыми фантастика және фэнтези',
        image:'placeholderImage5.png'
    },
    {
        genreName: 'Шытырман оқиғалы',
        image:'placeholderImage6.png'
    },
    {
        genreName: 'Қысқаметрлі',
        image:'placeholderImage7.png'
    },
    {
        genreName: 'Музыкалық',
        image:'placeholderImage8.png'
    },
    {
        genreName: 'Спорттық',
        image:'placeholderImage9.png'
    }
]