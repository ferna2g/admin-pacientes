import React, { Fragment, useState, useEffect } from 'react';
import Formulario from "./components/Formulario"
import Cita from "./components/Cita"

function App() {

//citas en localStorage
let citasIniciales = JSON.parse(localStorage.getItem('citas'))
if(!citasIniciales){
  citasIniciales = []
}

//arreglo de citas
const [citas, guardarCitas] = useState([citasIniciales])

//useEffect para realizar ciertas operaciones cuando el state cambia
useEffect( () => {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(citasIniciales){
    localStorage.setItem('citas', JSON.stringify(citas))
  }else {
    localStorage.setItem('citas', JSON.stringify([]))
  }
}, [citas])

//funcion que crea las citas actuales y agrega las nuevas
const crearCita = cita => {
  guardarCitas([
    ...citas,
    cita
  ])
}

//Funcion que elimina una cita por su id
const eliminarCita = id => {
  const nuevasCitas = citas.filter(cita => cita.id !== id)
  guardarCitas(nuevasCitas)
}

//funcion para validar mensajes
const titulo = citas.length === 0 ? 'No hay Citas' :'Administra tus citas'

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
            <h1>{titulo}</h1>
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
