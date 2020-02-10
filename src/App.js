import React, { Component }  from 'react';
import './App.css';
import LocationList from './components/LocationList';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ForecastExtended from './components/ForecastExtended';



const cities = [
  'Montreal, CA',
  'Quebec, CA',
  'Winnipeg, CA',
  'Tokio, JP',
  'Osaka, JP',
  'Paris, FR'
];

class App extends Component {


  constructor(){
    super();
    this.state = { city: null}
  }

  handleSelectedLocation = city => {
    this.setState({ city })
  }


  render() {

    const { city } = this.state;

    return (
      <Grid className="App">
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={ cities } onSelectedLocation={ this.handleSelectedLocation }></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {city ? <ForecastExtended city={ city }></ForecastExtended> : null }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
 
}

export default App;
