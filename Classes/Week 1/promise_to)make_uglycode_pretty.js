const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
    console.log("inside kirat file");
  return new Promise(function(resolve) {
    console.log("inside promise ");
    fs.readFile("a.txt", "utf-8", function(err, data) {
        console.log("before resolve");
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

let a = kiratsReadFile();
a.then(onDone);
console.log(a);