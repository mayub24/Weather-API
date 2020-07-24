class ui {
    constructor() {
        // Getting the textContents from HTML
        this.area = document.querySelector(`#area`);
        this.feel = document.querySelector(`#feel`);
        this.temp = document.querySelector(`#temp`);
        this.img = document.querySelector(`#img`);
        this.box = document.querySelector(`.box`);
    }

    putItems(stuff) {
        this.area.textContent = `${stuff.location.name}`;
        this.feel.textContent = `${stuff.current.weather_descriptions}`;
        this.temp.textContent = `${stuff.current.temperature}°C | ${(stuff.current.temperature * 9 / 5 + 32)}°F`;
        this.img.innerHTML = `<img style="margin-top: 1em;" src=${stuff.current.weather_icons}></img>`
        this.box.style.display = 'flex';
    }

    emptyBox() {
        document.querySelector(`#butn`).style.display = `none`;
        document.querySelector(`#put`).style.display = `none`;
        document.querySelector(`#put`).value = "";
        document.querySelector(`#put`).setAttribute(`placeholder`, 'Change Location?');
    }
}