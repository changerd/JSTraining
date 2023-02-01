"use strict"

function sayHello(name) {
    return `Привет, ${name}!`;
}

function returnNeighboringNumbers(elem) {
    const result = [];
    result.push(elem - 1);
    result.push(elem);
    result.push(elem + 1);

    return result;
}

function getMathResult(elem, steps) {
    let result = elem;    
    
    if (typeof steps === 'number' && steps > 0) {
        let temp = elem;

        for(i = 0; i < steps-1; i++) {
            temp += elem;
            result += `---${temp}`;            
        }
    }

    return result;
}

console.log(getMathResult(5, 3));
console.log(getMathResult(3, 10));