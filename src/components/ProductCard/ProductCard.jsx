import "./ProductCard.css"
import { FaCartPlus } from "react-icons/fa";
import propTypes from "prop-types"
import currency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../context/AppContext";


function ProductCard({ data }){

    const {price, title, thumbnail} = data
    const {cartItems, setCartItems} = useContext(AppContext)

    const handleAddCart = () => {
        setCartItems([...cartItems, data])
    }

    return(
        <section className="product_card">
            <img className="card_image" src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="Foto do Produto" />
            <div className="card_infos">
                <h2 className="card_price">{currency(price)}</h2>
                <h2 className="card_title">{title}</h2>
            </div>
            <button className="button_card" onClick={handleAddCart}><FaCartPlus/></button>
        </section>
    )
}

export default ProductCard

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired
