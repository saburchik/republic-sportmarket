//== Feedback:
import user_1 from "./assets/avatar/user_1.png"
import user_1_webp from "./assets/avatar/user_1.webp"
import user_2 from "./assets/avatar/user_2.png"
import user_2_webp from "./assets/avatar/user_2.webp"
import user_3 from "./assets/avatar/user_3.png"
import user_3_webp from "./assets/avatar/user_3.webp"

// == Intro img:
import intro_1 from './assets/winter.jpg'
import intro_1_webp from './assets/winter.webp'
import intro_s from './assets/winter_s.jpg'
import intro_s_webp from './assets/winter_s.webp'

import intro_2 from './assets/skate.jpg'
import intro_2_webp from './assets/skate.webp'



let state = {
    Intro: [
        {
            id: 1,
            title: 'Отдыхай в',
            titleSplit: 'движении',
            img: intro_1,
            imgWebp: intro_1_webp,
            img_s: intro_s,
            img_s_webp: intro_s_webp,
            alt: 'Изображение человека на сноуборде',
            styleClass: '',
        },
        {
            id: 2,
            title: 'Сделай свою',
            titleSplit: 'жизнь ярче!',
            img: intro_2,
            imgWebp: intro_2_webp,
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
    Feedback: [
        {
            id: 1,
            img: user_1,
            imgWebp: user_1_webp,
            comment: 'Отличный интернет магазин, с продукцией высокого качества. Имеется вся подробная информация о товаре. И даже, если возникут дополнительные вопросы, специалисты поддержки в кротчайшее время отвечают, и подсказывают.',
            author: 'Сын Тони Хоука',
        },
        {
            id: 2,
            img: user_2,
            imgWebp: user_2_webp,
            comment: 'Максимально индивидуальный подход к выбору товаров. В Республике. Дружелюбный коллектив, приятная атмосфера. Очень доволен. Заказали лонгборд в четверг, привезли в пятницу. Молодцы ребята.',
            author: 'Андрей Андреевич Замай',
        },
        {
            id: 3,
            img: user_3,
            imgWebp: user_3_webp,
            comment: 'Не большой ИМ. Выставочных мест не много. Конечно, до Сквота далеко, но заказать скейтборд или получить заказ то, что нужно и не нужно ехать на другой конец города. И очень приветливый персонал, молодцы ребятки.',
            author: 'Овсянкин',
        }
    ],
}

export default state