function square(n){
    return n *n ;
}

function cube(n){
    return n *n *n;
}

function sumOfSquares(a,b){
    let square1 = square(a);
    let square2 = square(b);

    return square1 + square2;
}

function sumOfCubes(a,b){
    let cube1 = cube(a);
    let cube2 = cube(b);

    return cube1 + cube2;
}

let ans = sumOfCubes(1,2);
console.log(ans);

//abover scenario we are repeating ourselves 
//dont repeat yourself

//introducing callbacks - single fucntion that does logic which gets a fucntion as an input.

function sumOfSomething(a,b,fn){
    let square1 = fn(a);
    let square2 = fn(b);

    return square1 + square2;
}

let ans2 = sumOfSomething(1,2,square);
console.log(ans2);

// this is a high level scenario , we usualyy dont need callback in synchronous programming.
// it is mainly needed for async fucntions