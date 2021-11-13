import introImg from './assets/intro_winter.jpg'

let state = {
    Categories: [
        {
            id: 1,
            title: 'Скейтборды',
            subtitles: [
                { id: 1, subtitle: 'Лонгборды и круизеры' },
                { id: 2, subtitle: 'Скейтборды в сборе' },
                { id: 3, subtitle: 'Подшипники для скейта' }
            ]
        },
        {
            id: 2,
            title: 'Акксессуары',
            subtitles: [
                { id: 1, subtitle: 'Очки' },
                { id: 2, subtitle: 'Банданы' },
                { id: 3, subtitle: 'Часы' },
            ]
        },
        {
            id: 3,
            title: 'Самокаты',
            subtitles: [
                { id: 1, subtitle: 'Самокаты в сборе' },
                { id: 2, subtitle: 'Вилки для кикскутеров и самокатов' },
                { id: 3, subtitle: 'Рули для самокатов' },
                { id: 4, subtitle: 'Деки для самокатов' },
                { id: 5, subtitle: 'Подшипники' }
            ]
        },
    ],
    IntroSliders: [
        {
            id: 1,
            title: `Отдыхай В Движении`,
            img: introImg,
            alt: 'Изображение человека на сноуборде',
            classPosition: '',
        },
        {
            id: 2,
            title: 'Сделай свою жизнь Ярче!',
            img: 'https://i.imgur.com/zwb4Ql2.jpg',
            alt: 'Изображение скейтборда',
            classPosition: 'left',
        }
    ]
}

export default state