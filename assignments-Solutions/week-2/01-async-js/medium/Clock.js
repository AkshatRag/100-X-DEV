function updateClock() {
    const now = new Date();
  
    // Format for 24-hour clock (HH:MM::SS)
    const hours24 = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time24 = `${hours24}:${minutes}:${seconds}`;
  
    // Format for 12-hour clock (HH:MM::SS AM/PM)
    const hours12 = (now.getHours() % 12 || 12).toString().padStart(2, '0');
    const period = now.getHours() < 12 ? 'AM' : 'PM';
    const time12 = `${hours12}:${minutes}:${seconds} ${period}`;
  
    console.clear(); // Optional: Clear console for better visibility
    console.log(`24-Hour Clock: ${time24}`);
    console.log(`12-Hour Clock: ${time12}`);
  }
  
  // Update the clock every second (1000 milliseconds)
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();
  