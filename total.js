const products = [
    {name: "Shampoo", price: 300},
    {name: "Shop", price: 100},
    {name: "Shirt", price: 700},
    {name: "Pant", price: 1300},
]

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}
const total = getShoppingTotal(products);
console.log("Total ajka koshba: ", total);






