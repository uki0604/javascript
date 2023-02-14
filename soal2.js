function checkNumber(n) {
    if (n < 0) {
      console.log("Input tidak valid");
    } else if (n < 10) {
      console.log("satuan");
    } else if (n < 100) {
      console.log("puluhan");
    } else if (n < 1000) {
      console.log("ratusan");
    } else if (n < 10000) {
      console.log("ribuan");
    } else if (n < 100000) {
      console.log("puluhribuan");
    } else {
      console.log("Input tidak valid");
    }
  }
    // value output
  checkNumber(5); // satuan
  checkNumber(1000); // ribuan
  checkNumber(-1000); // gak valid
