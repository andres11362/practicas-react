import React from 'react';
import WeatherIcons from 'react-weathericons';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers';
const icons = {
    [SUN] : "day-sunny",
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy'
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x"

    if(icon){
        return (<WeatherIcons className="wicon" name={icon} size="2x"></WeatherIcons>)
    }else{
        return (<WeatherIcons className="wicon" name={"day-sunny"} size="2x"></WeatherIcons>)
    }
   
}
const WeatherTemperature = ({ temperature, weatherState }) => {
    return(
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{ `${ temperature }` }</span>
        <span className="temperatureType">{ `C°` }</span>
    </div>
    )
}; 

export default WeatherTemperature;