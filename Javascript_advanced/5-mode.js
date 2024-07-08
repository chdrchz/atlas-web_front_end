function validateParams(size, weight, transform, background, color) {
    if (typeof size !== 'number' || size < 0) {
        console.log('size is not a valid number');
    }

    if (typeof weight !== 'string' || weight.trim().length < 0) {
        console.log('weight must be a non-empty string');
    }

    if (typeof transform !== 'string' || transform.trim().length < 0) {
        console.log('weight must be a non-empty string');
    }

    if (typeof background !== 'string' || background.trim().length < 0) {
        console.log('weight must be a non-empty string');
    }

    if (typeof color !== 'string' || color.trim().length < 0) {
        console.log('weight must be a non-empty string');
    }
}

function changeMode(size, weight, transform, background, color) {

    validateParams(size, weight, transform, background, color);

    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {

    // initial paragraph
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // spooky mode
    let spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', changeMode(9, 'bold', 'uppercase', 'pink', 'green'));
    document.body.appendChild(spookyButton);

    // dark mode
    let darkButton = document.createElement('button');
    darkButton.textContent = 'Dark mode';
    darkButton.addEventListener('click', changeMode(12, 'bold', 'capitalize', 'black', 'white'));
    document.body.appendChild(darkButton);

    // scream mode
    let screamButton = document.createElement('button');
    screamButton.textContent = 'Scream mode';
    screamButton.addEventListener('click', changeMode(12, 'normal', 'lowercase', 'white', 'black'));
    document.body.appendChild(screamButton);
}

main();