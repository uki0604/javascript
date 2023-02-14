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
    // Test inputs
  checkNumber(5); //
  checkNumber(1000);
  checkNumber(-1000);
// comment
