function countDown (number) {
     if (number <= 0) {
          console.log("All Done");
          return;
     } 
     console.log(number-- + "\n");
     countDown(number);
}
// countDown(5);

function factorial (num) {
     if(num == 1) return 1;
     return num * factorial(num-1); 
}

console.log(factorial(3));
