import React, { useState, useEffect } from 'react';

// Import Components
import Pregunta from './components/Pregunta/Pregunta';
import Formulario from './components/Formulario/Formulario';
import Listado from './components/Listado/Listado';
import ControlPresupuesto from './components/ControlPresupuesto/ControlPresupuesto';


function App() {

  // Budget definition state
  const initialStateBudget = 0;
  const [stateBudget, setStateBudget] = useState(initialStateBudget);

  // Remaining definition state
  const initialStateRemaining = 0;
  const [stateRemaining, setStateRemaining] = useState(initialStateRemaining);

  // Expenditures definition state
  const initialStateExpenditures = [];
  const [stateExpenditures, setStateExpenditures] = useState(initialStateExpenditures);

  // Expenditure definition state
  const initialStateExpenditure = {};
  const [expenditure, addExpenditure] = useState(initialStateExpenditure);

  // CreateExpenditure definition state
  const [stateCreateExpenditure, setStateCreateExpenditure] = useState(false);

  // Conditional Loading Component state Pregunta
  const [stateLoadingPregunta, setStateLoadingPregunta] = useState(true);

  // UseEffect updating remaining of the budget
  useEffect(() => {

    if( stateCreateExpenditure ) {

      // Add new budget
      setStateExpenditures([
        ...stateExpenditures,
        expenditure
      ]);

      // Subtraction current budget
      const budgetRemaining = stateRemaining - expenditure.quantity;
      setStateRemaining(budgetRemaining);


      setStateCreateExpenditure(false);
    }

  }, [expenditure, stateCreateExpenditure, stateExpenditures, setStateRemaining, stateRemaining]);


  return (
    <div className="container">
      <header className="App-header">
        <h1>Administrador de Gastos Semanales</h1>
        <div className="contenido-principal contenido">
          { stateLoadingPregunta ?
            
            <Pregunta
              setStateBudget={setStateBudget}
              setStateRemaining={setStateRemaining}
              setStateLoadingPregunta={setStateLoadingPregunta}
            />

            : 

            <div className="row">
              <div className="one-half column">
                  <Formulario 
                    addExpenditure={addExpenditure}
                    setStateCreateExpenditure={setStateCreateExpenditure}
                  />
              </div>
              <div className="one-half column">
                  <Listado 
                    stateExpenditures={stateExpenditures}
                  />
                  <ControlPresupuesto 
                    stateBudget={stateBudget}
                    stateRemaining={stateRemaining}
                  />
              </div>
            </div>

          }       
        </div>
      </header>
    </div>
  );
}

export default App;
