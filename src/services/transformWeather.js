import {
    Cloudy,
    Sun, 
    Rain,
    Snow, 
    Thunder,
    Drizzle} from './../constans/weathers'

const getWeatherState = weather => {
    const {id} = weather[0];
    if(id < 300)
    {
        return Thunder;
    }else if (id < 400)
    {
        return Drizzle;
    }else if(id < 500)
    {
        return Cloudy;
    }else if (id < 600)
    {
        return Rain;
    }else if (id < 700)
    {
        return Snow;
    }else if (id === 800)
    {
        return Sun;
    }else{
        return Cloudy;
    }
}

const transformWeather = (weather_data) =>
{
    const { weather } = weather_data;
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather);
    const data = {
        humidity: humidity, // only humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`,

    }
    return data;
}

export default transformWeather;