// const sentence = "we/are/happy /to /see /you";
// const words = sentence.split("/");
// console.log("words", words);
// const totalWord = words.length;
// console.log("total word", totalWord);

// let num = [1, 2, 3, 4, 6, 7, 8];
// let newNum = num.push(9);
// console.log(num);

// let removeNum = num.pop();
// console.log(num);

// let num2 = [1, 2, 3, 4];
// let num3 = [...num2, 5, 6, 7]; //spread operator
// console.log(num3);
// assignment: to research on shift unshift indexof includes splice slice  methods in array
// const sentence ="we are happy too see you ";
// const words = sentence.split("/");//( convert string into)
// console.log("words",words);
// const totalwords = words.length;
// console.log("total words",totalwords);

// let num= [1,2,3,4];
// let newnum = num.push(5);//(it help to push 1 number in push)
// console.log(num);
// let removenum = num.pop();//(it helps to remove one last number in)
// console.log(num);

// let num2=[1,2,3,4]
// let num3=[...num2,5,6,7];//(spread operater, it works to copy )
// console.log(num3);
// assigment : to create on sift unshift indexof includes splice  slice methods in array
// let student = "{ name:  'parnish', age : 22 }";
// console.log(student.name);

// let num =[1,2,3,4,5 ,6];
// let slice= num.slice(2,3);
// console.log("slice number:",slice);

//shift(first index delet like as pop)
// let num =[1,2,3,4,5];
// let firstnum=num.shift();
// console.log("numbers:",num);

//unshift (insert in index  in first value )
// let num =[1,2,3,4,5];
// let firstnum=num.unshift();
// console.log("numbers:",num);


//indexof
// let num =[1,2,3,4,5];
// let index=num.indexOf(3);//if not found array it gives -1
// console.log("numbers of 3:",index);

//include
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.includes("Banana")); // Output: true
// console.log(fruits.includes("Mango"));  // Output: false


//splice
// let colors = ["Red", "Green", "Blue"];
// colors.splice(1, 0, "Yellow", "Orange"); // Inserts elements at index 1
// console.log(colors);


//slice()
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// let slicedColors = colors.slice(-3, -1);
// console.log(slicedColors); 
// console.log(colors);// Original array remains unchanged

// json parse // json stringify

// let student = { name: "jhone", age: 30 };
// console.log(student.age);
// const jsonString = '{"name": "jhon", "age":20, "city": "pokhar" }'; //json string

// let data = JSON.parse(jsonString);
// let str = JSON.stringify(data);
// console.log(data.age);
// console.log(str);
// console.log(str.name);

// let users = [
//   {
//     name: "Nikhil",
//     product: [
//       {
//         title: "macbook",
//         price: 1000,
//       },
//       {
//         title: "mobile",
//         price: 100,
//       },
//       {
//         title: "bag",
//         price: 1500,
//       },
//     ],
//   },
//   {
//     name: "Anjali",
//     product: [
//       {
//         title: "Shoes ",
//         price: 300,
//       },
//       {
//         title: "book",
//         price: 1200,
//       },
//     ],
//   },
//   {
//     name: "Krishma",
//     product: [
//       {
//         title: "Shoes ",
//         price: 3000,
//       },
//       {
//         title: "Dress",
//         price: 1200,
//       },
//     ],
//   },
// ];

// users.forEach((user) => {
//   user.product.forEach((product) => {
//     if (product.title.toLowerCase().trim() == "shoes") {
//       console.log(
//         // `${user.name} owned ${product.title} which cost ${product.price}`
//         `${user.name} has ${product.title}`
//       );
//     }
//   });
// });

// js for fibonacci series
// let num = 10;
// let fib = [0, 1];
// //  a= 0
// //  b=1
// //  c= a+b
// //  a=b
// //  b=c
// // c=
// for (let i = 2; i <= num; i++) {
//   fib.push(fib[i - 1] + fib[i - 2]);
// }
// console.log(fib);

// 0 1 1 2 3 5

const cart = [
    { price: 100, qty: 1 },
    { price: 50, qty: 2 },
    { price: 10, qty: 1 },
    { price: 20, qty: 4 },
    { price: 30, qty: 1 },
  ];
  const total = cart
    .slice(0, 3)
    .reduce((acc, item) => acc + item.price * item.qty, 0);
  console.log("total: Rs", total);
  
  let Users = ["ram", "Shyam", "hari", "sita", "gita"];
  
  const registerUser = (name) => {
    const user = Users.find(
      (c) => c.toLowerCase().trim() === name.toLowerCase().trim()
    );
    if (user) {
      console.log("register user:", user);
    } else {
      console.log(`${name} is not register user: invalid credential`);
    }
  };
  registerUser("Shyam");