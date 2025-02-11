const students = [
    { name: "ramesh", paidStatus: true, scholarship: false },
    { name: "ganga", paidStatus: true, scholarship: false },
    { name: "dinesh", paidStatus: false, scholarship: true },
  ];
  //using foreach
  // students.forEach((student) => {
  //   if (student.paidStatus && student.scholarship) {
  //     console.log(`paid, ${student.name} can give the exam`); //template literal
  //   } else {
  //     console.log(`not paid, ${student.name} cannot give the exam`); //template literal
  //   }
  // });
  
  //  using map
  students.map((student) => {
    if (!student.paidStatus || !student.scholarship) {
      console.log(`paid, ${student.name} can give the exam`); //template literal
    } else {
      console.log(`not paid, ${student.name} cannot give the exam`); //template literal
    }
  });