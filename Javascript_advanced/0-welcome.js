function welcome(firstName, lastName) {
    let fullName = firstName.concat(" ", lastName, "!");

    function displayFullName(name) {
        alert("Welcome " + name);
    }

    displayFullName(fullName);
}