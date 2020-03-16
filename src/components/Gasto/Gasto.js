import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({ expenditure }) => {
    return ( 
        <li className="gastos">
            <p>
                { expenditure.name } <span className="gasto"> $ {expenditure.quantity} </span>
                
            </p>
        </li>
     );
}

// Props Documentation
Gasto.propTypes = {
    expenditure: PropTypes.object.isRequired
}
 
export default Gasto;