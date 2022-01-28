'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'performOperations' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. 2D_INTEGER_ARRAY operations
 */

function performOperations(arr, operations) {
    let arr_size = arr.length;
    let opp_size = operations.length;
    for(let i = 0; i< opp_size; i++) {

    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const operationsRows = parseInt(readLine().trim(), 10);

    const operationsColumns = parseInt(readLine().trim(), 10);

    let operations = Array(operationsRows);

    for (let i = 0; i < operationsRows; i++) {
        operations[i] = readLine().replace(/\s+$/g, '').split(' ').map(operationsTemp => parseInt(operationsTemp, 10));
    }

    const result = performOperations(arr, operations);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
