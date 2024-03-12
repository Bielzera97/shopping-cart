import { useEffect, useState } from "react"
import "./Products.css"
import fetchProducts from "../../api/fetchproducts"
import ProductCard from "../ProductCard/ProductCard"
import Loading from "../Loading/Loading"



export default function Products(){

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response);
            setLoading(false)
            
        })
    }, [])
    

    return(
        (loading ? <Loading/> : <section className="products">
            {products.map((produto) => <ProductCard key={products.id} data={produto}/>)}
        </section> 
        )
        
)}