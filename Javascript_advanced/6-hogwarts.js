class StudentHogwarts {
    constructor() {
        // Private variables are simulated using closures
        let privateScore = 0;
        let name = null;

        // Private method to change the score
        function changeScoreBy(points) {
            privateScore += points;
        }

        // Public methods
        this.setName = function(newName) {
            name = newName;
        };

        this.rewardStudent = function() {
            changeScoreBy(1);
        };

        this.penalizeStudent = function() {
            changeScoreBy(-1);
        };

        this.getScore = function() {
            return `${name}: ${privateScore}`;
        };
    }
}

// harry
// set new instance of class
const harry = new StudentHogwarts();
harry.setName('Harry');

// reward harry 4 times
for (let i = 0; i < 4; i++) {
    harry.rewardStudent();
}

// log harry's score
console.log(harry.getScore());

// draco
// set new instance of class
const draco = new StudentHogwarts();
draco.setName('Draco');

// reward draco once and penalize 3 times
draco.rewardStudent(1);

for (let i = 0; i < 3; i++) {
    draco.penalizeStudent();
}

// log draco's score
console.log(draco.getScore());