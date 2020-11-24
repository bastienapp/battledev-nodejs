const fs = require('fs');
const assert = require('assert');

let inputFile = 'input1.txt';
let outputFile = 'output1.txt';
//launch with node script.js x
//where x is the number of the input/output file
if (process.argv.length > 2) {
  inputFile = 'input' + process.argv[2] + '.txt';
  outputFile = 'output' + process.argv[2] + '.txt';
}
console.log = function (result) {
  const expected = fs.readFileSync(outputFile).toString().split('\n');
  assert.deepStrictEqual(result, expected);
};

const input = fs.readFileSync(inputFile).toString().split('\n');

function ContestResponse() {
  //implement your code here using input array
}

ContestResponse();
