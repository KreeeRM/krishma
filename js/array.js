//map
let students = [
    { name: "ram", age: 20, marks: 50 },
    { name: "shyam", age: 10, marks: 60 },
    { name: "hari", age: 25, marks: 40 },
  ];
  // console.log(students);
  console.log(students[1]);
  
  students.map((stu) => {
    console.log(stu.name, stu.age, stu.marks);
  });
  
  // let cart = [
  //   {
  //     price: 200,
  //     qty: 3,
  //   },
  //   {
  //     price: 300,
  //     qty: 2,
  //   },
  //   {
  //     price: 400,
  //     qty: 4,
  //   },
  // ];