import "./Colaborador.css"
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai"

const Colaborador = (props) =>{
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    // Destructuramos el color primario del props
    const {colorPrimario, eliminarColaborador, like} = props

    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar"/>
        {/*Agregamos color de fondo a la cabecera con el color primario extraído del props*/}
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Colaborador