const fs = require('fs');

fs.readFile("a.txt", "utf-8", function(err, data) {
  console.log(data);
});

console.log("hi there");

let a=1;
for(let i=0;i<100000000;i++){
    a++
}

console.log("hello there 2");