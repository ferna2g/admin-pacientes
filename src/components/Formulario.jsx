import React, { Fragment, useState } from "react"

const Formulario = () => {

//Creando state de citas
  const [cita, actualizarCita] = useState({
      mascota:'',
      propietario:'',
      fecha:'',
      hora:'',
      sintomas:''
  })

  //Funcion que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  //extraer los valores, destructuring
  const { mascota, propietario, fecha, hora, sintomas } = cita

  return(
    <Fragment>
      <h1>Nueva Cita</h1>
      <form>
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
