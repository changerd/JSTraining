'use strict';

function firstTask() {
    const arr = [5, 6, 7, 8, 9, 10];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);
}

function secondTask() {
    const arr = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result[i] = 5 * 2;
        } else if (typeof arr[i] === 'string') {
            result[i] = arr[i] + ' - done';
        }
    }

    console.log(result);
}

function thirdTask() {
    const data = ['Homework', 20, 'Shopping', 10, 5];
    const result = [];

    for (let i = data.length - 1; i >= 0; i--) {
        result.push(data[i]);
    }

    console.log(result);
}

firstTask();
secondTask();
thirdTask();
