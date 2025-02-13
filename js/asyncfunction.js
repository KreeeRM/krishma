// Promise(resolve, reject)
//callbackes

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // reject("internal server error");
//     resolve({
//       data: {
//         name: "sasank",
//         email: "sasank@gmail.com",
//       },
//     });
//   }, 3000);
// });
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//async await
// const fetchData = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let data = response.json();
//   console.log("this is data1", data);
// };
// fetchData();

// with try catch
// const fetchData = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//     let data1 = response.json();
//     console.log("this is data1", data1);
//   } catch (error) {
// //     console.error("error fetching data", error);
// //   }
// };
// fetchData();

// assignment  git install, git hub account,

// This is  the example of git merge 
//hello git