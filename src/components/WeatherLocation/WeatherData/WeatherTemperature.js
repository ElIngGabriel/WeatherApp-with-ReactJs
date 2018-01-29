import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
        Cloud,
        Cloudy,
        Sun, 
        Rain,
        Snow, 
        Windy,
        Thunder,
        Drizzle} from './../../../constans/weathers';
import './styles.css';

const stateToIconName = weatherState =>
{
    switch (weatherState)
    {
        case Cloud:
            return "cloud";
        case Cloudy:
            return "cloudy";
        case Sun:
            return "day-sunny";
        case Rain:
            return "rain";
        case Snow:
            return "snow";
        case Windy:
            return "windy";
        case Thunder:
            return "day-thunderstorm";
        case Drizzle:
            return "day-showers";
        default:
            return "day-sunny";
    }
};

const getWeatherIcon = weatherState => 
{
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="3x" />);
};

const WeatherTemperature = ({temperature, weatherState}) =>
(
    <div className='weatherTemperature'>
        {getWeatherIcon(weatherState)}
        <span className='temperature' >{`${temperature}`}</span>
        <span className = 'temperatureType'> C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,   
};

export default WeatherTemperature;  