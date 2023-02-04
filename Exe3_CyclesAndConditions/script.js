'use strict';

function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

function secondsTask() {
    for (let i = 20; i >= 10; i--) {
        console.log(i);

        if (i === 13) {
            break;
        }
    }
}

function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}

function fifthTask() {
    const arr = [];
    let elem = 5;

    for (let i = 0; i <= 5; i++) {
        arr[i] = elem++;
    }

    console.log(arr);
}

firstTask();
secondsTask();
thirdTask();
fourthTask();
fifthTask();
