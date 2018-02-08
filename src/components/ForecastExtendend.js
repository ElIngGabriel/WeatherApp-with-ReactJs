import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './Forecastitem';
import transformForeCast from './../services/transformForecast';

import './styles.css';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes'
// ]

const api_key = `ecf3326940b8f58b53481d6a523d6bfd`;
//const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
const url = `http://api.openweathermap.org/data/2.5/forecast`;

class ForecastExtended extends Component{

    constructor()
    {
        super();
        this.state = { forecastData: null }
    }
    componentDidMount()
    {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city)
        {
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }
    updateCity = city => {
        const url_forecast =  `${url}?q=${city}&appid=${api_key}&units=metric`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForeCast(weather_data);
                console.log(forecastData);
                this.setState( { forecastData: forecastData } );
            }
        )
    }
    renderForeCastItemDays(forecastData)
    {
        return forecastData.map( 
            forecast => 
                <ForecastItem 
                    key={`${forecast.weekDay}${forecast.hour}`}
                    weekDay={forecast.weekDay} 
                    hour={forecast.hour} 
                    data={forecast.data}/>);
        
    }
    renderProgress = () =>
    {
        return <h3>Cargando Pronostico Extendido...</h3>;
    }
    render () {
        const city = this.props.city;
        const { forecastData } = this.state;
        return (
        <div>
            <h2 className='forecast-title' >Pronosticos Extendido para {city}</h2>
            { forecastData ?
                this.renderForeCastItemDays(forecastData) :
                this.renderProgress()
            }
        </div>)
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}
export default ForecastExtended;