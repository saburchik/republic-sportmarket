const products = [
    {
        article: 848501,
        category: "skate",
        name: "BLIND OG Grundge Logo FP Black 8",
        status: "NEW",
        imageUrl:
            "https://i.imgur.com/6h1WQtq.jpg",
        description: "Классика от Blind. Скейтборд из 7-слойного канадского клёна. Подойдет для начинающих и прогрессирующих райдеров и любого места катания, будь то улица или скейт-парк.",
        price: 7700,
        oldPrice: 8700,
        countInStock: 4,
    },
    {
        article: 848502,
        category: "skate",
        name: "DARKSTAR Timeworks Yth FP Soft Top Mint 6.5",
        status: "NEW",
        imageUrl:
            "https://i.imgur.com/VOVWVYe.jpg",
        description:
            "Классика от Darkstar. Скейтборд из 7-слойного канадского клёна. Подойдет для начинающих и прогрессирующих райдеров и любого места катания, будь то улица или скейт-парк.",
        price: 7900,
        oldPrice: 9900,
        countInStock: 10,
    },
    {
        article: 848503,
        category: "scooter",
        name: "TILT Theorem Complete - Asphalt Medium",
        status: "20%",
        imageUrl:
            "https://i.imgur.com/0swuwDF.png",
        description:
            "Совершенно новый продукт от компании Tilt - самокат комплит The Theorem разработан специально для райдеров, преданных этому бренду. Самокат построен на основе немного упрощённой доски Theory, и представлен в трёх размерах: Small, Medium и Large, поэтому подобрать подходящий именно вам не составит никаких проблем. Из особенностей можно выделить мягкие грипсы Metra, шкурку средней зернистости, алюминиевый Т-образный руль, мягкий тормоз и нестандартную фурнитуру Tilt. Комплит абсолютно совместим со всеми продуктами коллекции Tilt Stage III, и вы не столкнётесь с проблемами в дальнейшей настройке самоката под свой индивидуальный стиль езды.",
        price: 27900,
        oldPrice: 29000,
        countInStock: 5,
    },
    {
        article: 848504,
        category: "scooter",
        name: "NITRO CIRCUS RW 540",
        status: "20%",
        imageUrl:
            "https://i.imgur.com/eLntBaX.jpg",
        description:
            "Комплит Nitro Circus Ryan 'R-Willy' Williams 540 Signature снова возвращается, и становится лучше чем когда-либо ранее. И без того стильный дизайн улучшен и дополнен облегченными компонентами, для обеспечения надежности и внешнего вида. Новая модель самоката имеет широкую доску квадратными дропаутами, и новым перешейком, а так же усовершенствованный алюминиевый руль с шестигранной конструкцией для дополнительной прочности. Дополненный системой сжатия SCS и новыми 120 мм колёсами — этот комплит будет способствовать вашему прогрессу очень долгое время.",
        price: 25800,
        oldPrice: 27800,
        countInStock: 25,
    },
    {
        article: 848505,
        category: "accessories",
        name: "SPEKTRUM BLANK BLACK INFRARED LENS",
        status: "20%",
        imageUrl: "https://i.imgur.com/nXkidFv.jpg",
        description: "Модель обеспечивает высочайший уровень защиты и комфорта благодаря оптимизированной форме линз, предотвращающей повреждение лучей до того, как они достигнут сетчатки. Бланк, плотно прилегающий к вашей голове, создан для скорости. Серая базовая линза Zeiss с многослойным инфракрасным зеркальным покрытием идеально подходит для длительного использования в яркие и солнечные дни. Этот объектив обеспечивает визуальную защиту от сильных отражений, обеспечивает максимальный визуальный комфорт и естественное восприятие без искажения цвета. Серая базовая линза Zeiss с инфракрасным зеркальным покрытием идеально подходит для длительного использования в яркие и солнечные дни. Эти линзы обеспечивают визуальную защиту от сильных отражений, обеспечивают максимальный визуальный комфорт и естественное восприятие без искажения цвета.",
        price: 14900,
        oldPrice: 15900,
        countInStock: 4,
    },
    {
        article: 848506,
        category: "accessories",
        name: "Бандана BUFF Polar New Cashmere Red",
        status: "20%",
        imageUrl: "https://i.imgur.com/BPua9Ap.jpg",
        description: "Бандана Buff Polar - это настоящая находка для тех, кто занимается зимними видами спорта или просто любит активные прогулки на природе в холодную пору. Многофункциональный аксессуар состоит из двух компонентов: нижний теплый флисовый шарф и вшитый в него гейтер из легкой микрофибры. Ткань отлично греет, хорошо дышит и испаряет влагу. Благодаря высокой эластичности и продуманному крою, Buff Polar можно носить во множестве различных вариантов: как шарф, бандану, балаклаву, шапочку и многих других.",
        price: 2390,
        oldPrice: 3190,
        countInStock: 0,
    },
]

module.exports = products