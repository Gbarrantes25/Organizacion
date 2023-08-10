import { useState } from "react";
import "./Campo.css"

const Campo = (props) =>{
    const {type = "text"} = props
    const placeholderMod = `${props.placeholder}...`
    const manejarcambio = (e) => {
        props.actualizarValor(e.target.value);
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholderMod} 
        required={props.required} 
        onChange={manejarcambio} 
        value={props.valor}
        type={type}/>
    </div>
};

export default Campo;