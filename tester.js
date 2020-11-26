// launch with node test.js folder testNumber, eg: node test.js 1803-1 1
const fs = require('fs');
const assert = require('assert');

let inputFile = 'input1.txt';
let outputFile = 'output1.txt';
if (process.argv.length > 2) {
  let num = 1;
  if (process.argv.length > 3) {
    num = process.argv[3];
  }
  inputFile = process.argv[2] + '/input' + num + '.txt';
  outputFile = process.argv[2] + '/output' + num + '.txt';
} else {
  console.error(
    'launch with node test.js folder testNumber, eg: node test.js 1803-1 1'
  );
  return;
}

const readline_object = fs
  .readFileSync(inputFile, 'utf8')
  .toString()
  .split('\n');

Object.defineProperty(Array.prototype, 'on', {
  value: function (type, callback) {
    if (type === 'line') {
      this.forEach((value) => {
        callback(value);
      });
    } else {
      callback();
    }
  },
});

eval(fs.readFileSync(process.argv[2] + '/script.js') + '');
