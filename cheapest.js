const phones = [
  { name: "Samsung", price: 20000, camera: "12MP", color: "black" },
  { name: "Apple", price: 100000, camera: "12MP", color: "black" },
  { name: "Vivo", price: 18000, camera: "12MP", color: "black" },
  { name: "Walton", price: 35000, camera: "12MP", color: "black" },
  { name: "Motorola", price: 27000, camera: "12MP", color: "black" },
];

// getCheapestPhone
function getCheapestPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}
const cheap = getCheapestPhone(phones);
console.log(cheap);

// getHotPhone
function getHotPhone(phones) {
  let hot = phones[0];
  for (const phone of phones) {
    if (phone.price > hot.price) {
      hot = phone;
    }
  }
  return hot;
}
const hot = getHotPhone(phones);
console.log(hot);
