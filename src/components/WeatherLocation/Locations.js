import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) => 
( 
    //const city = props.city;
    //const {city} = props;
    //{} when use return is necesari use {}
    //return (<div><h1>{city}</h1></div>);
    <div className='locationCont' > 
        <h1>
            {city}
        </h1>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;