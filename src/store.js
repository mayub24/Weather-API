class Store
{
    storeItem()
    {
        let city;
        if(localStorage.getItem(`city`) === null)
        {
            city = [];
        }
        else
        {
            city = localStorage.getItem(`city`);
        }

// keep the brackts beside return, DONT MOVE IT DOWN!@!!
      return{
          getCitay:city
      }

    }

// Whatever gets passed into this will be saved into local storage as the city value
    storeCity(city)
    {
        localStorage.setItem(`city`, city);
    }

}