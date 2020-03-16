import React from 'react';
import PropTypes from 'prop-types';

// Components
import Gasto from '../Gasto/Gasto';

const Listado = ({ stateExpenditures }) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Listados</h2>
            {stateExpenditures.map( expenditure => {
               return <Gasto 
                        key={expenditure.id}
                        expenditure={expenditure}
                      />
            })}
        </div>
     );
}

Listado.propTypes = {
    Listado: PropTypes.array.isRequired
}
 
export default Listado;