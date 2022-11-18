const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfDeath,oldest.yearOfBirth);
        const currentPersonAge = getAge(currentPerson.yearOfDeath,currentPerson.yearOfDeath);
        oldestAge < currentPersonAge ? currentPersonAge : oldestAge;
    })
};

const getAge = function(a, b) {
    if (!a) {
        let a = new Date().getFullYear();
    };
    return a - b;
}


// Do not edit below this line
module.exports = findTheOldest;
