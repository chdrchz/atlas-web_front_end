const globalVariable = 'Welcome';

function outer() {
    alert(globalVariable);

    const course = 'Holberton';

    function inner() {
        alert(globalVariable.concat(" ", course))

        const exclamation = '!';

        function inception() {
            alert(globalVariable.concat(" ", course, exclamation));
        }

        inception();
    }

    inner();
}


outer();