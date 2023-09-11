const apiKey = '11229e10e8f24d6ea4e172742230909'


export async function getWeatherDataForCity(city){
    let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=11229e10e8f24d6ea4e172742230909&q=${city}`);
    let weatherData = await data.json();
    console.log(weatherData);
    let { temp_c, temp_f, condition, wind_kph, humidity, feelslike_c, feelslike_f } = weatherData.current;
    let datetimeString = weatherData.location.localtime;

    let dateObj = new Date(datetimeString);

    let formatedDate = dateObj.toLocaleDateString('en-US',{year: 'numeric', month:'long',day: 'numeric'});

    let formatedTime = dateObj.toLocaleTimeString('en-US',{hour: 'numeric',minute:'numeric' , hour12: true});


    weatherData = {
        temp_c, temp_f, condition, wind_kph, humidity, feelslike_c, feelslike_f, 
        location : weatherData.location,
        date : formatedDate,
        time : formatedTime
    }
    return weatherData;
}

