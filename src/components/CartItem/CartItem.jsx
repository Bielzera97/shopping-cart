import { CiCircleRemove } from "react-icons/ci";
import propTypes from "prop-types";
import "./CartItem.css"
import currency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../context/AppContext";


export default function CartItem({data}) {

    const {cartItems, setCartItems} = useContext(AppContext)
    const {id, thumbnail, title, price} = data

    const HandleRemoveItem = () => {
        const updateItems = cartItems.filter((item) => item.id != id)
        setCartItems(updateItems)
    }


    return(
        <section className="cart-item">
            <img src={thumbnail} alt="produto" className="cart-item-image"/>
            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{currency(price)}</h3>
                <button type="button" className="button-remove-item" onClick={HandleRemoveItem}><CiCircleRemove/></button>
            </div>
        </section>
       
    )
}

CartItem.propTypes = {
    data : propTypes.shape({})
}.isRequired