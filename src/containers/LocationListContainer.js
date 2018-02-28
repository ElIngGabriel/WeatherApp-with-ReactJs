import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCity } from './../actions';
import LocationList from './../components/LocationList'

class LocationListContainer extends Component {
    handleSelectedLocation = city =>
    {
        this.props.dispatchSetCity(city);
    }

    render() {
        return (
            <LocationList 
            cities={this.props.cities} 
            onSelectedLocationClick={this.handleSelectedLocation} 
          />
        );
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
}

const mapDispatchToPropsActions = dispatch => ({
  dispatchSetCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions) (LocationListContainer);