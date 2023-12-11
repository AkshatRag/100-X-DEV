const fs = require('fs');
let a=1;
console.log(a);
fs.readFile("a.txt", "utf-8",
    (err, data)=>{
    console.log(err);
    console.log("data read from file is : ");
    console.log(data);
}
);

let ans =0;
for(let i=0;i<1000000000;i++){
    ans=ans+i
}

console.log(ans);


let b=1;
console.log(b);

setTimeout(function timeout(){
    console.log("click the button!");
},5000);

let ans2 =0;
for(let i=0;i<1000000000;i++){
    ans2=ans2+i
}

console.log(ans2);