//다음의 객체에서 재료들이 몇개씩 얼마나 필요한지 한배열안에 표시해서 구하기//

let products = [{
        name: 'Sonoma',
        ingredients: ['artichoke', 'sundried tomatoes', 'mushrooms'],
        containsNuts: false,
    },
    {
        name: 'Pizza Primavera',
        ingredients: [
            'roma',
            'sundried tomatoes',
            'goats cheese',
            'rosemary',
        ],
        containsNuts: false,
    },
    {
        name: 'South Of The Border',
        ingredients: ['black beans', 'jalapenos', 'mushrooms'],
        containsNuts: false,
    },
    {
        name: 'Blue Moon',
        ingredients: ['blue cheese', 'garlic', 'walnuts'],
        containsNuts: true,
    },
    {
        name: 'Taste Of Athens',
        ingredients: ['spinach', 'kalamata olives', 'sesame seeds'],
        containsNuts: true,
    },
];
let arr = [];

arr = products.map(function(name) {
    return name['ingredients'].reduce(function(acc, cur) {
        acc = (acc[cur] || 0) + 1;
    })
})