function printTenTimes(x) {
  function printTwentyTimes(b) {
    for (let i = 1; i < 21; i++) {
      function printThirtyTimes(c) {
        for (let i = 1; i < 31; i++) {
          console.log(c * i);
        }
      }
    }
  }
}
console.log("Printed");
console.log("Hii");
function printTwentyTimes(d) {
  for (let i = 1; i < 21; i++) {
    console.log(d * i);
  }
}

function printThirtyTimes(c) {
  for (let i = 1; i < 31; i++) {
    function printTwentyTimes(d) {
      for (let i = 1; i < 21; i++) {
        console.log(d * i);
      }
    }
  }
}
function print(params) {
  console.log("Hello");
}

printTenTimes(25);
printTwentyTimes(10);
printThirtyTimes(15);
