const fs = require('fs');

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case 'read':
    readFile(file);
    break;
  case 'delete':
    deleteFile(file);
    break;
  case 'create':
    createFile(file);
    break;
  case 'append':
    appendToFile(file, content);
    break;
  case 'rename':
    renameFile(file, content);
    break;
  case 'list':
    listDirectory(file);
    break;
  default:
    console.log(`Invalid operation '${operation}'`);
}

function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }
    console.log(data);
  });
}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err.message}`);
      return;
    }
    console.log(`File '${filePath}' deleted`);
  });
}

function createFile(filePath) {
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.error(`Error creating file: ${err.message}`);
      return;
    }
    console.log(`File '${filePath}' created`);
  });
}

function appendToFile(filePath, content) {
  fs.appendFile(filePath, content + '\n', (err) => {
    if (err) {
      console.error(`Error appending to file: ${err.message}`);
      return;
    }
    console.log(`Content appended to the file '${filePath}'`);
  });
}

function renameFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(`Error renaming file: ${err.message}`);
      return;
    }
    console.log(`File '${oldPath}' renamed to '${newPath}'`);
  });
}

function listDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error listing directory: ${err.message}`);
      return;
    }
    files.forEach(file => {
      console.log(file);
    });
  });
}




// node index.js create test.txt

// node index.js read test.txt

// node index.js append test.txt "Hello, World!"

// node index.js delete test.txt

// node index.js rename test.txt new.txt

// node index.js list .

// complete