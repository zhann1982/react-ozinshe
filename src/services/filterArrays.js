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
    '12-16',
    '16+'
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
                add: true,
                edit: true,
                delete: true,
                view: true,
            },
            categories: {
                add: true,
                edit: true,
                delete: true,
                view: true,
            },
            users: {
                add: true,
                edit: true,
                delete: true,
                view: true,
            },
            roles: {
                add: true,
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
                add: true,
                edit: true,
                delete: false,
                view: true,
            },
            categories: {
                add: false,
                edit: false,
                delete: false,
                view: true,
            },
            users: {
                add: false,
                edit: false,
                delete: false,
                view: true,
            },
            roles: {
                add: false,
                edit: false,
                delete: false,
                view: true,
            },
        }
    },
    {
        roleName: "Старший менеджер",
        access: {
            projects: {
                add: true,
                edit: true,
                delete: true,
                view: true,
            },
            categories: {
                add: true,
                edit: true,
                delete: false,
                view: true,
            },
            users: {
                add: true,
                edit: true,
                delete: false,
                view: true,
            },
            roles: {
                add: false,
                edit: false,
                delete: false,
                view: true,
            },
        }
    },
]