import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'
// import {Preloader} from  'react-materialize';

import Location from './Locations';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'
import './styles.css';

const api_key = `ecf3326940b8f58b53481d6a523d6bfd`;

/*const WeatherLocation = () =>
(
    <div className='weatherLocationCont'>
        <Location city= {'Gyat!!'} />
        <WeatherData data={data}/>
    </div>
);*/

class WeatherLocation extends Component 
{
    constructor({ city }){
        super();
        this.state = {
            city,
            data: null
        }
    }
    componentWillMount()
    {
        const { city } = this.state;
        const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            //asignacion pero puede ser nombre si el valor deseado es el mismo
            this.setState({data: data});
        });
        //this.handleUpdateClick();
    }
    handleUpdateClick = () => {

    }
    render = () => {
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;

        return (
        <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
            <Location city = {city} />
            {data ? <WeatherData data={data} /> : <CircularProgress/> }
        </div>
        );
    }
}

WeatherLocation.propsTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
};

export default WeatherLocation;