'use strict';

const personalPlanPeter = {
    experience: '1 mounth',
    prLanguages: {
        js: '20%',
        php: '10%'
    },
    age: 29,
    languages: ['ru', 'eng'],
    showAgeAndLangs: function(obj) {
        let languages = '';
        obj.languages.forEach(function(elem) {
            languages += `${elem.toUpperCase()} `;
        });
        return `Мне ${obj.age} и я владею языками: ${languages}`;
    }
};

function showExperience(obj) {
    const {experience} = obj;
    return experience;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(obj) {
    let result = '';

    for(const key in obj.prLanguages) {
        result += `Язык ${key} изучен на ${obj.prLanguages[key]}\n`;
    }

    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
