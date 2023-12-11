function countdown(seconds) {
    if (seconds <=10) {
      console.log(seconds);
      setTimeout(function () {
        countdown(seconds + 1);
      }, 1000); // 1000 milliseconds (1 second)
    } else {
      console.log("Countdown complete!");
    }
  }
  
  // Set the initial number of seconds for the countdown
  const initialSeconds = 0;
  
  // Start the countdown
  countdown(initialSeconds);