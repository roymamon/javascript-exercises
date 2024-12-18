const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear(); // Get the current year

    return people.reduce((oldest, person) => {
        const yearOfDeath = person.yearOfDeath || currentYear;
        const age = yearOfDeath - person.yearOfBirth;

        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        return age > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
