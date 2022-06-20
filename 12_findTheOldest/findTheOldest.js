const findTheOldest = function(peopleList) {
    let oldest = peopleList[0];
    const thisYear = new Date().getFullYear();

    peopleList.forEach((person) => {
        const curOldest = oldest;
        const curOldestDeath = curOldest.hasOwnProperty('yearOfDeath') ? curOldest['yearOfDeath'] : thisYear;
        const curOldestBirth = curOldest['yearOfBirth'];
        const curOldestAge = curOldestDeath - curOldestBirth;

        const personDeath = person.hasOwnProperty('yearOfDeath') ? person['yearOfDeath'] : thisYear;
        const personBirth = person['yearOfBirth'];
        const personAge = personDeath - personBirth;

        oldest = curOldestAge > personAge ? oldest : person;

    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
