import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar(){

    const [valor, setValor] = useState('')


    function validar(evento){
        evento.preventDefault()
        console.log(valor)
    }

    return(
        <form className="search_bar" onSubmit={validar}>
            <input 
            type="search"
            placeholder="Procure aqui seu produto"
            className="search_input"
            value={valor}
            onChange={evento => setValor(evento.target.value)}
            required />
            <button 
            type="submit"
            className="search_button"
            ><FaSearch/></button>
        </form>
        
    )
}