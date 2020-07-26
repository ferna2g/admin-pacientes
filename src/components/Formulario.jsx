import React, { Fragment, useState } from "react"
import uuid from 'uuid/v4'

const Formulario = () => {

//Creando state de citas, hook
  const [cita, actualizarCita] = useState({
      mascota:'',
      propietario:'',
      fecha:'',
      hora:'',
      sintomas:''
  })

  //state que se utiliza para controlar los errores al enviar los datos en el formulario
  const [error, actualizarError] = useState(false)

  //Funcion que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  //extraer los valores, destructuring al state
  const { mascota, propietario, fecha, hora, sintomas } = cita

  //Cuando el usuario presiona el boton
  const submitCita = e => {
    e.preventDefault()

    //validar
    if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
     hora.trim() === '' || sintomas.trim() === ''){
      actualizarError(true) //cambia el estado de false a true
      return;
    }

      //asignar id
      cita.id = uuid()
      console.log(cita)

      // crear la cita

      //reiniciar el form
  }

  return(
    <Fragment>
      <h1>Nueva Cita</h1>
      { error ? <p className="alerta-error">Todos los campos son obligatorios</p>  :null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={actualizarState}
            value={mascota}
          />
          <label>Propietario</label>
          <input
              type="text"
              name="propietario"
              className="u-full-width"
              placeholder="Nombre Propietario"
              onChange={actualizarState}
              value={propietario}
            />
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
              />
              <label>Hora</label>
              <input
                  type="time"
                  name="hora"
                  className="u-full-width"
                  onChange={actualizarState}
                  value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                  ></textarea>
                  <button
                    type="submit"
                    className="u-full-width button-primary"
                  >Agregar Cita</button>
      </form>
    </Fragment>
  )
}

export default Formulario
