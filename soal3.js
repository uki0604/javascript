let str = "KUNCIE";
let n = 6;

for (let i = 1; i <= n; i++) {
  let output = "";
  for (let j = 0; j < i; j++) {
    output += str[j];
    if (j < i - 1) {
      output += " ";
    }
  }
  console.log(output);
}