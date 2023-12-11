
const fs = require('fs');

fs.readFile('C:/Users/AKSHAT RAG/Desktop/100-X DEV/assignments-Solutions/week-2/01-async-js/easy/kshat.txt',"utf-8", function(err, data) {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    console.log(data);
  }
});

const contentToWrite = "Hello, this is the content to write to the file.";

fs.writeFile('C:/Users/AKSHAT RAG/Desktop/100-X DEV/assignments-Solutions/week-2/01-async-js/easy/kshat.txt', contentToWrite, "utf-8", function(err) {
  if (err) {
    console.error("Error writing to the file:", err);
  } else {
    console.log("Write operation complete.");
  }
});