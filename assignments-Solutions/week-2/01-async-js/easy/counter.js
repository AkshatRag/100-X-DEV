let count =0;
let intervalID = setInterval(function akshat(){
    count++;
    console.log(count);

    if(count==10){
        clearInterval(intervalID);
    }
},1000)

