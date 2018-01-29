import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from './components/LocationList'
import ForecastExtendend from './components/ForecastExtendend'

import './App.css';

const cities = [
'Ciudad de México,mx',
'Japan,jp'];


class App extends Component {
  handleSelectedLocation = city =>
  {
    console.log(`handleSelectedLocation ${city}`);

  }
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
                <AppBar title="Titulo"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md-={6}>
              <LocationList 
                cities={cities} 
                onSelectedLocationClick={this.handleSelectedLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
              <div className="detail">
                <ForecastExtendend/>
              </div>
              </Paper>
            </Col>
          </Row>
      </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
