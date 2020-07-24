class Weather {
    constructor(city) {
        this.city = city;
    }

    async getWeather() {
        const getFetch = await fetch(`http://api.weatherstack.com/current?access_key=90bb9cfa5d355a3e7bd07a0fc1677681&query=${this.city}`);

        const getJson = await getFetch.json();

        return {
            wed: getJson // This gives back the weather data in json Format
        }

    }

    changeCity(city) {
        // Chnages the location according to what gets put into the function 
        this.city = city;
    }

}