function fetchData(c) {
    console.log("api is fetching");
    setTimeout(() => {
      c("api successfully fetch");
    }, 3000);
  }
  
  fetchData((m) => {
    console.log(m);
  });
  
  console.log(" hello from middle");