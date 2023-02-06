'use strict';

const someString = 'This is some strange string';

function reverse(str) {
    return [...str].reverse().join('');
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });    

    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
