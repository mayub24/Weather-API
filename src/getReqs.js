// Making a Store Object to store value of input text
const storeVal = new Store();

// Stores the city item
const getData = storeVal.storeItem();

// Getting weather data
const http = new Weather(getData.getCitay);

// UI object
const newUI = new ui();

// Will keep object on page aftr function is loaded
document.addEventListener(`DOMContentLoaded`, keepInLocalStorage);

// Get the Button and add an event listner
const enter = document.querySelector(`#butn`);
enter.addEventListener(`click`, () => {
    document.querySelector(`.box`).style.display = `block`;
    // Get value from HTML and set and Change City

    const getVal = document.querySelector(`#put`).value;

    storeVal.storeCity(getVal);

    http.changeCity(getVal);

    if (getVal !== "") {
        keepInLocalStorage();
    }
    else {
        alert(`Field is empty!`);
    }
});




function keepInLocalStorage() {
    http.getWeather()
        .then(data => {
            console.log(data);
            console.log(data.wed);
            newUI.putItems(data.wed);
            newUI.emptyBox();
            document.querySelector(`.icon`).style.margin = `-1px`;
        })
}