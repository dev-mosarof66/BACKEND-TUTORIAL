const arr = [
  {
    id: 1,
    name: "masala tea",
    price: 30,
  },
  {
    id: 2,
    name: "hot coffee",
    price: 50,
  },
];

console.log(arr);

arr[1] = {
  id: 2,
  name: "hot coffee",
  price: 100,
};

console.log(arr);
