'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(function(item) {   
        square += item.width * item.length;        
    });

    volume = square * data.height;

    console.log(`Square = ${square}`);
    console.log(`Volume = ${volume}`);

    const cost = volume * data.moneyPer1m3;
    console.log(`Cost = ${cost}`);

    if (cost <= data.budget) {
        console.log('Бюджета достаточно');
    } else {
        console.log('Бюджета недостаточно');
    }
}

isBudgetEnough(shoppingMallData);
