const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    let highestAge = 0;
    let oldestPerson;
    people.forEach(person => {
        if (!('yearOfDeath' in person)) {
            person.age = currentYear - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        if (person.age > highestAge) {
            highestAge = person.age;
            oldestPerson = person;
        }
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
