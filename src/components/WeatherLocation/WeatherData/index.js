import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers';

const WeatherData = ( { data: { temperature, weatherState, humidity, wind } } ) => {

    return (<div className="weatherDataCont">
        <WeatherTemperature temperature = { temperature } weatherState= { weatherState }></WeatherTemperature>
        <WeatherExtraInfo humidity= { humidity } wind={ wind }></WeatherExtraInfo>
    </div>);
};

WeatherTemperature.propTypes= {
    data: PropTypes.shape(
        {
            temperature: PropTypes.number.isRequired,
            weatherState: PropTypes.string.isRequired,
            humidity: PropTypes.number.isRequired,
            wind: PropTypes.string.isRequired,
        }    
    )
};

export default WeatherData;