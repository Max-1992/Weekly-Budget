import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/dist/v4';

// Components
import Error from '../Error/Error';

const Formulario = ({ addExpenditure, setStateCreateExpenditure }) => {

    // Expenditure declare State
    const initialStateExpenditure = {
        quantity: 0,
        name: ''
    }
    const [stateExpenditure, setStateExpenditure] = useState(initialStateExpenditure);

    // Error declare State
    const initialStateError = {
        err: false,
        message: ''
    }
    const [stateError, setStateError] = useState(initialStateError);

    // It is method for read Expenditure
    const handleChange = event => {

        if(event.target.name === "quantity") {
            setStateExpenditure({
                ...stateExpenditure,
                [event.target.name]: Number(event.target.value)
            });
        } else {

            setStateExpenditure({
                ...stateExpenditure,
                [event.target.name]: event.target.value
            });

        }
        
    }

    const handleSubmite = event => {
        event.preventDefault();

        // Forms Validate
        if( stateExpenditure.name.trim() === '' ) {
            setStateError({
                err: true,
                message: 'Debe agregarle un nombre al gasto.'
            })
            return;
        }

        if( isNaN(stateExpenditure.quantity) ) {
            setStateError({
                err: true,
                message: 'El valor ingresado debe ser mayor a 0.'
            })
            return;
        }

        if( stateExpenditure.quantity <= 0 ) {
            setStateError({
                err: true,
                message: 'El valor ingresado debe ser mayor a 0.'
            })
            return;
        }

        // Clean Errors
        if( stateError.err ) {
            setStateError({
                err: false,
                message: ''
            })
        }

        // Contruir Gasto
        const expenditure = {
            name: stateExpenditure.name,
            quantity: stateExpenditure.quantity,
            id: uuid()
        }
        
        // Pasar el gasto al componente principal
        addExpenditure(expenditure);
        setStateCreateExpenditure(true);

        // Resetear Formulario.
        setStateExpenditure({
            ...stateExpenditure,
            quantity: 0,
            name: ''
        });

    }


    return ( 
        <form onSubmit={handleSubmite} >
            <h2> Agregar Gastos </h2>
            <div>
                <label>Nombre del Gasto</label>
                <input 
                    type="text"
                    name="name" 
                    className="u-full-width"
                    placeholder="Ej: Transporte"
                    value={stateExpenditure.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Importe del Gasto</label>
                <input 
                    type="number"
                    name="quantity" 
                    className="u-full-width"
                    placeholder="Ej: 300"
                    value={stateExpenditure.quantity}
                    onChange={handleChange}
                />

                { stateError.err ? <Error message={stateError.message} /> : null }
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
     );
}

// Props Documentation
Formulario.propTypes = {
    addExpenditure: PropTypes.func.isRequired,
    setStateCreateExpenditure: PropTypes.func.isRequired

}
 
export default Formulario;