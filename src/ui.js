class ui
{
    constructor()
    {
        // Getting the textContents from HTML
        this.area = document.querySelector(`#area`);
        this.feel = document.querySelector(`#feel`);
        this.temp = document.querySelector(`#temp`);
        this.img = document.querySelector(`#img`);
    }

    putItems(stuff)
    {
        this.area.textContent = `${stuff.location.name}`;
        this.feel.textContent = `${stuff.current.condition.text}`;
        this.temp.textContent = `${stuff.current.temp_c}°C | ${stuff.current.temp_f}°F`;
        this.img.innerHTML = `<img src=https:${stuff.current.condition.icon}></img>`
    }

    emptyBox()
    {
        document.querySelector(`#butn`).style.display = `none`;
        document.querySelector(`#put`).style.display = `none`;
        document.querySelector(`#put`).value = "";
        document.querySelector(`#put`).setAttribute(`placeholder`, 'Change Location?');
    }
}