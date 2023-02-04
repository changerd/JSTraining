'use strict';

function calculateVolumeAndArea(value) {
    if(isNaN(value) || !Number.isInteger(value) || value < 1) {
        return 'При вычислении произошла ошибка';
    }

    const area = 6 * Math.pow(value, 2);
    const volume = Math.pow(value, 3);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

function getCoupeNumber(value) {
    if(isNaN(value) || !Number.isInteger(value) || value < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }

    if(value > 36 || value === 0) {
        return 'Таких мест в вагоне не существует';
    }

    const result = Math.ceil(value / 4);

    return result;
}

console.log( calculateVolumeAndArea(5) );
console.log( calculateVolumeAndArea(15) );
console.log( calculateVolumeAndArea(15.5) );
console.log( calculateVolumeAndArea('15') );
console.log( calculateVolumeAndArea(-15) );

console.log( getCoupeNumber(33) );
console.log( getCoupeNumber(7) );
console.log( getCoupeNumber(300) );
console.log( getCoupeNumber(0) );
console.log( getCoupeNumber(7.7) );
console.log( getCoupeNumber(-10) );
console.log(getCoupeNumber('Hello') );
