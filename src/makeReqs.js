class Weather
{
    constructor(city)
    {
        this.city = city;
    }

    async getWeather()
    {
        const getFetch = await fetch(`https://api.apixu.com/v1/current.json?key=d7527218496d4882a97161613192503&q=${this.city}`);

        const getJson = await getFetch.json();

       return{
           wed: getJson // This gives back the weather data in json Format
       }

    }

    changeCity(city)
    {
        // Chnages the location according to what gets put into the function 
        this.city = city;
    }

}