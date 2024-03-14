import { FaSearch } from "react-icons/fa";
import { useContext, useState, } from "react";
import "./SearchBar.css"
import fetchProducts from "../../api/fetchproducts";
import AppContext from "../../context/AppContext";


export default function SearchBar(){

    const [valor, setValor] = useState('');
    const {setProducts, setLoading} = useContext(AppContext)
    


    async function HandleSearch(evento){
        evento.preventDefault()
        setLoading(true)
        const produtos = await fetchProducts(valor)
        setLoading(false)
        setValor('')
        setProducts(produtos)
        
    }

    return(
        <form className="search_bar" onSubmit={HandleSearch}>
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