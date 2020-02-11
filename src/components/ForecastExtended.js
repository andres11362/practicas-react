import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';


// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes'
// ]

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal'
// }

const api_key = '21b0a24a347f39ea5c6d32ef38d56e35';
const url = 'http://api.openweathermap.org/data/2.5/forecast'


class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(response => (response.json()))
        .then( weather_data => (console.log(weather_data)))    
    }
    
    renderForecastItemDays(){
        return "Render Items";  
        //return days.map( day => (<ForecastItem key={ day } weekDay={ day } hour={ 10 } data= { data } ></ForecastItem>));
    }

    renderProgress(){
        return 'Cargando pronostico extendido...';
    }

    render() {
        const { city } = this.props;

        const { forecastData } = this.state

        return (
            <div>
                <h2 className="forecast-title">
                    Pronostico Extendido para { city }
                </h2>
                <h3>{ forecastData ? this.renderForecastItemDays() : this.renderProgress() }</h3>
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;