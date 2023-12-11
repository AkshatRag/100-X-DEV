function AkshatRag(){
    console.log("entering promise");
    return new Promise((resolve) => {
        console.log("entering resolve");
        resolve("hi Akshat");
        
    })
}

function main(){
    console.log("entering main");
     AkshatRag().then(function(value){
        console.log("akshat rag");
        console.log(value);
    });

}

main();