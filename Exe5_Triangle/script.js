"use strict";

const lines = 6;
let result = '';

for (let i = 0; i < lines; i++) {
    for (let j = 0; j < lines - i + 1; j++) {
        result += ' ';
    }

    for (let k = 0; k < (i + 1) * 2 - 1; k++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);