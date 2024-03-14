import { useContext, useEffect,} from "react"
import "./Products.css"
import fetchProducts from "../../api/fetchproducts"
import ProductCard from "../ProductCard/ProductCard"
import Loading from "../Loading/Loading"
import AppContext from "../../context/AppContext"



export default function Products(){

    const {products, setProducts, loading, setLoading} = useContext(AppContext)
    
    
    
    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response);
            setLoading(false)
            
        })
    }, [setProducts, setLoading])
    

    return(
        (loading ? <Loading/> : <section className="products">
            {products.map((produto) => <ProductCard key={products.id} data={produto}/>)}
        </section> 
        )
        
)}