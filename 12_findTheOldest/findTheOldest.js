const findTheOldest = function(people) {
    people.sort((a, b) =>{
        let aAge;
        let bAge;
        if (!a.yearOfDeath) {
            aAge = (new Date()).getFullYear() - a.yearOfBirth;
        } else {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }

        if (!b.yearOfDeath) {
            bAge = (new Date()).getFullYear() - b.yearOfBirth;
        } else {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        
        return aAge - bAge;
    });
    return people[people.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
