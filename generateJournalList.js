const fs = require('fs');
const path = require('path');

// Path to the journals folder
const journalsFolder = path.join(__dirname, 'journals');

// Output file (journals.html or a JavaScript file)
const outputFile = path.join(__dirname, 'journalFiles.js');

// Read the contents of the journals folder
fs.readdir(journalsFolder, (err, files) => {
    if (err) {
        console.error('Error reading journals folder:', err);
        return;
    }

    // Filter for .htm files
    const journalFiles = files
        .filter(file => file.endsWith('.htm'))
        .map(file => ({
            title: file.replace('.htm', '').replace(/-/g, ' '), // Generate a title
            file: `journals/${file}` // Relative path to the file
        }));

    // Generate the JavaScript array
    const outputContent = `const journalFiles = ${JSON.stringify(journalFiles, null, 4)};`;

    // Write the array to a JavaScript file
    fs.writeFile(outputFile, outputContent, err => {
        if (err) {
            console.error('Error writing journalFiles.js:', err);
        } else {
            console.log('journalFiles.js updated successfully!');
        }
    });
});