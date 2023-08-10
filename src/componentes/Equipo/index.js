import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {
    // Destructurando
    const {titulo, colorPrimario, colorSecundario, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props


    // Variables objetos para estilos
    const estiloBackground = {backgroundColor: hexToRgba(colorPrimario, 0.40)}
    const estiloBorde = {borderColor: colorPrimario}

    // Si colaboradores es > 0, entonces muéstrame el equipo
    return <>{colaboradores.length > 0 && 
        <section className="equipo" style={estiloBackground}>
        <input type="color"
        value={hexToRgba(colorPrimario, 0.40)}
        className="input-color" 
        onChange={(evento) => actualizarColor(evento.target.value, id)}/>
        <h3 style={estiloBorde}>{titulo}</h3>
        <div className="colaboradores">
           {
            colaboradores.map((colaborador, index) => 
                <Colaborador datos={colaborador}
                key={index} colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}/>
            )
           }
        </div>
        
    </section>
    }</>
}

export default Equipo