//-- IntroSliders:
import winterImg from './assets/winter.jpg'
import skateImg from './assets/skate.jpg'

//-- Feedback:
import user_1 from "./assets/feedback/user_1.png"
import user_2 from "./assets/feedback/user_2.png"
import user_3 from "./assets/feedback/user_3.png"

let state = {
    intro: [
        {
            id: 1,
            title: 'Отдыхай В Движении',
            img: winterImg,
            alt: 'Изображение человека на сноуборде',
            styleClass: '',
        },
        {
            id: 2,
            title: 'Сделай свою жизнь Ярче!',
            img: skateImg,
            alt: 'Изображение скейтборда',
            styleClass: 'left',
        }
    ],
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
    feedback: [
        {
            id: 1,
            img: user_1,
            comment: 'Отличный интернет магазин, с продукцией высокого качества. Имеется вся подробная информация о товаре. И даже, если возникут дополнительные вопросы, специалисты поддержки в кротчайшее время отвечают, и подсказывают.',
            author: 'Сын Тони Хоука',
        },
        {
            id: 2,
            img: user_2,
            comment: 'Максимально индивидуальный подход к выбору товаров. В Республике. Дружелюбный коллектив, приятная атмосфера. Очень доволен. Заказали лонгборд в четверг, привезли в пятницу. Молодцы ребята.',
            author: 'Андрей Андреевич Замай',
        },
        {
            id: 3,
            img: user_3,
            comment: 'Не большой ИМ. Выставочных мест не много. Конечно, до Сквота далеко, но заказать скейтборд или получить заказ то, что нужно и не нужно ехать на другой конец города. И очень приветливый персонал, молодцы ребятки.',
            author: 'Овсянкин',
        }
    ],
}

export default state