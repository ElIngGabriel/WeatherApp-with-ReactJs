import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtendend from './components/ForecastExtendend'
import './App.css';

const cities = [
'Ciudad de México,mx',
'Japan,jp'
];


    

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null
    };
  }
  
  render() {
    const {city} = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
                <AppBar title="Weather App"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer 
                cities={cities}  
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
              <div className="detail">
                {
                  !city ? 
                    <h1> No se selecciono ciudad</h1> :
                      <ForecastExtendend city={city}></ForecastExtendend>
                }
              </div>
              </Paper>
            </Col>
          </Row>
      </Grid>
      </MuiThemeProvider>
    );
  }
}


//const AppConnected = connect(null, mapDispatchToPropsActions) (App);

//export default AppConnected; 

export default App;