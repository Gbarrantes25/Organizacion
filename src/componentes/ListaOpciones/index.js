import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    //const equipos = ["Programación", "Front-end", "Data Science", "Devops", "UX y Diseño", "Móvil", "Innovación y Gestión"];
    
    const manejarcambio = (e) =>{
        props.actualizarEquipo(e.target.value)
    };

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select required={props.required} value={props.valor} onChange={manejarcambio}>
            <option value="" disabled defaultValue="" hidden>Selecionar equipo</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option>
            })};
        </select>
    </div>

};

export default ListaOpciones;