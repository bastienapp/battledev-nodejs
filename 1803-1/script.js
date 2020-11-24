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
  const expected = fs.readFileSync(outputFile, 'utf8');
  assert.deepStrictEqual(
    result.toString().split('\n'),
    expected.toString().split('\n')
  );
  console.error('OK ' + result);
};

const input = fs.readFileSync(inputFile, 'utf8').toString().split('\n');
/*
Sortie
Un entier représentant le score du meilleur restaurant de votre base arrondi à l'entier supérieur.
*/
function ContestResponse() {
  //implement your code here using input array
}

ContestResponse();
