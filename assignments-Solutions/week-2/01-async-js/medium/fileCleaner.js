const fs = require('fs');

const fileName = "a.txt"; // Replace with your file name

// Read the file
fs.readFile("a.txt", 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Remove extra spaces
  const cleanedData = data.replace(/\s+/g, ' ');

  // Write it back to the same file
  fs.writeFile("a.txt", cleanedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File has been cleaned and updated.');
  });
});

