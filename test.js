function printTenTimes(x) {
  for (let i = 1; i < 11; i++) {
    function printTwentyTimes(b) {
      for (let i = 1; i < 21; i++) {
        console.log(b * i);
      }
    }
  }
  console.log("Printed");
}
console.log("Hii");
function printTwentyTimes(b) {
  for (let i = 1; i < 21; i++) {
    console.log(b * i);
  }
}

function printThirtyTimes(c) {
  for (let i = 1; i < 31; i++) {
    console.log(c * i);
  }
}
function print(params) {
  console.log("Hello");
}

printTenTimes(25);
printTwentyTimes(10);
printThirtyTimes(15);
