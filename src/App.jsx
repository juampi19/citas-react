import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  //antes del return, buen lugar para poner la logina de nuestra aplicación y dentro del return solo pueden haber expresiones
 
  const [ pacientes, setPacientes ] = useState([]);
  const [ paciente, setPaciente ] = useState({});

  useEffect( () => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse( localStorage.getItem( 'pacientes' ) ) ?? [];
      setPacientes( pacientesLS );
    }
    obtenerLS();
  }, [] );


  useEffect( () => {
    localStorage.setItem( 'pacientes', JSON.stringify( pacientes ) );
  }, [pacientes] );

  const eliminarPaciente = ( id ) => {
    
    const pacientesActualizados = pacientes.filter( pacientesState => pacientesState.id !== id );

    setPacientes( pacientesActualizados );
    
  }

  return (
    
    <div className="container mx-auto mt-20">
      <Header

      />
      <div className="mt-12 md:flex">
        <Formulario 
        setPacientes={ setPacientes }
        pacientes={pacientes}
        paciente={paciente}
        setPaciente={ setPaciente }
        />
        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={ eliminarPaciente }
        />
      </div>
    </div>
  )
}

export default App
