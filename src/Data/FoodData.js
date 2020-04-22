export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Peperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Burger'
    },
    {
        name: 'Veggia Pizza',
        img: '/img/pizza3.jpeg',
        section: 'Burger'
    },
    {
        name: 'Burger',
        img: '/img/pizza4.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Fries Pizza',
        img: '/img/pizza5.jpeg',
        section: 'Burger'
    },
    {
        name: 'New Pizza',
        img: '/img/pizza6.jpeg',
        section: 'Pizza'
    }
]

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]) {
        res[food.section] = []
    }
    res[food.section].push(food);
    return res;
}, {})