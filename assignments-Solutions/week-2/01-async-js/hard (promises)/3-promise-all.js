/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function wait1(t) {
    let prom = new Promise((resolve) => {
      setInterval(resolve, t * 1000);
    });
    return prom;
  }
  
  function wait2(t) {
    let prom = new Promise((resolve) => {
      setInterval(resolve, t * 1000);
    });
    return prom;
  }
  
  function wait3(t) {
    let prom = new Promise((resolve) => {
      setInterval(resolve, t * 1000);
    });
    return prom;
  }
  
  function calculateTime(t1, t2, t3) {
    const start = Date.now();
  
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
      return new Promise((resolve) => {
        let timeTaken = Date.now() - start;
        resolve(timeTaken);
      });
    });
  }
  
  module.exports = calculateTime;