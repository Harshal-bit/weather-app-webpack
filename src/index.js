import './reset.css'
import './styles.css'
import { getWeatherDataForCity } from './utils/weatherUtil';
import { Navbar } from './modules/Navbar';
import { Property } from './modules/Property';


const main_div = document.createElement('div');
main_div.classList.add('main_div')
document.body.appendChild(main_div);



main_div.appendChild(Navbar());

const searchField = document.getElementById('city');
const searchButton = document.getElementById('search-button');


function buildInfoCard(cityName) {
    getWeatherDataForCity(cityName)
    .then( weatherData => {
        let errorCard = document.getElementById('error')
        errorCard?.remove()
        let infoCard = document.getElementById('information')
        infoCard?.remove()
        infoCard = document.createElement('div');
        infoCard.id = 'information';
        infoCard.classList.add('information');
        
        let leftContentDiv = document.createElement('div')
        leftContentDiv.classList.add("left-content");
        leftContentDiv.id = 'left-content';
        
        const weatherCondition = document.createElement('h1');
        weatherCondition.innerText = weatherData.condition.text
        leftContentDiv.appendChild(weatherCondition);
        
        const location = document.createElement('h2');
        location.innerText = `${weatherData.location.name}, ${weatherData.location.country} \n${weatherData.date}\n${weatherData.time}`
        leftContentDiv.appendChild(location);
        
        const temprature = document.createElement('h1');
        temprature.innerText = `${weatherData.temp_c} \u00B0 C`;
        leftContentDiv.appendChild(temprature);
        
        const img = document.createElement('img');
        img.src = weatherData.condition.icon;
        leftContentDiv.appendChild(img);
        
        infoCard.appendChild(leftContentDiv)
        
        let rightContentDiv = document.createElement('div')
        rightContentDiv.classList.add("right-content");
        rightContentDiv.id = 'right-content';
        
        const feelsLikeSvg = '<svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" width="64px" height="64px" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>thermometer</title> <path d="M18.959 17.913v-0.917h3.063v0.917h-3.063zM18.959 14.975h3.063v0.979h-3.063v-0.979zM18.959 13.015h3.063v0.98h-3.063v-0.98zM18.959 10.993h3.063v0.979l-3.063-0.062v-0.917zM18.959 8.909h3.063v1.042h-3.063v-1.042zM18.959 6.95h3.063v0.98h-3.063v-0.98zM20.733 24.153c0 3.246-2.632 5.878-5.878 5.878s-5.878-2.632-5.878-5.878c0-2.226 1.175-4.161 2.999-5.159v-13.087c0-1.623 1.378-2.938 3.001-2.938s2.939 1.315 2.939 2.938v13.235c1.688 1.034 2.817 2.888 2.817 5.011zM16.937 19.735v-13.828c0-1.082-0.877-1.959-1.959-1.959s-1.959 0.877-1.959 1.959v13.711c-1.794 0.728-3.062 2.48-3.062 4.535 0 2.705 2.193 4.898 4.898 4.898s4.897-2.193 4.897-4.898c0.001-1.958-1.155-3.633-2.815-4.418zM14.855 28.072c-2.165 0-3.919-1.755-3.919-3.919 0-1.869 1.311-3.426 3.062-3.818v-9.342h1.96v9.418c1.623 0.479 2.816 1.964 2.816 3.742 0 2.164-1.754 3.919-3.919 3.919z"></path> </g></svg>'
        const feelsLike = Property('Feels Like',`${weatherData.feelslike_c} \u00B0 C`,feelsLikeSvg)
        
        const humidityIcon = '<svg viewBox="0 0 24 24" fill="none" width="64px" height="64px" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21.5C16.1012 21.5 19.5 18.4372 19.5 14.5714C19.5 12.1555 18.2672 9.71249 16.8732 7.70906C15.4698 5.69214 13.8515 4.04821 12.9778 3.21778C12.4263 2.69364 11.5737 2.69364 11.0222 3.21779C10.1485 4.04821 8.53016 5.69214 7.1268 7.70906C5.73282 9.71249 4.5 12.1555 4.5 14.5714C4.5 18.4372 7.8988 21.5 12 21.5Z" stroke="#ffffff"></path> <path d="M12 18C11.4747 18 10.9546 17.8965 10.4693 17.6955C9.98396 17.4945 9.54301 17.1999 9.17157 16.8284C8.80014 16.457 8.5055 16.016 8.30448 15.5307C8.10346 15.0454 8 14.5253 8 14" stroke="#ffffff" stroke-linecap="round"></path> </g></svg>'
        const humidity = Property('Humidity',weatherData.humidity,humidityIcon)
        
        const windSpeedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" version="1.1" fill="#f5f5f5" viewBox="3 6 27 20"><title>wind</title><path d="M30 14c0-2.209-1.795-4-4-4-2.209 0-4 1.789-4 4h2c0-1.105 0.888-2 2-2 1.105 0 2 0.888 2 2 0 1.105-0.89 2-2.004 2h-22.996v2h23.002c2.208 0 3.998-1.795 3.998-4v0zM21 10c0-2.209-1.795-4-4-4-2.209 0-4 1.789-4 3.997v0.003h2c0-1.105 0.888-2 2-2 1.105 0 2 0.888 2 2 0 1.105-0.897 2-2.006 2h-11.994v2h12.004c2.207 0 3.996-1.795 3.996-4v0zM26 23c0 1.657-1.347 3-3 3v0c-1.657 0-3-1.342-3-2.991v-0.009h2c0 0.552 0.444 1 1 1v0c0.552 0 1-0.444 1-1v0c0-0.552-0.449-1-1.007-1h-13.993v-2h14c1.657 0 3 1.347 3 3v0 0z"></path></svg>'
        const windSpeed = Property('WindSpeed',`${weatherData.wind_kph} km/h`,windSpeedIcon)
        
        rightContentDiv.appendChild(feelsLike);
        rightContentDiv.appendChild(humidity);
        rightContentDiv.appendChild(windSpeed)
        infoCard.appendChild(rightContentDiv)
        main_div.appendChild(infoCard)
    })
    .catch( err => {
        let infoCard = document.getElementById('information')
        infoCard?.remove()
        let errorCard = document.getElementById('error')
        errorCard?.remove()
        errorCard = document.createElement('div');
        errorCard.id = 'error';
        errorCard.classList.add('error');
        errorCard.innerText = 'Sorry we couldnt find :(((  try again with a different name!!'
        main_div.appendChild(errorCard)
    });
}

searchButton.addEventListener('click', async ()=>{
    let cityName = searchField.value;
    buildInfoCard(cityName);
})

buildInfoCard('Pune')
