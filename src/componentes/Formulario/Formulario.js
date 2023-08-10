import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")


    const { registrarColaborador, crearEquipo } = props
 

    const manejarEnvio = (e) => {
        
        // Evita que la página se recargue
        e.preventDefault();
        // Creando objeto de datos que tomará los valores de los inputs 
        let datosFormulario = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosFormulario);
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color});

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear un colaborador</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones required valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>
            <Boton nombre="Crear"/>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear un equipo</h2>
            <Campo titulo="Título" placeholder="Ingresar título" required valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo titulo="Color" placeholder="Ingresar el color en hex" type="color" required valor={color} actualizarValor={actualizarColor}/>
            <Boton nombre="Registrar equipo"/>
        </form>    
    </section>
};

export default Formulario;