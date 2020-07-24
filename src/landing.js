// Getting all the values that need to be edited from HTML
const time = document.querySelector(`.time`),
    welcome = document.querySelector(`.welcome`),
    name = document.querySelector(`.name`),
    focus = document.querySelector(`.focus`),
    dte = document.querySelector(`#date`);

function startTime() {
    // Getting Hours, minutes and seconds
    let today = new Date(),
        hours = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds(),
        timeZone = hours > 12 ? 'PM' : 'AM'; // Ternary Operator
    // milli = today.getMilliseconds();

    // We want the hours in 1-12 format
    hours = hours % 12 || 12;

    time.innerHTML =
        `
        ${lessThan10(hours)}:${lessThan10(minutes)}:${lessThan10(seconds)} ${timeZone}
    `

    setTimeout(startTime, 1000);



    // Getting Date in this format -> *Thursday, June 27, 2019*
    let day = new Date();
    let yer = day.getFullYear();
    let day2 = day.getDay();
    let month = day.getMonth() + 1;
    let week = day.getDate();

    console.log(week);

    function setDte(d) {
        if ((d > 3 && d < 20) || (d >= 24 && d <= 30)) {
            return d + `th`;
        }
        else if (d === 21 || d === 31 || d === 1) {
            return d + `st`;
        }
        else if (d === 22 || d === 2) {
            return d + `nd`;
        }
        else if (d === 23 || d === 3) {
            return d + `rd`;
        }
    }

    // Name of weekday according to day (0-7)
    switch (day2) {
        case 1:
            day2 = `Monday`;
            break;

        case 2:
            day2 = `Tuesday`;
            break;

        case 3:
            day2 = `Wednesday`;
            break;

        case 4:
            day2 = `Thursday`;
            break;

        case 5:
            day2 = `Friday`;
            break;

        case 6:
            day2 = `Saturday`;
            break;

        case 0:
            day2 = `Sunday`;
            break;

        default:
            day2 = 'Invalid Day';

    }

    // Month accordingly (0-12) 
    switch (month) {
        case 1:
            month = `January`;
            break;

        case 2:
            month = `February`;
            break;


        case 3:
            month = `March`;
            break;

        case 4:
            month = `April`;
            break;

        case 5:
            month = `May`;
            break;

        case 6:
            month = `June`;
            break;

        case 7:
            month = `July`;
            break;

        case 8:
            month = `August`;
            break;

        case 9:
            month = `September`;
            break;

        case 10:
            month = `October`;
            break;

        case 11:
            month = `November`;
            break;

        case 12:
            month = `December`;
            break;
    }



    dte.innerHTML =
        `
${day2}, ${month} ${setDte(week)}, ${yer}
`


}

startTime();

// Creating a function to add 0 if the number (hours, minutes or seconds) are less than 0
function lessThan10(num) {
    return (parseInt(num, 10) < 10 ? `0` : ``) + num
}


// Creating a function for date such as month, day, etc
// Then creating a function to add st, nd, rd, and th


// Function to change background according to time
function background() {
    const day = new Date();
    let hour = day.getHours();

    if (hour <= 12) {
        welcome.textContent = `Good Morning, `;
        document.body.style.backgroundImage = `url(../img/morn.jpg)`;
        document.body.style.color = 'black';
        document.body.style.backgroundPositionX = '50%';
        document.body.style.backgroundPositionY = '100%';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
    }
    else if (hour > 12 && hour <= 17) {
        welcome.textContent = `Good Afternoon,`;
        document.body.style.backgroundImage = `url(../img/daytime.jpg)`;
        document.body.style.color = 'white';
        document.body.style.backgroundPositionX = '50%';
        document.body.style.backgroundPositionY = '100%';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
    }
    else if (hour > 17 && hour <= 20) {
        welcome.textContent = `Good Evening,`;
        document.body.style.backgroundImage = `url(../img/maghrib.jpg)`;
        document.body.style.color = 'white';
        document.body.style.backgroundPositionX = '50%';
        document.body.style.backgroundPositionY = '60%';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
    }
    else {
        welcome.textContent = `Good Night,`;
        document.body.style.backgroundImage = `url(../img/night2.jpg)`;
        document.body.style.color = 'white';
        document.body.style.backgroundPositionX = '50%';
        document.body.style.backgroundPositionY = '100%';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.querySelector(`.icon`).style.color = 'white';
    }
}

background();

// Clicking Icon
const icon = document.querySelector(`.icon`);
icon.addEventListener(`click`, showButton);

function showButton() {
    document.querySelector(`.change`).style.display = `none`;

    document.querySelector(`#put`).style.display = `block`;
    document.querySelector(`#butn`).style.display = `block`;

    document.querySelector(`.icon`).style.transition = `2s ease-in 1s;`

    document.querySelector(`.icon`).style.transition = `all 1s`;

    icon.style.margin = `0px 200px 0px 0px`;
}


// Save into local storage
function saveName() {
    if (localStorage.getItem(`name`) === null) {
        name.textContent = `[Enter Name]`;
    }
    else {
        name.textContent = localStorage.getItem(`name`);
    }
}

saveName();


function saveFocus() {
    if (localStorage.getItem(`focus`) === null) {
        focus.textContent = `[Enter Focus For Today]`;
    }
    else {
        focus.textContent = localStorage.getItem(`focus`);
    }
}

saveFocus();


// Add event listeners on the Name and Focus
// After Enter is pressed or blur event is passed onto name and focus, we want to save the values and set them into local storage

// Blur event Listener
name.addEventListener(`blur`, enterName);
// Keypress Event Listener that will check for Enter
name.addEventListener(`keypress`, enterName);

function enterName(e) {
    if (e.type === 'keypress') {
        if (e.which === 13) {
            localStorage.setItem(`name`, e.target.innerText);
            name.blur();
        }
    }
    else {
        localStorage.setItem(`name`, e.target.innerText);
    }
}


// Blur event Listener
focus.addEventListener(`blur`, enterFocus);
// Keypress Event Listener that will check for Enter
focus.addEventListener(`keypress`, enterFocus);

function enterFocus(e) {
    if (e.type === 'keypress') {
        if (e.which === 13) {
            localStorage.setItem(`focus`, e.target.innerText); // WITH TARGET ALWAYS TRY INNERTEXT OR TEXTCONTENT!
            focus.blur(); // As a result, innerText is much more performance-heavy: it requires layout information to return the result.
        }
    }
    else {
        localStorage.setItem(`focus`, e.target.innerText);
    }
}


// IF their empty
function checkEmpty() {
    if (name.textContent === "") {
        name.textContent = `Click to Add Name!`;
    }

    if (focus.textContent === "") {
        focus.textContent = `Click to Add a Daily Focus!`;
    }

}

// Add focus eventlistener when their clicked and focused on
name.addEventListener('focus', () => {
    if (name.textContent !== "") {
        name.textContent = "";
    }
});

focus.addEventListener('focus', () => {
    if (focus.textContent !== "") {
        focus.textContent = "";
    }
})

checkEmpty();

// On clicking name or focus, remove text from inside