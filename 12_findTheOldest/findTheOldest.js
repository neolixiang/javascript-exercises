// const findTheOldest = function(people) {
//     return people.reduce((oldest, currentPerson) => {
//         const oldestAge = getAge(oldest.yearOfDeath,oldest.yearOfBirth);
//         const currentPersonAge = getAge(currentPerson.yearOfDeath,currentPerson.yearOfDeath);
//         return oldestAge < currentPersonAge ? currentPersonAge : oldestAge;
//     })
// }

// const getAge = function(a, b) {
//     if (!a) {
//         a = new Date().getFullYear();
//     };
//     return a - b;
// }



const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
    })
  };
  
  const getAge = function(a, b) {
    if (!b) {
      b = new Date().getFullYear();
    }
    return b - a;
  };

// Do not edit below this line
module.exports = findTheOldest;