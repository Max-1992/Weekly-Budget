import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';


// Components
import Error from '../Error/Error';

const Pregunta = ({ setStateBudget, setStateRemaining, setStateLoadingPregunta }) => {

    // Quantity definition state
    const initialStateQuantity = 0;
    const [stateQuantity, setStateQuantity] = useState(initialStateQuantity);

    // Error definition state
    const initialStateError = {
        err: false,
        message: ''
    }
    const [stateError, setStateError] = useState(initialStateError)

    // It is method for read budget
    const handleChange = event => {
        const budget = Number(event.target.value)
        setStateQuantity(budget);  
    }

    // Add Quantity to budget.
    const handleSubmite = event => {
        event.preventDefault();

        // Forms Validate
        if(isNaN(stateQuantity)) {
            setStateError({
                err: true,
                message: 'El valor ingresado no es valido.'
            })
            return
        };

        if( stateQuantity === 0 || stateQuantity < 0) {
            setStateError({
                err: true,
                message: 'El valor ingresado debe ser mayor a 0.'
            })
            return
        };

        // Clean Errors
        if( stateError.err ) {
            setStateError({
                err: false,
                message: ''
            });
        };


        // Disparar accion
        setStateBudget(stateQuantity);
        setStateRemaining(stateQuantity);
        setStateLoadingPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Crea tu Presupuesto</h2>

            <form onSubmit={handleSubmite}>

                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleChange}
                />
                { stateError.err ? <Error message={stateError.message} /> : null }

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />

            </form>
        </Fragment>
     );
}

// Props Documentation
Pregunta.propTypes = {
    setStateBudget: PropTypes.func.isRequired,
    setStateRemaining: PropTypes.func.isRequired,
    setStateLoadingPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;