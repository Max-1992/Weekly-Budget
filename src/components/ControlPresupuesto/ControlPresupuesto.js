import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Helpers
import { checkBudget } from '../../utils/helpers';

const ControlPresupuesto = ({ stateBudget, stateRemaining }) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {stateBudget}
            </div>
            <div className={checkBudget(stateBudget, stateRemaining)}>
                Restante: {stateRemaining}
            </div>
        </Fragment>
     );
}

// Props Documentation
ControlPresupuesto.propTypes = {
    stateBudget: PropTypes.number.isRequired,
    stateRemaining: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;