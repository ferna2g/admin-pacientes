import React, { Fragment, useState } from 'react';
import Formulario from "./components/Formulario"
import Cita from "./components/Cita"

function App() {

const [citas, guardarCita] = useState([])

//funcion que crea las citas actuales y agrega las nuevas
const crearCita = cita => {
  guardarCita([
    ...citas,
    cita
  ])
}

//Funcion que elimina una cita por su id
const eliminarCita = id => {
  const nuevasCitas = citas.filter(cita => cita.id !== id)
  guardarCita(nuevasCitas)
}

  return (
    <Fragment>
    <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h1>Administra tus citas</h1>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
