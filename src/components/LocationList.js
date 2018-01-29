import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation';
import './styles.css'

const LocationList = ({ cities, onSelectedLocationClick }) => {

    const handleWeatherLocationClick = city =>
    {
        console.log('handleWeatherLocationClick');
        onSelectedLocationClick(city);
    }
    const strToComponent = cities => (
        cities.map( city => (
            <WeatherLocation 
                key={city} 
                city={city}
                onWeatherLocationClick={ () => handleWeatherLocationClick(city)} />
        ))
    );

    return (
            <div className="locationList">
                {strToComponent(cities)}
            </div>  
    );  
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocationClick: PropTypes.func.isRequired,
}
export default LocationList;