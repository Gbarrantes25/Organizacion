import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import { useState } from 'react';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import { v4 as uuid } from 'uuid';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Giancarlo Barrantes",
      puesto: "Dev front",
      foto: "https://github.com/Gbarrantes25.png",
      equipo: "Front End",
      fav: true
    },
    {
      id: uuid(),
      nombre: "Jose",
      puesto: "Dev",
      foto: "https://github.com/Gbarrantes25.png",
      equipo: "Devops",
      fav: false
    }
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9" 
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF" 
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2" 
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8" 
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5" 
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9" 
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF" 
    }
  ])

  // ternario --> condicion ? seMuestra : noseMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{

    // Haciendo copia de arreglo con spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminado", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  //Like
  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="App">
      <Header />

      {/*Enviando nombre de equipo a Formulario*/}
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}/>
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        // Siempre que se usa map() hay que usar el atributo "key"
        equipos.map( (equipo) => <Equipo 
            datos={equipo} 
            key={equipo.titulo}

            // Filtrando colaborador a determinado equipo
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}

            // Enviando prop para eliminar colaborador
            eliminarColaborador={eliminarColaborador}
            
            // Enviando la función actualizar color
            actualizarColor={actualizarColor}

            //Enviando función like
            like={like}
            />
        )
      }

      <Footer />
    </div>
  );
};

export default App;
