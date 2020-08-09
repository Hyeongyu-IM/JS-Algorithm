let products;

products = [
    { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
    { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
    { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
    { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
    { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
];

let ingredientCount = products.map(function(elem) {
    return elem.ingredients // 인그레디언트의 배열을 뽑아내고
}).reduce(function(acc, cur) {
    return acc.concat(cur); // 뽑아낸 배열을 모두 하나로 합친다음
}).reduce(function(acc, cur) {
    acc[cur] = (acc[cur] || 0) + 1 // 일치하는 것이 있으면 +1, 없으면 0에서 +1
    return acc;
}, {});

ingredientCount['mushrooms']; // 2
ingredientCount; // {artichoke: 1, sundried tomatoes: 2, mushrooms: 2, roma: 1, goats cheese: 1, …}