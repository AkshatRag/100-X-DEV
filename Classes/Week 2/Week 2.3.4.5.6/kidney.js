const express = require("express");
const app = express();

const users = [{
    name :"John",
    kidneys: [{
        healthy : false
    }]
}];

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", function(req, res){
    // write logic to return how many of them were healthy and how many of them were unhealthy

    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    console.log(johnKidneys);
    let numberOfHealthykidneys=0;
    for(let i=0;i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy ){
            numberOfHealthykidneys = numberOfHealthykidneys +1;
        }
    }
    const numberOfUnhealthykidneys = numberOfKidneys - numberOfHealthykidneys ;
    res.json({
        numberOfKidneys,
        numberOfHealthykidneys,
        numberOfUnhealthykidneys


    })
})


app.use(express.json());//letyou pass and get json body in server.


//body me request jayega naki query ya params me
app.post("/", function(req,res){
    const isHealhty = req.body.isHealhty;
    users[0].kidneys.push({
        healthy: isHealhty
    })

    res.json({
        msg : "done"
    })
});



app.put("/", function(req,res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy=true;
    }

    res.json({
    })
})


app.delete("/", function(req,res){
    if(isThereAtLeastOneUnhealthyKidney()){
        const newKidneys = [];
    for(let i = 0; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
            healthy : true
        })
    }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"done"})
    }
    else{
        res.status(411).json({
            msg:"u dont have any bad kidney"
        })
    }
    
})

function isThereAtLeastOneUnhealthyKidney(){
    let atLeastOneUnhealthyKidney=false;
    for(let i = 0; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
           atLeastOneUnhealthyKidney = true;
    }
    }
    return atLeastOneUnhealthyKidney;
}


app.listen(3000);