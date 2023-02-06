'use strict';

const familyArr = ['Peter', 'Ann', 'Alex', 'Linda'];
const emptyFamilyArr = [];

function showFamily(arr) {
    if(arr.length === 0) {
        console.log('Семья пуста');
    } else {
        let result = 'Семья состоит из: ';
        arr.forEach(function(item) {
            result += `${item} `;
        });

        console.log(result);
    }
}

showFamily(familyArr);
showFamily(emptyFamilyArr);

const cities = ['Lisabon', 'Rome', 'Milan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(item){
        console.log(item.toLowerCase());
    });
}

standardizeStrings(cities);
