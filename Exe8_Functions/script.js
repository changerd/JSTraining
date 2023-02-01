"use strict"

function declension(forms, val) {
    const cases = [ 2, 0, 1, 1, 1, 2 ];
    return forms[(val % 100 > 4 && val % 100 < 20) ? 2 : cases[(val % 10 < 5) ? val % 10 : 5]];
} 

function getTimeFromMinutes(minutes) {
    if(isNaN(minutes) || !Number.isInteger(minutes) || minutes < 0) {
        return 'Ошибка, проверьте данные';
    }

    const hours = Math.floor(minutes / 60);
    const restMinutes = minutes - 60 * hours;
    
    return `Это ${hours} ${declension([ 'час', 'часа', 'часов' ], hours)} и ${restMinutes} ${declension([ 'минута', 'минуты', 'минут' ], restMinutes)}`
}

console.log( getTimeFromMinutes(150) );
console.log( getTimeFromMinutes(50) );
console.log( getTimeFromMinutes(0) );
console.log( getTimeFromMinutes(-150) );

function isNumber(value) {
    return typeof value === 'number';
}

function findMaxNumber(first, second, third, fourth) {
    if(!isNumber(first) || !isNumber(second) || !isNumber(third) || !isNumber(fourth)) {
        return 0;
    }

    return Math.max(first, second, third, fourth);
}

console.log( findMaxNumber(1, 5, 6.6, 11) );
console.log( findMaxNumber(1, 5, '6', '10') );