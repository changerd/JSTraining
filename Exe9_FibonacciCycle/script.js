'use strict';

function fib(count) {
    if(typeof count !== 'number' || !Number.isInteger(count) || count < 1) {
        return '';
    }

    let prePast = 0;
    let past = 1;
    let value = 0;
    
    let result = '';

    for (let i = 0; i < count; i++) {
        result += value  + ' ';
        prePast = past;
        past = value;
        value = prePast + past;
    }

    return result;
} 

console.log( fib(4) );
console.log( fib(7) );
console.log( fib('7') );
console.log( fib(1) );
console.log( fib(0) );