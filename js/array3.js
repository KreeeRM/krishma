// filter method in array
// let number = [1, 2, 3, 4, 5, 6];
// const filterNumber = number.filter((i) => i > 2);
// console.log(filterNumber);

// find method in array
let number = [1, 2, 4, 5, 6];
const findNumber = number.find((i) => i > 2);
console.log(findNumber);

// let cartItems = [
//     {
//       name: "ram",
//       products: [
//         { title: "labtop", price: 1000 },
//         { title: "mobile", price: 500 },
//         { title: "airpod", price: 100 },
//       ],
//     },
//     {
//       name: "roshan",
//       products: [
//         { title: "jeans", price: 100 },
//         { title: "tshirt", price: 500 },
//         { title: "sweater", price: 100 },
//       ],
//     },
  
//     {
//       name: "sajan",
//       products: [
//         { title: "book", price: 100 },
//         { title: "fan", price: 500 },
//         { title: "table", price: 100 },
//       ],
//     },
//   ];
  
//   cartItems.map((prod) => {
//     let total = prod.products.reduce((sum, i) => sum + i.price, 0);
//     console.log(prod.name);
//     //   console.log(prod.products);
  
//     console.log(`${prod.name} ,total expendture is ${total}`);
//   });
  
//   //assignment use template literal to print the name age and address of the students
  
//   const students = [
//     { name: "ram", age: 20, address: "kathmandu" },
//     { name: "rames", age: 23, address: "lalitpur" },
//     { name: "sanjaya", age: 18, address: "bhaktapur" },
//     { name: "jhon", age: 16, address: "pokhara" },
//   ];