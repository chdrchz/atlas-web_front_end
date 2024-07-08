function createClassRoom(numbersOfStudents) {
    if (typeof numbersOfStudents !== 'number' || numbersOfStudents < 0)
        console.log("numbersOfStudents is not a valid number");

    function studentSeat(seat) {
        if (typeof seat !== 'number' || seat <= 0)
            console.log("seat is not a valid number");

        return function() {
            return seat;
        }
    }

    let students = [];

    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }

    return students;
}

let classRoom = createClassRoom(10);

for (let student of classRoom) {
    console.log(student()); 
}
