import { useEffect, useState } from "react"
import "./Products.css"
import fetchProducts from "../../api/fetchproducts"
import ProductCard from "../ProductCard/ProductCard"



export default function Products(){

    const [products, setProducts] = useState([])


    useEffect(() => {
        fetchProducts('iphone').then((response) => [
            setProducts(response)
        ])
    }, [])
    

    return(
        
        <section className="products container">
            {products.map((produto) => <ProductCard key={products.id} data={produto}/>)}
        </section>
        
        
    )
}