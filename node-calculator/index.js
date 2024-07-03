const crypto = require('crypto');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No operation provided.");
  process.exit(1);
}

const operation = args[0];
const numbers = args.slice(1).map(Number);

function generateRandomNumber(length) {
  if (length === undefined) {
    console.log("Provide length for random number generation.");
    return;
  }
  const randomBytes = crypto.randomBytes(length).toString('binary');
  console.log(randomBytes);
}

switch (operation) {
  case 'add':
    if (numbers.length < 2) {
      console.log("Provide at least two numbers for addition.");
    } else {
      const sum = numbers.reduce((a, b) => a + b, 0);
      console.log(sum);
    }
    break;

  case 'sub':
    if (numbers.length < 2) {
      console.log("Provide at least two numbers for subtraction.");
    } else {
      const result = numbers.reduce((a, b) => a - b);
      console.log(result);
    }
    break;

  case 'mult':
    if (numbers.length < 2) {
      console.log("Provide at least two numbers for multiplication.");
    } else {
      const result = numbers.reduce((a, b) => a * b, 1);
      console.log(result);
    }
    break;

  case 'divide':
    if (numbers.length < 2) {
      console.log("Provide at least two numbers for division.");
    } else {
      const result = numbers.reduce((a, b) => a / b);
      console.log(result);
    }
    break;

  case 'sin':
    if (numbers.length !== 1) {
      console.log("Provide one number for sine calculation.");
    } else {
      console.log(Math.sin(numbers[0]));
    }
    break;

  case 'cos':
    if (numbers.length !== 1) {
      console.log("Provide one number for cosine calculation.");
    } else {
      console.log(Math.cos(numbers[0]));
    }
    break;

  case 'tan':
    if (numbers.length !== 1) {
      console.log("Provide one number for tangent calculation.");
    } else {
      console.log(Math.tan(numbers[0]));
    }
    break;

  case 'random':
    const length = numbers[0];
    generateRandomNumber(length);
    break;

  default:
    console.log("Invalid operation");
}
